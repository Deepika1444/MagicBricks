import React from "react";
import { Container,Navbar ,Badge,Form} from "react-bootstrap";

const Sellproperty=()=>{
    return(
        <>
      <div style={{ backgroundColor: 'lightgrey' }}>
  <Navbar expand="lg" className="bg-body-tertiary" fixed="top" style={{ zIndex: 1020, marginTop: '0px' }}>
    <Container fluid className='navColor' style={{ height: '50px' }}>
      <Navbar.Brand href="#home" className='text-white' style={{ marginLeft: '30px' }}>
        <img src="https://cdn.staticmb.com/magicservicestatic/images/revamp/mb-logo-web-white.svg" width="160" alt="logo" />
      </Navbar.Brand>
    </Container>
  </Navbar>
  <Container fluid>
    <div className='d-flex mt-5 mb-4'>
      <div style={{ width: '60%', backgroundColor: '#fff' }}>
        <Form style={{ margin: '4rem 0 0 10rem' }}>
          <h2>Sell or Rent your Property</h2>
          <p className="d-flex  align-items-start">You are posting this property for
            <Badge bg="warning" text="dark" style={{ fontSize: '15px', marginLeft: '2px' }}>FREE!</Badge>
            <img src="https://fiverr-res.cloudinary.com/videos/t_thumbnail3_3/yv3ychpss2uyzdslyipn/create-professional-ads-youtube-shorts-tiktok-videos-creative-ads.png" alt="postimage" height="auto" width="25%" style={{ marginLeft: '10rem', maxHeight: '140px' }} />
          </p>
          <span>Listing Package</span><span style={{fontWeight:'bold'}} className="mx-5">1 Standard Listing - Free</span>
        </Form>
      </div>
    </div>
  </Container>
</div>


        </>
    )
}
export default Sellproperty