import mongoose from "mongoose";


const connection = () =>{
    const MONGOOSE_URL = "mongodb://127.0.0.1:27017/CloneWp";
    mongoose.connect(MONGOOSE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    },).then(()=>{
        console.log("connect sucess")
    }).catch(error=>console.error("erroe",error))
}

export default connection;