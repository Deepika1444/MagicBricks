import  React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';


function OutlinedCard() {


  return (
    < >
     
    <Container style={{marginTop:'30px'}}  >
    <h2 className='nav_boldB'  >    MB Preferred Agents in Bangalore</h2>
    <Row> 
      <Col  >
    <Card style={{ width: '16rem'  , margin:'20px 0 0 0'}} className='MainCard'>
            <div  className='Bgclr'    style={{  display: 'flex', alignItems: 'center'}}>
        <Card.Img variant="top" style={{width:'60px', margin:'0px 0 0px 0px', border:'5px solid skyblue'}} src="https://th.bing.com/th/id/OIP.W6rZ0iO9rEfUStFAMWoozQAAAA?w=185&h=185&c=7&r=0&o=5&pid=1.7" />
        <p style={{marginLeft:'10px'}}><span  className='TextColor'>MB Preferred</span> <br/><b>Karthikeyan</b></p>

        <br/> 
       

        <Card.Img variant="top" style={{width:'60px', marginLeft:'25px',  border:'5px solid skyblue'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
            </div> 
             {/* mydwelling card */} 
            <div>
                    <div  className='Bgclr2'    style={{  display: 'flex'}}>
                  <Card.Img variant="top" style={{width:'60px', marginTop:'35px', height:'50px',   margin:'0 0 0 0', border:'5px solid white'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
                  <p style={{marginLeft:'10px',marginTop:'20px',}}><span  className='TextColor2'><b>MY DWELLING</b></span> <br/><p style={{fontSize:'10px'}}>Operating Since 2001 </p></p>

                  <br/>
                  
              <p style={{marginTop:'60px',fontSize:'10px'}}>  | Buyers served  2500+</p>
                  </div>
        </div> 


        {/* number of Properties */}







<div style={{marginTop:'0'}}>
<div style={{display: 'flex', flexDirection: 'row'}}>
    <div style={{display: 'inline-block', marginRight: '20px'}}>
        <h2 style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>43 </h2>
        <p style={{marginLeft: '10px',fontSize:'10px'}}>Properties <br/> for sale</p>
    </div>
    <div style={{display: 'inline-block'}}>
        <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}>10 </h3>
        <p style={{marginLeft: '50px',fontSize:'10px'}}>Properties <br/> for Rent</p>
    </div>
</div>
</div> 
 
 
      <Card.Body>
 
      </Card.Body>
    
    </Card>
    </Col> 
    <Col  >
    <Card style={{ width: '16rem'  , margin:'20px 0 0 0'}} className='MainCard'>
            <div  className='Bgclr'    style={{  display: 'flex', alignItems: 'center'}}>
        <Card.Img variant="top" style={{width:'60px',height:'70px', margin:'0px 0 0px 0px', border:'5px solid skyblue'}} src="data:image/jpeg;base64,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" />
        <p style={{marginLeft:'10px'}}><span  className='TextColor'>MB Preferred</span> <br/><b>Arjun</b></p>
        <br/> 
       

        <Card.Img variant="top" style={{width:'60px', marginLeft:'25px',  border:'5px solid skyblue'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
            </div> 
             {/* mydwelling card */} 
            <div>
                    <div  className='Bgclr2'    style={{  display: 'flex'}}>
                  <Card.Img variant="top" style={{width:'60px', marginTop:'30px', height:'50px',   margin:'0 0 0 0', border:'5px solid white'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/25046685_hprlogo_75_75.jpg" />
                  <p style={{marginLeft:'10px',marginTop:'20px',}}><span  className='TextColor2'><b>MY DWELLING</b></span> <br/><p style={{fontSize:'10px'}}>Operating Since 2001 </p></p>

                  <br/>
                  
              <p style={{marginTop:'60px',fontSize:'10px'}}>  | Buyers served  4500+</p>
                  </div>
        </div> 


        {/* number of Properties */}







<div style={{marginTop:'0'}}>
<div style={{display: 'flex', flexDirection: 'row'}}>
    <div style={{display: 'inline-block', marginRight: '20px'}}>
        <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}>2 </h3>
        <p style={{marginLeft: '10px',fontSize:'10px'}}>Properties <br/> for sale</p>
    </div>
    <div style={{display: 'inline-block'}}>
        <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}> 6</h3>
        <p style={{marginLeft: '50px',fontSize:'10px'}}>Properties <br/> for Rent</p>
    </div>
</div>
</div> 
 
      <Card.Body>
 
      </Card.Body>
    </Card>
    </Col>


    <Col  >
    <Card style={{ width: '16rem'  , margin:'20px 0 0 0'}} className='MainCard'>
            <div  className='Bgclr'    style={{  display: 'flex', alignItems: 'center'}}>
        <Card.Img variant="top" style={{width:'60px',height:'70px', margin:'0px 0 0px 0px', border:'5px solid skyblue'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdNQWvK85Jjy5ZhCIrQLtY1T-cUHdY1rQQ3Q&s" />
        <p style={{marginLeft:'10px'}}><span  className='TextColor'>MB Preferred</span> <br/><b> Rehen </b></p>

        <br/> 
       

        <Card.Img variant="top" style={{width:'60px', marginLeft:'25px',  border:'5px solid skyblue'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
            </div> 
             {/* mydwelling card */} 
            <div>
                    <div  className='Bgclr2'    style={{  display: 'flex'}}>
                  <Card.Img variant="top" style={{width:'60px', marginTop:'35px', height:'50px',   margin:'0 0 0 0', border:'5px solid white'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/16860383_NewDoorVenturesLogoBigSizeBLACK300x300_75_75.jpg" />
                  <p style={{marginLeft:'10px',marginTop:'20px',}}><span  className='TextColor2'><b>MY DWELLING</b></span> <br/><p style={{fontSize:'10px'}}>Operating Since 2001 </p></p>

                  <br/>
                  
              <p style={{marginTop:'60px',fontSize:'10px'}}>  | Buyers served  1500+</p>
                  </div>
        </div> 


        {/* number of Properties */}







<div style={{marginTop:'0'}}>
<div style={{display: 'flex', flexDirection: 'row'}}>
    <div style={{display: 'inline-block', marginRight: '20px'}}>
        <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}> 5 </h3>
        <p style={{marginLeft: '10px',fontSize:'10px'}}>Properties <br/> for sale</p>
    </div>
    <div style={{display: 'inline-block'}}>
        <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}>30 </h3>
        <p style={{marginLeft: '50px',fontSize:'10px'}}>Properties <br/> for Rent</p>
    </div>
</div>
</div> 
 
      <Card.Body>
 
      </Card.Body>
    </Card>
    </Col> 



    <Col  >
    <Card style={{ width: '16rem'  , margin:'20px 0 0 0'}} className='MainCard'>
            <div  className='Bgclr'    style={{  display: 'flex', alignItems: 'center'}}>
        <Card.Img variant="top" style={{width:'60px', margin:'0px 0 0px 0px', border:'5px solid skyblue'}} src="https://th.bing.com/th/id/OIP.W6rZ0iO9rEfUStFAMWoozQAAAA?w=185&h=185&c=7&r=0&o=5&pid=1.7" />
        <p style={{marginLeft:'10px'}}><span  className='TextColor'>MB Preferred</span> <br/><b>Ajay</b></p>

        <br/> 
       

        <Card.Img variant="top" style={{width:'60px', marginLeft:'25px',  border:'5px solid skyblue'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
            </div> 
             {/* mydwelling card */} 
            <div>
                    <div  className='Bgclr2'    style={{  display: 'flex'}}>
                  <Card.Img variant="top" style={{width:'60px', marginTop:'35px', height:'50px',   margin:'0 0 0 0', border:'5px solid white'}} src="https://img.staticmb.com/mbimages/user/Photo_h75_w75/27283004_logo_75_75.jpg" />
                  <p style={{marginLeft:'10px',marginTop:'20px',}}><span  className='TextColor2'><b>MY DWELLING</b></span> <br/><p style={{fontSize:'10px'}}>Operating Since 2001 </p></p>

                  <br/>
                  
              <p style={{marginTop:'60px',fontSize:'10px'}}>  | Buyers served  2500+</p>
                  </div>
        </div> 


        {/* number of Properties */}







<div style={{marginTop:'0'}}>
<div style={{display: 'flex', flexDirection: 'row'}}>
    <div style={{display: 'inline-block', marginRight: '20px'}}>
        <h2 style={{display: 'flex', alignItems: 'center', marginLeft: '10px'}}> 20</h2>
        <p style={{marginLeft: '10px',fontSize:'10px'}}>Properties <br/> for sale</p>
    </div>
    <div style={{display: 'inline-block'}}>
        <h3 style={{display: 'flex', alignItems: 'center', marginLeft: '50px'}}> 5</h3>
        <p style={{marginLeft: '50px',fontSize:'10px'}}>Properties <br/> for Rent</p>
    </div>
</div>
</div> 
 
      <Card.Body>
 
      </Card.Body>
    </Card>
    </Col> 


   
    </Row>
    </Container>
    </>
  );
}

export default OutlinedCard;








 



 

