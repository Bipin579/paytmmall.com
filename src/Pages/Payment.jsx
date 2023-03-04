import { Box, Button, Heading,} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import {Link} from "react-router-dom"

export default function Payment() {
  return (
    <Box textAlign="center" py={10} px={6} display="flex" flexDir={"column"} alignItems="center">
      <CheckCircleIcon boxSize={'100px'} color={'green.500'} m="auto" />
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Payment Success
      </Heading>
      <Button><Link to="/">GO TO HOME</Link></Button>
    </Box>
  );
}