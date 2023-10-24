import { createContext, useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import React from "react";
export const AccountContext = createContext(null);

const AccountPrpvider = ({ children }) => {
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:9000");
  }, []);
  const [account, setaccount] = useState();
  const [person, setPerson] = useState({});
  const [activeUser, setActiveuser] = useState([]);
  const [newmessageFlag,setNewmessageflag] = useState(false);

  return (
    <>
      <AccountContext.Provider
        value={{
          account,
          setaccount,
          person,
          setPerson,
          socket,
          activeUser,
          setActiveuser,
          newmessageFlag,
          setNewmessageflag
        }}
      >
        {children}
      </AccountContext.Provider>
    </>
  );
};

export default AccountPrpvider;
