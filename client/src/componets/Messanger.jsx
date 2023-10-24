import React, { useContext } from "react";
import { AppBar, Toolbar, styled, Box } from "@mui/material";
import Logindialog from "./account/Logindialog";
import { AccountContext } from "../context/AccountPrpvider";
import ChatDialog from "./chat/ChatDialog";
const Component = styled(Box)`
  height: 100vh;
  background: #dcdcdc;
  width: 100%;
`;

const Header = styled(AppBar)`
  background-color: #00a884;
  height: 12rem;
  box-shadow: none;
`;

const LoginHeader = styled(AppBar)`
  background: #00bfa5;
  height: 200px;
  box-shadow: none;
`;
const Messanger = () => {
  const { account } = useContext(AccountContext);
  return (
    <Component>
      {account ? (
        <>
          <Header>
            <Toolbar></Toolbar>
          </Header>
          <ChatDialog />
        </>
      ) : (
        <>
          <LoginHeader>
            <Toolbar></Toolbar>
          </LoginHeader>
          <Logindialog />
        </>
      )}
    </Component>
  );
};

export default Messanger;
