import { CHANGE_TASKS_ARRAY } from "./types";

export const add = newItem => {
  console.log(newItem);
  return {
    type: CHANGE_TASKS_ARRAY,
    payload: newItem
  };
};
