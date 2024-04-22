// import * as React,{useState} from 'react';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container,Row,Col } from 'react-bootstrap';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
export default function FreshProperty() {
    const [hover, setHover] = useState(false);

  return (
    <>
    <Container className='mt-5'>
        <Typography variant='p' style={{marginTop:'30px',fontSize:'35px'} } className='nav_boldB'>
        Fresh Properties in Banglore
        </Typography>
        <Row style={{marginTop:'10px'}}>
            <Col>
    <Card sx={{ maxWidth: 345 }}  
        onMouseEnter={()=>setHover((true))}
        onMouseLeave={()=>setHover((false))} 
         >
      <CardActionArea
  

      >

        <CardMedia
          component="img"
          height="140"
             image='https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/18/Photo_h180_w240/67579841_1_PropertyImage680-0493997235518_180_240.jpg'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            3 BHK Flat
          </Typography>
          <Typography variant=" h4" color="text.secondary">
            <CurrencyRupeeIcon/><b style={{color:'black'}}>1.25cr  | 1413 sqft</b>
           < Typography> Thubarahalli , Whitefield Banglore Ready to  move</Typography>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className='crdhvr'>
        {hover && (
           <Button  
           style={{
              backgroundColor:'red',
               color:'White', 
               border:'2px solid red',
               borderRadius:'30px'}}
                size="small" 
                color="primary">
              Read  Details
           </Button>
        )}
       
      </CardActions>
    </Card>
   </Col>




   <Col>
    <Card sx={{ maxWidth: 345 }}  
        onMouseEnter={()=>setHover((true))}
        onMouseLeave={()=>setHover((false))} 
         >
      <CardActionArea
  

      >

        <CardMedia
          component="img"
          height="140"
          image='https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70630851_1_PropertyImage645-708314894925_180_240.jpg'
           alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            3 BHK Flat
          </Typography>
          <Typography variant=" h4" color="text.secondary">
            <CurrencyRupeeIcon/><b style={{color:'black'}}>1.25cr  | 1413 sqft</b>
           < Typography> Thubarahalli , Whitefield Banglore Ready to  move</Typography>

          </Typography>
        </CardContent>
      </CardActionArea >
      <CardActions className='crdhvr'>
        {hover && (
           <Button  
           style={{
              backgroundColor:'red',
               color:'White', 
               border:'2px solid red',
               borderRadius:'30px'}}
                size="small" 
                color="primary">
              Read  Details
           </Button>
        )}
       
      </CardActions>
    </Card>
   </Col>



   <Col>
    <Card sx={{ maxWidth: 345 }}  
        onMouseEnter={()=>setHover((true))}
        onMouseLeave={()=>setHover((false))}  >
      <CardActionArea
  

      >

        <CardMedia
          component="img"
          height="140"
          image='https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/15/Photo_h180_w240/71874271_5_PropertyImage377-5241042579304_180_240.jpg'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            1 BHK Flat
          </Typography>
          <Typography variant=" h4" color="text.secondary">
            <CurrencyRupeeIcon/><b style={{color:'black'}}> 35 lac  | 1413 sqft</b>
           < Typography> Thubarahalli , Whitefield Banglore Ready to  move</Typography>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {hover && (
           <Button  
           style={{
              backgroundColor:'red',
               color:'White', 
               border:'2px solid red',
               borderRadius:'30px'}}
                size="small" 
                color="primary">
              Read  Details
           </Button>
        )}
       
      </CardActions>
    </Card>
   </Col>
   <Col>
    <Card sx={{ maxWidth: 345 }}  
        onMouseEnter={()=>setHover((true))}
        onMouseLeave={()=>setHover((false))}  >
      <CardActionArea
  

      >

        <CardMedia
          component="img"
          height="140"
             image='https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg'
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            3 BHK Flat
          </Typography>
          <Typography variant=" h4" color="text.secondary">
            <CurrencyRupeeIcon/><b style={{color:'black'}}>1.25cr  | 1413 sqft</b>
           < Typography> Thubarahalli , Whitefield Banglore Ready to  move</Typography>

          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        {hover && (
           <Button  
           style={{
              backgroundColor:'red',
               color:'White', 
               border:'2px solid red',
               borderRadius:'30px'}}
                size="small" 
                color="primary">
              Read  Details
           </Button>
        )}
       
      </CardActions>
    </Card>
   </Col>

    </Row>
    </Container>
    </>
  );
}
  