import React, { useState } from "react";
import { useContext, useEffect } from "react";
import { styled, Box, Typography } from "@mui/material";
import { AccountContext } from "../../../context/AccountPrpvider";
import { useDispatch, useSelector } from "react-redux";
import {
  ConversationAction,
  messageCon,
} from "../../../redux/action/ConversationAction";
import { formateDate } from "../../../utils/comon-utils";

const Component = styled(Box)`
  height: 45px;
  display: flex;
  padding: 13px 0;
  cursor: pointer;
`;

const Image = styled("img")({
  width: 50,
  height: 50,
  objectFit: "cover",
  borderRadius: "50%",
  padding: "0 14px",
});

const Container = styled(Box)`
  display: flex;
`;

const Timestamp = styled(Typography)`
  font-size: 12px;
  margin-left: auto;
  color: #00000099;
  margin-right: 20px;
`;

const Text = styled(Typography)`
  display: block;
  color: rgba(0, 0, 0, 0.6);
  font-size: 14px;
`;
const Conversation = ({ users }) => {
  const { setPerson, account, newmessageFlag } = useContext(AccountContext);
  const [latestmessage, setlatestMessage] = useState({});
  const dispatch = useDispatch();
  const getUser = () => {
    let data = {
      senderId: account.sub,
      receiverId: users.sub,
    };
    setPerson(users);
    dispatch(ConversationAction(data));
  };
  useEffect(() => {
    dispatch(messageCon({ senderId: account.sub, receiverId: users.sub }));
  }, [users]);

  const { message } = useSelector((state) => state.Convrastionreducer);
  useEffect(() => {
    setlatestMessage({ text: message?.message, timestamp: message?.updatedAt });
  }, [ newmessageFlag]);

  return (
    <>
      <Component onClick={() => getUser()}>
        <Box>
          <Image src={users.picture} alt="display picture" />
        </Box>
        <Box style={{ width: "100%" }}>
          <Container>
            <Typography>{users.name}</Typography>
            {latestmessage?.text && (
              <Timestamp>{formateDate(latestmessage?.timestamp)}</Timestamp>
            )}
          </Container>
          <Box>
            <Text>
              {latestmessage?.text?.includes("localhost")
                ? "media"
                : latestmessage.text}
            </Text>
          </Box>
        </Box>
      </Component>
    </>
  );
};

export default Conversation;
