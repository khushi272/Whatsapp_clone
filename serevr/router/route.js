import express from "express";
import { addUser, getUsers } from "../controller/user-controller.js";
import { getConverastuion, newConverastion } from "../controller/converastion-controller.js";
import { getMessage, newMessage } from "../controller/messages-controller.js";
import { getfile, uploadFile } from "../controller/image-controller.js";
import upload from "../utils/upload.js"
const route = express.Router();

route.post('/add',addUser)
route.get('/users',getUsers)

route.post('/converastion/add',newConverastion)
route.post('/converastion/get',getConverastuion)

route.post('/messages/add',newMessage)
route.get('/messages/get/:id',getMessage)

route.post('/file/upload',upload.single('file'), uploadFile)
route.get('/file/:filename',getfile)

export default route;