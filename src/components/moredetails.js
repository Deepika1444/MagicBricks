

import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link ,Box} from '@mui/material';
import { Container,Row,Col ,Button,Badge} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import BedOutlinedIcon from '@mui/icons-material/BedOutlined';
import BathtubOutlinedIcon from '@mui/icons-material/BathtubOutlined';
import BalconyOutlinedIcon from '@mui/icons-material/BalconyOutlined';
import DoorSlidingOutlinedIcon from '@mui/icons-material/DoorSlidingOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SimCardDownloadOutlinedIcon from '@mui/icons-material/SimCardDownloadOutlined';

export default function MoreDetails() {
  return (
    < >
     


<Row>
  <Col>
    <Card sx={{ maxWidth: 945 ,marginLeft:6,marginTop:5,border:'1px solid lightgray'}}>
         <CardContent>
        <Typography gutterBottom variant="h5" component="span">
        <CurrencyRupeeIcon sx={{fontSize:'25px'}}/> 57.0 Lac
        </Typography>
        <Typography gutterBottom variant="body1" component="span" sx={{marginLeft:3,color:'black'}}>
        <Link href="#" style={{color:"black"}}>EMI-26k</Link>
        </Typography>
        <Typography gutterBottom variant="body1" component="span" sx={{marginLeft:3,color:'black'}}>
        <Link href="#" style={{color:"black"}}>Need Home Loan? Check Eligibility</Link>
        </Typography>
         
        <Typography variant="body1" color="text.secondary" >
        1 BHK Flat For Sale in Vaishnavi Serene,
        <Link href="#" style={{color:"black",fontWeight:'bold'}}> Yelahanka,Banglore</Link>
        </Typography>
     
      </CardContent>
      <Row>
        <Col>
      <CardMedia
        sx={{ height: 200,width:350 ,marginLeft:4,borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}
        title="home Image"
        image="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jan/12/Photo_h300_w450/65099369_4_PropertyImage703-221524176758_300_450.jpg"
        
      />
       <Box sx={{ display: 'flex'  }}>
       <CardMedia
        sx={{ height: 100,width:113 ,marginLeft:4,marginTop:1,borderBottomLeftRadius:'10px' }}
        title="home Image"
        image="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jan/12/Photo_h300_w450/65099369_1_PropertyImage398-9053029465217_300_450.jpg"
        
      />

       <CardMedia 
        sx={{ height: 100,width:111 ,marginLeft:1, marginTop:1 }}
        title="home Image"
        image="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jan/12/Photo_h300_w450/65099369_2_PropertyImage96-34146489432649_300_450.jpg"
        
      />
      
       <CardMedia
        sx={{ height: 100,width:113 ,marginLeft:1,marginTop:1,borderBottomRightRadius:'10px' }}
        title="home Image"
        image="https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jan/12/Photo_h300_w450/65099369_1_PropertyImage398-9053029465217_300_450.jpg"
        
      />
    
      </Box>
      </Col>
       <Col >
      <Typography gutterBottom variant="body1" component="span" sx={{color:'black', color:"text.secondary",bgcolor:'lightgray',borderRadius:'10px'}}  className='py-4 , px-4'>
     <BedOutlinedIcon/> 1Bed |  <BathtubOutlinedIcon/>1Bath |  <BalconyOutlinedIcon/>1 Balcony <DoorSlidingOutlinedIcon/>1 Furnished
        </Typography>
        <Row>
            <Col>
        <Typography variant="body1" color="text.secondary" className='mt-5' >
         Carpet Area
         <Dropdown>
      <Dropdown.Toggle variant="none" id="dropdown-basic" style={{fontWeight:'bold'}}>
       550sqft
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">sqft</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> sqyrd</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> sqm</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> acre</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> bigh</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> gunta</Dropdown.Item>
        <Dropdown.Item href="#/action-2"> kanal</Dropdown.Item>

        </Dropdown.Menu> 
        </Dropdown>
           <CurrencyRupeeIcon sx={{fontSize:'16px'}}/>1034/sqft
        </Typography>


        <Typography  variant="body1" color="text.secondary" className='mt-3'>
            Floor
            
        </Typography>
        <Typography fontWeight='bold' variant='p'>3(Out Of 4 Floors)</Typography>

        <Typography  variant="body1" color="text.secondary" className='mt-3'>
            Facing
            
        </Typography>
        <Typography fontWeight='bold' variant='p'> North-east</Typography>





        </Col>
        <Col>
        <Typography variant="body1" color="text.secondary" className='mt-5' >
         Developer
        <Link href="#" style={{color:"black",fontWeight:'bold'}}> Vaishnavi Group</Link>
        </Typography>

        <Typography  variant="body1" color="text.secondary" className='mt-5'>
             Transaction Type
            
        </Typography>
        <Typography fontWeight='bold' variant='p'> Rescale</Typography>


        <Typography  variant="body1" color="text.secondary" className='mt-3'>
            Furnished Status
            
        </Typography>
        <Typography fontWeight='bold' variant='p'> Furnished</Typography>
        </Col>
        <Col>
        <Typography variant="body1" color="text.secondary" className='mt-5' >
          Project <br/>
        <Link href="#" style={{color:"black",fontWeight:'bold'}}> Vaishnavi Serene</Link>

        </Typography>
        <br/>
        <Typography  variant="body1" color="text.secondary" className='mt-3'>
              Status
            
        </Typography>
        <Typography fontWeight='bold' variant='p'> Ready To Move</Typography>

        <Typography  variant="body1" color="text.secondary" className='mt-3'>
        Type Of Ownership
            
        </Typography>
        <Typography fontWeight='bold' variant='p'>Co-operative Society</Typography>



        </Col>
        </Row>
        </Col>
         </Row>
        
        
      <hr></hr>
     
      <CardActions>
        <Button  variant='danger' style={{borderRadius:'30px'}}>Contact Owner</Button>
        <Button  variant='light' style={{borderColor:'red',borderRadius:'30px'}}>
            Book Visit     <Badge bg="warning" text="dark" className="rounded-white-bg mx-2">FREE Cab</Badge>
</Button>
<Typography style={{ marginLeft:'22rem'}}>
    <PermContactCalendarIcon style={{color:'skyblue' }}/>
    Last Contact Made 11 days ago
</Typography>
      </CardActions>
    </Card>
    </Col>
    <Col  md={3} className='ml-auto mr-auto mt-5 '>
    <Card className='py-4'   sx={{border:'2px solid lightgray', position: 'sticky',  top: 100 }} >
            <Typography variant='h6' ml={3} className='d-block'>Contact Owner
            </Typography>
            <Typography className='d-flex' ml={3} variant='h6'>lucky group 
            
            <Typography gutterBottom variant="body1" mt={1} ml={1}>  +91-95xxxxxx </Typography> 
            </Typography>

        <Button  variant='danger' style={{borderColor:'red',borderRadius:'30px',marginLeft:'20px',display:'flex  justify-content-center',width:'80%'}}  >
            Book Visit     <Badge bg="warning" text="dark" className="rounded-white-bg mx-2 ">FREE Cab</Badge>
</Button>
          
            
         

        </Card>

        <Card className='py-4 mt-3' sx={{border:'2px solid lightgray' }} >
            <Typography variant='h6' ml={3} className='d-block'> <SimCardDownloadOutlinedIcon style={{color:'red'}}/> Document Brochure
            </Typography>
             
        </Card>
        
    </Col>
   
    </Row>
  
</>
    
  );
}


 

 


 

 