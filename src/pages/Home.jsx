// src/pages/Home.jsx
import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Spinner } from 'react-bootstrap';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="mt-4">
      <h2 className="text-center mb-4">Product Dashboard</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {products.length === 0 ? (
          <div className="text-center w-100">
            <Spinner animation="border" />
          </div>
        ) : (
          products.map(product => (
            <Col key={product.id}>
              <Card className="h-100 text-center">
                <Card.Img
                  variant="top"
                  src={product.image}
                  style={{ height: '150px', objectFit: 'contain' }}
                />
                <Card.Body>
                  <Card.Title style={{ fontSize: "1rem" }}>{product.title}</Card.Title>
                  <Card.Text>₹ {product.price}</Card.Text>
                  <Card.Text className="text-muted">{product.category}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
    </div>
  );
};

export default Home;
