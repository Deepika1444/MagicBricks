 





import React, { useState } from 'react';
import { Container, Row, Col, Nav, Tab, Card, Modal } from 'react-bootstrap';
import { Typography, CardContent, CardMedia, CardActionArea, CardActions, Button } from '@mui/material';
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
    title: "3 BHK Flat",
    price: "2.26cr",
    size: "1149 sqft",
    location: "Whitefield Bangalore",
    image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/15/Photo_h180_w240/71874271_5_PropertyImage377-5241042579304_180_240.jpg",
    readytomove: "Under Construction"
  },
  // Add more properties as needed
];

const newProjects = [
  // Sample data for new projects
  {
    title: "New Project 1",
    price: "2.5cr",
    size: "2000 sqft",
    location: "MG Road, Bangalore",
    image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/18/Photo_h180_w240/67579841_1_PropertyImage680-0493997235518_180_240.jpg",
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
    handleClose(); // Close the modal after sharing
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
            <Typography variant="body1" color="text.secondary">
              <CurrencyRupeeIcon />
              <strong>{`${property.price} | ${property.size}`}</strong>
              <div>{property.location}</div>
              <div>{property.readytomove}</div>
              <div style={{marginTop:'18px',fontSize:'13px'}}>{property.info}</div>

            </Typography>
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
  <div style={{ padding: '10px', backgroundColor: '#cce5ff', borderRadius: '5px', marginTop: '80px' ,marginLeft:'25%'}}>
    <Typography variant="h6" style={{ color: '#004085' }}>
      Bengaluru Home Interiors Expo is back!
    </Typography>
    <Typography variant="body2" style={{ color: '#004085' }}>
      11th & 12th May '24 <br />
      Bellandur, Whitefield & Hebbal
    </Typography>
    <Button variant="contained" style={{ backgroundColor: '#004085', color: 'white', marginTop: '10px' }}>
      Get Your Free Pass
    </Button>
  </div>
);

const Buyproducts = () => {
  const [key, setKey] = useState('properties');

  return (
    // <Container className="mt-5">
    //   <Row>
    //     <Col md={9}>
    //       <Tab.Container activeKey={key} onSelect={(k) => setKey(k)}>
    //         <Nav variant="tabs">
    //           <Nav.Item>
    //             <Nav.Link eventKey="properties" style={{ color: 'black',width:'100px' }}>Properties (21,777)</Nav.Link>
    //                 <h5 style={{fontFamily:'Montserrat ,Arial,sans-serief',fontStyle:'normal',  marginBottom:'15px',fontSize:'30px'}}>21,777 results | Ready to Move Flats in Banglore</h5>
    //                 <div style={{ position: 'relative', width: '900px', backgroundColor: 'white' ,border:'1px solid lightgrey',borderRadius:'10px'}}>
    //   <div style={{ 
    //     content: '""', 
    //     width: '100%', 
    //     height: '8px', 
    //     backgroundColor: 'lightblue', 
    //     position: 'absolute', 
    //     top: '0', 
    //     left: '0' 
    //   }}></div>
    //   <div style={{ paddingTop: '10px',fontSize:'20px' }}>
    //     <LocationOnIcon />
    //     Add Localities for more relevant results <ArrowForwardIcon style={{color:'red'}}/>
    //   </div>
    // </div>
    //           </Nav.Item>
    //           <Nav.Item>
    //             <Nav.Link eventKey="newProjects" style={{ color: 'black' }}>New Projects</Nav.Link>
    //           </Nav.Item>
    //           <Nav.Item>
    //             <Nav.Link eventKey="topAgents" style={{ color: 'black' }}>Top Agents</Nav.Link>
    //           </Nav.Item>
    //         </Nav>
    //         <Tab.Content>
    //           <Tab.Pane eventKey="properties">
    //             <Row className='property-grid'>
    //               {properties.map((property, index) => (
    //                 <Col key={index} md={12}>
    //                   <PropertyCard property={property} />
    //                 </Col>
    //               ))}
    //             </Row>
    //           </Tab.Pane>
    //           <Tab.Pane eventKey="newProjects">
    //             <Row className='property-grid'>
    //               {newProjects.map((project, index) => (
    //                 <Col key={index} md={12}>
    //                   <PropertyCard property={project} />
    //                 </Col>
    //               ))}
    //             </Row>
    //           </Tab.Pane>
    //           <Tab.Pane eventKey="topAgents">
    //             <Row className='property-grid'>
    //               {topAgents.map((agent, index) => (
    //                 <Col key={index} md={4}>
    //                   <Card>
    //                     <CardMedia component="img" height="140" image={agent.image} alt={`${agent.name} image`} />
    //                     <CardContent>
    //                       <Typography gutterBottom variant="h6">{agent.name}</Typography>
    //                       <Typography variant="body1" color="text.secondary">
    //                         <strong>{agent.agency}</strong>
    //                         <div>{agent.contact}</div>
    //                       </Typography>
    //                     </CardContent>
    //                   </Card>
    //                 </Col>
    //               ))}
    //             </Row>
    //           </Tab.Pane>
    //         </Tab.Content>
    //       </Tab.Container>
    //     </Col>
    //     <Col md={3}>
    //       <SidebarBanner />
    //     </Col>
    //   </Row>
    // </Container>
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
          <div style={{ position: 'relative', width: '900px', backgroundColor: 'white', border: '1px solid lightgrey', borderRadius: '10px' }}>
            <div style={{ content: '""', width: '100%', height: '8px', backgroundColor: 'lightblue', position: 'absolute', top: '0', left: '0' }}></div>
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
                    <Card>
                      <CardMedia component="img" height="140" image={agent.image} alt={`${agent.name} image`} />
                      <CardContent>
                        <Typography gutterBottom variant="h6">{agent.name}</Typography>
                        <Typography variant="body1" color="text.secondary">
                          <strong>{agent.agency}</strong>
                          <div>{agent.contact}</div>
                        </Typography>
                      </CardContent>
                    </Card>
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


 