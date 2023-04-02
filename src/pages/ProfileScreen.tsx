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
  //  console.log(signOut);
  // }).catch((error) => {
  //   console.log(error)
  // });

  return (
    <>
    <Box height="100vh" color="white" bg="black">


      <NavBar />
      <Flex  justifyContent="center"   >
        <VStack >
        <Heading fontSize="60px"
         fontWeight="400"
          borderBottom="1px solid #282c2d" mb="20px" mt="20px"
       as='h2' size='xl' pt="8%">
          Edit Your Profile
        </Heading>
        <Flex  >
          <Box>
            <Image h="100px" borderRadius="md" src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Logo' />

          </Box>
          <Box ml="25px" flex="1">
            <Heading bgColor="grey" p="15px" fontSize="15px" pl="20px" as='h5' size='md'>{user.email}</Heading>
            <Box mt="20px">
            <Heading textAlign="left" borderBottom="1px solid #282c2d"  fontSize="15px" pb="20px" as='h5' size='md'>Plans</Heading>

              <Button bgColor="red"
              fontSize="1rem" border="none"
              p="10px 20px" mt=" 5%"
               cursor="pointer" width="100%"
                color="black"
               onClick={() => auth.signOut()}> Sign Out</Button>
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
