 



import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Row, Col, Carousel,Button } from 'react-bootstrap';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';

function Estateguide() {
  return (
    <Container>
      <p style={{ marginTop: '50px', fontSize: '35px' }} className='nav_boldB'>
        Your Real Estate Guide
      </p>
      <Row>
        <Col>
          <Card className="AdviceHover" style={{ width: '21rem',height:'23rem', marginTop: '20px',borderRadius:'15px',borderTopColor:'red'}}>  
            <Card.Body>
              <Card.Title>Video Showcase</Card.Title>
              <Carousel>
                <Carousel.Item>
                  <Row>
                    <Col md={6}>
                      <iframe
                        src="https://www.youtube.com/embed/gjiVCIC7J6Q"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        title="Video 1"
                        style={{ width: '100%', height: '200px' }}
                      ></iframe>
                    </Col>
                    <Col md={6}>
                      <iframe
                                              src="https://www.youtube.com/embed/2_XixgLt7cM?si=v4Z2Ccfii9IL22Os" // Replace with actual video ID
                                              // Ensure this is the second video's ID
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        title="Video 2"
                        style={{ width: '100%', height: '200px' }}
                      ></iframe>
                    </Col>
                  </Row>
                 
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col md={6}>
                      <iframe
                             src="https://www.youtube.com/embed/2_XixgLt7cM?si=v4Z2Ccfii9IL22Os" // Replace with actual video ID
                                           
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        title="Video 3"
                        style={{ width: '100%', height: '200px' }}
                      ></iframe>
                    </Col>
                    <Col md={6}>
                      <iframe
                        src="https://www.youtube.com/embed/2_XixgLt7cM?si=v4Z2Ccfii9IL22Os" // Replace with actual video ID
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        title="Video 4"
                        style={{ width: '100%', height: '200px' }}
                      ></iframe>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
              <Card.Text> 
                                Locality Review - KR Puram, Bengaluru
              </Card.Text>
              <br/>
              <br/>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'18px' }}> See All <ArrowForwardIcon/></Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="AdviceHover" style={{ width: '21rem',height:'23rem', marginTop: '20px',borderRadius:'15px',borderTopColor:'red' }}>  
            <Card.Body>
              <Card.Title> Industry Insights</Card.Title>
                  <Row>
                   
                  </Row>
                 
                  <Row>
                    <Col></Col>
                  </Row> 
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px',margin:'0px'}}><p> <PlayCircleOutlineIcon/> <span style={{color:'black' }}>What Does RERA Carpet Area Men& How is it</span></p></Card.Link><hr></hr>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px'}}><p> <PlayCircleOutlineIcon/> <span style={{color:'black' }}> what is rent aggrement-rent aggrement sample..   </span> </p></Card.Link><hr></hr>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px'}}><p> <FileCopyOutlinedIcon/><span style={{color:'black' }}>What Does RERA Carpet Area Men& How is it</span>  </p></Card.Link><hr></hr>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px'}}><p> <FileCopyOutlinedIcon/><span style={{color:'black' }}>What Does RERA Carpet Area Men& How is it</span>  </p></Card.Link><hr></hr>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'12px'}}><p> <PlayCircleOutlineIcon/> <span style={{color:'black' }}> what is rent aggrement-rent aggrement sample..   </span> </p></Card.Link><hr></hr>
               <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'18px'}}><p> See All  <ArrowForwardIcon/></p> </Card.Link>
               
            </Card.Body>
          </Card>
        </Col>

        <Col>
        <Card className="AdviceHover" style={{ width: '21rem',height:'23rem', marginTop: '20px',borderRadius:'15px',borderTopColor:'red' }}>  
            <Card.Body>
              <Card.Title>Legal Updates</Card.Title>
             
                <Row>
                    <Col md={6} className='d-flex'>
                      <iframe
                        src="https://www.youtube.com/embed/gjiVCIC7J6Q"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        frameBorder="0"
                        title="Video 1"
                        style={{ width: '100%', height: '100px',borderRadius:'10px' }}
                      ></iframe>
                      
                      {/* <div  > */}
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'18px',marginLeft:'30px' }}> Watch Vedio<ArrowForwardIcon/></Card.Link>

                      {/* </div> */}
                      
                     
                    </Col>
                    </Row>
                    <hr/>
                    <Col md={6} className='d-flex'>
                      < img    src="https://img.staticmb.com/mbcontent/images/uploads/2023/3/BBMP-Property-tax-payment-.jpg" alt='article pic'
                        style={{ width: '100%', height: '100px',borderRadius:'10px' }}
                      /> 
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'18px',marginLeft:'30px' }}> Read Article<ArrowForwardIcon/></Card.Link>

                    </Col> 
              <br/>
              <br/>
              <Card.Link href="#" style={{textDecoration:'none',color:'red',fontSize:'18px' }}> See All <ArrowForwardIcon/></Card.Link>
              <Button  
           style={{
              backgroundColor:'red',
               color:'White', 
               border:'2px solid red',
               borderRadius:'30px',
            margin:'0 0 5px 80px'}}
                size="small" 
                color="primary">
              Read  Details
           </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Estateguide;






 







 