 
// import React, { useState } from 'react';
// import { Container, Row, Col, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { Typography, CardContent, CardMedia, CardActionArea, CardActions, Button } from '@mui/material';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Arrrowaction from '../reducers/arrowAction';



// function FreshProperty() {
//     const [hoverIndex, setHoverIndex] = useState(-1); // Tracks which card is hovered
//     const cardsToShow = 4; // Number of cards to show at once
//     const cards = [
//       {
//         title: "2 BHK Flat",
//         price: "1.25cr",
//         size: "1413 sqft",
//         location: "  Whitefield Bangalore",
//         image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/18/Photo_h180_w240/67579841_1_PropertyImage680-0493997235518_180_240.jpg",
//         readytomove: "Ready to move"
//       },
//       {
//       title:" 3 BHK Flat",
//       price:" 84 Lac",
//       size:"1150 sqft",
//       location:" Whitefield,Banglore",
//       image:"https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70630851_1_PropertyImage645-708314894925_180_240.jpg",
//       readytomove:"Under Constructionn"
//       },
//       {
//         title:"3 BHK Flat",
//         price:"1.26cr",
//         size:"1149 sqft",
//         location:" Whitefield Bangalore",
//         image:"https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/15/Photo_h180_w240/71874271_5_PropertyImage377-5241042579304_180_240.jpg",
//         readytomove:"Under Constructionn"
//         },
//         {
//           title:"2 BHK Flat",
//           price:"1.18cr",
//           size:"1140 sqft",
//           location:"Whitefield Bangalore",
//           image:"https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg",
//           readytomove:"Under Construction"
//           },
//           {
//             title:"2 BHK Flat",
//             price:"1.40cr",
//             size:"1918 sqft",
//             location:"Whitefield Banglore",
//             image:"https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/21/Photo_h180_w240/71972061_7_restigeparkgrovewhitefield_180_240.jpg",
//             readytomove:" Under Consruction"
//             },
//             {
//               title: "2 BHK Flat",
//               price: "1.25cr",
//               size: "1413 sqft",
//               location: "  Whitefield Bangalore",
//               image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/18/Photo_h180_w240/67579841_1_PropertyImage680-0493997235518_180_240.jpg",
//               readytomove: "Ready to move"
//             }
   
//     ];
//     const { index, handleNext, handlePrev } = Arrrowaction(cards.length, cardsToShow);

//     return (
//         <>
//             <Container className='mt-5'>
//                 <Typography variant='p' style={{ marginTop: '30px', fontSize: '35px' }} className='nav_boldB'>
//                     Fresh Properties in Bangalore
//                 </Typography>
//                 <Row style={{ marginTop: '10px' }}>
//                     {cards.slice(index, index + cardsToShow).map((card, cardIndex) => (
//                         <Col key={cardIndex} md={3}>
//                             <Card sx={{ maxWidth: 645 }} onMouseEnter={() => setHoverIndex(cardIndex)}
//                                 onMouseLeave={() => setHoverIndex(-1)}>
//                                 <CardActionArea>
//                                     <CardMedia component="img" height="140" image={card.image} alt={`${card.title} image`} />
//                                     <CardContent>
//                                         <Typography gutterBottom variant="h6" component="div">
//                                             {card.title}
//                                         </Typography>
//                                         <Typography variant="h6" color="text.secondary">
//                                             <CurrencyRupeeIcon />
//                                             <b style={{ color: 'black' }}>{`${card.price} | ${card.size}`}</b>
//                                             <Typography>{`${card.location}`}</Typography>
//                                             <Typography>{`${card.readytomove}`}</Typography>
//                                         </Typography>
//                                     </CardContent>
//                                 </CardActionArea>
//                                 <CardActions>
//                                     {hoverIndex === cardIndex && (
//                                         <Link to="/details">
//                                         <Button style={{ backgroundColor: 'red', color: 'White', border: '2px solid red', borderRadius: '30px' }}
//                                             size="small" color="primary">
//                                             Read Details
//                                         </Button></Link>
                                        
//                                     )}
//                                 </CardActions>
//                             </Card>
//                         </Col>
//                     ))}
//                 </Row>
//                 {index > 0 && (
//                     <button className='ArrowButton2' 
//                     style={{ position: 'absolute',
//                      left: '90px',
//                       marginLeft: "0px",
//                        top: '387%',
//                         borderRadius: '40px',
//                          height: '40px'
//                           }} 
//                           onClick={handlePrev}>
//                         <ArrowBackIcon />
//                     </button>
//                 )}
//                 {index < cards.length - cardsToShow && (
//                     <button className='ArrowButton' style={{ position: 'absolute', right: '95px', top: '387%', borderRadius: '20px', height: '40px' }} onClick={handleNext}>
//                         <ArrowForwardIcon />
//                     </button>
//                 )}
//             </Container>
//         </>
//     );
// }

// export default FreshProperty;










import React, { useState  } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Typography, CardContent, CardMedia, CardActionArea, CardActions, Button, alertTitleClasses } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Arrrowaction from '../reducers/arrowAction';
import axios from 'axios';

function FreshProperty() {
    const [hoverIndex, setHoverIndex] = useState(-1);
    const cardsToShow = 4;
    const cards =  [
        {
            title: "2 BHK Flat",
            price: "1.25cr",
            size: "1413 sqft",
            location: "Whitefield Bangalore",
            image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Jun/18/Photo_h180_w240/67579841_1_PropertyImage680-0493997235518_180_240.jpg",
            readytomove: "Ready to move"
        },
        {
            title: "3 BHK Flat",
            price: "84 Lac",
            size: "1150 sqft",
            location: "Whitefield, Bangalore",
            image: "https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70630851_1_PropertyImage645-708314894925_180_240.jpg",
            readytomove: "Under Construction"
        },
        {
            title: "3 BHK Flat",
            price: "1.26cr",
            size: "1149 sqft",
            location: "Whitefield Bangalore",
            image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/15/Photo_h180_w240/71874271_5_PropertyImage377-5241042579304_180_240.jpg",
            readytomove: "Under Construction"
        },
        {
            title: "2 BHK Flat",
            price: "1.18cr",
            size: "1140 sqft",
            location: "Whitefield Bangalore",
            image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg",
            readytomove: "Under Construction"
        },
        {
            title: "2 BHK Flat",
            price: "1.40cr",
            size: "1918 sqft",
            location: "Whitefield Bangalore",
            image: "https://img.staticmb.com/mbphoto/property/cropped_images/2024/Mar/21/Photo_h180_w240/71972061_7_restigeparkgrovewhitefield_180_240.jpg",
            readytomove: "Under Construction"
        }
    ];
    const { index, handleNext, handlePrev } =  Arrrowaction(cards.length, cardsToShow);  // Assuming a custom hook for pagination
   

    const addToCart = (property) => {
        const userId = localStorage.getItem("id") // This should be dynamically set based on the logged-in user
        console.log("Sending data:", { userId, items: [property] });
        axios.post('http://localhost:3002/api/cart', {
            userId, 
            items: [property]
        })
        .then(response => {
            console.log('Cart updated:', response.data);
            alert("peoperty added to cart")

        })
            .catch(error =>{
                 console.error('Failed to update cart:', error)
                 alert("something error") });
    };
    return (
        <Container className='mt-5 fresh-properties'>
            <Typography variant='h4' component="h1" className='header'>
                Fresh Properties in Bangalore
            </Typography>
            <Row className='property-grid'>
                {cards.slice(index, index + cardsToShow).map((card, cardIndex) => (
                    <Col key={cardIndex} md={3}>
                        <Card sx={{ maxWidth: 645 }} onMouseEnter={() => setHoverIndex(cardIndex)}
                              onMouseLeave={() => setHoverIndex(-1)}>
                            <CardActionArea>
                                <CardMedia component="img" height="140" image={card.image} alt={`${card.title} image`} />
                                <CardContent>
                                    <Typography gutterBottom variant="h6">
                                        {card.title}
                                    </Typography>
                                    <Typography variant="body1" color="text.secondary">
                                        <CurrencyRupeeIcon />
                                        <strong>{`${card.price} | ${card.size}`}</strong>
                                        <div>{card.location}</div>
                                        <div>{card.readytomove}</div>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {hoverIndex === cardIndex && (
                                    <>
                                        {/* <Button variant="contained" color="primary" className="details-button">
                                            <Link to="/details">Read Details</Link>
                                        </Button> */}
                                         <Link to="/details">
                                        <Button style={{ backgroundColor: 'red', color: 'White', border: '2px solid red', borderRadius: '30px' }}
                                            size="small" color="primary">
                                            Read Details
                                        </Button></Link>
                                        <Button variant="contained" color="info" className="cart-button "
                                                onClick={() => addToCart(card)}>
                                            Add to Cart
                                        </Button>
                                    </>
                                )}
                            </CardActions>
                        </Card>
                    </Col>
                ))}
            </Row>
            <nav className='pagination-controls'>
                {/* {index > 0 && (
                    <Button className='arrow-button prev' onClick={handlePrev}>
                        <ArrowBackIcon />
                    </Button>
                )}
                {index < cards.length - cardsToShow && (
                    <Button className='arrow-button next' onClick={handleNext}>
                        <ArrowForwardIcon />
                    </Button>
                )} */}
                  {index > 0 && (
                    <button className='ArrowButton2' 
                    style={{ position: 'absolute',
                     left: '90px',
                      marginLeft: "0px",
                       top: '387%',
                        borderRadius: '40px',
                         height: '40px'
                          }} 
                          onClick={handlePrev}>
                        <ArrowBackIcon />
                    </button>
                )}
                {index < cards.length - cardsToShow && (
                    <button className='ArrowButton' style={{ position: 'absolute', right: '95px', top: '387%', borderRadius: '20px', height: '40px' }} onClick={handleNext}>
                        <ArrowForwardIcon />
                    </button>
                )}
            </nav>
        </Container>
    );
}

export default FreshProperty;

