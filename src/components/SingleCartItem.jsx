import { Box, Button, Image, Text } from "@chakra-ui/react";
import React from "react";
import CartCounter from "./CartCounter";

const SingleCartItem = ({
  id,
  brand,
  description,
  discountPrice,
  img,
  deleteItem,
  item
}) => {
  return (
    <Box display={"flex"} columnGap="20px" pt={"20px"}>
      <Box width="15%">
        <Image src={img} w={"100px"} h="100px" objectFit={"cover"} />
      </Box>
      <Box width="35%" textAlign={"left"} p="15px">
        <Text
          fontWeight="600"
          lineHeight={"1.2"}
          fontSize={{ base: "md", md: "lg", lg: "xl" }}
        >
          {description}
        </Text>
        <Text py={2} fontSize={"sm"} fontWeight="500">
          Brand : {brand}
        </Text>
      </Box>
      <Box w={"20%"} display="flex" alignItems={"center"}>
        <CartCounter item={item} />
        </Box>
      <Box
        display={"flex"}
        alignItems="center"
        width={"20%"}
        justifyContent="space-between"
      >
        <Text fontWeight={"bold"}>₹ {discountPrice} </Text>
        <Button onClick={() => deleteItem(id)}>
          <Image
            src="https://cdn-icons-png.flaticon.com/512/6932/6932392.png"
            w={"30px"}
          />
        </Button>
      </Box>
    </Box>
  );
};

export default SingleCartItem;
