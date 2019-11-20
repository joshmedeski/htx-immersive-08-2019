import { INCREMENT, DECREMENT } from "../action-types/counter-action-types";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
