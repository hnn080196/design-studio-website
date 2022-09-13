'use strict'

import mariadb from "mariadb";
class MariaDbRepo {

  constructor() {
    if (!MariaDbRepo.instance) {
      this.con = null
      this.createConnection = this.createConnection.bind(this)
      MariaDbRepo.instance = this;
    }
    return MariaDbRepo.instance;
  }

  createConnection(config) {
    this.con = mariadb.createPool({
      connectionLimit: 16,
      host: config.mariaDBConfig.host,
      port: config.mariaDBConfig.port,
      user: config.mariaDBConfig.username,
      password: config.mariaDBConfig.password,
      database: config.mariaDBConfig.database,
      connectTimeout: config.mariaDBConfig.connectionTimeout,
      metaAsArray: true
    });
  }

  async query(query, field, param, data) {
    query = query.replace(/\?\?/gi, '$')
    while (query.includes('$')) {
      query = query.replace('$', this.con.escapeId(field[0]))
      field.splice(0, 1)
    }
    if (data) {
      query = query.replace('#', data)
    }
    console.log(JSON.stringify(param))
    return await this.con.query(query, param).then(rs => {
      return rs[0];
    }).catch(e => {
      if (e) {
        throw e
      }
    });
  }

  async queryGraphQL(query, where, orderBy) {
    try {
      let fields = []
      let params = []
      let queryWhere = ``
      let queryOrderBy = ``
      Object.entries(where).forEach(([key, value]) => {
        if (queryWhere.length === 0) {
          queryWhere += `WHERE`
        }
        if (typeof where[key] === 'object' && where[key] !== null) {
          queryWhere += ` (${key} BETWEEN '${where[key].min}' AND '${where[key].max}') AND`
        } else {
          queryWhere += ` ?? = ? AND`
          fields = [...fields, key]
          params = [...params, value]
        }
      });
      if (queryWhere.length > 0) {
        queryWhere = queryWhere.substring(0, queryWhere.length - 3);
      }
      Object.entries(orderBy).forEach(([key, value]) => {
        if (queryOrderBy.length === 0) {
          queryOrderBy += `ORDER BY `
        }
        queryOrderBy += `${key} ${value}, `
      });
      if (queryOrderBy.length > 0) {
        queryOrderBy = queryOrderBy.substring(0, queryOrderBy.length - 2);
      }
      query += `${queryWhere} ${queryOrderBy} `
      return { query, fields, params }
    } catch (e) {
      throw e
    }
  }

  async findByGraphQL(tableName, where, orderBy, limit, from) {
    try {
      let { query, fields, params } = await this.queryGraphQL(`SELECT * FROM ${tableName} `, where, orderBy)
      query += `LIMIT ? OFFSET ?`
      params = [...params, limit, from]
      return await this.query(query, fields, params)
    } catch (e) {
      throw e
    }
  }

  async countByGraphQL(tableName, keyName, where, orderBy) {
    try {
      let { query, fields, params } = await this.queryGraphQL(`SELECT COUNT(${keyName}) AS number FROM ${tableName} `, where, orderBy)
      const rs = await this.query(query, fields, params)
      return rs[0].number
    } catch (e) {
      throw e
    }
  }

  async findAll(tableName) {
    return await this.query('SELECT * FROM ??', [tableName])
  }

  async findById(id, key, tableName) {
    let rs = await this.query("SELECT * FROM ?? where ?? = ? ", [tableName, key], [id])
    if (!rs[0]) {
      throw new Error("Not found id " + id + " in table " + tableName)
    }
    return rs[0];
  }

  async create(object, tableName) {
    let query = `INSERT INTO ${this.con.escapeId(tableName)}`;
    let fieldQuery = ' (';
    let valuesQuery = '(';
    let array = Object.getOwnPropertyNames(object);
    array.forEach(field => {
      fieldQuery += this.con.escapeId(field) + ',';
      valuesQuery += this.con.escape(object[field]) + ',';
    })
    fieldQuery = fieldQuery.substr(0, fieldQuery.length - 1)
    valuesQuery = valuesQuery.substr(0, valuesQuery.length - 1)
    fieldQuery += ') ';
    valuesQuery += ')';
    query = query + fieldQuery + ' VALUES ' + valuesQuery
    await this.con.query(query);
  }

  async update(id, object, tableName, keyName) {
    let condition = ''
    let array = Object.getOwnPropertyNames(object);
    array.forEach(field => {
      condition += `${this.con.escapeId(field)} = ${this.con.escape(object[field])},`;
    })
    condition = condition.substr(0, condition.length - 1)
    await this.query(`UPDATE ?? SET # WHERE ?? = ?`, [tableName, keyName], [id], condition);
  }

  async delete(id, tableName, keyName) {
    await this.query('DELETE FROM ?? WHERE ?? = ?', [tableName, keyName], [id]);
  }

  async count(tableName, keyName) {
    let rs = await this.query('SELECT COUNT(??) as number FROM ??', [keyName, tableName]);
    return rs[0].number
  }

}

export default new MariaDbRepo();