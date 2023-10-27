import express from "express";
import { addUser, getUsers, verifytoken } from "../controller/user-controller.js";
import { getConverastuion, newConverastion } from "../controller/converastion-controller.js";
import { getMessage, newMessage } from "../controller/messages-controller.js";
import { getfile, uploadFile } from "../controller/image-controller.js";
import upload from "../utils/upload.js"
const route = express.Router();

route.post('/add',addUser)
route.get('/users',verifytoken, getUsers)

route.post('/converastion/add',verifytoken, newConverastion)
route.post('/converastion/get',verifytoken, getConverastuion)

route.post('/messages/add',verifytoken, newMessage)
route.get('/messages/get/:id',verifytoken, getMessage)

route.post('/file/upload',verifytoken, upload.single('file'), uploadFile)
route.get('/file/:filename',verifytoken, getfile)

export default route;