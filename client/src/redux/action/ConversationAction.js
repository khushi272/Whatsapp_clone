import axios from "axios";
import { CONVRSATION, FAILUER, MESSAGE } from "../constant";

const url = process.env.REACT_APP_URL;
export const ConversationAction = (data) => async (dispatch) => {
  try {
    const response = await axios.post(url + "converastion/add", data);
    dispatch({ type: CONVRSATION, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILUER, payload: error });
  }
};

export const messageCon = (data) => async (dispatch) => {
  try {
    const response = await axios.post(url + "converastion/get", data);
    dispatch({ type: MESSAGE, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILUER, payload: error });
  }
};
