import { combineReducers } from "redux";
import projectReducer from "store/reducer/project.reducer";
import userReducer from "store/reducer/user.reducer";
import loadingReducer from "./loading.reducer";
const rootReducer = combineReducers({
  project: projectReducer,
  user: userReducer,
  loading: loadingReducer
});
export default rootReducer;
