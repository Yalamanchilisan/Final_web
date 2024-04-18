import React from 'react'
import { Fade, ScaleFade, Slide, SlideFade, Collapse, useDisclosure, Button, Box } from '@chakra-ui/react'
import ProductSimple from './ProductSimple'
import { ChevronRightIcon } from '@chakra-ui/icons'
import "./About.css"

export const AboutPetfinder = () => {
    const [show, setShow] = React.useState(false)

    const handleToggle = () => setShow(!show)

  return (
   <div style={{background:"#EDE7F6", paddingTop:"50px"}} className="about-container">
    <div style={{marginRight:"20px",display:"flex", margin:"auto", marginLeft:"10%", marginTop:"80px"}}>
    <a style={{marginRight:"20px"}} href="http://localhost:3000/">Home <ChevronRightIcon/></a>
           
           <a style={{marginRight:"20px"}} href="">Adopt or Get Involved <ChevronRightIcon/></a>
           
           <a style={{marginRight:"20px"}} href="">About Paws&Tails</a>
    </div>
    <h1 style={{ textAlign:"left", marginLeft:"10%", fontSize:"40px", color:"#446879" }}>About Paws&Tails</h1>
     <div style={{display:"flex", margin:"auto", width:"95%", margin:"auto"}} >
       
       <div style={{width:"60%", border:"1px solid white",textAlign:"left", marginLeft:"7%", backgroundColor:"white", marginTop:"20px", borderRadius:"10px", padding:"10px"}}>
        <h1 style={{fontFamily:"Cairo, sans-serif", textAlign:"left", marginLeft:"7%", marginBottom:"20px", color:"#446879" }}>About Paws&tails</h1>
        <h1 style={{ fontFamily:"Cairo, sans-serif", textAlign:"left", marginLeft:"7%", marginBottom:"20px", color:"#446879", fontSize:"28px"}}>Paws&Tails Misson</h1>
        <Collapse startingHeight={20} in={show}>
  <Box textAlign="left" ml="7%" fontFamily={"Cairo, sans-serif"} >
    <p>
    Paws&Tails is an online platform dedicated to helping animals find loving homes. 
    It serves as a directory of nearly 11,000 animal shelters and adoption organizations across the U.S., Canada, and Mexico.
     These organizations maintain their own home pages and databases of available pets.
    Paws and Tails allows users to search for animals in need of homes and provides comprehensive information about each shelter and adoption organization. Through Paws and Tails, users can connect with shelters, browse available pets, and learn more about the adoption process.
    </p>
    <br />
    <h2>OUR MISSION</h2>
    <br />
    <p>To use Internet technology and the resources it can generate to:</p>

    <ol marginTop="10px">
      <li>Enhance public awareness about the accessibility of top-notch adoptable animal companions.</li>
      <li>Enhance the overall efficiency of animal adoption initiatives throughout North America to the point where the euthanasia of adoptable animals is eradicated.</li>
      <li>Elevate the status of pets to that of family member</li>
    </ol>
    <br />
    <br />
    <p>
    From the convenience of their own computers, animal enthusiasts can browse for a companion that perfectly suits their requirements. They can then explore a shelter's website to learn about its range of services. Paws and Tails also features community forums, a comprehensive directory of pet care resources, and an extensive library of informative articles aimed at assisting pet owners in providing the best care for their furry friends, ensuring they remain happy and healthy in their homes.
<br />
<br />
Paws&Tails is updated DAILY.
<br />
<br />
Organizations wishing to participate should register. A contact person should be responsible for direct communications with Paws&Tails. Only nonprofit organizations will be included (but Federal 501(c)(3) status is not necessary).
<br />
<br />
Paws&Tails is made up of animal-care professionals and regular people volunteering for their local animal welfare organizations all working together to maintain active and accurate homeless pet lists. Most animal welfare volunteers have “real jobs” by day. The success and the magnitude of this project is largely due to their tireless efforts to make a difference. 
<br />
<br />

<br />
If you have a Website and would like to help us promote shelter pets as the #1 choice for a new pet, you may use our free widgets and graphics to add Petfinder to your website. You may also want to check out our Featured Pet Module which allows you to show Petfinder pets from your community on your own home page.
<br />
<br />
<h2>DISCLAIMER</h2>
<br />
Paws&Tails is only a directory of homeless pets and pet adoption organizations. No information in Paws&Tails is guaranteed. Although the information on Paws&Tails is updated frequently, it is always best to call the facility or organization that lists the pet to insure it is still available and to insure the information listed in Paws&Tails is accurate. It is crucial that any pet found through an adoption service be thoroughly examined by a veterinarian immediately upon adoption. Any pets found, adopted through, or listed in Petfinder are the sole responsibility of the adoption organizations and/or the adopting party.
<br />
<br />
Paws&Tails accepts no responsibility for any liability or for any injury or damages to any person or property caused by any listed animal, as well as any cause of action, claims, suits or demands whatsoever that may arise as a result of such injury or damage.
    </p>
  </Box>
</Collapse>

<Button size="lg" onClick={handleToggle} mt="1rem" border={"2px solid #dba529"} color={"#446879"} colorScheme='blue' variant='outline' marginLeft="20px">
  Learn {show ? "Less" : "More"}
</Button>
       </div>
       <div style={{width:"30%", marginLeft:"20px", padding:"10px", background:"white", borderRadius:"15px"}}>
         <img src="https://www.petfinder.com/static/dog_bestMatch_rightRail-0e10aa465452304e3450c52f24c2bc3d.png" alt="" />
         <h1 style={{color:"#6504b5", fontSize:"40px"}}>Find your best <br /> match</h1>
         <p style={{fontSize:"20px"}}>It only takes 60 seconds.</p>
       <Button size="lg" borderRadius="20" mt="1rem" bg={'#6504b5'} colorScheme='purpule' w="300px" >GET STARTED</Button>
       </div>
    </div>
<div>
<div style={{display:"flex", width:"95%", margin:"auto"}}>
<div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", width:"60%", textAlign:"left", marginLeft:"7%"}}>
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://www.petfinder.com/static/3dd7d912ce48e5d7e4d38e38d0465bdd/3d0f7/DownloadApp_TopImage.webp"} dis={"ABOUTPAWS&TAILS"} data={"Download the Paws&Tails App today!"}/>
    </div>
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://www.petfinder.com/static/fc8892765d68b0a629d732cb0a9c561d/154e9/WPPf-hero-632x379.webp"} dis={"ABOUTPAWS&TAILS"} data={" Driven by Pets & There people"} />
    </div>
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5sLn5Nrc9ZMIPUYo20fsLbwZtVUzkGC7v8Ml5Phb07FVbir5mOHffKGgrF07f0jW-iWY&usqp=CAU"} dis={"ABOUTPAWS&TAILS"} data={"Paws&Tails Mission"} />
    </div>
    <div  style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://www.petfinder.com/static/1f7f8a66e2689008fdb0aff834abd255/af4b6/cat-new-search-launch-woah-632x632.webp"} dis={"ABOUTPAWS&TAILS"}  data={"Paws&Tail's Pet Search has a new Look!"} />
    </div>
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQ3cn77-UW7ivj4YtY9G_Pcik7Ef7FcVb1sAkxCzQ2uf07QCkBLPPoANrVaPIIJTy2Hs&usqp=CAU"} dis={"ABOUTPAWS&TAILS"} data={"Paws&Tail's Pet List Scroller for facebook page"} />
    </div>

    </div >
    <div style={{width:"30%", marginTop:"30px", justifyContent:"center"}}>
    <div style={{width:"100%", marginLeft:"20px", padding:"30px", background:"white", borderRadius:"15px"}}>
           <img src="https://tpc.googlesyndication.com/simgad/7664748080391793672" alt="" />
           <p>Sponsored ad</p>
        </div>
        <br />

    <div className="search-box" style={{width:"100%", marginLeft:"20px", padding:"10px", background:"white", borderRadius:"15px"}}>
            <h1>Find Pet-Adoption Groups</h1>
            <input type="text" style={{width:"80%", height:"30px", border:"1px solid gray"}} placeholder='Location' /><br />
            <br />
            <input type="text" placeholder='Group Name' style={{width:"80%", height:"30px", border:"1px solid gray" }} />
            <Button size="lg" borderRadius="20" mt="1rem" bg={'#6504b5'} colorScheme='purpule' w="300px" >SEARCH</Button>
        </div>
        <br />
         <div style={{width:"100%", marginLeft:"20px", padding:"30px", background:"white", borderRadius:"15px"}}>
           <img src="https://tpc.googlesyndication.com/simgad/1171372932639143872" alt="" />
        </div>
    </div>
    </div>
</div>
    <div  className="nearby-pets" >
        <h1 style={{ textAlign:"left", marginLeft:"25%", fontSize:"40px", color:"#6504b5" }}>Pets avilable for Adoption Nearby</h1>
        <div>
        <div className="nearby-pets-list" >
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/55063999/1/?bust=1683800930&width=316"} data={"Scooby"} />
    </div>
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://dl5zpyw5k3jeb.cloudfront.net/photos/pets/63947579/1/?bust=1683303760&width=316"} data={"Crunch"} />
    </div>
    <div style={{ marginRight:"10px"}}>
        <ProductSimple image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRqEvIECBe3VJh-Fpd0a0ULuoVif3F1R5Gs5-TY046lUWZtI62UHSlO67wBiK2nTiUkKY&usqp=CAU"} dis={"ABOUTPETFINDER"} />
    </div>
    </div>
        </div>
    </div>
   </div>
  )
}
