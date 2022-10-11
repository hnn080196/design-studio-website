import axios from "axios";

export const PROJECT_TYPE = {
  GET_ALL: "GET_ALL_PROJECT",
  GET_ALL_RESIDENT: "GET_ALL_RESIDENT",

  GET_DETAIL: "GET_DETAIL"
};
export const getAllProject = () => (dispatch) => {
  try {
    dispatch({ type: "LOADING_SHOW" });
    axios.get("/api/public/project?type=1").then(({ data }) => {
      dispatch({
        type: PROJECT_TYPE.GET_ALL,
        payload: data.data
      });
      dispatch({ type: "LOADING_FALSE" });
    });

    // history.push("/");
  } catch (error) {
    console.error("login action execute error", error.message);
  }
};

export const getAllResidentProject = () => (dispatch) => {
  try {
    dispatch({ type: "LOADING_SHOW" });
    axios.get("/api/public/project?type=0").then(({ data }) => {
      dispatch({
        type: PROJECT_TYPE.GET_ALL_RESIDENT,
        payload: data.data
      });
      dispatch({ type: "LOADING_FALSE" });
    });

    // history.push("/");
  } catch (error) {
    console.error("login action execute error", error.message);
  }
};
