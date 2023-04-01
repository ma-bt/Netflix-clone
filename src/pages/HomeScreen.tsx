import Banner from "components/Banner";
import NavBar from "components/NavBAr";
import Row from "components/Row";
import {
  Box
} from "@chakra-ui/react";
import requests from "axios/request";

const HomeScreen = () => {
  return (
  <>
    <Box bg="black">
      <NavBar />
      <Banner />
      <Row title="Netflix Originals" fetchUrl = {requests.fetchNetflixOriginals} isLargeRow/>
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} isLargeRow/>
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} isLargeRow/>
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} isLargeRow/>
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} isLargeRow/>
    </Box>
  </>
  );
}

export default HomeScreen;
