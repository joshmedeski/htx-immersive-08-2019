import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO_STATE
} from "../action-types/todo-action-types";

export const addTodo = userInputText => ({
  type: ADD_TODO,
  text: userInputText
});

export const deleteTodo = idOfTaskToDelete => ({
  type: DELETE_TODO,
  id: idOfTaskToDelete
});

export const toggleTodo = idOfTaskToToggle => ({
  type: TOGGLE_TODO_STATE,
  id: idOfTaskToToggle
});
