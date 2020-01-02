import { combineReducers } from "redux";
import { addTasksArray } from "./duck/reducers";

const rootReducer = combineReducers({
  tasks: addTasksArray,
  tasks2: addTasksArray
});
export default rootReducer;
