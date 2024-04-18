import React from "react";
import {
   Box,
   Container,
   Stack,
   SimpleGrid,
   Text,
   Link,
   VisuallyHidden,
   chakra,
   useColorModeValue,
   Image,
   Button,
} from "@chakra-ui/react";
import logo from "../image/logo1.jpg"

import {
   FaTwitter,
   FaYoutube,
   FaInstagram,
   
   FaFacebook,
} from "react-icons/fa";

const ListHeader = ({ children }) => {
   return (
      <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
         {children}
      </Text>
   );
};

const SocialButton = ({ children, label, href }) => {
   return (
      <chakra.button
         bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
         rounded={"full"}
         w={9}
         h={8}
         cursor={"pointer"}
         as={"a"}
         href={href}
         display={"inline-flex"}
         alignItems={"center"}
         justifyContent={"center"}
         transition={"background 0.3s ease"}
         _hover={{
            bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
         }}
      >
         <VisuallyHidden>{label}</VisuallyHidden>
         {children}
      </chakra.button>
   );
};
const Footer = () => {
   return (
      <Box
         bg={useColorModeValue("#446879", "gray.900")}
         color={useColorModeValue("#ffffff", "gray.200")}
      >
       
         <Container as={Stack} maxW={"7xl"} py={10}>
            <SimpleGrid columns={{ base: 1, sm: 2, md: 5 }} spacing={{ base: 10, sm: 4, md: 1 }}>
               <Stack align={"flex-start"}>
         {/* <img src="logo1" alt="logo" srcset="" /> */}
         <img width="30px" src={logo} alt="" />
         <Text fontWeight={700} letterSpacing={1}>RESOURCES</Text>  
                  <Link href={"#"}>Home</Link>
                  <Link href={"#"}>Adopt</Link>
                  <Link href={"#"}>FAQs</Link>
                  <Link href={"#"}>About US</Link>
                  
                 
               </Stack>

               <Stack align={"flex-start"}>
               <br />
         <Text fontWeight={700} letterSpacing={3}>Contact Us</Text>
         <p><i class="fas fa-phone"></i>Phone:<a href="tel:+ +1-678-234-8906" class="link-input" id="phone"> +1-678-234-8906</a></p>
                <p>Email us: <a href="mailto:paws&tails@email.com" class="link-input" id="email">paws&tails@email.com</a></p>
               
                 
               </Stack>

               <Stack align={"flex-start"}>
               <br />
         <Text fontWeight={700} letterSpacing={1}>ABOUT DOGS & PUPPIES</Text>
                  <Link href={"#"}>All About Dogs & Puppies</Link>
                  <Link href={"#"}>Dog Adoption</Link>
                  <Link href={"#"}>Feeding Your Dog</Link>               
                  <Link href={"#"}>Dog Health & Wellness</Link>
                  
               </Stack>
               <Stack align={"flex-start"}>
               <br />
         {/* <Text fontWeight={700} letterSpacing={1}>ABOUT CATS & KITTENS</Text> */}
                  <ListHeader>CATS & KITTENS</ListHeader>
                  {/* <Link href={"#"}>All About Cats & Kittens</Link>
                  <Link href={"#"}>Cat Adoption</Link> */}
                  <Link href={"#"}>All Cats & Kittens</Link>
                  <Link href={"#"}>Cat Adoption</Link>
                  <Link href={"#"}>Feeding Your Cat</Link>                  
                  <Link href={"#"}>Cat Health & Wellness</Link>                  
                  
                  {/* <Link href={"#"}>contact@balancedbite.com</Link> */}
               </Stack>

               
              
            </SimpleGrid>
         </Container>

         <Box
            borderTopWidth={1}
            borderStyle={"solid"}
            borderColor={useColorModeValue("gray.200", "gray.700")}
         >
            <Container
               as={Stack}
               maxW={"6xl"}
               py={4}
               direction={{ base: "column", md: "row" }}
               spacing={4}
               justify={{ md: "space-between" }}
               align={{ md: "center" }}
            >
               <Text>
                  ©2024 Paws&Tails S^2 MT
               </Text>
               <Stack direction={"row"} spacing={6}>
                  <SocialButton label={"Facebook"} href={"#"}>
                     <FaFacebook />
                  </SocialButton>
                  <SocialButton label={"Twitter"} href={"#"}>
                     <FaTwitter />
                  </SocialButton>
                  <SocialButton label={"YouTube"} href={"#"}>
                     <FaYoutube />
                  </SocialButton>
                  <SocialButton label={"Instagram"} href={"#"}>
                     <FaInstagram />
                  </SocialButton>
                 
               </Stack>
            </Container>
         </Box>
      </Box>
   );
};

export default Footer;
