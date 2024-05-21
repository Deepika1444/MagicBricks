 

import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Typography, CardContent, CardMedia, CardActionArea, CardActions, Button } from '@mui/material';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Arrrowaction from '../reducers/arrowAction';
import axios from 'axios';

function FreshProperty() {
    const [hoverIndex, setHoverIndex] = useState(-1);
    const [cards, setCards] = useState([]);
    const cardsToShow = 4;

    useEffect(() => {
        axios.get('http://localhost:3002/api/properties')
            .then(response => {
                setCards(response.data);
            })
            .catch(error => {
                console.error('Failed to fetch properties:', error);
            });
    }, []);

    const { index, handleNext, handlePrev } = Arrrowaction(cards.length, cardsToShow);

    const addToCart = (property, userName) => {
        const currentCart = JSON.parse(localStorage.getItem("cartItems") || "[]");
        currentCart.push(property);
        localStorage.setItem("cartItems", JSON.stringify(currentCart));
    
        axios.post('http://localhost:3002/api/cart', {
            userName, 
            items: [property]
        })
        .then(response => {
            console.log('Cart updated:', response.data);
            alert("Property added to WishList");
        })
        .catch(error => {
            console.error('Failed to update Wishlist:', error);
            alert("Something went wrong");
        });
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
                                <CardMedia 
                                component="img" 
                                height="140" 
                                image={card.image} 
                                alt={`${card.title} image`} />
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
                                         <Link to="/details">
                                            <Button style={{ backgroundColor: 'red', color: 'White', border: '2px solid red', borderRadius: '30px' }}
                                                size="small" color="primary">
                                                Read Details
                                            </Button>
                                         </Link>
                                        <Button variant="contained" color="info" className="cart-button"
                                                onClick={() => addToCart(card)}>
                                            Add to WishList
                                        </Button>
                                    </>
                                )}
                            </CardActions>
                        </Card>
                    </Col>
                ))}
            </Row>
            <nav className='pagination-controls'>
                {index > 0 && (
                    <button className='ArrowButton2' 
                    style={{ position: 'absolute', left: '90px', marginLeft: "0px", top: '377%', borderRadius: '40px', height: '40px' }} 
                    onClick={handlePrev}>
                        <ArrowBackIcon />
                    </button>
                )}
                {index < cards.length - cardsToShow && (
                    <button className='ArrowButton' style={{ position: 'absolute', right: '95px', top: '377%', borderRadius: '20px', height: '40px' }} onClick={handleNext}>
                        <ArrowForwardIcon />
                    </button>
                )}
            </nav>
        </Container>
    );
}

export default FreshProperty;
