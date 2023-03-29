import {
  Box, Image, Flex, Text, Spacer,
  Button, Heading, VStack,
  Input,
  HStack,
} from "@chakra-ui/react";
import { useState } from "react";


const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <>
      <Box position="relative" height="100%" bgImage="url('https://cdn.wccftech.com/wp-content/uploads/2018/07/Netflix-Ultra-01-Netflix-Logo.png')" bgSize="cover" bgRepeat="no-repeat" bgPosition="center ">


        <Box>

          {/* Logo */}
          <Image position="fixed" top="15px" left="0" w="150px" objectFit="contain" pl="30px" src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' />

          <Spacer />

          {/* SignIn Button */}
          <Button onClick={() => setSignIn(true)} position="fixed" right="30px" top="15px" px="9" colorScheme='red'>Sign In</Button>


          <Box width="100%" z-zIndex="1" h="100vh" background="rgba(0,0,0,0.4)" bgGradient="linear-gradient(to top, rgba(0,0,0,0.8) 0,rgba(0,0,0,0)60%,rgba(0,0,0,0.8)100%)">
            <Flex justifyContent="center" textAlign="center" alignItems="center" minW="100%" position="absolute" top="30%" zIndex="1" color="white" p="20px"  >
              <VStack>
                <Heading as='h2' size='xl' >
                  Unlimited films, TV programmes and more.
                </Heading>
                <Text fontSize='md' lineHeight="1">
                  Watch anywhere, Cancel at any time.
                </Text>
                <Text fontSize='sm' >
                  Ready to Watch? Enter your email to create or restart your membership.
                </Text>
                <Flex pt="20px" minWidth='max-content' gap='0'>

                  <HStack>

                    <Input mx="0" outline="none" type='email' bg="white" color="black" placeholder="Enter email here..." />
                    <Button
                      onClick={() => setSignIn(true)}
                      colorScheme="red"
                      mx="0"
                      px="30px">Get Startet</Button>
                  </HStack>

                </Flex>

              </VStack>
            </Flex>
          </Box>

        </Box>

      </Box>
    </>

  );
}

export default LoginScreen;

//Logo
//https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png

//cover image
//https://res.cloudinary.com/practicaldev/image/fetch/s--K8sVFuCD--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hjukkwcishwdbbo3vp5m.jpeg
