import { BaseServices } from "base";

class Projects extends BaseServices {
  constructor() {
    super();
    this.url = "/admin/project";
    this.publicUrl = "public/project?type=1";
  }
  create = (payload) => {
    return this.post(this.url, payload);
  };
  update = (payload) => {
    return this.put(this.url, payload);
  };

  getAllByAdminRole = () => {
    return this.get(this.url);
  };
  delete = (payload) => {
    return this.delete(this.url, payload);
  };

  getAll = (payload) => {
    return this.get(this.publicUrl);
  };
}
const ProjectServices = new Projects();
export const PROJECT_TYPE = {
  GET_ALL: "GET_ALL_PROJECT",
  GET_ALL_BY_ADMIN: "GET_ALL_PROJECT_ADMIN",
  CREATE: "CREATE_PROJECT",
  UPDATE: "UPDATE_PROJECT",
  DELETE: "DELETE_PROJECT"
};
export const getAllProject = (payload) => async (dispatch) => {
  try {
    const response = await ProjectServices.getAll(payload);
    dispatch({
      type: PROJECT_TYPE.GET_ALL,
      payload: response.data
    });
    // history.push("/");
  } catch (error) {
    console.error("login action execute error", error.message);
  }
};

export const getAllProjectByAdmin = (payload) => async (dispatch) => {
  try {
    const response = await ProjectServices.getAllByAdminRole(payload);
    dispatch({
      type: PROJECT_TYPE.GET_ALL_BY_ADMIN,
      payload: response.data
    });
    // history.push("/");
  } catch (error) {
    console.error("login action execute error", error.message);
  }
};

export const createProject = (payload) => async (dispatch) => {
  try {
    const response = await ProjectServices.create(payload);
    // dispatch({
    //   type: PROJECT_TYPE.CREATE,
    //   payload: response.data
    // });
    // history.push("/");
  } catch (error) {
    console.error("login action execute error", error.message);
  }
};
export const updateProject = (payload) => async (dispatch) => {
  try {
    const response = await ProjectServices.update(payload);
    // dispatch({
    //   type: PROJECT_TYPE.CREATE,
    //   payload: response.data
    // });
    // history.push("/");
  } catch (error) {
    console.error("login action execute error", error.message);
  }
};
export const deleteProject = (payload) => async (dispatch) => {
  try {
    const response = await ProjectServices.delete(payload);
    // dispatch({
    //   type: PROJECT_TYPE.CREATE,
    //   payload: response.data
    // });
    // history.push("/");
  } catch (error) {
    console.error("login action execute error", error.message);
  }
};
