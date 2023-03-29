import {
  Box, FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  Input,
  Button,
  Spacer
} from "@chakra-ui/react";

const SignUpScreen = () => {

  const register = (e:any) => {
    e.preventDefault();
  }

const signIn = (e:any) => {
  e.preventDefault();
}

  return (
    <>
      <Box  >

        <Flex justifyContent="center" minW="100%" position="absolute" top="30%" zIndex="1" color="white" p="20px"  >

          <VStack bgColor="black" px="40px" py="50px">

            <Heading as="h3" size="lg">Sign In</Heading>
            <Input bg="white" type='email' placeholder="Email" />
            <Input bg="white" type='password' placeholder="Password" />
            <Spacer />
            <Button width="100%"
              colorScheme="red"
              type="submit"
              mx="0"
              px="30px"
              onClick={signIn}>Sign In</Button>
              <Spacer />
            <Box><HStack>

               <Text fontSize="xs">New to Netflix? </Text>
              <Heading as="h5" size="xs"onClick={register}>Sign Up now</Heading></HStack> </Box>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default SignUpScreen;
