import React, { useState } from 'react'
import Header from './Header'
import { Box } from '@mui/material'
import Search from './Search'
import Converstion from './Converstions'
const Menu = () => {
  const [text,setText] = useState('');
  return (
    <Box>
        <Header/>
        <Search setText={setText}/>
        <Converstion text={text}/>
    </Box>
  )
}

export default Menu
