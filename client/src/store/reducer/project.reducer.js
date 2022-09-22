import { PROJECT_TYPE } from "store/action/project";
const initialState = {
  projectsPublic: [],
  projectsPrivate: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PROJECT_TYPE.GET_ALL:
      // localStorage.setItem("TOKEN", payload.accessToken);
      return { ...state, projectsPublic: payload };
    case PROJECT_TYPE.GET_ALL_BY_ADMIN:
      // localStorage.setItem("TOKEN", payload.accessToken);
      return { ...state, projectsPrivate: payload };
    default:
      return { ...state };
  }
};
