import React, { useState } from "react";
import { useEffect } from "react";
import { EmojiEmotions, AttachFile, Mic } from "@mui/icons-material";
import InputEmoji from "react-input-emoji";
import { Box, styled, InputBase } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { Uploadfile } from "../../../redux/action/Sendmessageaction";
import { Picker } from 'emoji-mart';

const Container = styled(Box)`
  height: 55px;
  background: #ededed;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;
  & > * {
    margin: 5px;
    color: #919191;
  }
`;

const Search = styled(Box)`
  border-radius: 18px;
  background-color: #ffffff;
  width: calc(94% - 100px);
`;

const InputField = styled(InputBase)`
  width: 100%;
  padding: 20px;
  padding-left: 25px;
  font-size: 14px;
  height: 20px;
  width: 100%;
`;

const ClipIcon = styled(AttachFile)`
  transform: "rotate(40deg)";
`;

const Footer = ({ sendText, setValue, value, file, setfile ,setImage}) => {
  const dispatch = useDispatch();
  const onFilechange = (e) => {
    setValue(e.target.files[0].name);
    setfile(e.target.files[0]);
  };
  const onemojish = () => {
    setValue([...value, "hello"]);
  };
  useEffect(() => {
    if (file) {
      const data = new FormData();
      data.append("name", file.name);
      data.append("file", file);
      dispatch(Uploadfile(data));
    }
  }, [file]);
  const { fileUplod } = useSelector((state) => state.MessageReducer);
  setImage(fileUplod)
  // console.log("fileupload", fileUplod);
  return (
    <>
      <Container>
        {/* <InputEmoji onClick={() => onemojish()} /> */}
        <EmojiEmotions/>
        <label htmlFor="fileInput">
          <ClipIcon />
        </label>
        <input
          type="file"
          id="fileInput"
          style={{ display: "none" }}
          onChange={(e) => onFilechange(e)}
        />

        <Search>
          <InputField
            placeholder="Type a message"
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(e) => sendText(e)}
            value={value}
          />
        </Search>
        <Mic />
      </Container>
    </>
  );
};

export default Footer;
