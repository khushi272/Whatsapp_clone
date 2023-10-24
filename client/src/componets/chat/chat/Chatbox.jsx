import React, { useContext, useEffect } from "react";
import Chatheader from "./Chatheader";
import Messages from "./Messages";
import { Box } from "@mui/material";
import { AccountContext } from "../../../context/AccountPrpvider";
import { useDispatch,useSelector } from "react-redux";
import { messageCon } from "../../../redux/action/ConversationAction";

const Chatbox = () => {
  const { person,account } = useContext(AccountContext);
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(messageCon({senderId:account.sub,receiverId:person.sub}))
  },[person.sub])
const {message}=useSelector(state=>state.Convrastionreducer);

  return (
    <>
      <Box style={{ height: "75%" }}>
        <Chatheader person={person} />
        <Messages person={person} messageId={message}/>
      </Box>
    </>
  );
};

export default Chatbox;
