import {
  Box,
  Button,
  Flex,
  VStack,
  Heading,
  Image
} from "@chakra-ui/react";
import { selectUser } from "Feature/userSlice";
import NavBar from "components/NavBAr";
import { auth } from "config/firebase";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
const ProfileScreen = () => {
  const auth = getAuth();
  const user = useSelector(selectUser)
  // signOut(auth).then(() => {
  //   // Sign-out successful.
  // }).catch((error) => {
  //   // An error happened.
  // });

  return (
    <>
    <Box height="100vh" color="white" bg="black">


      <NavBar />
      <Flex  justifyContent="center" textAlign="left" >
        <VStack >
        <Heading as='h2' size='xl' >
          Edit Profile
        </Heading>
        <Flex>
          <Box>
            <Image borderRadius="md" src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Logo' />

          </Box>
          <Box>
            <Heading>{user.email}</Heading>
            <Box>
              <Button onClick={() => auth.signOut()}> Sign Out</Button>
            </Box>
          </Box>
        </Flex>
        </VStack>

      </Flex>
    </Box>


    </>
  );
}

export default ProfileScreen;
