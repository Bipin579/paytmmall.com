import { Box, Button, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import SingleCartItem from "../components/SingleCartItem";
import { getUsers } from "../Redux/Auth/action";

const Cart = () => {
  // const loading = useSelector(store => store.AuthReducer.isLoading);
  const dispatch = useDispatch();
  const [single, setSingle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});


  let userId = localStorage.getItem("userId");

  const getUser = () => {
    setLoading(true);
    axios
      .get(`https://paytmmallserver.onrender.com/users/${+userId}`)
      .then((res) => {
        setSingle([...res.data.cart]);
        setUser(res.data)
        console.log(res.data.cart)

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  let sum =0
  if (!loading) {
    
    single.forEach((el) => {
      sum+=+el.discountPrice*+el.item
    })
  }

 
  const deleteItem = (id) => {
    let newCart = single.filter((el) => {
      return el.id !== id
    })
    user.cart = newCart
    axios.put(`https://paytmmallserver.onrender.com/users/${userId}`, user).then(() => {
      getUser()
    }).catch((err) => {
      console.log(err)
    })
  }
  

  useEffect(() => {
    getUser();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <Box display={"flex"} bg="#F5F7F7" p={"2.5%"} gap="20px">
        <Box
          width={"65%"}
          overflowY="scroll"
          boxSize={"borderBox"}
          bg="white"
          p={"30px"}
        >
          <Box
            display="flex"
            flexDir={"row"}
            alignItems="center"
            columnGap={4}
            pb="30px"
          >
            <Image
              src="https://cdn-icons-png.flaticon.com/512/2940/2940522.png"
              w={"35px"}
            />
            <Text
              fontWeight="400"
              fontSize={{ base: "md", md: "xl", lg: "2xl" }}
            >
                <Text as={"span"}>{single.length}</Text> Item in your Bag
            </Text>
          </Box>

          <Box name="cart_card">
              {single.map((el) => {
                return <SingleCartItem key={el.id} {...el} userId={userId} deleteItem={deleteItem} />
            })}
          </Box>
        </Box>
        <Box
          w={"35%"}
          display={"flex"}
          flexDir="column"
          bg="#F5F7F7"
          rowGap={"25px"}
        >
          <Box p={"20px"} bg="white">
            <Box
              display="flex"
              flexDir={"row"}
              alignItems="center"
              columnGap={4}
              pb="10px"
              borderBottom={"1px solid black"}
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/3063/3063822.png"
                w={"35px"}
              />
              <Text
                fontWeight="400"
                fontSize={{ base: "md", md: "xl", lg: "2xl" }}
              >
                Delivery Address
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              columnGap={4}
              p="10px"
              border={"1px solid black"}
              mt="15%"
            >
              <Text
                fontWeight="400"
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
                Delivery to{" "}
                <Text as={"span"} fontWeight="600">
                  431703
                </Text>
              </Text>
              <Text color={"#F25B22"} fontWeight="400">
                Change
              </Text>
            </Box>
          </Box>
          <Box p={"20px"} bg="white">
            <Box
              display="flex"
              flexDir={"row"}
              alignItems="center"
              columnGap={4}
              pb="10px"
            >
              <Image
                src="https://cdn-icons-png.flaticon.com/512/7324/7324863.png"
                w={"35px"}
              />
              <Text
                fontWeight="400"
                fontSize={{ base: "md", md: "xl", lg: "2xl" }}
              >
                Payment Summary
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              columnGap={4}
              p="10px"
            >
              <Text
                fontWeight="400"
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
                Bag Total
              </Text>
              <Text color={"#F25B22"} fontWeight="400">
                ₹ {sum}
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              columnGap={4}
              p="10px"
            >
              <Text
                fontWeight="400"
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
                Shopping Charges
              </Text>
              <Text color={"#F25B22"} fontWeight="400">
                Free
              </Text>
            </Box>
            <Box
              display="flex"
              flexDir={"row"}
              alignItems="center"
              justifyContent={"space-between"}
              columnGap={4}
              p="10px"
            >
              <Text
                fontWeight="400"
                fontSize={{ base: "md", md: "lg", lg: "xl" }}
              >
                Amount Payable
              </Text>
              <Text color={"#F25B22"} fontWeight="400">
                ₹ {sum}
              </Text>
            </Box>
            <Box>
              <Button
                width={"100%"}
                bg={"#F25B22"}
                color="white"
                fontWeight={"bold"}
              >
                PAY
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
