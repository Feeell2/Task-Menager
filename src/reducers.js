import { combineReducers } from "redux";
import { addTasksArray } from "./duck/reducers";

const rootReducer = combineReducers({ tasks: addTasksArray });
export default rootReducer;
