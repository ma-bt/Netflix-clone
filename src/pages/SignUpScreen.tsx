import {
  Box,
  Flex,
  Text,
  Heading,
  VStack,
  HStack,
  Input,
  Button,
  Spacer
} from "@chakra-ui/react";
import { auth } from "config/firebase";
import { useRef, useState } from "react";

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


const SignUpScreen = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // const emailRef = useRef(null);
  // const passwordRef = useRef(null);
  // const auth = getAuth();

  console.log(auth, "auth");

  const register = (e: any) => {
    e.preventDefault();
    // auth.createUserWithEmailAndPassword(
    //   emailRef.current.value,
    //   passwordRef.current.value
    // )
    //     .then((authUser: any) => {
    //       console.log(authUser)
    //     })
    // .catch((err: any) => {
    //   alert(err.message)
    // })
    // }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
        // const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        alert(error.message)
       
      });
  }



  const signIn = (e: any) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential)
      })
      .catch((error) => {
        alert(error.message)
        // const errorCode = error.code;
        // const errorMessage = error.message;
      });

  }

  return (
    <>
      <Box  >

        <Flex justifyContent="center" minW="100%" position="absolute" top="30%" zIndex="1" color="white" p="20px"  >

          <VStack bgColor="black" px="40px" py="50px">

            <Heading as="h3" size="lg">Sign In</Heading>
            <Input /* ref={emailRef} */ bg="white" color="black" type='email' placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <Input /* ref={passwordRef} */ bg="white" color="black" type='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
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
              <Heading as="h5" size="xs" cursor="pointer" textDecoration="underline" onClick={register}>Sign Up now</Heading></HStack> </Box>
          </VStack>
        </Flex>
      </Box>
    </>
  );
}

export default SignUpScreen;
