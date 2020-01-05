import { addTasksArray, toggleNav } from "./reducers";
export {
  CHANGE_TASKS_ARRAY,
  CHANGE_TO_TASK_ARRAY,
  CHANGE_TO_CHECK_ARRAY,
  CLOSE_NAV
} from "./types";
export { add, addToCheck, toggleNav } from "./actions";
export default { addTasksArray, toggleNav };
