import { combineReducers } from "redux";
import count from "./count";
import update from "./update";

export default combineReducers({
  count: count,
  update: update,
});
