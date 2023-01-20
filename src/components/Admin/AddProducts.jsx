import React, { useState } from 'react'
import {FormControl,Input,Heading,FormLabel,Button,useToast } from '@chakra-ui/react'
import {useDispatch} from 'react-redux';
import { addProduct } from '../../Redux/Admin/action';

const AddProducts = () => {
  const dispatch = useDispatch();
  const initForm={name:'',brand:'',image:'',originalPrice:'',discountPrice:'',category:''}
  const toast=useToast();
  // If we want to implement isRequired to only specific input then we have to create single FormControl in particular element or input & have to use single state for their values as below:- 
  // const [isNameInvalid,setIsNameInvalid]=false;
  // const [isBrandInvalid,setIsBrandInvalid]=false;
  // const [isImageInvalid,setIsImageInvalid]=false;
  // const [isOriginialPriceInvalid,setIsOriginialPriceInvalid]=false;
  // const [isDiscountPriceInvalid,setIsDiscountPriceInvalid]=false;
  // const [isCategoryInvalid,setIsCategoryInvalid]=false;

  const [form,setForm]=useState(initForm);
  const formChangeHandler=(e)=>{
    const {name, value}=e.target;
    setForm({...form,[name]:value})
  }

  const formSubmitHandler=(e)=>{
    e.preventDefault();
    try {
      dispatch(addProduct(form))
      toast({
        title: 'Product Added',
        description: `${form.name} has been added successfully`,
        status: 'success',
        duration: 6000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while adding',
        description: `${form.name} has not added`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
    setForm(initForm)
  }

  return (
    <div>
      <Heading size='md'>Add Products</Heading>
      <form onSubmit={formSubmitHandler}>
      <FormControl isRequired>
        <FormLabel>Product Name</FormLabel>
        <Input type='text' name='name' background='#fff' htmlSize={45} width='auto' onChange={formChangeHandler} value={form.name}  />
        <FormLabel>Product Brand</FormLabel>
        <Input type='text' name='brand' background='#fff' onChange={formChangeHandler} value={form.brand} />
        <FormLabel>Product Image Link</FormLabel>
        <Input type='url' name='image' background='#fff' onChange={formChangeHandler} value={form.image} />
        <FormLabel>Product Original Price</FormLabel>
        <Input type='number' name='originalPrice' background='#fff' onChange={formChangeHandler} value={form.originalPrice} />
        <FormLabel>Product Discount Price</FormLabel>
        <Input type='number' name='discountPrice' background='#fff' onChange={formChangeHandler} value={form.discountPrice} />
        <FormLabel>Product Category</FormLabel>
        <Input type='text' name='category' background='#fff' onChange={formChangeHandler} value={form.category} />
        <Button type='submit' colorScheme='teal' marginTop='2'>Add</Button>
        {/* I am not using Input as submit type because it's not recommended & also if I use Button then we can use many features like onclick */}
        {/* <Input type='submit' value='Add'/> */}
      </FormControl>
      </form>
      
    </div>
  )
}

export default AddProducts;