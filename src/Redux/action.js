import { ADD_TASK } from "./actionTypes";

export function addTask(text) {
  return {
    type: ADD_TASK,
    text,
  };
}
