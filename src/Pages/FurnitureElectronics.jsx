
import React from "react";
import {
  Box,
  Image,
  SimpleGrid,
  Text,
  Heading,
  Container,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const Furniture = () => {
  const [electronicsData, setElectronicsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getData = () => {
    setIsLoading(true);
    axios
      .get(
        `https://paytmmallserver.onrender.com/product?_page=${page}&_limit=16&category=electronics`
      )
      .then((res) => {
        setIsLoading(false);
        
        setElectronicsData(res.data); 
        //console.log(res.data);
      });
  };

  const lowToHigh = () => {
    setElectronicsData([]);
  
    let newData = [...electronicsData].sort((a, b) => {
     
      return +a.discountPrice - +b.discountPrice;
    });
    setElectronicsData(newData);
  };

  const highToLow = () => {
    setElectronicsData([]);
  
    let newData = [...electronicsData].sort((a, b) => {
     
      return +b.discountPrice - +a.discountPrice;
    });
    setElectronicsData(newData);
  };

  useEffect(() => {
    getData(page);
  }, [page]);

  const Loading = () => {
    return (
      <Container>
        <Image
          w="200px"
          h="200px"
          ml="180px"
          src="https://reiwa.com.au/ux/reiwa/ux/images/pd/spinner.gif"
        />
      </Container>
    );
  };
  return isLoading ? (
    <Loading />
  ) : (
    <Box>
       <Navbar />
      <Box
        boxShadow="md"
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
        h="100px"
      >
        <Heading>Furnitures and electronics </Heading>
      </Box>

      {/* ====================sidebar===================================== */}

      <Box align="right" bg=" #f1f6fd">
        <Box align="left" p="20px" w="20%" pos="fixed" l="0">
          <Box className="filter-div" onClick={lowToHigh}>
            <Text as="b">Low to high Price</Text>
          </Box>
          <br />
          <Box className="filter-div" onClick={highToLow}>
            {" "}
            <Text as="b">High to Low Price</Text>
          </Box>
        </Box>
        <SimpleGrid
          columns={{ base: 2, sm: 2, md: 3, lg: 4 }}
          spacing={6}
          w="75%"
          mr="40px"
        >
          {electronicsData?.map((el,index) => (
            <Box key={index}>
            <NavLink to={`/product/${el.id}`}>
            <Box
              h="300px"
              key={el.id}
              mt="20px"
              align="left"
              style={{
                background: "white",
                fontFamily: "Open Sans",
                padding: "10px",
              }}
            >
              <Image
                w="160px"
                objectFit={"scale-down"}
                h={"180px"}
                mt="-10px"
                src={el.img}
                m="auto"
              ></Image>
              <Box
                mt="1"
                as="h4"
                lineHeight="tight"
                noOfLines={2}
                overflow="hidden"
              >
                {el.description}
              </Box>
              <Text
                textAlign="left"
                fontWeight="600"
                fontSize={{ base: "md", sm: "md", md: "sm", lg: "large" }}
              >
                Price: {el.discountPrice}
              </Text>
            </Box></NavLink></Box>
          ))}
        </SimpleGrid>
        <Box
          mb="10px"
          bg=" #f1f6fd"
          padding="30px"
          align="center"
          display="flex"
          justifyContent="center"
        >
          <Button
            disabled={page === 1}
            color="red"
            colorScheme="white"
            bg="white"
            variant="outline"
            onClick={() => setPage(page - 1)}
          >
            Previous
          </Button>
          <Box p="10px 20px">
            {" "}
            <Text className="pagenumber" fontWeight="500">
              {page}
            </Text>
          </Box>
          <Button
            disabled={page >= 4}
            color="red"
            colorScheme="white"
            bg="white"
            variant="outline"
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        </Box>

      </Box>
      <Footer />
    </Box>

  );
};

export default Furniture;

