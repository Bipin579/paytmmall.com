import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import "../Navbar.css";
import { Box, Text, Image, Flex, VStack } from "@chakra-ui/react";
import cartbag from "./cartbag.png";
import list from "./list.png";
import { Link } from "react-router-dom";
import Login from "../Pages/Login";
const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  const checkScroll = () => {
    if (window.scrollY >= 80 && window.scrollY <= 4100) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  window.addEventListener("scroll", checkScroll);

  const loginPage = () => {
    Login();
  };

  return (
    <Box w={{ base: "200%", md: "180%", lg: "100%" }}>
      <Box className="paytm_mall_logo">
        <a href="">
          <Image
            src="https://thelogofinder.com/wp-content/uploads/2022/08/Paytm-Mall.svg"
            alt=""
          />
        </a>
      </Box>
      <Box
        className="navbar"
        w={{ md: "100%", lg: "100%" }}
        m="auto"
        position={isSticky ? "fixed" : "static"}
        top="0px"
        backgroundColor="white"
        zIndex="1000"
        py={5}
      >
        <Box className="navLeft">
          <Box className={"active4"} w={{ base: "40%", md: "18%", lg: "20%" }}>
            <Box className="nav_category">
              <Box>
                <GiHamburgerMenu color="red" />
              </Box>
              <Box>
                <Text fontSize={{ base: "xs", md: "sm", lg: "sm" }}>
                  Shop By Category
                </Text>
              </Box>
            </Box>

            <Box className="deepmenu4">
              <ul style={{ display: "inline-block" }} className="menu" />
              <Box className="first">
                <Box
                  ml="-10px"
                  h="442px"
                  w="900px"
                  mt="-20px"
                  p="20px"
                  className="localWarehouse"
                >
                  <Flex>
                    <Box>
                      <a className="first">
                        <Text fontSize="sm" color="red">
                          GIFT CARDS
                        </Text>
                      </a>
                    </Box>

                    <Box align="left" display="flex">
                      <Box h="400px" bg="gray" w="1px" ml="100px"></Box>
                      <VStack ml="10px" align="left">
                        <Link to="/fashion">
                          <Text>Fashion</Text>
                        </Link>
                        <Link to="/grocery">
                         
                          <Text>Grocery & Home Decor</Text>
                        </Link>
                        <Link to="/furniture&electronics">
                        
                          <Text>Furniture & Electronics</Text>
                        </Link>

                        <Link to="/jwellery">
                         
                          <Text>Jewellery</Text>
                        </Link>

                        <Link to="/entertainment">
                         
                          <Text>Entertainment</Text>
                        </Link>

                        <Link to="/beauty&health">
                        
                          <Text>Beauty & Health</Text>
                        </Link>

                        <Link to="/travel&holidays">
                          <Text>Travel & Holidays</Text>
                        </Link>
                      </VStack>
                    </Box>
                  </Flex>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="options" w={{ base: "50%", md: "77%", lg: "82%" }}>
            <input
              w={{ base: "40%", md: "40%", lg: "100%" }}
              className="searchBar"
              type="text"
              placeholder="Search for a Product, Brand or Category"
            />
            <BiSearch color="red" size="24px" />
          </Box>
        </Box>

        <Box
          className="nav_right"
          ml={{ base: "-15px" }}
          p={{ base: "0px" }}
          w={{ base: "50%", md: "40%", lg: "30%" }}
        >
          <Box className="order" w={{ base: "20%" }}>
            <Image src={list} alt="order_list_logo" />
            <Text fontSize={{ base: "10px", sm: "md", lg: "md" }}>
              My Orders
            </Text>
          </Box>

          <Box className="cart">
            <Image width="30px" src={cartbag} alt="cart_logo" />
            <Text fontSize={{ base: "10px", md: "md", lg: "md" }}>
              No Items in the Bag
            </Text>
          </Box>
          <Box className="user" w={{ base: "33%" }} onClick={loginPage}>
            <Image
              src="https://lh3.googleusercontent.com/cKM952bxPmD-jF370bX__2kVdNWHevwFKTFcYyIFL1j64IyV6PCO44udzF-Zokf4FFl5tjY9n9kUZda3_KzHtoLv=w128-h128-e365-rj-sc0x00ffffff"
              alt=""
            />
            <Text fontSize={{ base: "10px", sm: "md", lg: "md" }}>
              Login/SignUp
            </Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
