import { ADD_INPUT } from "../actions/mainContainersActions";

export const mainContainersReducer = (state = 4, action) => {
  switch (action.type) {
    case ADD_INPUT:
      return state + 1;
    default:
      return state;
  }
};
