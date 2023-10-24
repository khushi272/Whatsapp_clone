import { combineReducers } from "redux";
import { AddReducer } from "./reducer/AdduserReducer";
import { Convrastionreducer } from "./reducer/NewconvrastionReducer";
import { MessageReducer } from "./reducer/NewmessageReducer";
export default  combineReducers({
    AddReducer,
    Convrastionreducer ,
    MessageReducer
})