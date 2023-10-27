import express from 'express';
import connection from './datatabse/db.js';
import jwt from "jsonwebtoken";
import Route from './router/route.js';
import cors from "cors";
import bodyParser from 'body-parser';

const app = express();
const PORT = 3500;
app.use(cors());
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',Route);
connection();

app.listen(PORT,()=> console.log(`Running server ${PORT}`))

