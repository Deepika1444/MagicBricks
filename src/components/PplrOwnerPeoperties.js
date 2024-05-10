 
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



// import React, { useState } from 'react';
// import { Container, Row, Col } from 'react-bootstrap';
// import { Card, CardContent, CardMedia, Typography, Button, CardActionArea, CardActions } from '@mui/material';
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

// export default function MultiActionAreaCard() {
//     const [hoverStates, setHoverStates] = useState({});
//     const properties = [
//         {
//             id: 1,
//             imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg',
//             title: '3 BHK Flat',
//             price: '1.25cr',
//             size: '1413 sqft',
//             location: 'Thubarahalli, Whitefield Bangalore',
//             status: 'Ready to move',
//         },
//         {
//             id: 2,
//             imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2023/Dec/26/Photo_h180_w240/70565117_8_1703575295927-924_180_240.jpg',
//             title: '3 BHK Flat',
//             price: '1.25cr',
//             size: '1413 sqft',
//             location: 'Thubarahalli, Whitefield Bangalore',
//             status: 'Ready to move',
//         },
//         {
//             id: 3,
//             imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2024/Jan/27/Photo_h180_w240/657854521ffbc3fdf4af0db3-1706335378_71094203_180_240.jpg',
//             title: '1 BHK Flat',
//             price: '35 lac',
//             size: '1413 sqft',
//             location: 'Thubarahalli, Whitefield Bangalore',
//             status: 'Ready to move',
//         },
//         {
//             id: 4,
//             imageUrl: 'https://img.staticmb.com/mbphoto/property/cropped_images/2024/Feb/16/Photo_h180_w240/71421853_4_hatsAppImage20240212at10.59.56AM_180_240.jpeg',
//             title: '3 BHK Flat',
//             price: '1.25cr',
//             size: '1413 sqft',
//             location: 'Thubarahalli, Whitefield Bangalore',
//             status: 'Ready to move',
//         }
    
//     ];

//     const handleMouseEnter = (id) => {
//         setHoverStates(prev => ({ ...prev, [id]: true }));
//     };

//     const handleMouseLeave = (id) => {
//         setHoverStates(prev => ({ ...prev, [id]: false }));
//     };

//     return (
//         <Container className='mt-5'>
//             <Typography variant='p' style={{ marginTop: '30px', fontSize: '35px' }} className='nav_boldB'>
//                 Popular Owner Properties
//             </Typography>
//             <Row style={{ marginTop: '10px' }}>
//                 {properties.map((property) => (
//                     <Col key={property.id} md={3}>
//                         <Card sx={{ maxWidth: 345 }}
//                             onMouseEnter={() => handleMouseEnter(property.id)}
//                             onMouseLeave={() => handleMouseLeave(property.id)}
//                         >
//                             <CardActionArea>
//                                 <CardMedia
//                                     component="img"
//                                     height="140"
//                                     image={property.imageUrl}
//                                     alt="Property Image"
//                                 />
//                                 <CardContent>
//                                     <Typography gutterBottom variant="h6" component="div">
//                                         {property.title}
//                                     </Typography>
//                                     <Typography variant="h6" color="text.secondary">
//                                         <CurrencyRupeeIcon/><b style={{ color: 'black' }}>{property.price} | {property.size}</b>
//                                         <Typography>{property.location} {property.status}</Typography>
//                                     </Typography>
//                                 </CardContent>
//                             </CardActionArea>
//                             <CardActions>
//                                 {hoverStates[property.id] && (
//                                     <Button
//                                         style={{
//                                             backgroundColor: 'red',
//                                             color: 'White',
//                                             border: '2px solid red',
//                                             borderRadius: '30px'
//                                         }}
//                                         size="small"
//                                         color="primary">
//                                         Read Details
//                                     </Button>
//                                 )}
//                             </CardActions>
//                         </Card>
//                     </Col>
//                 ))}
//             </Row>
//         </Container>
//     );
// }

// import React, { useEffect, useState } from "react";
// import { Card, Col, Row, Modal, Button ,Container} from 'react-bootstrap';
// import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
// import Arrrowaction from '../reducers/arrowAction';
// const ListProduct = () => {
//   const [allProducts, setAllProducts] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showModal, setShowModal] = useState(false);

//   const cardsToShow = 4;
//   const { index, handleNext, handlePrev } =  Arrrowaction(cards.length, cardsToShow);  // Assuming a custom hook for pagination

//   const fetchInfo = async () => { 
//     try {
//       const response = await fetch('http://localhost:3002/allproducts');
//       if (!response.ok) {
//         throw new Error('Failed to fetch products');
//       }
//       const data = await response.json();
//       setAllProducts(data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   useEffect(() => {
//     fetchInfo();
//   }, []);

//   const handleOwnerDetailsClick = (product) => {
//     setSelectedProduct(product);
//     setShowModal(true);
//   };

//   const handleCloseModal = () => {
//     setShowModal(false);
//   };

//   return (
//     <Container>
//       <h1>Owner Details</h1>
//       <Row xs={1} md={2} lg={3} >
//         {allProducts.map((product) => (
//         //   <Col key={product._id}>
//              <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
//             <Card>
//               <Card.Img variant="top" src={`http://localhost:3002/${product.image}`} style={{ width: "100%", height:"200px" }} />
//               <Card.Body>
//                 {/* <Card.Title><b>ownerName:</b>{product.name}</Card.Title> */}
//                 <Card.Text>
//                   {/* <p><b>Email:</b>{product.email}</p>
//                   <p><b>Number:</b>{product.number}</p> */}
//                   {/* <p><b>Flat:</b>{product.flat}</p>
//                   <p><b>Price:</b>{product.price}</p>
//                   <p><b>SquareFeet:</b>{product.sqft}</p> */}
//                   <p><b>Address:</b>{product.address}</p>
//                 </Card.Text>
//               </Card.Body>
//               <Button variant="danger" onClick={() => handleOwnerDetailsClick(product)}>Owner details</Button>
//             </Card>
                   
//             {index > 0 && (
//                     <button className='ArrowButton2' 
//                     style={{ position: 'absolute',
//                      left: '90px',
//                       marginLeft: "0px",
//                        top: '340%',
//                         borderRadius: '40px',
//                          height: '40px'
//                           }} 
//                           onClick={handlePrev}>
//                         <ArrowBackIcon />
//                     </button>
//                 )}
//                 {index < cards.length - cardsToShow && (
//                     <button className='ArrowButton' style={{ position: 'absolute', right: '95px', top: '340%', borderRadius: '20px', height: '40px' }} onClick={handleNext}>
//                         <ArrowForwardIcon />
//                     </button>
//                 )}
//           </Col>
//         ))}
//       </Row>

//       <Modal show={showModal} onHide={handleCloseModal}>
//         <Modal.Header closeButton>
//           <Modal.Title>Owner Details</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           {selectedProduct && (
//             <div>
//                               <Card.Img variant="top" src={`http://localhost:3002/${selectedProduct.image}`} style={{ width: "100%", height:"200px" }} />

//               <p><b>Owner Name:</b> {selectedProduct.name}</p>
//               <p><b>Email:</b> {selectedProduct.email}</p>
//               <p><b>Number:</b> {selectedProduct.number}</p>
//               <p><b>Flat:</b> {selectedProduct.flat}</p>
//               <p><b>Price:</b> {selectedProduct.price}</p>
//               <p><b>Square Feet:</b> {selectedProduct.sqft}</p>
//               <p><b>Address:</b> {selectedProduct.address}</p>
//             </div>
//           )}
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
//         </Modal.Footer>
//       </Modal>
//     </Container>
//   );
// };

// export default ListProduct;




import React, { useEffect, useState } from "react";
import { Card, Col, Row, Modal, Button, Container } from 'react-bootstrap';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Arrrowaction from '../reducers/arrowAction';

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const cardsToShow = 4;
  // Make sure to replace `cards.length` with `allProducts.length`
  const { index, handleNext, handlePrev } = Arrrowaction(allProducts.length, cardsToShow);  

  const fetchInfo = async () => { 
    try {
      const response = await fetch('http://localhost:3002/allproducts');
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  const handleOwnerDetailsClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container>
      <h1>Owner Details</h1>
      <Row xs={1} md={2} lg={3}>
        {allProducts.slice(index, index + cardsToShow).map((product) => (
          <Col key={product._id} xs={12} sm={6} md={4} lg={3}>
            <Card>
              <Card.Img variant="top" src={`http://localhost:3002/${product.image}`} style={{ width: "100%", height: "200px" }} />
              <Card.Body>
                <Card.Text>
                  <p><b>Address:</b>{product.address}</p>
                </Card.Text>
                <Button variant="danger" onClick={() => handleOwnerDetailsClick(product)}>Owner details</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        {index > 0 && (
          <Button className='ArrowButton2' style={{ position: 'absolute', left: '70px', top: '120%',width:'40px',borderRadius: '20px', }} onClick={handlePrev}>
            <ArrowBackIcon />
          </Button>
        )}
        {index < allProducts.length - cardsToShow && (
          <Button className='ArrowButton' style={{ position: 'absolute', right: '70px', top: '120%',width:'40px',borderRadius: '20px', height: '40px' }} onClick={handleNext}>
            <ArrowForwardIcon />
          </Button>
        )}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Owner Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div>
              <Card.Img variant="top" src={`http://localhost:3002/${selectedProduct.image}`} style={{ width: "100%", height: "200px" }} />
              <p><b>Owner Name:</b> {selectedProduct.name}</p>
              <p><b>Email:</b> {selectedProduct.email}</p>
              <p><b>Number:</b> {selectedProduct.number}</p>
              <p><b>Flat:</b> {selectedProduct.flat}</p>
              <p><b>Price:</b> {selectedProduct.price}</p>
              <p><b>Square Feet:</b> {selectedProduct.sqft}</p>
              <p><b>Address:</b> {selectedProduct.address}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ListProduct;

 