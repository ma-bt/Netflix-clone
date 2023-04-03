import {
  Box,
  Heading,
  Text,
  Button, ButtonGroup, Flex, VStack
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
        maxheight="80vh"
        //objectFit="contain"
        color="white"
        position="relative"
        top="0"
      >

        <Box mx="60px" pt="180px" height={
          "190px"}>
          <Box justifyContent="start">


          <Heading fontSize="4rem" fontWeight="800" as='h1' paddingBottom="0.3rem ">{movie?.title || movie?.name || movie?.original_name}</Heading>

          <ButtonGroup spacing='3'>
            <Button px="10" colorScheme='gray' color="black"><FaPlay /> {"  "} Play </Button>
            <Button px="10" backgroundColor='rgba(51,51,51,0.5)' color="white">More Info</Button>
          </ButtonGroup>
          <Text lineHeight="1.3" paddingTop="1rem" fontSize="1rem" height="80px" maxW="30rem">
            {truncate(movie?.overview, 150)}
          </Text>


          </Box>
        </Box>
        <Box /* position="absolute" */ height="26.2rem" bgGradient="linear-gradient(180deg,transparent,rgba(37,37,37,0.66),#000)"></Box>
      </Box>

    </>
  );
}

export default Banner;
