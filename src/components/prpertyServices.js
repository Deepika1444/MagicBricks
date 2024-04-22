import Card from 'react-bootstrap/Card';
import { Container,Row,Col } from 'react-bootstrap';
import { Typography } from '@mui/material';

function PropertyServices() {
  return (
    <Container>
        <Typography variant='p' style={{marginTop:'50px',fontSize:'35px'} } className='nav_boldB'>
        Property And Services
        </Typography>
        <Row   >
            <Col style={{marginTop:'10px'}}   >

    <Card style={{ width: '18rem',marginTop:'20px',height:'250px' }} className='CardHover'>
      <Card.Img className='CardHvr' variant="top" src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/webp/graphic-home-loans.webp" />
      <Card.Body>
        <Card.Title> Best Home Loan deals</Card.Title>
        <Card.Text>
          Compare and Choose From 34+banks to get the best home loan deal
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>
    <Col style={{marginTop:'10px'}}  >

<Card style={{ width: '18rem',marginTop:'20px' ,height:'250px'}}  className='CardHover'>
  <Card.Img variant="top" src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/graphic-home-decor.jpg" />
  <Card.Body>
    <Card.Title>  Home Interiors</Card.Title>
    <Card.Text>
        Transform Your space with Our Trusted Decor Partners



    </Card.Text>
  </Card.Body>
</Card>
</Col>
<Col style={{marginTop:'10px'}}  >

<Card style={{ width: '18rem',marginTop:'20px',height:'250px' }}  className='CardHover'>
  <Card.Img variant="top" src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mbhome-web/property-services/webp/graphic-home-loans.webp" />
  <Card.Body>
    <Card.Title> Rental Aggrement</Card.Title>
    <Card.Text>
        Oniline aggrement drafting and stamping with home deliry
    </Card.Text>
  </Card.Body>
</Card>
</Col>
    
    </Row>
    </Container>
  );
}

export default PropertyServices;