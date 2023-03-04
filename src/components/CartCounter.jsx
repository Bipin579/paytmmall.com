import { Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const CartCounter = ({ item,setSum,Price }) => {
    const [counter, setCounter] = useState(item || 1);
    Price = Price.replace(/,/g, '')
    
    const handleAdd = () => {
        setCounter(prev => +prev + 1)
        setSum(prev => +prev + (+Price))
    }

    const handleRemove = () => {
        setCounter(prev => +prev - 1)
        setSum(prev=>+prev-(+Price))
    }
    useEffect(() => {
        setSum(prev=> +prev+(+counter*(+Price)))
    },[])
   
//   console.log(counter);
  return (
    <>
          <Button
              size={{"base":"xs",md:"sm"}}
        fontWeight={"800"}
        fontSize="lg"
        isDisabled={counter === 1 ? true : false}
        onClick={handleRemove}
      >
        -
      </Button>
      <Button  size={{"base":"xs",md:"sm"}} fontWeight={"800"}>{counter}</Button>
          <Button
               size={{"base":"xs",md:"sm"}}
        fontWeight={"800"}
        fontSize="lg"
        isDisabled={counter === 5 ? true : false}
        onClick={handleAdd}
      >
        +
      </Button>
    </>
  );
};

export default CartCounter;
