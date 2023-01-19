import React, { useState } from 'react'
import { FormControl,Input,Heading,FormLabel, FormErrorMessage,Button } from '@chakra-ui/react'
import {useDispatch} from 'react-redux';
import { addProduct } from '../../Redux/Admin/action';

const AddProducts = () => {
  const dispatch = useDispatch();
  const initForm={name:'',brand:'',image:'',originalPrice:'',discountPrice:'',category:''}
  const [form,setForm]=useState(initForm);
  const formChangeHandler=(e)=>{
    const {name, value}=e.target;
    setForm({...form,[name]:value})
  }

  const formSubmitHandler=(e)=>{
    e.preventDefault();
    dispatch(addProduct(form))
    setForm(initForm)
  }

// throwing error when form is called 
// console.error(' ', form)
  return (
    <div>
      <Heading size='md'>Add Products</Heading>
      <FormControl>
        <FormLabel>Product Name</FormLabel>
        <Input type='text' name='name' onChange={formChangeHandler} value={form.name}  />
        <FormLabel>Product Brand</FormLabel>
        <Input type='text' name='brand' onChange={formChangeHandler} value={form.brand} />
        <FormLabel>Product Image</FormLabel>
        <Input type='url' name='image' onChange={formChangeHandler} value={form.image} />
        <FormLabel>Product Original Price</FormLabel>
        <Input type='number' name='originalPrice' onChange={formChangeHandler} value={form.originalPrice} />
        <FormLabel>Product Discount Price</FormLabel>
        <Input type='number' name='discountPrice' onChange={formChangeHandler} value={form.discountPrice} />
        <FormLabel>Product Category</FormLabel>
        <Input type='text' name='category' onChange={formChangeHandler} value={form.category} />
        <Button type='submit' onClick={formSubmitHandler}>Add</Button>
      </FormControl>
    </div>
  )
}

export default AddProducts;