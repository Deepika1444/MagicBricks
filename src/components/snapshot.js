import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from 'react-bootstrap';
// import ReadMoreLess from './readmore';
import ReadMoreLess from '../reducers/readmore';


 

export default function Snapshot() {
  return (
    <Container className='mt-5'>
         <Typography variant='p' style={{marginTop:'30px',fontSize:'35px'} } className='nav_boldB'>
         Bangalore Property Snapshot
        </Typography>
    <Card sx={{ minWidth: 275 }} style={{marginTop:'20px'}}>
      <CardContent>
       
    
         
        <Typography variant="p"  sx={{ fontSize: 18 }} >
          <ReadMoreLess maxLength={240} >
        A home to about 11 million people, Bangalore, now known as Bengaluru, is India''s fourth largest city after Delhi, Kolkata and Mumbai. There is no doubt about the fact that Bangalore unique climate has always attracted people to relocate from all parts of India. The climate in Bangalore is so pleasant and calming that it lets you have a whale of a time. 
        The city has become the 4th largest technology hub in the world after London, 
        Boston and San Francisco. The IT/ITES sector in Bangalore generates approximately two-third jobs and many known IT companies like Wipro, Infosys, Tata Consultancy Services, Oracle, IBM, Accenture and a lot more have set up their offices in the city. Whitefield and Electronics City are the two prime hubs of the IT industry in the city. Some of the famous posh residential areas in Bangalore are Hennur, Electronic City, Bannerghatta Road, Whitefield, North Bangalore, Malleshwaram, Basavangudi, Richmond Town, Rajaji Nagar, Indira Nagar, Koramangala, Benson Town, Ulsoor, Jayanagar etc. The residential apartments, flats, villas, residential plots in Bangalore are built by the known builders in the best localities that offer easy connectivity to all prime areas and these apartments are also equipped with best amenities and facilities. Not only this, most of the families or individuals are also opting for rented properties in Bangalore and the top rental localities in Bangalore are Electronic City, 
        Sarjapur Road, Bannerghatta Road, HSR Layout, Bellandur etc. The rent in Bangalore for 1BHK, 2BHK and 3BHK residential flats is very reasonable
          </ReadMoreLess>
          
        </Typography>
        
<div style={{marginTop:'0' ,display: 'flex', justifyItems:'flex-start', }}>
<div style={{display: 'flex',   flexDirection: 'row'}}>
    <div style={{display: 'inline-block', marginRight: '20px'}}>
        <h4 style={{display: 'flex', alignItems: 'center', marginLeft: '10px',fontWeight:'bold'}}> 1009+ </h4>
        <p style={{marginLeft: '10px',fontSize:'16px'}}>Low Budget Flats <br/> in banglore  </p>
    </div>
    <div style={{display: 'inline-block'}}>
        <h4 style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}>50076+ </h4>
        <p style={{marginLeft: '50px',fontSize:'16px'}}>Properties <br/> for Sale in banglore</p>
    </div>
    <div style={{display: 'inline-block'}}>
        <h4 style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}>298+ </h4>
        <p style={{marginLeft: '50px',fontSize:'16px'}}>Properties <br/> for Sale in banglore</p>
    </div>
    <div style={{display: 'inline-block'}}>
        <h4 style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}>31571+ </h4>
        <p style={{marginLeft: '50px',fontSize:'16px'}}>Properties <br/> for Sale in banglore</p>
    </div>
   
</div>
</div> 
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
    </Container>
  );
}