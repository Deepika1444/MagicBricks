import React from 'react';
 import ReadMoreLess from '../reducers/readmore';
 import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
 import XIcon from '@mui/icons-material/X';
import { Container ,Row,Col} from 'react-bootstrap';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <>
    <footer className="footer">
      <Container>
        <Row>
          <Col>
      <div  >
        <div className="footer-section about"  >
          <h5>About MSBricks</h5>
          <ReadMoreLess maxLength={80} >
            MSBricks is your trusted partner in the real estate market, providing comprehensive solutions for buying, selling, and renting properties across the globe. With years of experience and a commitment to service excellence, MSBricks helps you navigate the complex world of real estate with ease and confidence.
          </ReadMoreLess>
        </div>
        </div>
      
        <div className="footer-section contact">
          <h6>More From Our Network</h6>
        
        </div>
        <div className="footer-section social">
          <h4> </h4>
          <a href="#/" className='footmrgin'target='_blank'>Times Of India</a>
          <a href="#/" className='footmrgin'target='_blank'>Economic Times</a>
          <a href="#/" className='footmrgin'target='_blank'>Navbharat times</a>
          <a href="#/" className='footmrgin'target='_blank'>India Times</a>
          <a href="#/" className='footmrgin'target='_blank'>Filmfare</a><br/>
          <a href="#/" className='footmrgin2'target='_blank'>MensXp</a>
          <a href="#/" className='footmrgin2'target='_blank'>iDiva</a>
          <a href="#/" className='footmrgin2'target='_blank'>TimesJobs</a>
          <a href="#/" className='footmrgin2'target='_blank'>  Gadgets Now</a> 
          <br/>
                 <a href="#/"  target='_blank'>         <img src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' alt='google play store badge' style={{width:'25%'}}/>
                  </a> 
                <a href="#/"  target='_blank'>         <img src='https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg' alt='google play store badge' style={{width:'20%'}}/>
                </a> 

                <a href="#/"  target='_blank' >  <FacebookOutlinedIcon style={{color:'blue',fontSize:'40px',margin:'0 10px 0 60px'}}/>      
                </a> 

                <a href="#/"  target='_blank'><XIcon style={{color:'white',backgroundColor:'black',borderRadius:'60px',fontSize:'30px'}}/>    
                </a> 
                
            <a href="#/"  target='_blank'><YouTubeIcon style={{color:'red', fontSize:'40px', margin:'0 10px 0 10px'}}/>    
                          </a> 
                <a href="#/"  target='_blank'><InstagramIcon style={{color:'white',backgroundColor:'pink',  fontSize:'40px',  borderRadius:'60px'}}/>    
                </a> 
              
        </div>
        </Col>
        <Col>
        <div  >
        <div className="footer-section about"  >
          <h5>Properties in India</h5>
        
        </div>
        </div>

        <div className="footer-section social">
          <a href="#/" className='footmrgin'target='_blank'>Property in New Delhi |</a>
          <a href="#/" className='footmrgin'target='_blank'>Property in Mumbai  |</a>
          <a href="#/" className='footmrgin'target='_blank'>Property in Chennai |</a>
          <a href="#/" className='footmrgin'target='_blank'> Property in Pune |</a>
          <a href="#/" className='footmrgin'target='_blank'> Property in Ahmedabad |</a>
          <a href="#/" className='footmrgin2'target='_blank'> Property in Bangalore </a>
          <a href="#/" className='footmrgin2'target='_blank'> Property in Gurgaon |</a>
          <a href="#/" className='footmrgin2'target='_blank'>Property in Noida |</a>
          <a href="#/" className='footmrgin2'target='_blank'>  Gadgets Now</a> 
          <br/>

        
    
        </div>
        
  <div className="footer-section social">
          <h4> </h4>
          <h5>New Projects in India</h5>

          <a href="#/" className='footmrgin'target='_blank'>Property in New Delhi |</a>
          <a href="#/" className='footmrgin'target='_blank'>Property in Mumbai</a>
          <a href="#/" className='footmrgin'target='_blank'>Property in Chennai</a>
          <a href="#/" className='footmrgin'target='_blank'> Property in Pune</a>
          <a href="#/" className='footmrgin'target='_blank'> Property in Ahmedabad</a>
          {/* <a href="#/" className='footmrgin2'target='_blank'> Property in Bangalore</a>
          <a href="#/" className='footmrgin2'target='_blank'> Property in Gurgaon</a>
          <a href="#/" className='footmrgin2'target='_blank'>Property in Noida</a>
          <a href="#/" className='footmrgin2'target='_blank'>  Gadgets Now</a>  */}
          <br/>
    
        </div>

    
        

      
        </Col>
        </Row>
        </Container>
         
    </footer>
    
    <footer className='bg-dark text-light py-1' >
      <p className='mx-4' style={{fontSize:'14px'}}>All trademarks, logos and names are properties of their respective owners. All Rights Reserved. © Copyright 2024 Magicbricks Realty Services Limited.</p>
    </footer>
   
    </>
  );
};

export default Footer;
