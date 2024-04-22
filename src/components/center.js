  // import * as React from 'react';
  // import Box from '@mui/material/Box';
  // import { Typography } from '@mui/material';
  // import Card from '@mui/material/Card';
  // import CardContent from '@mui/material/CardContent';
  // import Button from '@mui/material/Button';
  // import { Container,Row,Col ,Badge} from 'react-bootstrap';
  // import FolderOpenIcon from '@mui/icons-material/FolderOpen';
  // import MenuBookIcon from '@mui/icons-material/MenuBook';
  // import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';
  

  // export default function SimpleContainer() {
  //   return (
  //     <React.Fragment>
  //   <Container style={{ marginTop: "51px" }}>
  //     <Badge bg="warning" text="dark" style={{marginLeft:'45%'}}>NewLaunch</Badge>
  //     <Box sx={{ bgcolor: '#dfe8fe', height: '20rem' }}>
  //       <Typography variant="h4" component="h1" style={{display:'flex', justifyContent:'center',fontSize:'12px' }} gutterBottom  >
  //       <h1 style={{marginTop:'20px', color:'red'}}>magicHomes</h1>
  //       </Typography>
  //       <Typography variant='h6' style={{display:'flex', justifyContent:'center' ,fontSize:'25px'}}>
  //       Encyclopedia For All New Projects
  //       </Typography>
  //       <Row>
  //         <Col>
  //       <Typography>
  //       <Card sx={{ minWidth: 40,minHeight:100,borderRadius:'30px',backgroundColor:'#AFEEEE' }} className='Center_card'>
  //       <CardContent>
        
          
          
  //         <Typography style={{marginLeft:'30px', marginTop:'20px'}} className='containerCenter'>
  //           <FolderOpenIcon style={{color:'darkblue',backgroundColor:'white',borderRadius:'20px',fontSize:'40px'}}/> Directory For All New Projects
          
  //         </Typography>
  //       </CardContent>
        
  //     </Card>
  //       </Typography>
  //       </Col>
          
  //       </Row>
  // <Box sx={{ bgcolor: 'danger', height: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
  //       <Button variant="contained" sx={{backgroundColor:' rgb(218, 17, 17)',borderRadius:'30px'}}>View All New Projects</Button>
  //     </Box> 
  //     </Box>
  //   </Container>
  // </React.Fragment>

  //   );
  // }

  import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Container, Row, Col, Badge } from 'react-bootstrap';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
  import MenuBookIcon from '@mui/icons-material/MenuBook';
  import SmsOutlinedIcon from '@mui/icons-material/SmsOutlined';



export default function SimpleContainer() {
  return (
    <React.Fragment>
      <Container style={{ marginTop: "51px",cursor:'pointer' }}>
        <Badge bg="warning" text="dark" style={{ display: 'block', margin: '0 auto', width: 'fit-content' }}>New Launch</Badge>
        <Box sx={{ bgcolor: '#dfe8fe', minHeight: '20rem',  p: { xs: 1, md: 3 } }}>
          <Typography variant="h4" component="h1" style={{ justifyContent: 'center', textAlign: 'center', fontSize: { xs: '16px', md: '24px' } }} gutterBottom>
            <h1 style={{ margin: '20px 0', color: 'red' }}>magicHomes</h1>
          </Typography>
          <Typography variant='h6' style={{ justifyContent: 'center', textAlign: 'center', fontSize: { xs: '15px', md: '25px' } }}>
            Encyclopedia For All New Projects
          </Typography>
          <Row>
            <Col xs={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ maxWidth: 345, borderRadius: '30px', backgroundColor: 'lightblue', m: 1 }} className='CardHover'>
                <CardContent>
                  <Typography style={{ textAlign: 'center' }}>
                    <FolderOpenIcon style={{ color: 'skyblue', backgroundColor: 'white', borderRadius: '20px', fontSize: '40px' }} /> Directory For All New Projects
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col xs={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ maxWidth: 345, borderRadius: '30px', backgroundColor: '#FFC0CB', m: 1 }} className='CardHover'>
                <CardContent>
                  <Typography style={{ textAlign: 'center' }}>
                    <MenuBookIcon style={{ color: 'red', backgroundColor: 'white', borderRadius: '20px', fontSize: '40px' }} />  All Reports From RERA
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            <Col xs={12} md={4} style={{ display: 'flex', justifyContent: 'center' }}>
              <Card sx={{ maxWidth: 345, borderRadius: '30px', backgroundColor: '#FFEBCD', m: 1 }} className='CardHover'>
                <CardContent>
                  <Typography style={{ textAlign: 'center' }}>
                    <SmsOutlinedIcon style={{ color: 'yellow ', backgroundColor: 'white', borderRadius: '20px', fontSize: '40px' }} /> Directory For All New Projects
                  </Typography>
                </CardContent>
              </Card>
            </Col>
            
          </Row>
          <Box sx={{ bgcolor: 'danger', minHeight: '5rem', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', alignItems: 'center' }}>
            <Button variant="contained" sx={{ backgroundColor: 'rgb(218, 17, 17)', borderRadius: '30px', m: 1 }}>View All New Projects</Button>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}
