import { CHANGE_TASKS_ARRAY } from "./types";

const INITIAL_STATE = {
  tasks: [{ startDate: "", titleTask: "", describeTask: "", index: 0 }]
};
export const addTasksArray = (state = INITIAL_STATE, action) => {
  console.log(action.payload);
  switch (action.type) {
    case CHANGE_TASKS_ARRAY:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.payload]
      };
    default:
      return state;
  }
};
