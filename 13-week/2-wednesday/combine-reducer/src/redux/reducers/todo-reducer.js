import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO_STATE
} from "../action-types/todo-action-types";
import TodoItem from "../classes/todo-item-class";

const initialState = [];

function generateId(tasks) {
  if (tasks.length < 1) return 0;
  // [{id:0}, {id:1}, {id:2}, {id:3}]
  // [0,1,2,3]
  const ids = tasks.map(task => task.id);
  const highestId = Math.max.apply(Math, ids);
  return highestId + 1;
}

export function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat([new TodoItem(action.text, generateId(state))]);
    case DELETE_TODO:
      return state.filter(task => task.id !== action.id);
    case TOGGLE_TODO_STATE:
      return state.map(task => {
        if (task.id === action.id) {
          return {
            ...task,
            isCompleted: !task.isCompleted
          };
        } else {
          return task;
        }
      });
    default:
      return state;
  }
}
