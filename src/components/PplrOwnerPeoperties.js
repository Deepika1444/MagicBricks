// import * as React,{useState} from 'react';
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Container,Row,Col } from 'react-bootstrap';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
export default function MultiActionAreaCard() {
    const [hover, setHover] = useState(false);

  return (
    <>
    <Container className='mt-5'>
        <Typography variant='p' style={{marginTop:'30px',fontSize:'35px'} }>
        Popular Owner Properties
        </Typography>
        <Row style={{marginTop:'30px'}}>
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
          image='https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70565117_8_1703575295927-924_180_240.jpg'
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



   <Col>
    <Card sx={{ maxWidth: 345 }}  
        onMouseEnter={()=>setHover((true))}
        onMouseLeave={()=>setHover((false))}  >
      <CardActionArea
  

      >

        <CardMedia
          component="img"
          height="140"
          image='https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/27/Photo_h180_w240/657854521ffbc3fdf4af0db3-1706335378_71094203_180_240.jpg'
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
 





 









 
