import React from "react";
import { useContext } from "react";
import { Dialog, Typography, List, ListItem, Box, styled } from "@mui/material";
import { qrCodeImage } from "../../constants/data";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../../context/AccountPrpvider";
import { addUser } from "../../redux/action/AdduserAction";
import { useDispatch } from "react-redux";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 5rem 0 5rem 5rem;
`;

const QRCOde = styled("img")({
  margin: "5rem 0 0 5rem",
  height: 300,
  width: 300,
});

const Title = styled(Typography)`
  font-size: 1.9rem;
  margin-bottom: 2rem;
  color: #525252;
  font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial, Ubuntu,
    Cantarell, Fira Sans, sans-serif;
  font-weight: 300;
`;

const StyledList = styled(List)`
  & > li {
    padding: 0;
    margin-top: 1.5rem;
    font-size: 1.3rem;
    line-height: 1.5rem;
    color: #4a4a4a;
  }
`;

const dialogStyle = {
  marginTop: "12%",
  height: "95%",
  width: "80%",
  maxWidth: "100",
  maxHeight: "100%",
  borderRadius: 0,
  boxShadow: "none",
  overflow: "hidden",
};

const Logindialog = () => {
  const { setaccount } = useContext(AccountContext);
  const dispatch = useDispatch();

  const onLoginSuccess = async (res) => {
    let decoded = jwt_decode(res.credential);
    setaccount(decoded);
    dispatch(addUser(decoded));
    localStorage.setItem("userInfo", decoded.name);
    // setShowloginButton(false);
    // setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };
  return (
    <>
      <Dialog
        open={true}
        BackdropProps={{ style: { backgroundColor: "unset" } }}
        maxWidth={"lg"}
        PaperProps={{ sx: dialogStyle }}
      >
        <Component>
          <Container>
            <Title>To use WhatsApp on your computer:</Title>
            <StyledList>
              <ListItem>1. Open WhatsApp on your phone</ListItem>
              <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
              <ListItem>
                3. Point your phone to this screen to capture the code
              </ListItem>
            </StyledList>
          </Container>
          <Box style={{ position: "relative" }}>
            <QRCOde src={qrCodeImage} alt="QR Code" />
            <Box
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateX(32%) translateY(-35%)",
              }}
            >
              {/* { showloginButton ? */}
              <GoogleLogin
                buttonText=""
                onSuccess={onLoginSuccess}
                onError={onLoginFailure}
              />
              {/* : null} */}
            </Box>
          </Box>         
        </Component>
      </Dialog>
    
    </>
  );
};

export default Logindialog;
