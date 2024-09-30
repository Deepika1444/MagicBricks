 





import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Card, Modal } from 'react-bootstrap';
import { Typography, CardContent, CardMedia, CardActionArea, Box, Button } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { Link } from 'react-router-dom';
import CheckIcon from '@mui/icons-material/Check';
import IosShareIcon from '@mui/icons-material/IosShare';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import axios from 'axios';



const properties = [
  // Sample data for properties
  {
    title: "2 BHK Ready to Occupy Flat for sale in ACS Plati...",
    price: "1.25cr",
    size: "1413 sqft",
    location: "Whitefield Bangalore",
    image: "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2024/04/29/Project-Photo-2-Aishwaryam-Majestica-Chennai-5072700_1240_1754_310_462.jpg",
    readytomove: "Ready to move",
    info:"2 BHK, Multistorey Apartment is available for Sale in Kattupakkam, Chennai for 1.1 Crore(s)"
  },
  {
    title: "3 BHK Ready to Occupy Flat for sale in Gopalan... ",
    price: "2.26cr",
    size: "1149 sqft",
    location: "Hoodi Bangalore",
    image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/15/Photo_h180_w240/71874271_5_PropertyImage377-5241042579304_180_240.jpg",
    readytomove: "Under Construction",
    info:'This ready to move-in 3 BHK flat is available for sale at the premium Hoodi locality in Bangalore. Situated in Gopalan Olympia, it has a prime location'
    
  },
  {
    title: "3 BHK Flat",
    price: "2.26cr",
    size: "1149 sqft",
    location: "kengeri Bangalore",
    image: "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2024/02/01/Project-Photo-10-Phoenix-Kessaku-Bangalore-5104677_1067_1600_310_462.jpg",
    readytomove: "Ready To Move"
  }
];

const newProjects = [
  // Sample data for new projects
  {
    title: "New Project 1",
    price: "2.5cr",
    size: "2000 sqft",
    location: "MG Road, Bangalore",
    image: "https://img.staticmb.com/mbimages/project/Photo_h310_w462/2024/05/13/Project-Photo-84-Abhigna-Misty-Woods-Bangalore-5311065_491_800_310_462.jpg",
    readytomove: "Under Construction"
  },
  // Add more projects as needed
];

const topAgents = [
  // Sample data for top agents
  {
    name: "Agent 1",
    contact: "9876543210",
    agency: "ABC Realty",
    image: "https://via.placeholder.com/180"
  },
  // Add more agents as needed
];

const PropertyCard = ({ property }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleWhatsAppShare = () => {
    // Add logic here to share content on WhatsApp
    // handleClose();
 
      const phoneNumber = '917204779375'; // Replace with the recipient's phone number
      const message = encodeURIComponent('Check out this amazing property listing!'); // Replace with your message
      const url = `https://wa.me/${phoneNumber}?text=${message}`;
      console.log('Opening URL:', url);
      window.open(url, '_blank');
    
     // Close the modal after sharing
  };

  const handleInstagramShare = () => {
    // Add logic here to share content on Instagram
    handleClose(); // Close the modal after sharing
  };

  const handleFacebookShare = () => {
    // Add logic here to share content on Facebook
    handleClose(); // Close the modal after sharing
  };
 


  return (
    <>
    
      <Card style={{ width: '900px', marginBottom: '20px', display: 'flex' }}>
        <CardActionArea style={{ display: 'flex', flexDirection: 'row' }}>
          <CardMedia
            component="img"
            height="250"
            image={property.image}
            alt={`${property.title} image`}
            style={{ width: '30%' }}
          />
          <CardContent style={{ width: '60%' }}>
            <Typography variant='p' style={{ border: '1px solid green', borderRadius: '3px', color: 'green', marginRight: '15px', fontSize: '13px', padding: '3px' }}>
              <CheckIcon />ZERO BROKERAGE
            </Typography>
            <Typography variant='p' style={{ border: '1px solid green', borderRadius: '3px', color: 'green', fontSize: '13px' }}>
              <CheckIcon />POPULAR PROJECT
            </Typography>
            <Button variant="none" color="info" style={{ marginLeft: '' }}   >
              <FavoriteBorderIcon />
            </Button>
            <Button variant="none" color="info" style={{ width: '20px' }} onClick={handleShow}>
              <IosShareIcon />
            </Button>
            <Typography gutterBottom variant="h6">{property.title}</Typography>

              <Card style={{border:'1px solid lightgrey',boxShadow:'0px 2px  10px 0px',padding:'10px',marginBottom:'20px'}}>
            <Typography variant="body1" color="text.secondary">
              <CurrencyRupeeIcon />
              <strong>{`${property.price} | ${property.size}`}</strong>
              <div>{property.location}</div>
              <div>{property.readytomove}</div>

            </Typography>
            </Card>
            <div style={{ fontSize:'16px'}}>{property.info}</div>

          </CardContent>
        </CardActionArea>
        {/* <CardActions style={{ justifyContent: 'space-between' }}>
          <Link to="/details">
            <Button style={{ backgroundColor: 'red', color: 'white', border: '2px solid red', borderRadius: '30px' }} size="small">
              Read Details
            </Button>
          </Link>
        </CardActions> */}
      </Card>
      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share on Social Media</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <WhatsAppIcon style={{ marginRight: '10px', cursor: 'pointer' }} onClick={handleWhatsAppShare} />
          <InstagramIcon style={{ marginRight: '10px', cursor: 'pointer' }} onClick={handleInstagramShare} />
          <FacebookIcon style={{ cursor: 'pointer' }} onClick={handleFacebookShare} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
 
const SidebarBanner = () => (
  <Box 
    sx={{
      padding: '20px',
      backgroundColor: '#ffff', 
      borderRadius: '5px',
      marginTop: '80px',
      marginLeft: '25%',
      maxWidth: '250px',
      border:'2px solid lightgrey',
      width:'250px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
    }}
  >
    <Box sx={{backgroundColor:'#c2f3f8',height:'200px',padding:'10px'}}>
    <Typography variant="h6" sx={{ color: '#d82b23' }}>
      Bengaluru
    </Typography>
    <Typography variant="h6" sx={{ color: '#004085' }}>
      Home Interiors Expo is back!
    </Typography>
    <Typography variant="body2" sx={{ color: '#004085' }}>
      11th & 12th May '24 <br />
      Bellandur, Whitefield & Hebbal
    </Typography>
    </Box>
    <Box
      sx={{
        padding: '10px',
        backgroundColor: '#ffff', 
        borderRadius: '5px',
        marginTop: '10px',
        textAlign: 'center'
      }}
    >
      <Typography variant="h6" sx={{ color: '#004085' ,backgroundColor:'#c2f3f8'}}>
        Save upto 40%
      </Typography>
      <Typography variant="body2" sx={{ color: '#004085', marginBottom: '10px' }}>
        Meet India's top 10 interior brands under one roof
      </Typography>
      <Button variant="contained" sx={{ backgroundColor: '#ffc107', color: 'black' }}>
        Get your Free Pass
      </Button>
    </Box>
    <Box sx={{ marginTop: '10px', backgroundColor:'white'}}>
      <Typography variant="h6" sx={{ color: '#004085' }}>
        Why magicinteriors
      </Typography>
      <Typography variant="body2" sx={{ color: '#004085' }}>
        <ul style={{ padding: '0 16px' }}>
          <li>Exclusive Discounts</li>
          <li>Lucky Draw</li>
          <li>Attractive on-the-spot offers</li>
        </ul>
      </Typography>
    </Box>
  </Box>
);
const Buyproducts = () => {
  const [key, setKey] = useState('properties');
  const cardStyle = {
    border: '2px solid lightblue',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    width:'900px',
    backgroundColor: '#fff'
  };
  
  const headerStyle = {
    display: 'flex',
    alignItems: 'center',
   
  };
  
  const imageStyle = {
    width: '100px',
    height: '100px',
    marginRight: '20px'
  };
  
  const headerText = {
    flex: '1'
  };
  
  const statsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    backgroundColor:'lightblue',
    marginTop:'0px'
    // width:'800px'
  };
  
  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    backgroundColor: 'red',
    color: '#fff',
    cursor: 'pointer',
    marginRight: '10px',
  };

  return (
   
    <Container className="mt-5">
    <Row>
      <Col md={9}>
        <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
          <Nav variant="tabs" style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '20px' }}>
            <Nav.Item>
              <Nav.Link eventKey="properties" style={{ color: 'black' }}>Properties (21,777)</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="newProjects" style={{ color: 'black' }}>New Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="topAgents" style={{ color: 'black' }}>Top Agents</Nav.Link>
            </Nav.Item>
          </Nav>
          <h5 style={{ fontFamily: 'Montserrat, Arial, sans-serif', fontStyle: 'normal', marginBottom: '15px', fontSize: '30px' }}>
            21,777 results | Ready to Move Flats in Bangalore
          </h5>
          <div style={{ position: 'relative', width: '900px', backgroundColor: 'white', border: '1px solid lightgrey', borderRadius: '10px',marginBottom:'15px' }}>
            <div style={{boxShadow:'0px 10px 14px 8px lightblue', margin:'0 10px 1px 10px', borderRadius: '10px' }}></div>
            <div style={{ paddingTop: '10px', fontSize: '20px' }}>
              <LocationOnIcon />
              Add Localities for more relevant results <ArrowForwardIcon style={{ color: 'red' }} />
            </div>
          </div>
          <Tab.Content>
            <Tab.Pane eventKey="properties">
              <Row className='property-grid'>
                {properties.map((property, index) => (
                  <Col key={index} md={12}>
                    <PropertyCard property={property} />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="newProjects">
              <Row className='property-grid'>
                {newProjects.map((project, index) => (
                  <Col key={index} md={12}>
                    <PropertyCard property={project} />
                  </Col>
                ))}
              </Row>
            </Tab.Pane>
            <Tab.Pane eventKey="topAgents">
              <Row className='property-grid'>
                {topAgents.map((agent, index) => (
                 <Col key={index} md={4}>
                 <div style={cardStyle}>
                   <div style={headerStyle}>
                   <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img
            src="https://img.staticmb.com/mbimages/topagent/Profile-1-27283004_200_200.jpg"
            alt="Agent"
            style={imageStyle}
          />
          <img
            src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg"
            alt="Agent Logo"
            style={imageStyle}
          />
        </div>
                     <div style={headerText}>
                       <h2>Karthikeyan</h2>
                       <p><b>MY Dwelling</b> Agrahara Badavane, Bangalore</p>
                       <p>RERA ID: PRM/KA/RERA/1251/309/PR/170916/000324</p>
                       <p>Operating since: 2001</p>
                     </div>
                   </div>
             
                   <div style={statsStyle}>
                     <div>
                       <h4>34</h4>
                       <p>Properties for Sale</p>
                     </div>
                     <div>
                       <h4>16</h4>
                       <p>Properties for Rent</p>
                     </div>
                     <div>
                       <h4>6</h4>
                       <p>Deals Closed</p>
                     </div>
                     <div>
                       <h4>3000</h4>
                       <p>Team Members</p>
                     </div>
                   </div>
             
                   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                     <div style={{ backgroundColor: 'lightblue', padding: '10px', width: '100%',height:'146px' }}>
                       <h3>About Agent</h3>
                       <p>
                         Karthikeyan is a passionate real estate consultant obsessed with
                         clients’ requirements and matching them...
                       </p>
                     </div>
                     <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' ,backgroundColor:'lightblue'}}>
                       <button style={buttonStyle}>Contact Agent</button>
                       <button style={{ ...buttonStyle, backgroundColor: '#007bff', marginTop: '10px' }}>
                         View Details
                       </button>
                     </div>
                   </div>
                 </div>
               </Col>
                ))}
              </Row>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Col>
      <Col md={3}>
        <SidebarBanner />
      </Col>
    </Row>
  </Container>
   
  );
};

export default Buyproducts;


 