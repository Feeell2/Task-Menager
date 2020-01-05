import { combineReducers } from "redux";
import { addTasksArray, toggleNav } from "./duck/reducers";

const rootReducer = combineReducers({
  tasks: addTasksArray,
  tasks2: addTasksArray,
  tasks3: addTasksArray,
  toggleOpen: toggleNav
});
export default rootReducer;
