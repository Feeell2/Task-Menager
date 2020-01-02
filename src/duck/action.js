import { CHANGE_TASKS_ARRAY, CHANGE_TO_TASK_ARRAY } from "./types";

export const add = newItem => {
  console.log(newItem.type);
  return {
    type: CHANGE_TASKS_ARRAY,
    payload: newItem
  };
};
export const addToCheck = index => {
  console.log(index.type);
  return { type: CHANGE_TO_TASK_ARRAY, index };
};
