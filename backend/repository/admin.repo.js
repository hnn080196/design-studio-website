import Repo from "./interface/MariaDbRepo";

const tableName = "admin";
const keyName = "adminId";

class AdminRepo {

    constructor() {
        if (!AdminRepo.instance) {
            AdminRepo.instance = this;
        }
        return AdminRepo.instance;
    }

    async findAll() {
        return await Repo.findAll(tableName);
    }

    async findById(id) {
        return await Repo.findById(id, keyName, tableName);
    }

    async create(object) {
        return await Repo.create(object, tableName);
    }

    async update(id, object) {
        return await Repo.update(id, object, tableName, keyName);
    }

    async delete(id) {
        return await Repo.delete(id, tableName, keyName);
    }

    async count() {
        return await Repo.count(tableName, keyName);
    }

    async findByUsername(username) {
        let rs = await Repo.query(`SELECT * FROM ?? where ?? = ?`, [tableName, `username`], [username])
        return rs[0];
    }

}
export default new AdminRepo();