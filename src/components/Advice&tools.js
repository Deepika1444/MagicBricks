import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import { Container,Row,Col ,Badge} from 'react-bootstrap';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function AdviceTools() {
  return (
    <>
    <Container className='mt-5'>

 <Typography variant='p' style={{marginTop:'30px',  fontSize:'35px'} } className='nav_boldB' >
        Advice and Tools 
        </Typography>
        <Row style={{ marginTop:'30px', }}>
            <Col>
    <Card sx={{ minWidth: 200 }} className='AdviceHover'>
      <CardContent>
        <Typography  color="text.secondary" gutterBottom>
        <Badge bg="warning" text="dark" style={{ display: 'flex', marginLeft:'120px', fontWeight:'bold', fontSize:'20px',  width: 'fit-content' }}> Certified</Badge>

           <HomeOutlinedIcon style={{fontSize:'50px'}}/>
        </Typography>
        <Typography variant="h5" component="div"  >
           Property Valuation 
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2" style={{marginTop:'20px'}}>
           Kmow the right value for  your propery before ou buy or sell
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" > Read More <ArrowForwardOutlinedIcon/> </Button>
      </CardActions>
    </Card>
    </Col>
    <Col>
    <Card sx={{ minWidth: 200 }} className='AdviceHover'>
      <CardContent>
        <Typography  color="text.secondary" gutterBottom>
        <Badge bg="warning" text="dark" style={{ display: 'flex', marginLeft:'130px', fontWeight:'bold', fontSize:'20px',  width: 'fit-content' }}> Get Free</Badge>

           <FileCopyOutlinedIcon style={{fontSize:'50px'}}/>
        </Typography>
        
        <Typography variant="h5" component="div">
            Legal Title check
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2" style={{marginTop:'20px'}}>
        get property checked for clean title and no leagl clam.bank attachment

          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" > Read More <ArrowForwardOutlinedIcon/> </Button>
      </CardActions>
    </Card>
    </Col>
    <Col>
    <Card sx={{ minWidth: 200,  minHeight: 283}} className='AdviceHover'>
      <CardContent>
        <Typography  color="text.secondary" gutterBottom>
           <TrendingUpOutlinedIcon style={{fontSize:'50px',marginTop:'30px'}}/>
        </Typography>
        <Typography variant="h5" component="div">
            Rates and Trends
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2" style={{marginTop:'20px'}}>
           Kmow  all about propert rates and trendy in your city
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"     > Read More <ArrowForwardOutlinedIcon/> </Button>
      </CardActions>
    </Card>
    </Col>
    <Col>
    <Card sx={{ minWidth: 200,  minHeight: 283 }} className='AdviceHover'>
      <CardContent>
        <Typography  color="text.secondary" gutterBottom>
           <CalculateOutlinedIcon style={{fontSize:'50px',marginTop:'30px'}}/>
        </Typography>
        <Typography variant="h5" component="div">
            EMI calculator
        </Typography>
        {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography> */}
        <Typography variant="body2" style={{marginTop:'20px'}}>
           Kmow how mch you will have to pay every month in your loan
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small"   > Read More <ArrowForwardOutlinedIcon/> </Button>
      </CardActions>
    </Card>
    </Col>
    
    
    </Row>
    </Container>
    </>
  );
}