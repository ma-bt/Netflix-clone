import {
  Image,
  Box,
  Flex,
  Spacer,
  Heading,

} from '@chakra-ui/react';
import { RowProp } from 'constant';
import { useEffect, useState } from 'react';



const Row = ({ title, fetchUrl,isLargeRow =false}: RowProp) => {

  const[movies,setMovies] = useState([]);
  useEffect(() => {

  },[fetchUrl])
  return (
    <>
      <Box>
        <Heading as='h3' size='lg'>
          (lg) In love with React & Next
        </Heading>
      </Box>
    </>
  );
}

export default Row;
