const initialState = {
  isAuthenticated: false
};
const loginSuccess = (state, payload) => {};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOGIN":
      localStorage.setItem("TOKEN", payload.accessToken);
      return { ...state };
    default:
      return { ...state };
  }
};
