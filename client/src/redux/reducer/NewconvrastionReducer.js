import { CONVRSATION, FAILUER, MESSAGE } from "../constant";
import { initialvalue } from "../intialvalue";

export const Convrastionreducer = (state = initialvalue, action) => {
  switch (action.type) {
    case CONVRSATION:
      return {
        ...state,
        conversation: action.payload,
        error: null,
      };
    case FAILUER:
      return {
        ...state,
        conversation: null,
        error: action.payload,
      };
    case MESSAGE:
      console.log("conv reducer",action.payload);
      return {
        ...state,
        message: action.payload,
        error: null,
      };
    default:
      return state;
  }
};
