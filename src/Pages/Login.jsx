// import React from "react";
// import {
//   Box,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Text,
// } from "@chakra-ui/react";
// import { useState } from "react";
// const Login = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", password: "" });

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Do something with the form data here (e.g. send it to an API)
//     console.log(formData);
//   }
//   return (
//     <Box m="auto" bgColor={"#EBF7FC"}>
//       <Box
//         display="flex"
//         flexDirection={["column", "column", "column", "row", "row", "row"]}
//         colGap={10}
//         maxW={"5xl"}
//         m="auto"

//       >
//         <Box
//           width={["full", "full", "full", "full", "50%", "50%"]}
//           display="flex"

//         >
//           <Text fontSize={"2xl"} fontWeight="bold" textAlign={"center"}>
//             Login
//           </Text>
//           <Box
//             p={10}
//             display="flex"
//             flexDir={"row"}
//             justifyContent="center"
//             m={"auto"}
//           >
//             <form onSubmit={handleSubmit}>
//               <FormControl>
//                 <FormLabel htmlFor="name">Name</FormLabel>
//                 <Input id="name" name="name" borderColor={"red"} onChange={handleChange} />
//               </FormControl>
//               <FormControl>
//                 <FormLabel htmlFor="email">Email</FormLabel>
//                 <Input id="email" name="email" onChange={handleChange} />
//               </FormControl>
//               <FormControl>
//                 <FormLabel htmlFor="password">Password</FormLabel>
//                 <Input
//                   id="password"
//                   name="password"
//                   type="password"
//                   onChange={handleChange}
//                 />
//               </FormControl>
//               <Button type="submit" variantColor="teal">
//                 Submit
//               </Button>
//             </form>
//           </Box>
//         </Box>
//         <Box width={["full", "full", "full", "full", "50%", "50%"]}></Box>
//       </Box>
//     </Box>
//   );
// };

// export default Login;

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

export default function Login() {
  return (
    <Box
      display="flex"
      flexDirection={["column", "column", "column", "row", "row", "row"]}
      colGap={10}
      maxW={"5xl"}
      m="auto"
    >
      <Flex
        width={["full", "full", "full", "full", "50%", "50%"]}
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
              ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
                  
    </Box>
  );
}
