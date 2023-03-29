import {
  Image,
  Box,
  Flex,
  Spacer,
  Heading,

} from '@chakra-ui/react';
import { RowProp } from 'constant';
import { useEffect, useState } from 'react';

import axios from "../axios/axios"
import { transform } from 'framer-motion';



const Row = ({ title, fetchUrl, isLargeRow = false }: RowProp) => {

  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";


  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results)
      return request;
    }
    fetchData()
  }, [fetchUrl])


  return (
    <>
      <Box ml="10px" >
        <Heading color="white" as='h3' size='lg'>
          {title}
        </Heading>
        <Flex
          display='flex'
          overflowY="hidden"
          overflowX="scroll"
          padding="20px"
          sx={{
            display: "flex",
            '::-webkit-scrollbar': {
              display: "none",
            }
          }} >


          {movies && movies.map((movie) => (
            (isLargeRow && movie.poster_path) || (!isLargeRow && movie.backdrop_path)) && (


            <Image objectFit="contain" w="100%"
            transition="transform 450ms"
             maxHeight={`${isLargeRow}` ? "150px": "250px" }
             _hover={{transform: "scale(1.08)", opacity: "1"}}
             m="10px"
             key={movie.id} src={` ${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path
              }`} alt={movie.name} />
          ))}
        </Flex>

      </Box>
    </>
  );
}

export default Row;
