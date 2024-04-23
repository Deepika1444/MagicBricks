import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container ,Badge} from 'react-bootstrap';
 

export default function Postproperty() {
  return (
    <Container className='mt-5'>
    <Card sx={{ maxWidth: 2750 ,minHeight:50 ,backgroundColor:"	OldLace",borderRadius:2 ,cursor:'pointer' }}>
      <CardContent className='py-3 '>
         
        <Typography variant="h5" >
        Post our Property  for  <b><i>free</i></b>

           
        </Typography>
        <Typography variant="p" fontSize="12">
            List it on Magic bricks and et geninue leads 
        </Typography>
        <div className='d-flex justify-content-end ' >
        <Typography  variant='p' className="  rounded-white-bg text-link-decoration py-2  d-flex justify-content-center "  style={{marginRight:'30px', marginLeft:'20px',  backgroundColor:'orange',width:'18%'}}>Post Property
           <Badge bg="light" text="dark" className="rounded-white-bg " >FREE</Badge>
           </Typography>
           </div>
      </CardContent>
    
    </Card>
    </Container>
  );
}