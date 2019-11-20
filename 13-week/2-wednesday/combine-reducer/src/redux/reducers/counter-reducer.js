import { INCREMENT, DECREMENT } from "../action-types/counter-action-types";

const initialState = 0;

export function counterReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
