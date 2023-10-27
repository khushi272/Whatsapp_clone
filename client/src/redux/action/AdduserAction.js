import axios from "axios";
import { ADD_USER, FAILUER, GET_USER, SEARCH_USER } from "../constant";

const url = process.env.REACT_APP_URL;
export const addUser = (data,navigate) => async (dispatch) => {
  try {
    const response = await axios.post(url + "add", data);
    dispatch({ type: ADD_USER, payload: response.data });
    if (response.status === 200) {
      console.log("success");
      navigate("/chat");
    }
  } catch (error) {
    dispatch({ type: FAILUER, payload: error });
  }
};

export const getUser = () => async (dispatch) => {
  try {
    const token = localStorage.getItem("token");
    const response = await axios.get(url + "users", {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
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
