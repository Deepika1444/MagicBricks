import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Container, Row,Col } from 'react-bootstrap'; 
import { Link } from 'react-router-dom';
 const BasicCard=()=>{
  return (
    <>
    
    <Container  className='mt-3'>
        <Row style={{marginTop:'30px'}}>
        <p style={{fontSize:'35px'}}> Because You Searched Banglore</p>
            <Col >

    <Card className='cardPerform' style={{backgroundColor:'antiquewhite' }} sx={{ minWidth: 220,minHeight:160} } >
      <CardContent>
        <Typography variant="h3" component="div" className='multi-colored-letter"'>
          59K+ 
        </Typography>
       
        <Typography variant="p" style={{fontSize:'21px'}}>
          property listed for you
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{color:'red'}}>Continue last search <ArrowForwardIcon/></Button>
      </CardActions>
    </Card>
    </Col>
    <Col>
    <Card   className='cardPerform' style={{backgroundColor:'antiquewhite' }}sx={{ minWidth: 220,minHeight:170} }>
      <CardContent > 
        <Typography variant="p" style={{fontSize:'20px'}}>
          Get persnolaized Property
          recommendation from us
          <br />
        </Typography>
      </CardContent>
      
      <CardActions>
        <Button size="small" style={{color:'red'}}> See All <ArrowForwardIcon/></Button>
      </CardActions>
    </Card>
    </Col>
    <Col>
    <Card  className='cardPerform'  style={{backgroundColor:'antiquewhite'}}sx={{ minWidth: 220,minHeight:160} }>
      <CardContent>
        {/* <Typography variant="h3" component="div">
          59K+ 
        </Typography> */}
       
        <Typography  variant="p" style={{fontSize:'22px'}}>
          Top Hand Picked Projects For you
          <br />
        </Typography>
      </CardContent>
      <br />
       
      <CardActions>
        <Button size="small" style={{color:'red'}}>See All<ArrowForwardIcon/></Button>
      </CardActions>
    </Card>
    </Col>
    <Col>
    <Card  className='cardPerform' style={{backgroundColor:'antiquewhite', }}  sx={{ minWidth: 220,minHeight:160} }>
      <CardContent>
        {/* <Typography variant="h3" component="div">
          59K+ 
        </Typography> */}
       
        <Typography variant="p" style={{fontSize:'22px'}}>
         Top Excluisive Owner Properties
          <br />
        </Typography>
      </CardContent>
      <br/>
      <CardActions>
        <Button size="small" style={{color:'red'}}>See All<ArrowForwardIcon/></Button>
      </CardActions>
    </Card>
    </Col>
    
    </Row>
    </Container>

    </>
    
  );
  
}
export default BasicCard