import React from 'react'
import { Box, Image, SimpleGrid, Text,Heading,Container,Button ,useToast } from '@chakra-ui/react'
import  { useEffect, useState } from 'react'
import axios from 'axios'
const Fashion = () => {
  const [fashionData,setFashionData] =useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const getData = () =>{
    setIsLoading(true)
    axios.get(`https://paytmmallserver.onrender.com/product?_page=${page}&_limit=20`).then((res)=>{
      setIsLoading(false);
     // console.log(res);
      setFashionData(res.data);
    })
 };
 
  useEffect(()=>{
    getData(page)
  },[page])

  const Loading=()=>{
    return(
      <Container>
        <Image w='200px' h='200px' ml='180px'  src='https://reiwa.com.au/ux/reiwa/ux/images/pd/spinner.gif'/>
      </Container>
      
    )
   }
   return( isLoading ? ( <Loading/>) : ( 
    <Box >
     <Box boxShadow='md' display='flex' justifyContent='center' alignItems='center' w='100%' h='100px'><Heading>Fashion</Heading></Box>
    
     
      <Box  align='right' bg=' #f1f6fd'>
     <SimpleGrid columns={{base:2,sm:2,md:3,lg:4}} spacing={6} w='75%'  mr='40px'>
{
  fashionData?.map((el)=>(

          <Box 
          
           key={el.id}
           className='eachBox'
            mt='20px'
            align='left'
           
            style={{
              background:'white',
              fontFamily: "Open Sans",
              display: "flex",
              padding:'10px',
              flexDirection: "column",
              alignItems: "center"
            }}
          >
           
            <Image w='250px' h='350px'  mt='-10px'  src={el.img}></Image>
       <Box
          mt='1'
          as='h4'
          lineHeight='tight'
          noOfLines={2}
          overflow='hidden'
        >
         {el.description}
        </Box>
           <Text textAlign='left' fontWeight='600' fontSize={{base:'md',sm:'md',md:'sm',lg:'large'}}>Price: {el.discountPrice}</Text>
        </Box>
   
  ))
}
 </SimpleGrid>
 <Box mb='10px'bg=' #f1f6fd' padding='30px' align='center' display='flex' justifyContent='center' >
    <Button color='red' colorScheme='white' bg='white' variant='outline' disabled={page === 1} onClick={() => setPage(page - 1)}>
           Previous
      </Button>
      <Box p='10px 20px'> <Text className='pagenumber' fontWeight='500'>{page}</Text></Box>
      <Button color='red' colorScheme='white' bg='white' variant='outline' disabled={page >= 4} onClick={() => setPage(page + 1)}>
           Next
      </Button>
    </Box>
 </Box>
 </Box>
 
  ))
}

export default Fashion;