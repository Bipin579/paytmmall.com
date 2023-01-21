import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useToast,
} from "@chakra-ui/react";
import { Link, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, signup } from "../Redux/Auth/action";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const toast = useToast();

  const dispatch = useDispatch();
  const users = useSelector((store) => store.AuthReducer.users);
  const loading = useSelector((store) => store.AuthReducer.isLoading);
  
  useEffect(() => {
    dispatch(getUsers);
  }, []);
  console.log(users);
  let newToastSucess = () => {
    return toast({
      title: "Successfully Logged In.",
      description: `Welcome ${email}`,
      status: "success",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  };
  let newToastFail = () => {
    return toast({
      title: "Unable to create Account.",
      status: "error",
      duration: 3000,
      position: "top",
      isClosable: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let bool = users.some((el) => {
      return el.email === email;
    });

    if (bool) {
      toast({
        title: "User already exist.",
        description: `Try different ${email}`,
        status: "error",
        duration: 3000,
        position: "top",
        isClosable: true,
      });
    } else {
      let newUser = {
        name: name,
        email: email,
        password: password,
        cart: [],
        orders: [],
      };
      dispatch(signup(newUser, newToastSucess, newToastFail)).then(() => {
        dispatch(getUsers);
        <Navigate to={"/login"} />
      });
    }
  };

  

  return loading?<Box>...loading</Box>:( 
      <>
          
      <Flex
        pt={"-200px"}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        
        m="auto"
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6} bg={"whatsapp.50"}>
          <Stack align={"center"}>
            <Heading color={"#002E6E"} fontSize={"4xl"}>
              Create your account
            </Heading>
          </Stack>
          <Box rounded={"lg"}  boxShadow={"lg"} p={8} >
            <form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <FormControl id="name">
                  <FormLabel>Name</FormLabel>
                  <Input
                    focusBorderColor="#002E6E"
                    borderColor={"#002E6E"}
                    placeholder="Enter Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl id="email">
                  <FormLabel>Email address</FormLabel>
                  <Input
                    focusBorderColor={"#002E6E"}
                    placeholder="Enter @gmail.com"
                    borderColor={"#002E6E"}
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </FormControl>
                <FormControl id="password">
                  <FormLabel>Password</FormLabel>
                  <Input
                    focusBorderColor={"#002E6E"}
                    placeholder="Enter password ***"
                    borderColor={"#002E6E"}
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </FormControl>
                <Stack spacing={4}>
                  <Button
                    type="submit"
                    bg={"blue.500"}
                    color={"white"}
                    _hover={{
                      bg: "blue.600",
                    }}
                  >
                    Sign in
                  </Button>
                  <Box display={"flex"} justifyContent="center">
                    <Text as={"span"} textAlign={"center"}>
                      Already have Account ?{" "}
                    </Text>
                    <Text color="#002E6E" fontWeight="600" as={"span"}>
                      <Link to={"/login"}>Login</Link>
                    </Text>
                  </Box>
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}

export default Signup;
