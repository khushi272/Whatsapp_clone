import axios from "axios";
import {
  FAILUER,
  GET_MESSAGE,
  INCOMINGMEASSAGE,
  SEND_FILE,
  SEND_MESSAGE,
} from "../constant";

const url = process.env.REACT_APP_URL;
export const Sendnewmessage = (data) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.post(url + "messages/add", data, {
      headers: {" Authorization": `bearer ${token}` },
    });
    dispatch({ type: SEND_MESSAGE, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILUER, payload: error });
  }
};

export const Getmessage = (id) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.get(url + "messages/get/" + id, {
      headers: { "Authorization": `bearer ${token}` },
    });
    dispatch({ type: GET_MESSAGE, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILUER, payload: error });
  }
};

export const Uploadfile = (file) => async (dispatch) => {
  try {
    const token = localStorage.getItem('token')
    const response = await axios.post(url + "file/upload", file, {
      headers: { "Authorization": `bearer ${token}` },
    });
    dispatch({ type: SEND_FILE, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILUER, payload: error });
  }
};

export const incomingmessage = (data) => {
  return {
    type: INCOMINGMEASSAGE,
    payload: data,
  };
};
