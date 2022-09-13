import Repo from "./interface/MariaDbRepo";

const tableName = "project";
const keyName = "projectId";

class ProjectRepo {

    constructor() {
        if (!ProjectRepo.instance) {
            ProjectRepo.instance = this;
        }
        return ProjectRepo.instance;
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

    async findByType(type) {
        let rs = await Repo.query(`SELECT * FROM ?? where ?? = ?`, [tableName, `type`], [type])
        return rs[0];
    }

}
export default new ProjectRepo();