import { FAILUER, GET_MESSAGE, INCOMINGMEASSAGE, SEND_FILE, SEND_MESSAGE } from "../constant";
import { initialvalue } from "../intialvalue";

export const MessageReducer = (state = initialvalue, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        newMessage: action.payload,
        error: null,
      };
    case GET_MESSAGE:
      return {
        ...state,
        getMessage: action.payload,
        error: null,
      };
    case SEND_FILE:
      return {
        ...state,
        fileUplod: action.payload,
        error: null,
      };
      case INCOMINGMEASSAGE:
        return{
          ...state,
          getMessage:[...state.getMessage,action.payload],
          error:null
        }
    case FAILUER:
      return {
        ...state,
        newMessage: null,
        error: null,
      };
    default:
      return state;
  }
};
