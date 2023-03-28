import Banner from "components/Banner";
import NavBar from "components/NavBAr";
import Row from "components/Row";
import {
  Box
} from "@chakra-ui/react";
import requests from "axios/request";

const HomeScreen = () => {
  return (<>
    <Box bg="black">
      <NavBar />
      <Banner />
      <Row title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Top Rated" fetchUrl = {requests.fetchTopRated} />
      <Row title="Trending Now" fetchURL ={requests.fetchTrending} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </Box>
  </>);
}

export default HomeScreen;
