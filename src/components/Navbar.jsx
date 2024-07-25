import { SearchIcon } from "@chakra-ui/icons"
import { Modal,Input, InputGroup,ModalBody, InputLeftElement,ModalCloseButton, ModalContent, ModalOverlay, useDisclosure, InputLeftAddon,Button} from "@chakra-ui/react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <div style={{display:"flex",width:"100%",height:"100px"}}>
      <div style={{width:"20%",backgroundColor:"#333436"}}>
        <img style={{height:"50%",margin:"auto",marginTop:"22px"}} src="https://pngimagesfree.com/wp-content/uploads/Tata-cliq-logo-PNG-Black-and-White@.png" alt="logoImage" />
      </div>
      <div style={{width:"80%"}}>
        <div style={{height:"40%",backgroundColor:"#000000",display:"flex",justifyContent:"space-between"}}>
          <div style={{marginLeft:"20px",display:"flex",justifyContent:"center",alignItems:"center",fontSize:"13px"}}>
          <Link style={{color:"white",fontWeight:"600"}} to="/luxury.tatacliq.com">Tata CLiQ Luxury</Link>
          </div>
          <div style={{marginRight:"100px",display:"flex",gap:"25px",justifyContent:"center",fontSize:"13px",alignItems:"center"}}>
          <Link style={{color:"white",fontWeight:"600"}} to="/cash.tatacliq.com">CLiQ Cash</Link>
          <Link style={{color:"white",fontWeight:"600"}} to="/gift-card.tatacliq.com">Gift Card</Link>
          <Link style={{color:"white",fontWeight:"600"}} to="/care.tatacliq.com">CLiQ Care</Link>
          <Link style={{color:"white",fontWeight:"600"}} to="/orders.tatacliq.com">Track Orders</Link>
          <Link onClick={onOpen} style={{color:"white",fontWeight:"600"}}>Sign in / Sign Up</Link>
          
          <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent style={{height:"500px"}}>
          <ModalCloseButton />
          <ModalBody style={{width:"80%",margin:"auto",textAlign:"center"}}>
            <h2 style={{marginTop:"50px"}}>Welcome to Tata CLiQ</h2>
            <p style={{color:"grey"}}>Please enter your mobile number</p>
            <InputGroup>
            <InputLeftAddon>+91</InputLeftAddon>
            <Input  type='tel' placeholder='Enter Mobile number' />
            </InputGroup>
            <p style={{marginTop:"20px",color:"red"}}>Use Email Address</p>
            <p style={{textAlign:"left",fontSize:"12px"}}>This site is protected by reCAPTCHA and the Google <span style={{color:"red"}}>Privacy Policy</span>  and <span style={{color:"red"}}>Terms of Service</span> apply.</p>
            <p style={{textAlign:"left",fontSize:"12px",marginTop:"-15px"}}>By continuing, you agree to our <span style={{color:"red"}}>Terms of Use</span> and <span style={{color:"red"}}>Privacy Policy</span></p>
            <Button style={{width:"100%",backgroundColor:"red"}}>Continue</Button>
          </ModalBody>
          </ModalContent>
          </Modal>
          </div>         
        </div>
        <div style={{height:"60%",backgroundColor:"#333436",display:"flex",gap:"40px",alignItems:"center"}}>
          <Link style={{color:"white",marginLeft:"30px",fontWeight:"600"}}>Categories </Link>
          <Link style={{color:"white",fontWeight:"600"}}>Brands </Link>
          <InputGroup cursor="pointer" style={{width:"600px",outline:"none" ,border:"none",backgroundColor:"grey",borderRadius:"5px"}}>
          <InputLeftElement>
           <SearchIcon color="#F1F0EF"/>
          </InputLeftElement>
          <Input cursor="pointer" style={{outline:"none" ,border:"none"}}  placeholder="Search for Products" _placeholder={{color: '#F1F0EF',fontSize:"15px",fontWeight:"600"}} />
          </InputGroup>
          <span className="material-symbols-outlined" style={{color:"white"}}>favorite</span>
          <span className="material-symbols-outlined" style={{color:"white"}}>shopping_bag</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar