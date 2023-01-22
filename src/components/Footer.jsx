import React from "react";
import styles from "../Footer.module.css";
import { Box, Image, Link, SimpleGrid, Text } from "@chakra-ui/react";
import paytmmall from '../Utils/paytmmall.png';
import {
  AiFillApple,
  AiFillWindows,
  AiFillAndroid,
  AiOutlineTwitter,
  AiFillYoutube,
  AiOutlineWallet
} from "react-icons/ai";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
const Footer = () => {

  return (

    <Box background="#f4f4f4" border="1px solid white" >
      <Box className={styles.f1}>
        <Text fontSize={{ base: '8px', md: '10px', lg: 'xs' }} align="left">
          Cashback would be added as Paytm Cash, which is One97 Communications
          Ltd loyalty program. It can be used to pay for goods & services sold
          by merchants that accept ‘Pay with Paytm’
        </Text>
      </Box>
      {/* ====================================ICONS PART =================================== */}
      <SimpleGrid className={styles.f2} columns={{base:1,md:2,lg:2}}>
        <Box className={styles.options}>
          <Link to="">About Us</Link>
          <Link to="">Partner with us</Link>
          <Link to="">Terms & Conditions</Link>
          <Link to="">Blog</Link>
          <Link to="">Media</Link>
          <Link to="">24x7 Help</Link>
          <Link to="">Grievance policy</Link>
          <Link to="">Bug bounty</Link>
          <Link to="">Return/Cancellation policy</Link>
        </Box>
        <Box className={styles.icons}>
          <Box>
            <AiFillApple />
          </Box>
          <Box>
            <AiFillWindows />
          </Box>
          <Box>
            <AiFillAndroid />
          </Box>
          <Box>
            <AiOutlineTwitter />
          </Box>
          <Box>
            <FaFacebookF />
          </Box>
          <Box>
            <ImInstagram />
          </Box>
          <Box>
            <AiFillYoutube />
          </Box>
        </Box>
      </SimpleGrid>
      {/* ======================================LOGOS PART========================================= */}
      <Box className={styles.p_logos}>
        <Box className={styles.logos}>
         
            <Box className={styles.first}>
              <Image
                w={{base:'120px',md:'150px',lg:'200px'}}
                src="https://www.pngmart.com/files/3/Major-Credit-Card-Logo-Transparent-Background.png"
                alt="Credit-Card-Logo"
              />
            </Box>
          <SimpleGrid columns={{base:1,md:2,lg:2}}>
            <Box border='1px solid rgba(128, 128, 128, 0.39)' p='3px'>
           
              <Image
                w="50px"
                src={paytmmall}
                alt=""
              />
              <Text fontSize="xs" mt="-15px" ml="55px">
                Seller{" "}
              </Text>
              <Text fontSize={{base:'xs',md:'sm',lg:'sm'}} fontWeight="700">
                Become a Seller
              </Text>
            </Box>
            <Box className={styles.P_wallet} border='1px solid rgba(128, 128, 128, 0.39)' >
               <AiOutlineWallet color='#0987A0'/>
              <Text mt="-16px" fontSize="xs">
                wallet{" "}
              </Text>
             <Text  fontSize={{base:'xs',md:'sm',lg:'sm'}} fontWeight="700">
                Payment services
              </Text>
              
            </Box>
            </SimpleGrid>
          
         
        </Box>
      </Box>
      {/* ================================================DROPDOWN PART==================================== */}
      <Box mt="20px" bg="white">
        <Text
          align="left"
          ml="20px"
          fontSize="1.1rem"
          fontWeight="500"
          color="#222"
        >
          From Electronics, Fashion to Cars: Buy Everything Online from the
          Convenience of Your Home from Paytm Mall
        </Text>
        <SimpleGrid className={styles.bottom} columns={{base:3,md:5,lg:5}}>
          <Box>
            <Text textAlign="left">Electronics</Text>
            <IoMdArrowDropdown size="20px" />{" "}
          </Box>
          <Box>
            <Text textAlign="left">Mobiles</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Car & bike</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Super Market</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Women's Fashion</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Men's Fashion</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Home & Kitchen</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Baby, Kids & Toys</Text>
            <IoMdArrowDropdown size="20px" />{" "}
          </Box>
          <Box>
            <Text textAlign="left">Car & Bike Accessories</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Sports & Fitness</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Stationery</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
          <Box>
            <Text textAlign="left">Travel Cards</Text>
            <IoMdArrowDropdown size="20px" />
          </Box>
           </SimpleGrid>
        </Box>
      </Box>
   
  );
};

export default Footer;