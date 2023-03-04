import {
  Box,
  Button,
  Image,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../components/Footer";
import Loading from "../components/Loading";
import Navbar from "../components/Navbar";
import SingleCartItem from "../components/SingleCartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  // const loading = useSelector(store => store.AuthReducer.isLoading);
  const dispatch = useDispatch();
  const [single, setSingle] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [sum, setSum] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [data, setData] = useState([]);

  const [fullname, setFullname] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  localStorage.setItem("totalCart", JSON.stringify(sum));
  let userId = localStorage.getItem("userId");

  const getUser = () => {
    setLoading(true);
    axios
      .get(`https://paytmmallserver.onrender.com/users/${+userId}`)
      .then((res) => {
        setSingle([...res.data.cart]);
        setUser(res.data);
        console.log(res.data.cart);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  // let sum =0
  // if (!loading) {

  //   single.forEach((el) => {
  //     sum+=+el.discountPrice*+el.item
  //   })
  // }

  const deleteItem = (id) => {
    let newCart = single.filter((el) => {
      return el.id !== id;
    });
    user.cart = newCart;
    axios
      .put(`https://paytmmallserver.onrender.com/users/${userId}`, user)
      .then(() => {
        setSum(0);
        getUser();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getUser();
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <>
      <Navbar />
      <Box
        display={"flex"}
        justifyContent="space-between"
        bg="#F5F7F7"
        p={"2.5%"}
        gap="20px"
        flexDir={{ base: "column", md: "row" }}
      >
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
            w="100%"
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
              return (
                <SingleCartItem
                  key={el.id}
                  {...el}
                  userId={userId}
                  deleteItem={deleteItem}
                  setSum={setSum}
                />
              );
            })}
          </Box>
        </Box>
        <Box
          w={{ base: "100%", sm: "80%", md: "35%" }}
          left={{ sm: 0, md: 0 }}
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
              <Text fontWeight="400" fontSize={"1rem"}>
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
              <Text fontWeight="400" fontSize={"1rem"}>
                Delivery to{" "}
                <Text as={"span"} fontWeight="600">
                  431703
                </Text>
              </Text>
              <Text color={"#F25B22"} fontWeight="400" fontSize={"1rem"}>
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
              <Text fontWeight="400" fontSize={"1rem"}>
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
              <Text fontWeight="400" fontSize={"1rem"}>
                Bag Total
              </Text>
              <Text color={"#F25B22"} fontWeight="400" fontSize={"1rem"}>
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
              <Text fontWeight="400" fontSize={"1rem"}>
                Shopping Charges
              </Text>
              <Text color={"#F25B22"} fontWeight="400" fontSize={"1rem"}>
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
              <Text fontWeight="400" fontSize={"1rem"}>
                Amount Payable
              </Text>
              <Text color={"#F25B22"} fontWeight="400" fontSize={"1rem"}>
                ₹ {sum}
              </Text>
            </Box>
            <Box>
              <Button
                width={"100%"}
                bg={"#F25B22"}
                color="white"
                fontWeight={"bold"}
                fontSize={"1rem"}
                onClick={() => onOpen()}
              >
                CHECKOUT
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>ADD NEW ADDRESS</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Box style={{ display: "flex", gap: "30px" }}>
                      <Input
                        my="2"
                        type="text"
                        required
                        placeholder="Full Name*"
                        onChange={(e) => setFullname(e.target.value)}
                      />
                      <Input
                        my="2"
                        type="text"
                        required
                        placeholder="Mobile Number*"
                        onChange={(e) => setPhoneNo(e.target.value)}
                      />
                    </Box>
                    <Box style={{ display: "flex", gap: "30px" }}>
                      <Input
                        my="2"
                        type="text"
                        required
                        placeholder="Pincode*"
                        onChange={(e) => setPinCode(e.target.value)}
                      />
                      <Input
                        my="2"
                        type="text"
                        required
                        placeholder="City*"
                        onChange={(e) => setCity(e.target.value)}
                      />
                    </Box>
                    <Box style={{ display: "flex", gap: "30px" }}>
                      <Input
                        my="2"
                        type="text"
                        required
                        placeholder="State*"
                        onChange={(e) => setState(e.target.value)}
                      />
                      <Input
                        my="2"
                        type="text"
                        required
                        placeholder="Country*"
                        onChange={(e) => setCountry(e.target.value)}
                      />
                    </Box>
                    <Input
                      my="2"
                      type="text"
                      required
                      placeholder="Flat No/Building , Street Name*"
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <Input
                      my="2"
                      type="text"
                      required
                      placeholder="Area/Locality*"
                      onChange={(e) => setArea(e.target.value)}
                    />
                    <Input
                      my="2"
                      type="text"
                      required
                      placeholder="Landmark"
                      onChange={(e) => setLandmark(e.target.value)}
                    />
                    <Text>PS. Your information is safe with us, No spam.</Text>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      className="modal-add-address-btn"
                      bg={"#F25B22"}
                      color="white"
                      fontWeight={"bold"}
                      fontSize={"1rem"}
                    >
                      <Link to="/payment">PAY NOW</Link>
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Cart;
