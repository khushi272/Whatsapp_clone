import jwt from "jsonwebtoken";
import User from "../modal/User.js";
const secretKey =
  "69865b1e15b3ec2cc1959067fe6bb6fb62b6a617a1f7edbd1ed7e938c21b6d22";
export const addUser = async (request, response) => {
  try {
    let exist = await User.findOne({ sub: request.body.sub });
    const token = jwt.sign({ sub: request.body.sub, email: request.body.email}, secretKey, { expiresIn: "1h" });
    if (exist) {
      response.status(200).json({ msg: "User already exits",token });
      return;
    }
    const newUser = new User(request.body);
    await newUser.save();
    return response.status(200).json({newUser,token});
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

export const verifytoken = (request, response, next) => {
  let token = request.headers["authorization"];
  if (token) {
    token = token.split(" ")[1];
    jwt.verify(token, secretKey, (err, valid) => {
      if (err) {
        response.status(401).json("please provide valid token")
      } else {
        next();
      }
    });
  } else {
    response.status(401).json("please add the token in header")
  }
};

