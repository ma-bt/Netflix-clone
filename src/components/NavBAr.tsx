import {
  Image,
  Box,
  Flex,
  Spacer,

} from '@chakra-ui/react';
import { VStack } from '@chakra-ui/layout';
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';

const NavBar = () => {
  const [show, handleShow] = useState(false)
  const history = useNavigate();


  const TransitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);

    }
    else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", TransitionNavBar);
    return () => window.removeEventListener("scroll", TransitionNavBar)

  }, []);


  return (
    <>
      <Box bg={`${show ? "black" : "transparent"}`} w="100%"   pt="2" h={{
        base: "40px",
        md: '60px',
        xl: "65px"
      }} transition="all 0.6s ease-out"
        transitionTimingFunction="ease-out" position="fixed" zIndex={1}>


        <Flex minWidth='max-content' alignItems='center' gap='2'>
          <Box px="20px" w={{
            base: '100px',
            md: '130px',
            xl: "146px"
          }} cursor="pointer"
            position="fixed" left="40px" top="4">
            <Image
             onClick={() => history("/")} src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='Logo' />

          </Box>
          <Spacer />
          <Box px="20px" w={{
            base: '70px',
            md: '70px',
            xl: "78px"
          }}
            cursor="pointer"
            position="fixed"
            right="50px" top="4"
          >
            <Image
            onClick={() => history("/profile")}
             borderRadius="md" src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt='Logo' />
          </Box>

        </Flex>
      </Box>
    </>
  )

}

export default NavBar;
