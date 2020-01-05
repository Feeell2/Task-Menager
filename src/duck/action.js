import {
  CHANGE_TASKS_ARRAY,
  CHANGE_TO_TASK_ARRAY,
  CHANGE_TO_CHECK_ARRAY,
  CLOSE_NAV
} from "./types";

export const add = newItem => {
  return {
    type: CHANGE_TASKS_ARRAY,
    payload: newItem
  };
};
export const addToCheck = index => {
  return { type: CHANGE_TO_TASK_ARRAY, index };
};
export const addCheck = index => {
  return { type: CHANGE_TO_CHECK_ARRAY, index };
};
export const toggleNav = () => {
  return {
    type: CLOSE_NAV
  };
};
