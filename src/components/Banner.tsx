import {
  Box,
  Heading,
  Text,
  Button, ButtonGroup
} from "@chakra-ui/react";
import requests from "axios/request";
import { FaPlay } from 'react-icons/fa'

import { useState, useEffect } from "react";
import axios from '../axios/axios';


const Banner = () => {

  const [movie, setMovie] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
        Math.floor(Math.random() * request.data.results.length - 1)
        ]
      )
      return request;

    }
    fetchData()
  }, [])
  console.log(movie)

  const truncate = (string: string, n: number) => {
    return string?.length > n ? string.substr(0, n - 1) + '...' : string;

  }
  return (
    <>
      <Box
        bg={`url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`}
        bgSize="cover"
        bgPosition="center "
        height="100vh"
        // objectFit="contain"
        color="white"
        position="relative"
        top="0"
      >
       
        <Box mx="60px" pt="140px" height="190px">
          <Heading fontSize="3rem" fontWeight="800" as='h3' paddingBottom="0.3rem ">{movie?.title || movie?.name || movie?.original_name}</Heading>

          <ButtonGroup spacing='3'>
            <Button px="10" colorScheme='gray' color="black"><FaPlay /> {"  "} Play </Button>
            <Button px="10" backgroundColor='rgba(51,51,51,0.5)' color="white">More Info</Button>
          </ButtonGroup>
          <Text lineHeight="1.3" paddingTop="1rem" fontSize="1rem" height="80px">
            {truncate(movie?.overview, 150)}
          </Text>
        </Box>
        <Box position="absolute" height="10.4rem" bgGradient="linear(180deg,transparent,rgba(37,37,37,0.61),#111)"></Box>
      </Box>

    </>
  );
}

export default Banner;
