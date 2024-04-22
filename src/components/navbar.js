  
import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Badge, Button, Card } from 'react-bootstrap';


function CombinedNavigation() {
    const [showDropdown, setShowDropdown] = useState(false);

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
                                id="basic-nav-dropdown" className="text-white"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                show={showDropdown}
                            >
                                {cities.map((city, index) => (
                                    <NavDropdown.Item key={index} href={`#action/${index}`} >
                                     {city}
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                                   <Nav>
             <NavDropdown title="MB Prime" id="basic-nav-dropdown">
     <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="prime.jpeg"/>
       <Card.Body>
         <Card.Title>Introducing MB Prime</Card.Title>
         <Card.Text>
           <ul>
           <li>Contact upto 30 owners directly</li>
           <li>Access to Prime Exclusive Properties</li>
           </ul>
         </Card.Text>
         <Button variant="primary">JOIN NOW</Button>
       </Card.Body>
     </Card>
  </NavDropdown>
           </Nav>
           <Nav>
             <NavDropdown title="LOGIN" id="basic-nav-dropdown">
               <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
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

<NavDropdown  className='text-white mx-3' title="Buy" 
 
id="basic-nav-dropdown">
<NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
  Separated link
</NavDropdown.Item>
</NavDropdown>




<NavDropdown  className='text-white mx-3' title=" RENT" id="basic-nav-dropdown">
<NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
  Separated link
</NavDropdown.Item>
</NavDropdown>



<NavDropdown  className='text-white mx-3' title=" SELL" id="basic-nav-dropdown">
<NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
  Separated link
</NavDropdown.Item>
</NavDropdown>


<NavDropdown  className='text-white  mx-3' title=" HOME LOANS" id="basic-nav-dropdown">
<NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
  Separated link
</NavDropdown.Item>
</NavDropdown>


<NavDropdown  className='text-white mx-3' title="Property Services" id="basic-nav-dropdown">
<NavDropdown.Item href="#action/3.1"> INDIA</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.2"> 
</NavDropdown.Item> 
<NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="#action/3.4">
  Separated link
</NavDropdown.Item>
</NavDropdown>


<NavDropdown  className='text-white mx-3 '   title={
<span>
  MB Advice <Badge bg="warning" text="dark" style={{borderRadius:'40px'}}>New</Badge>
</span>
} id="basic-nav-dropdown" style={{display:'flex'}}>
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



<NavDropdown  className='text-white mx-3' title=" Help" id="basic-nav-dropdown">
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



 