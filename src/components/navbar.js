  
import React, { useState,useEffect } from 'react';
import { Navbar, Container, Nav, NavDropdown, Badge, Button, Card,Row ,Col } from 'react-bootstrap';
import CheckIcon from '@mui/icons-material/Check';
import { Link  } from 'react-router-dom';
function CombinedNavigation() {
 
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState('');
    const [hoverStates, setHoverStates] = useState({
      mbPrime: false,
      login: false,
      buy: false,
      Bangalore:false,
      Buy:false,
      RENT:false,
      SELL:false,
      HOMELOANS:false,
      PropertyServices:false,
      MBAdvice:false,
      Help:false


      // Add other states
  });
  
const handleMouseEnter = (dropdown) => {
  setHoverStates(prev => ({ ...prev, [dropdown]: true }));
};

const handleMouseLeave = (dropdown) => {
  setHoverStates(prev => ({ ...prev, [dropdown]: false }));
};
const handleSignout=()=>{
   localStorage.removeItem("userName");
   localStorage.removeItem("cartItems");

    
   
}

useEffect(() => {
   const storedUserName = localStorage.getItem("userName");
   if (storedUserName) {
     setIsLoggedIn(true);
     setUserName(storedUserName);
   } else {
     setIsLoggedIn(false);
   }
 }, []);
 const getInitials = (name) => {
   return name ? name.charAt(0).toUpperCase() : '';
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
                                show={hoverStates.Bangalore}
                                    onMouseEnter={() => handleMouseEnter('Bangalore')}
                                    onMouseLeave={() => handleMouseLeave('Bangalore')}
                            >
                                {cities.map((city, index) => (
                                    <NavDropdown.Item key={index} href={`#action/${index}`} >
                                      <div> {city}</div>
                                    
                                    </NavDropdown.Item>
                                ))}
                            </NavDropdown>
                        </Nav>
                                   <Nav>
             <NavDropdown
               title="MB Prime" id="basic-nav-dropdown"  
                className="custom-dropdown text-white "
 
                    show={hoverStates.mbPrime}
                    onMouseEnter={() => handleMouseEnter('mbPrime')}
                    onMouseLeave={() => handleMouseLeave('mbPrime')}
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
           {isLoggedIn &&(
             <NavDropdown  title={
               <div style={{ display: 'inline-flex', alignItems: 'center' }}>
                 <span style={{
                   backgroundColor: 'lightblue', // Tomato color for the initial badge
                   color: 'black',
                  //  fontWeight: 'bold',
                   width: 30,
                   height: 30,
                   borderRadius: '50%',
                   display: 'flex',
                   justifyContent: 'center',
                   alignItems: 'center',
                   marginRight: 5
                 }}>
                   {getInitials(userName)}
                 </span>
                 {`Hi,${userName}`}
               </div>
             }  id="basic-nav-dropdown" className='custom-dropdown text-white'
                 show={hoverStates.login}
                 onMouseEnter={() => handleMouseEnter('login')}
                 onMouseLeave={() => handleMouseLeave('login')}
                    >
               <NavDropdown.Item href="#action/3.1">MY Activity</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2" className='LoginFont'>
                 Requested Properties <Badge bg="warning" text="dark" style={{borderRadius:'40px'}}>New</Badge>
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3" className='LoginFont'>Contacted Properties</NavDropdown.Item>
               <Container>
               < hr  />
               </Container>
               <NavDropdown.Item href="#action/3.4" className='LoginFont'>
                 Viewed Properties
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.4" className='LoginFont'>
                 SJortListed Properties
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.4"className='LoginFont'>
                 Searches
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.4"className='LoginFont'>
                 Recomendation
               </NavDropdown.Item>
               {/* <Link to='/profileDetail'> */}
               <NavDropdown.Divider  />

               <NavDropdown.Item href="/profileDetail"className='LoginFont'>
                 My profile
               </NavDropdown.Item>
               {/* </Link> */}
               <NavDropdown.Divider  />
               {/* <Link to='/Login'> 
               <Button  variant='danger' style={{borderColor:'red',borderRadius:'30px' ,width:'80%'}} className='mx-2'>
           Login  
                </Button></Link> */}
                  
              
                <NavDropdown.Item  style={{fontSize:'14px',color:'gray',display:'flex'}}>
                 

               <Link to='/Login'>< Button   style={{color:'red',fontWeight:'bold',marginBottom:'10px',backgroundColor:'white',borderColor:'white'}} onClick={handleSignout}>Signout</ Button>
               </Link>
               </NavDropdown.Item>

             </NavDropdown>)}
            {!isLoggedIn && (  <NavDropdown title= "Login" id="basic-nav-dropdown" className='custom-dropdown text-white'
                 show={hoverStates.login}
                 onMouseEnter={() => handleMouseEnter('login')}
                 onMouseLeave={() => handleMouseLeave('login')}
                    >
               <NavDropdown.Item href="#action/3.1">MY Activity</NavDropdown.Item>
               <NavDropdown.Item href="#action/3.2" className='LoginFont'>
                 Requested Properties <Badge bg="warning" text="dark" style={{borderRadius:'40px'}}>New</Badge>
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.3" className='LoginFont'>Contacted Properties</NavDropdown.Item>
               <Container>
               < hr  />
               </Container>
               <NavDropdown.Item href="#action/3.4" className='LoginFont'>
                 Viewed Properties
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.4" className='LoginFont'>
                 SJortListed Properties
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.4"className='LoginFont'>
                 Searches
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.4"className='LoginFont'>
                 Recomendation
               </NavDropdown.Item>
               <NavDropdown.Item href="#action/3.4"className='LoginFont'>
                 My profile
               </NavDropdown.Item>
               <NavDropdown.Divider  />
               <Link to='/Login'> 
               <Button  variant='danger' style={{borderColor:'red',borderRadius:'30px' ,width:'80%'}} className='mx-2'>
           Login  
                </Button></Link>
                  
              
                <NavDropdown.Item  style={{fontSize:'14px',color:'gray',display:'flex'}}>
                 New to Magicbricks?

               <Link to='/Signup'>< Button   style={{color:'red',fontWeight:'bold',marginBottom:'10px',backgroundColor:'white',borderColor:'white'}}>Signup</ Button>
               </Link>
               </NavDropdown.Item>

             </NavDropdown>)}
           </Nav>
           <Link to="/fetchingdata">
           <Navbar.Text href="" className=" mx-4 py-2 rounded-white-bg text-link-decoration"  style={{marginRight:'30px',paddingLeft:'30px'}}>Post Property
           <Badge bg="warning" text="dark" className="rounded-white-bg mx-3">FREE</Badge>
           </Navbar.Text>
           </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Navbar expand="lg" className="navbaar2 bg-body-tertiary" style={{ top: '50px', zIndex: 1010,backgroundColor:'white' ,margin:'0px'}}>
                <Container>
                    <Nav className="me-auto" >
                        

<NavDropdown  className='text-white mx-3 custom-arrow' title="Buy" 
 
id="basic-nav-dropdown"
show={hoverStates.Buy}
onMouseEnter={() => handleMouseEnter('Buy')}
onMouseLeave={() => handleMouseLeave('Buy')}
 >
 
 <div style={{ width: '600%', padding: '20px', backgroundColor: 'white', color: 'black', position: 'absolute', boxShadow:'2px 3px 5px grey',borderRadius:'0 10 20 30'}}>
  <Row >
    <Col md={3}>
<NavDropdown.Item href="#action/3.1"> Popular Choices</NavDropdown.Item> 
<NavDropdown.Divider />

<NavDropdown.Item href="buyprdcts">Ready To Move</NavDropdown.Item>

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
          show={hoverStates.RENT}
          onMouseEnter={() => handleMouseEnter('RENT')}
          onMouseLeave={() => handleMouseLeave('RENT')}
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
{/* <Col md={2}>
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
</Col> */}
 
</Row>
</div>
</NavDropdown>



<NavDropdown  className='text-white mx-3 custom-arrow' title=" SELL" id="basic-nav-dropdown"
  show={hoverStates.SELL}
  onMouseEnter={() => handleMouseEnter('SELL')}
  onMouseLeave={() => handleMouseLeave('SELL')}
  >
<div style={{ width: '600%', padding: '20px', backgroundColor: 'white', color: 'black', position: 'absolute', boxShadow:'2px 3px 5px grey',borderRadius:'0 10 20 30'}}>
  <Row >
    <Col md={3}>
<NavDropdown.Item href="#action/3.1">For Owner</NavDropdown.Item> 
<NavDropdown.Divider />

<Link to="/PostProperty">
<Nav.Link href="/fetchingdata" style={{color:'black'}}>
    Post Property <Badge bg="warning" text="dark" style={{borderRadius:'40px'}}>New</Badge>
</Nav.Link></Link>
<NavDropdown.Item href="https://www.magicbricks.com/ready-to-move-flats-in-bangalore-pppfs">Ready To Move</NavDropdown.Item>

<NavDropdown.Item href="#action/3.2"> Owner Properties
</NavDropdown.Item> 
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Budget Homes
</Nav.Link>
<Nav.Link href="#action/3.4" style={{color:'black'}}>
    Premium Homes
</Nav.Link>
</Col>
    <Col md={3}>
<NavDropdown.Item href="#action/3.1">  For Agent & Builder</NavDropdown.Item> 
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
<NavDropdown.Item href="#action/3.1"> Selling Tools</NavDropdown.Item> 
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


<NavDropdown  className='text-white  mx-3 custom-arrow' title=" HOME LOANS" id="basic-nav-dropdown"
  show={hoverStates.HOMELOANS}
  onMouseEnter={() => handleMouseEnter('HOMELOANS')}
  onMouseLeave={() => handleMouseLeave('HOMELOANS')}
 >
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
  show={hoverStates.PropertyServices}
  onMouseEnter={() => handleMouseEnter('PropertyServices')}
  onMouseLeave={() => handleMouseLeave('PropertyServices')}
 >
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
show={hoverStates.MBAdvice}
onMouseEnter={() => handleMouseEnter('MBAdvice')}
onMouseLeave={() => handleMouseLeave('MBAdvice')}
>

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
show={hoverStates.Help}
onMouseEnter={() => handleMouseEnter('Help')}
onMouseLeave={() => handleMouseLeave('Help')}
>
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
                </Container>
            </Navbar>
            <hr style={{ marginTop: '50px' }} />
        </>
    );
}

export default CombinedNavigation;

 


 