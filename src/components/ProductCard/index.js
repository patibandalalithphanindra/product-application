import React from 'react';
import { Card, Button } from "react-bootstrap";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="col-md-3 mb-4">
      <Card className="product-card h-100">
        <div className="image-container">
          <Card.Img variant="top" src={product.image} className="product-image" />
        </div>
        <Card.Body className="d-flex flex-column">
          <Card.Title className="product-title">{product.title}</Card.Title>
          <Card.Text className="product-price">INR: {product.price}</Card.Text>
          <Button 
            variant="primary" 
            className="mt-auto" 
            onClick={() => onAddToCart(product)}
          >
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
