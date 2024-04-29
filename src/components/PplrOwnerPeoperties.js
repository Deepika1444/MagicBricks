 
// import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// // import Arrrowaction from '../reducers/arrowAction';

// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
 
// export default function MultiActionAreaCard() {
//   const [hoverStates, setHoverStates] = useState({});
//   const cardsToShow = 4;
//   const properties = [
//     {
//         id: 1,
//         imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg',
//         title: '3 BHK Flat',
//         price: '1.25cr',
//         size: '1413 sqft',
//         location: 'Thubarahalli, Whitefield Bangalore',
//         status: 'Ready to move',
//     },
//     {
//         id: 2,
//         imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70565117_8_1703575295927-924_180_240.jpg',
//         title: '3 BHK Flat',
//         price: '1.25cr',
//         size: '1413 sqft',
//         location: 'Thubarahalli, Whitefield Bangalore',
//         status: 'Ready to move',
//     },
//     {
//         id: 3,
//         imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/27/Photo_h180_w240/657854521ffbc3fdf4af0db3-1706335378_71094203_180_240.jpg',
//         title: '1 BHK Flat',
//         price: '35 lac',
//         size: '1413 sqft',
//         location: 'Thubarahalli, Whitefield Bangalore',
//         status: 'Ready to move',
//     },
//     {
//         id: 4,
//         imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg',
//         title: '3 BHK Flat',
//         price: '1.25cr',
//         size: '1413 sqft',
//         location: 'Thubarahalli, Whitefield Bangalore',
//         status: 'Ready to move',
//     },
//     {
//       id: 5,
//       imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg',
//       title: '3 BHK Flat',
//       price: '1.25cr',
//       size: '1412 sqft',
//       location: 'Thubarahalli, Whitefield Bangalore',
//       status: 'Ready to move',
//   },
//   {
//     id: 6,
//     imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg',
//     title: '3 BHK Flat',
//     price: '1.25cr',
//     size: '1413 sqft',
//     location: 'Thubarahalli, Whitefield Bangalore',
//     status: 'Ready to move',
// },

// ];

//  // Adjust based on your layout/number of cards to show at once
// //   const { index, handleNext, handlePrev } = Arrrowaction(properties.length, cardsToShow);

//   const handleMouseEnter = (id) => {
//       setHoverStates(prev => ({ ...prev, [id]: true }));
//   };

//   const handleMouseLeave = (id) => {
//       setHoverStates(prev => ({ ...prev, [id]: false }));
//   };

//   return (
//       <>
//           <Container className='mt-5'>
//               <Typography variant='p' style={{ marginTop: '30px', fontSize: '35px' }} className='nav_boldB'>
//                   Popular Owner Properties
//               </Typography>
//               <Row style={{ marginTop: '10px' }}>
//                   {properties.slice(index, index + cardsToShow).map((property) => (
//                       <Col key={property.id} md={3}> {/* Adjust column sizing as needed */}
//                           <Card sx={{ maxWidth: 345 }}
//                               onMouseEnter={() => handleMouseEnter(property.id)}
//                               onMouseLeave={() => handleMouseLeave(property.id)}
//                           >
//                               <CardActionArea>
//                                   <CardMedia
//                                       component="img"
//                                       height="140"
//                                       image={property.imageUrl}
//                                       alt="Property Image"
//                                   />
//                                   <CardContent>
//                                       <Typography gutterBottom variant="h6" component="div">
//                                           {property.title}
//                                       </Typography>
//                                       <Typography variant="h6" color="text.secondary">
//                                           <CurrencyRupeeIcon/><b style={{ color: 'black' }}>{property.price} | {property.size}</b>
//                                           <Typography>{property.location} {property.status}</Typography>
//                                       </Typography>
//                                   </CardContent>
//                               </CardActionArea>
//                               <CardActions>
//                                   {hoverStates[property.id] && (
//                                       <Button
//                                           style={{
//                                               backgroundColor: 'red',
//                                               color: 'White',
//                                               border: '2px solid red',
//                                               borderRadius: '30px'
//                                           }}
//                                           size="small"
//                                           color="primary">
//                                           Read Details
//                                       </Button>
//                                   )}
//                               </CardActions>
//                           </Card>
//                       </Col>
//                   ))}
//               </Row>
//               {index > 0 && (
//                   <button  className='ArrowButton2'   style={{ position: 'absolute', left: '90px', top: '150%' ,borderRadius: '40px', height: '40px'}}>
//                       <ArrowBackIcon />
//                   </button>
                   
//               )}
//               {index < properties.length - cardsToShow && (
//                   <button   className='ArrowButton'    style={{ position: 'absolute', right: '90px', top: '150%',borderRadius: '40px', height: '40px'}}>
//                       <ArrowForwardIcon />
//                   </button>
//               )}
//           </Container>
//       </>
//   );
// }



import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

export default function MultiActionAreaCard() {
    const [hoverStates, setHoverStates] = useState({});
    const properties = [
        {
            id: 1,
            imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg',
            title: '3 BHK Flat',
            price: '1.25cr',
            size: '1413 sqft',
            location: 'Thubarahalli, Whitefield Bangalore',
            status: 'Ready to move',
        },
        {
            id: 2,
            imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70565117_8_1703575295927-924_180_240.jpg',
            title: '3 BHK Flat',
            price: '1.25cr',
            size: '1413 sqft',
            location: 'Thubarahalli, Whitefield Bangalore',
            status: 'Ready to move',
        },
        {
            id: 3,
            imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/27/Photo_h180_w240/657854521ffbc3fdf4af0db3-1706335378_71094203_180_240.jpg',
            title: '1 BHK Flat',
            price: '35 lac',
            size: '1413 sqft',
            location: 'Thubarahalli, Whitefield Bangalore',
            status: 'Ready to move',
        },
        {
            id: 4,
            imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg',
            title: '3 BHK Flat',
            price: '1.25cr',
            size: '1413 sqft',
            location: 'Thubarahalli, Whitefield Bangalore',
            status: 'Ready to move',
        }
    
    ];

    const handleMouseEnter = (id) => {
        setHoverStates(prev => ({ ...prev, [id]: true }));
    };

    const handleMouseLeave = (id) => {
        setHoverStates(prev => ({ ...prev, [id]: false }));
    };

    return (
        <Container className='mt-5'>
            <Typography variant='p' style={{ marginTop: '30px', fontSize: '35px' }} className='nav_boldB'>
                Popular Owner Properties
            </Typography>
            <Row style={{ marginTop: '10px' }}>
                {properties.map((property) => (
                    <Col key={property.id} md={3}>
                        <Card sx={{ maxWidth: 345 }}
                            onMouseEnter={() => handleMouseEnter(property.id)}
                            onMouseLeave={() => handleMouseLeave(property.id)}
                        >
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={property.imageUrl}
                                    alt="Property Image"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="div">
                                        {property.title}
                                    </Typography>
                                    <Typography variant="h6" color="text.secondary">
                                        <CurrencyRupeeIcon/><b style={{ color: 'black' }}>{property.price} | {property.size}</b>
                                        <Typography>{property.location} {property.status}</Typography>
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                {hoverStates[property.id] && (
                                    <Button
                                        style={{
                                            backgroundColor: 'red',
                                            color: 'White',
                                            border: '2px solid red',
                                            borderRadius: '30px'
                                        }}
                                        size="small"
                                        color="primary">
                                        Read Details
                                    </Button>
                                )}
                            </CardActions>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
