import { Box, Center, Heading, Text, Stack, Image, IconButton, Flex, useToast, Progress, ButtonGroup, Button, FormControl, FormLabel, Input, SimpleGrid } from '@chakra-ui/react';
import { FiTrash2, FiEdit } from 'react-icons/fi';
import React, {useRef, useState} from 'react';
import { deleteProduct, updateProduct } from '../../Redux/Admin/action';
import { useDispatch } from 'react-redux';

const SingleProduct = ({ product }) => {
  const formRef=useRef(product);
  const dispatch = useDispatch();
  const price = product.originalPrice.split('-');
  const [showEdit, setShowEdit] = useState(false);
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(50);

  const formChangeHandler = (e) => {
    const { name, value } = e.target;
    formRef.current[name]=value;
  }

  const formSubmitHandler = (e) => {
    e.preventDefault();
      try {
         dispatch(updateProduct(formRef.current));
         toast(
          {
            title: 'Product Updated',
            description: `${formRef.current.description} has been updated successfully.`,
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
      } catch (error) {
        toast(
          {
            title: 'Error white editing',
            description: `${formRef.current.description} has not edit.`,
            status: 'success',
            duration: 3000,
            isClosable: true,
          });
      }
      setShowEdit(false)
  }

  const Form1 = () => {
    return (
      <>
        <Heading w="100%" size={'md'} textAlign={'center'} fontWeight="normal">Edit Product</Heading>
        <FormControl mt={'2'}>
          <FormLabel htmlFor="name" fontWeight={'normal'}>Name</FormLabel>
          <Input id="description" name='description' onChange={formChangeHandler} fontSize={'small'} size={'sm'} />
        </FormControl>
          <FormControl>
            <FormLabel htmlFor="brand" fontWeight={'normal'}>Brand</FormLabel>
            <Input id="brand" type="text" name='brand' onChange={formChangeHandler} size={'sm'} fontSize={'small'} />
          </FormControl>       
      </>
    );
  };

  const Form2 = () => {
    return (
      <>
        <Heading w="100%" textAlign={'center'} size={'md'} fontWeight="normal">Edit Product</Heading>
        <SimpleGrid>
          <Flex>
            <FormControl mr="5%">
              <FormLabel htmlFor="originalPrice" fontWeight={'normal'}>Original Price</FormLabel>
              <Input id="original-price" name='originalPrice' onChange={formChangeHandler} fontSize={'small'} size={'sm'} />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="description" fontWeight={'normal'}>Discount Price</FormLabel>
              <Input id="discount-price" name='discountPrice' onChange={formChangeHandler} fontSize={'small'} size={'sm'} />
            </FormControl>
          </Flex>
          <FormControl mt={'2'}>
            <FormLabel htmlFor="brand" fontWeight={'normal'}>Category</FormLabel>
            <Input id="category" type="text" name='category' onChange={formChangeHandler} fontSize={'small'} size={'sm'} />
          </FormControl>
        </SimpleGrid>
      </>
    );
  };

  const handleDelete = (product) => {
    try {
      dispatch(deleteProduct(product.id));
      toast({
        title: 'Product Deleted',
        description: `${product.description} has been deleted successfully`,
        status: 'success',
        duration: 4000,
        isClosable: true,
      })
    } catch (error) {
      toast({
        title: 'Error while deleting',
        description: `${product.description} has not deleted`,
        status: 'error',
        duration: 4000,
        isClosable: true,
      })
    }
  }

  const editFunc = () => {
    return <Box borderWidth="1px" rounded="lg" shadow="1px 1px 3px rgba(0,0,0,0.3)" maxWidth={200} p={6} m="10px auto" as="form">
      <Progress hasStripe value={progress} mb="5%" mx="5%" isAnimated></Progress>
      {step === 1 ? <Form1 /> : <Form2 />}
      <ButtonGroup mt="5%" w="100%">
        <Flex w="100%" justifyContent="space-evenly">
          <Button
            onClick={() => { setStep(step - 1); setProgress(progress - 50) }} isDisabled={step === 1} colorScheme="teal" variant="solid" w="3.5rem" fontSize={'small'} mr="2%">
            Back
          </Button>
          <Button w="3.5rem" isDisabled={step === 2} colorScheme="teal" fontSize={'small'} variant="outline" mr="2%" onClick={() => {
            setStep(step + 1);
            if (step === 2) {
              setProgress(100);
            } else {
              setProgress(progress + 50);
            }
          }}>Next
          </Button>
          <Button w="3.5rem" colorScheme="black" fontSize={'small'} variant="outline" mr="2%" onClick={() => {
            setShowEdit(false)
          }}>Cancel
          </Button>
          {step === 2 ? (
            <Button w="3.5rem" colorScheme="red" variant="solid" fontSize={'small'} mr="2%" onClick={formSubmitHandler}>Submit
            </Button>
          ) : null}
        </Flex>
      </ButtonGroup>
    </Box>
  }

  if (showEdit) return editFunc(product);

  return (
    <Center bg='white' mt='2'>
      <Box role={'group'} p={6} maxW={'200px'} w={'full'} boxShadow={'2xl'} rounded={'lg'} pos={'relative'} zIndex={1}>
        <Box
          rounded={'lg'}
          pos={'relative'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image rounded={'lg'} boxSize={150} objectFit={'cover'} src={product.img} />
        </Box>
        <Stack align={'center'}>
          <Heading fontSize={'md'} fontFamily={'body'} fontWeight={500}>{product.description}</Heading>
          <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'md'}>₹{product.discountPrice}</Text>
            <Text textDecoration={'line-through'} color={'gray.600'} textDecor='line-through'>₹{price[0]}</Text>
            <Text color='green.400'>{price[1]}</Text>
          </Stack>
        </Stack>
        <Flex justifyContent={'space-evenly'}>
          <IconButton aria-label='Delete Product' onClick={() => handleDelete(product)} icon={<FiTrash2 />} />
          <IconButton aria-label='Edit Product' onClick={() => setShowEdit(true)} icon={<FiEdit />} />
        </Flex>
      </Box>
    </Center>
  )
}

export default SingleProduct;