import axios from "axios";
import {
  ADD_USER,
  FAILUER,
  GET_USER,
  SEARCH_USER,
} from "../constant";

const url = process.env.REACT_APP_URL;
export const addUser = (data) => async (dispatch) => {
  try {
    const response = await axios.post(url + "add", data);
    dispatch({ type: ADD_USER, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILUER, payload: error });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const response = await axios.get(url + "users");
    dispatch({ type: GET_USER, payload: response.data });
  } catch (error) {
    dispatch({ type: FAILUER, payload: error });
  }
};

export const searchUser = (filterdata) => {
  return {
    type: SEARCH_USER,
    payload: filterdata,
  };
};
