import React, { useContext } from 'react'
import { Dialog, styled, Box } from '@mui/material';
import Menu from './menu/Menu';
import EmptyChat from './chat/EmptyChat';
import Chatbox from './chat/Chatbox';
import { AccountContext } from '../../context/AccountPrpvider';
const Component = styled(Box)`
    display: flex;
`;
    
const LeftComponent = styled(Box)`
    min-width: 450px;
`;
    
const RightComponent = styled(Box)`
    width: 100%;
    min-width: 300px;
    height: 100%;
    border-left: 1px solid rgba(0, 0, 0, 0.14);
`;

const dialogStyle = {
    height: '95%',
    width: '100%',
    margin: '20px',
    maxWidth: '100%',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
};
const ChatDialog = () => {
    const {person} = useContext(AccountContext)
  return (
    <>
      <Dialog 
            open={true} 
            BackdropProps={{style: {backgroundColor: 'unset'}}}
            PaperProps={{ sx: dialogStyle }}
            maxWidth={'md'}
        >
            <Component>
                <LeftComponent>
                    <Menu/>
                </LeftComponent>
                <RightComponent>
                    {
                        Object.keys(person).length  ? <Chatbox/> : <EmptyChat />
                    }
                </RightComponent>
            </Component>
        </Dialog>
    </>
  )
}

export default ChatDialog
