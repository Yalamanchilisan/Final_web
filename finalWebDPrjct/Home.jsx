import { Box, Button, Heading, Stack, Text, Input } from "@chakra-ui/react";
import React from "react";

import cat from "../Images/cat.png";
import dog from "../Images/dog.png";
import home from "../Images/group.jpg"
// import group from  "../Images/group.jpg";
import { Link } from "react-router-dom";

const Home = () => {
   return (
      <Box width={"100%"}>
         <Box border={"3px solid #446879"}>
            <img
               width={"100%"}
               // src="https://www.petfinder.com/sites/default/files/styles/hero_image_925_410/public/images/content/925%20hero%20image_0.jpg?itok=wmYYZbrt"
             src={home}
               alt=""
            />
            <p></p>
            {/* <nput type="text"  position="absolute" bg/> */}
            
            <br />
            
            <Heading
               position="absolute"
               //  size={['50px','50%','50%',"90%"]}
               top={["10%", "50%", "50%", "7%"]}
               
               textAlign="center"
               p={"20px 300px"}
               color="#dba529"
               //  borderRadius="20px"
            >
               Find your pawfect best friend at Paws&Tails
                
               
            </Heading>
            <Box 
            padding={"18% 17%"} 
            position={"absolute"} top={"8%"}>
               <Stack
                  direction={{ ms: "column", md: "row" }}
                  justifyContent={"space-evenly"}
                  gap={"80px"}
               >
                  <Box boxSize={160}  p={1} >
                     
                  </Box>
                  <Box boxSize={150}  p={1} >
                  <Link to={"/catadopt"}>
                     <img src={cat} alt="2"style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }} />
                     </Link>
                  </Box>
                  <Box boxSize={160}  p={1} >
                     <Link to={"/dogadopt"}>
                     <img src={dog} alt="1" style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}/>
                     </Link>
                  </Box>
                  
               </Stack>
            </Box>
         </Box>
         <Box mt={"-30px"} bg={"#446879"}>
            .
         </Box>

         
         <Box>
            <Heading color={"#446879"} p={"8% 20%"}>
               Pets Available for Adoption 
            </Heading>
            <Stack
               direction={{ base: "column", md: "row" }}
               gap={20}
               bg={"#a0c6d7"}
               padding={30}
            >
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                        /* Optional: Position the image within the container */
                        //   position: "absolute",
                        //   top: 0;
                        //   left: 0;
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63291329/1/?bust=1683800934&width=316"
                     alt=""
                  />
                  {/* <Text fontWeight={600}>Boo</Text> */}
                  <Heading p={"20px 0px"}  fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"#446879"}>
            FIFI
            </Heading>
                  {/* <h2>Boo</h2> */}
               </Box>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/64094873/1/?bust=1683454882&width=316"
                     alt=""
                  />
               <Heading p={"20px 0px"}  fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"#446879"}>
            BOXIE
            </Heading>
               </Box>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/59534213/1/?bust=1683800901&width=316"
                     alt=""
                  />
                <Heading p={"20px 0px"}  fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"#446879"}>
           LOKI
            </Heading>
               </Box>
               <Box>
                  <img
                     style={{
                        width: "100%",
                        height: "70%",
                        objectFit: "cover",
                     }}
                     src="https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55064029/1/?bust=1683800944&width=316"
                     alt=""
                  />
               <Heading p={"20px 0px"}  fontSize={'50px'} fontFamily={'body'} fontWeight={500} color={"#446879"}>
            BRUNO
            </Heading>
               </Box>
            </Stack>
         </Box>


         <Box margin={"150px 100px"}>
            <Heading
               textAlign="center"
               fontFamily="arial helvetica "
               //  line-height: 1.2;
               //  font-size: 30px;
               //  font-weight: 400;
               color="#4d4751"
               //  margin-bottom: 40px;
            >
              How to Apply for a Pet?
            </Heading>
            <Stack
               direction={{ base: "column", md: "row" }}
               gap={"80px"}
               justifyContent={"center"}
            >
               <Box w={400}>
                  <Heading
                     color={"#004c81"}
                     fontSize={"20px"}
                     pt={10}
                     fontFamily={"Nexa-Bold"}
                     fontWeight={400}
                  >
                     Choose a Pet
                  </Heading>
                  <Text>Choose the pet you want to adopt and check the details such as age, health status so that this experience is successful and wonderful.</Text>
                  {/* <Button
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button> */}
               </Box>
               <Box w={400}>
                  <Heading
                     color={"#004c81"}
                     fontSize={"20px"}
                     pt={10}
                     fontFamily={"Nexa-Bold"}
                     fontWeight={400}
                  >
                     Put a Request
                  </Heading>
                  <Text>
                    Put a request of the desired pet and wait for the approval
                  </Text>
                  {/* <Button
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button> */}
                  {/* <Button m={10} >Learn More</Button> */}
               </Box>





               <Box w={300}>
                  <Heading
                     color={"#004c81"}
                     fontSize={"20px"}
                     pt={10}
                     fontFamily={"Nexa-Bold"}
                     fontWeight={400}
                  >
                     Take your pet Home
                  </Heading>
                  <Text>Take your pet home with you and start a new phase of your life accompanied by a loyal friend who will always be there for you.</Text>
                  {/* <Button
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button> */}
                  {/* <Button m={10}>Learn More</Button> */}
               </Box>
            </Stack>
         </Box>
         

         
            
               
         
         <Box p={10}>
            <Stack direction={{ base: "column", md: "row" }}>
               <Box
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  borderRadius={"25px"}
               >
                  <img
                     style={{ borderRadius: "25px" }}
                     src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/47.jpeg?itok=HNT_yv1F"
                     alt=""
                  />
                  <Heading p={5}>Dogs Adoption Article</Heading>
                  <Text p={5}>Learn about caring for your new dog</Text>
                  <Button
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     p={"10px 150px"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button>
                  {/* <Button m={5}>LEARN MORE</Button> */}
               </Box>
               <Box
                  boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
                  borderRadius={"25px"}
               >
                  <img
                     style={{ borderRadius: "25px" }}
                     src="https://www.petfinder.com/sites/default/files/styles/card/public/images/content/PF2015_267_Kittens_Shelter-630.jpg?itok=JGTdJJaD"
                     alt=""
                  />
                  <Heading p={5}>Cat Adoption Article</Heading>
                  <Text p={5}>Helpful insights on what to expect</Text>
                  <Button
                     m={10}
                     bg={"white"}
                     border={"2px solid #20ccf8"}
                     p={"10px 150px"}
                     color="#004c81"
                     borderRadius={"12rem"}
                  >
                     Learn More
                  </Button>
                  {/* <Button m={5}>LEARN MORE</Button> */}
               </Box>
            </Stack>
         </Box>
      </Box>
   );
};

export default Home;
