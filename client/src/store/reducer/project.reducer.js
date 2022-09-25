import { PROJECT_TYPE } from "store/action/project";
const initialState = {
  projectsPublic: [],
  residentialProjectsPublic: [],

  projectsPrivate: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROJECT_TYPE.GET_ALL:
      // localStorage.setItem("TOKEN", payload.accessToken);
      return { ...state, projectsPublic: payload };
    case PROJECT_TYPE.GET_ALL_RESIDENT:
      // localStorage.setItem("TOKEN", payload.accessToken);
      return { ...state, residentialProjectsPublic: payload };

    default:
      return { ...state };
  }
};
