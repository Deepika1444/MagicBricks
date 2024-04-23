  
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Badge, Button, Card,Row ,Col } from 'react-bootstrap';
import CheckIcon from '@mui/icons-material/Check';

function CombinedNavigation() {
    const [showDropdown, setShowDropdown] = useState(false);
    const [isHoveringMbPrime, setIsHoveringMbPrime] = useState(false);
    const [isHoveringLogin, setIsHoveringLogin] = useState(false);
    const [isHoveringBuy, setIsHoveringBuy] = useState(false);
    const [isHoveringRent, setIsHoveringRent] = useState(false);
    const [isHoveringSell, setIsHoveringSell] = useState(false);
    const [isHoveringHomeLoan, setIsHoveringHomeLoan] = useState(false);
    const [isHoveringPropertyServices, setIsHoveringPropertyServices] = useState(false);
    const [isHoveringMbAdvice, setIsHoveringMbAdvice] = useState(false);
    const [isHoveringHelp, setIsHoveringHelp] = useState(false);


 
    const handleMouseEnter = () => {
        setShowDropdown(true);
    };

    const handleMouseLeave = () => {
        setShowDropdown(false);
    };

    const cities = [
      
        'INDIA', 'Nearby Cities', 'Bangalore - East', 'Bangalore - South',
        'Bangalore - West', 'Bangalore - Central', 'Bangalore - North',
        'Popular Cities', 'Ahmedabad', 'Chennai', 'Gurgaon', 'Hyderabad',
    ];

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ zIndex: 1020,marginTop:'0px'}}>
                <Container fluid className='navColor' style={{height:'50px'}}>
                    <Navbar.Brand href="#home" className='text-white' style={{ marginLeft: '30px' }}>
                        <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" alt="logo" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown
                                title="Bangalore"
                                id="basic-nav-dropdown"  
                                className="custom-dropdown text-white"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                show={showDropdown}
                            >
                                {cities.map((city, index) => (
                                    <NavDropdown.Item key={index} href={`#action/${index}`} >
                                      <container > {city}</container>
                                    
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                                   <Nav>
             <NavDropdown
               title="MB Prime" id="basic-nav-dropdown"  
                className="custom-dropdown text-white"
                show={isHoveringMbPrime}
onMouseEnter={() => setIsHoveringMbPrime(true)}
onMouseLeave={() => setIsHoveringMbPrime(false)}
              >

     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="https://static.toiimg.com/thumb/msid-93522946,width-1280,height-720,imgsize-28462,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg" style={{marginTop:'0px'}}/>
       <Card.Body>
         <Card.Title>Introducing MB Prime</Card.Title>
         <Card.Text>
           <ul  style={{listStyle:'none'}}>
           <li> <CheckIcon style={{color:'green',fontWeight:'bold'}}/>Contact upto 30 owners directly</li>
           <li><CheckIcon style={{color:'green',fontWeight:'bold'}}/>Access to Prime Exclusive Properties</li>
           </ul>
         </Card.Text>
         <Button variant="danger" className='mx-5'>JOIN NOW</Button>
       </Card.Body>
     </Card>
  </NavDropdown>
           </Nav>
           <Nav>
             <NavDropdown title="LOGIN" id="basic-nav-dropdown" className='custom-dropdown text-white'
                   show={isHoveringLogin}
                   onMouseEnter={() => setIsHoveringLogin(true)}
                   onMouseLeave={() => setIsHoveringLogin(false)}  >
               <NavDropdown.Item href="#action/3.1">MY Activity</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2">
                 Another action
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
               <NavDropdown.Divider />
               <NavDropdown.Item href="#action/3.4">
                 Separated link
               </NavDropdown.Item>
             </NavDropdown>
           </Nav>
           
           <Navbar.Text href="#home" className=" mx-4 rounded-white-bg text-link-decoration"  style={{marginRight:'30px'}}>Post Property
           <Badge bg="warning" text="dark" className="rounded-white-bg mx-3">FREE</Badge>
           </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar expand="lg" className="navbaar2 bg-body-tertiary" style={{ top: '50px', zIndex: 1010,backgroundColor:'white' ,margin:'0px'}}>
                <Container>
                    <Nav className="me-auto" >
                        <Nav className="me-auto"> 

<NavDropdown  className='text-white mx-3 custom-arrow' title="Buy" 
 
id="basic-nav-dropdown"
show={isHoveringBuy}
onMouseEnter={() => setIsHoveringBuy(true)}
onMouseLeave={() => setIsHoveringBuy(false)}
 >
 
 <div style={{ width: '600%', padding: '20px', backgroundColor: 'white', color: 'black', position: 'absolute', boxShadow:'2px 3px 5px grey',borderRadius:'0 10 20 30'}}>
  <Row >
    <Col md={3}>
<NavDropdown.Item href="#action/3.1"> Popular Choices</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="https://www.magicbricks.com/ready-to-move-flats-in-bangalore-pppfs">Ready To Move</NavDropdown.Item>

<NavDropdown.Item href="#action/3.2"> Owner Properties
</NavDropdown.Item> 
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Budget Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Premium Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
   New Projects <Badge bg="warning" text="dark" style={{borderRadius:'40px'}}>New</Badge>
</Nav.Link>
</Col>
    <Col md={3}>
<NavDropdown.Item href="#action/3.1">  Property Types</NavDropdown.Item> 
<NavDropdown.Divider />

<Nav.Link href="#action/3.2"  style={{color:'black'}}> Ready To Move
</Nav.Link> 
<Nav.Link href="#action/3.4"   style={{color:'black'}}>
  House For Sale in Ban..
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Budget Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Premium Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
   Flats in bangalore
</Nav.Link>
</Col>
<Col md={2}>
<NavDropdown.Item href="#action/3.1">  Budgets</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<Nav.Item href=" #action/3.3">Ready To Move</Nav.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
</Col>
<Col md={2}>
<NavDropdown.Item href="#action/3.1">  Explore</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<Nav.Item href=" #action/3.3">Ready To Move</Nav.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
</Col>
<Col md={2}>
<NavDropdown.Item href="#action/3.1"> Buying Tools</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<Nav.Item href=" #action/3.3">Ready To Move</Nav.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
<NavDropdown.Item href="#action/3.4">
   Flats in bangalore
</NavDropdown.Item>
</Col>
 
</Row>
</div>

</NavDropdown>





<NavDropdown  className='text-white mx-3 custom-arrow' title=" RENT" id="basic-nav-dropdown"
       show={isHoveringRent}
       onMouseEnter={() => setIsHoveringRent(true)}
       onMouseLeave={() => setIsHoveringRent(false)}>
<NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
  Separated link
</NavDropdown.Item>
</NavDropdown>



<NavDropdown  className='text-white mx-3 custom-arrow' title=" SELL" id="basic-nav-dropdown"
  show={isHoveringSell}
  onMouseEnter={() => setIsHoveringSell(true)}
  onMouseLeave={() => setIsHoveringSell(false)}>
<NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<Nav.Link href="#action/3.3">Something</Nav.Link>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
  Separated link
</NavDropdown.Item>
</NavDropdown>


<NavDropdown  className='text-white  mx-3 custom-arrow' title=" HOME LOANS" id="basic-nav-dropdown"
 show={isHoveringHomeLoan}
 onMouseEnter={() => setIsHoveringHomeLoan(true)}
 onMouseLeave={() => setIsHoveringHomeLoan(false)}>
<NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
  Separated link
</NavDropdown.Item>
</NavDropdown>


<NavDropdown  className='text-white mx-3 custom-arrow' title="Property Services" id="basic-nav-dropdown"
 show={isHoveringPropertyServices}
 onMouseEnter={() => setIsHoveringPropertyServices(true)}
 onMouseLeave={() => setIsHoveringPropertyServices(false)}>
<NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
  Separated link
</NavDropdown.Item>
</NavDropdown>


<NavDropdown  className='text-white mx-3 custom-arrow '   title={
<span>
  MB Advice <Badge bg="warning" text="dark" style={{borderRadius:'40px'}}>New</Badge>
</span>
} id="basic-nav-dropdown" style={{display:'flex'}}
show={isHoveringMbAdvice}
onMouseEnter={() => setIsHoveringMbAdvice(true)}
onMouseLeave={() => setIsHoveringMbAdvice(false)}>
{/* <Badge bg="warning" text="dark">New</Badge> */}

<NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
  Separated link
</NavDropdown.Item>
</NavDropdown>



<NavDropdown  className='text-white mx-3 custom-arrow' title=" Help" id="basic-nav-dropdown"
show={isHoveringHelp}
onMouseEnter={() => setIsHoveringHelp(true)}
onMouseLeave={() => setIsHoveringHelp(false)}>
<NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
  Separated link
</NavDropdown.Item>
</NavDropdown>





</Nav> 
                    </Nav>
                </Container>
            </Navbar>
            <hr style={{ marginTop: '100px' }} />
        </>
    );
}

export default CombinedNavigation;

 


 