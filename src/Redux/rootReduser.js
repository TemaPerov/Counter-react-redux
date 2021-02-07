import { ADD_TASK } from "./actionTypes";
const initialState = {
  arrList: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      console.log(action);

      return {
        ...state,
        arrList: [{ text: action.text }, ...state.arrList],
      };
      break;
    default:
      return state;
  }
}
