import {
  CHANGE_TASKS_ARRAY,
  CHANGE_TO_TASK_ARRAY,
  CHANGE_TO_CHECK_ARRAY
} from "./types";

const INITIAL_STATE = {
  tasks: [],
  tasks2: [],
  tasks3: []
};
export const addTasksArray = (state = INITIAL_STATE, action) => {
  console.log(action.type);
  switch (action.type) {
    case CHANGE_TASKS_ARRAY:
      return {
        ...state,
        tasks: [...state.tasks, action.payload.payload]
      };
    case CHANGE_TO_TASK_ARRAY:
      // ...state.filter(city => city !== action.city),
      const numIndex = parseInt(action.index);
      return {
        ...state,
        tasks2: [...state.tasks2, ...state.tasks.splice(numIndex, 1)],
        tasks: state.tasks.filter(index => index !== numIndex)
      };
    case CHANGE_TO_CHECK_ARRAY:
      const numIndex1 = parseInt(action.index);
      return {
        ...state,
        tasks3: [...state.tasks3, ...state.tasks2.splice(numIndex1, 1)],
        tasks2: state.tasks2.filter(index => index !== numIndex1)
      };
    default:
      return state;
  }
};
