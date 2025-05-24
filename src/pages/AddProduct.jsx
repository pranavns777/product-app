// src/pages/AddProduct.jsx
import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const AddProduct = () => {
  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Add New Product</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control type="text" placeholder="Enter product name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Image URL</Form.Label>
          <Form.Control type="text" placeholder="Enter image URL" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" placeholder="Enter price" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" placeholder="Enter category" />
        </Form.Group>

        <Button variant="primary" disabled>Add Product (Not Functional)</Button>
      </Form>
    </Container>
  );
};

export default AddProduct;
