import axios from "axios";
import { CONVRSATION, FAILUER, MESSAGE } from "../constant";

const url = process.env.REACT_APP_URL;
export const ConversationAction = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.post(url + "converastion/add", data, {
      headers: { "Authorization": `bearer ${token}` },
    });
    dispatch({ type: CONVRSATION, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILUER, payload: error });
  }
};

export const messageCon = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.post(url + "converastion/get", data, {
      headers: { "Authorization": `bearer ${token}` },
    });
    dispatch({ type: MESSAGE, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILUER, payload: error });
  }
};
