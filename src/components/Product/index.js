import React from "react";
import { useState, useEffect } from "react";
import "./Product.css";
import { useDispatch } from "react-redux";
import { add } from "../../store/cartSlice";
import ProductCard from "../ProductCard";

const Product = () => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  const addToCart = (product) => {
    dispatch(add(product));
  }

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center my-4">Product Dashboard</h1>
      <div className="row">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
