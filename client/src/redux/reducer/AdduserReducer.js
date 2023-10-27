import { initialvalue } from "../intialvalue";
import { ADD_USER, FAILUER, GET_USER, SEARCH_USER } from "../constant";

export const AddReducer = (state = initialvalue, action) => {
  switch (action.type) {
    case ADD_USER:
      localStorage.setItem("token",action.payload.token)
      return {
        ...state,
        data: action.payload,
        error: null,
      };
    case GET_USER:
      return {
        ...state,
        users: action.payload,
        error: null,
      };
    case SEARCH_USER:
      return {
        ...state,
        users: action.payload,
        error: null,
      };
    case FAILUER:
      return {
        ...state,
        data: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
