

import React, { useEffect, useState } from "react";
import { Card, Col, Row, Modal, Button } from 'react-bootstrap';
const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
    <div>
      <h1>Owner Details</h1>
      <Row xs={1} md={2} lg={3} className="g-4">
        {allProducts.map((product) => (
          <Col key={product._id}>
            <Card>
              <Card.Img variant="top" src={`http://localhost:3002/${product.image}`} style={{ width: "100%", height:"300px" }} />
              <Card.Body>
                {/* <Card.Title><b>ownerName:</b>{product.name}</Card.Title> */}
                <Card.Text>
                  {/* <p><b>Email:</b>{product.email}</p>
                  <p><b>Number:</b>{product.number}</p> */}
                  {/* <p><b>Flat:</b>{product.flat}</p>
                  <p><b>Price:</b>{product.price}</p>
                  <p><b>SquareFeet:</b>{product.sqft}</p> */}
                  <p><b>Address:</b>{product.address}</p>
                </Card.Text>
              </Card.Body>
              <Button variant="danger" onClick={() => handleOwnerDetailsClick(product)}>Owner details</Button>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Owner Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedProduct && (
            <div>
                              <Card.Img variant="top" src={`http://localhost:3002/${selectedProduct.image}`} style={{ width: "100%", height:"200px" }} />

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
    </div>
  );
};

export default ListProduct;
