  
import React, { useState } from 'react';
import {Navbar, Container, Nav, NavDropdown, Badge, Button, Card, Row } from 'react-bootstrap';

function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false);
  
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };
  
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  const cities = [
    'INDIA',
        'Nearby Cities',
        'Bangalore - East',
        'Bangalore - South',
        'Bangalore - West',
        'Bangalore - Central',
        'Bangalore - North', 
        'Popular Cities',
        'Ahmedabad',
        'Chennai',
        'Gurgaon',
        'Hyderabad',] 

  return (
      <Row>
    <Navbar expand="lg" className="bg-body-tertiary" fluid>
      <Container fluid  className='navColor'>
        <Navbar.Brand href="#home" className='text-white ' style={{marginLeft:'30px'}}>
          <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" height="" alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown
              title="Bangalore"
              style={{color:"white"}}
              id="basic-nav-dropdown" className="text-white"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              show={showDropdown}
            >
              {cities.map((city, index) => (
                <NavDropdown.Item key={index} href={`#action/${index}`}>
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
          <Badge bg="warning" text="dark" className="rounded-white-bg">FREE</Badge>
          </Navbar.Text>
           
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  );
}

export default Navigation;


 