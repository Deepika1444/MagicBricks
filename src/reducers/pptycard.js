import React from 'react';
import { Card, Button } from 'react-bootstrap';

const PropertyCard = () => {
  return (
    <Card>
      <Card.Img variant="top" src="https://img.staticmb.com/mbimages/project/Photo_h310_w462/2024/05/13/Project-Photo-84-Abhigna-Misty-Woods-Bangalore-5311065_491_800_310_462.jpg" />
      <Card.Body>
        <Card.Title>2 BHK Ready to Occupy Flat</Card.Title>
        <Card.Text>
          <p>Location: Gopalan Olympia</p>
          <p>Price: ₹78 Lac</p>
          <p>Area: 980 sqft</p>
          <p>Bathrooms: 2</p>
        </Card.Text>
        <Button variant="primary">Book Visit</Button>
        <Button variant="secondary" className="ml-2">Get Info</Button>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
