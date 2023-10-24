import React, { useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser, searchUser } from "../../../redux/action/AdduserAction";
import { Box, styled, Divider } from "@mui/material";
import { AccountContext } from "../../../context/AccountPrpvider";
import Conversation from "./Conversation";

const Component = styled(Box)`
  overflow: overlay;
  height: 81vh;
`;

const StyledDivider = styled(Divider)`
  margin: 0 0 0 70px;
  background-color: #e9edef;
  opacity: 0.6;
`;

const Converstions = ({ text }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.AddReducer);
  const { account, socket, setActiveuser } = useContext(AccountContext);
  useEffect(() => {
    if (!text || typeof text !== "string") {
      dispatch(getUser());
    } else {
      const filterdata = users.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      dispatch(searchUser(filterdata));
    }
  }, [text]);

  useEffect(() => {
    socket.current.emit("addUser", account);
    socket.current.on("getUsers", (users) => {
      setActiveuser(users);
    });
  }, [account]);
  return (
    <>
      <Component>
        {users &&
          users.map(
            (user, index) =>
              user.sub !== account.sub && (
                <>
                  <Conversation users={user} />
                  {user.length !== index + 1 && <StyledDivider />}
                </>
              )
          )}
      </Component>
    </>
  );
};

export default Converstions;
