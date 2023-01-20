import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const FurnitureElectronics = () => {
  const [FurnitureData,setFurnitureData] =useState([])
  const getData = () =>{
    axios.get("https://paytmmallserver.onrender.com/product").then((res)=>{
      console.log(res)
      setFurnitureData(res.data)
    })
 }
 
  useEffect(()=>{
    getData()
  },[])
  return (
    <div style={{border:"2px solid red"}}>

    <Box display={"flex"} w="100%">
      <Box w={"20%"}>Sorting functionality</Box>
      <Box w={"80%"} b="2px solid blue">
    <SimpleGrid columns={{base:1,sm:2,md:3,lg:4}} gap={2}>
{
  FurnitureData?.map((ele)=>(
 
    <Box key={ele.id} h="500px" border="2px solid red">
      <Box w="70%" h='60%' border={"2px solid blue"} margin="auto">
      <Image h={"100%"} w="100%" src = {ele.img} />
     <Text fontSize="3xl" fontWeight={'bold'}>{ele.brand}</Text>
     <Text fontSize="3xl">₹ {ele.discountPrice}</Text>
     <Text mt={'10%'} textAlign={'right'} fontSize="3xl" fontWeight={'bold'}>{ele.category}</Text>
      </Box>
      <Box></Box>
    </Box>
   
  ))
}
 </SimpleGrid>
 </Box>
 </Box>
  </div>
  )
}

export default FurnitureElectronics