import { Button } from "@chakra-ui/react";
import React, { useState } from "react";

const CartCounter = ({ item }) => {
  const [counter, setCounter] = useState(item || 1);
  console.log(counter);
  return (
    <>
      <Button
        fontWeight={"800"}
        fontSize="lg"
        isDisabled={counter == 1 ? true : false}
        onClick={() => setCounter((prev) => +prev - 1)}
      >
        -
      </Button>
      <Button fontWeight={"800"}>{counter}</Button>
      <Button
        fontWeight={"800"}
        fontSize="lg"
        isDisabled={counter == 5 ? true : false}
        onClick={() => setCounter((prev) => prev + 1)}
      >
        +
      </Button>
    </>
  );
};

export default CartCounter;
