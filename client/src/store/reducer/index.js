import { combineReducers } from "redux";
import projectReducer from "store/reducer/project.reducer";
import userReducer from "store/reducer/user.reducer";
const rootReducer = combineReducers({
  project: projectReducer,
  user: userReducer
});
export default rootReducer;
