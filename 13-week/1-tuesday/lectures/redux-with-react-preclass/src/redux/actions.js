import { INCREMENT, DECREMENT, INCREMENT_IF_ODD } from "./actionTypes";

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });
