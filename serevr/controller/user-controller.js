import { request, response } from "express";
import User from "../modal/User.js";

export const addUser = async (request, response) => {
  try {
    let exist = await User.findOne({ sub: request.body.sub });
    if (exist) {
      response.status(200).json({ msg: "User already exits" });
      return;
    }
    const newUser = new User(request.body);
    await newUser.save();
    return response.status(200).json(newUser);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

export const getUsers = async (request, response) => {
  try {
    const user = await User.find();
    return response.status(200).json(user);
  } catch (error) {
    return response.status(500).json(error.message);
  }
};

