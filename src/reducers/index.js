import loginUser from "./loginUser";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  user: loginUser,
});

export default allReducers;
