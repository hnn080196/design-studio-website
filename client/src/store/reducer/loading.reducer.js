const initialState = { loading: true };
export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "LOADING_SHOW":
      // localStorage.setItem("TOKEN", payload.accessToken);
      return { ...state, loading: true };
    case "LOADING_FALSE":
      // localStorage.setItem("TOKEN", payload.accessToken);
      return { ...state, loading: false };

    default:
      return { ...state };
  }
};
