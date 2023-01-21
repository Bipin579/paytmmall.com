import { Box, Image } from '@chakra-ui/react'
import React from 'react'

const Loading = () => {
  return (
      <Box display={"flex"} justifyContent="center" alignItems={"center"} p={"150px"}>
          <Image src='https://i.gifer.com/YVPG.gif' w={"50%"} />
    </Box>
  )
}

export default Loading