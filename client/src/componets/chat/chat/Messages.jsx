import { useState, useContext, useEffect, useRef } from "react";
import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountPrpvider";
import { useDispatch, useSelector } from "react-redux";
import {
  Getmessage,
  Sendnewmessage,
} from "../../../redux/action/Sendmessageaction";
import Message from "./Message";

const Wrapper = styled(Box)`
  background-image: url(${"https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png"});
  background-size: 50%;
`;

const StyledFooter = styled(Box)`
  height: 55px;
  background: #ededed;
  // position: absolute;
  width: 100%;
  // bottom: 0
`;

const Component = styled(Box)`
  height: 82.5vh;
  overflow-y: auto;
`;

const Container = styled(Box)`
  padding: 1px 80px;
`;

const Messages = ({ person, messageId }) => {
  const { account, socket, newmessageFlag, setNewmessageflag } =
    useContext(AccountContext);
  const [value, setValue] = useState();
  const [file, setfile] = useState();
  const [image, setImage] = useState("");
  const [incomingMessage, setincomingMessage] = useState(null);

  const scrollRef = useRef();

  const dispatch = useDispatch();
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setincomingMessage({
        ...data,
        createAt: Date.now(),
      });
    });
  }, []);
  const receiverId = messageId?.members?.find(
    (member) => member !== account.sub
  );
  const sendText = (e) => {
    const code = e.keycode || e.which;
    if (code === 13) {
      let sendmessage = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: messageId._id,
      };
      if (!file) {
        sendmessage.type = "text";
        sendmessage.text = value;
      } else {
        sendmessage.type = "image";
        sendmessage.text = image;
      }
      dispatch(Sendnewmessage(sendmessage));
      // socket.current.emit("sendMessage", sendmessage);
      setValue("");
      setImage("");
      setfile("");
      setNewmessageflag((prev) => !prev);
    }
  };
  useEffect(() => {
    messageId._id && dispatch(Getmessage(messageId._id));
  }, [person._id, messageId._id, newmessageFlag]);
  const { getMessage } = useSelector((state) => state.MessageReducer);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ transition: "smooth" });
  }, [getMessage]);
  return (
    <>
      <Wrapper>
        <Component>
          {getMessage &&
            getMessage.map((message) => (
              <>
                <Container ref={scrollRef}>
                  <Message message={message} />
                </Container>
              </>
            ))}
        </Component>
        <Footer
          sendText={sendText}
          setValue={setValue}
          value={value}
          file={file}
          setfile={setfile}
          setImage={setImage}
        />
      </Wrapper>
    </>
  );
};

export default Messages;
