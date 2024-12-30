import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from '../../store/cartSlice';
import { Card, Button } from 'react-bootstrap';

const Cart = () => {
    const dispatch = useDispatch();
    const cartProducts = useSelector(state => state.cart);

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }

    return (
        <div className="container my-4">
            <h2 className="text-center mb-4">Shopping Cart</h2>
            {cartProducts.length === 0 ? (
                <div className="text-center">Your cart is empty</div>
            ) : (
                <>
                    {cartProducts.map((product) => (
                        <Card className="mb-3" key={product.id}>
                            <Card.Body className="d-flex align-items-center">
                                <img 
                                    src={product.image} 
                                    alt={product.title}
                                    style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                                    className="me-4"
                                />
                                <div className="flex-grow-1">
                                    <h5>{product.title}</h5>
                                    <h6 className="text-muted">INR {product.price}</h6>
                                </div>
                                <Button 
                                    variant="danger" 
                                    onClick={() => handleRemove(product.id)}
                                >
                                    Remove
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                    <div className="d-flex justify-content-end mt-4">
                        <Card className="shadow-sm" style={{ width: '300px' }}>
                            <Card.Body>
                                <h5>Cart Summary</h5>
                                <hr />
                                <div className="d-flex justify-content-between mb-2">
                                    <span>Total Items:</span>
                                    <span>{cartProducts.length}</span>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <h5>Total Amount:</h5>
                                    <h5>INR {cartProducts.reduce((total, product) => 
                                        total + product.price, 0).toFixed(2)}
                                    </h5>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </>
            )}
        </div>
    );
}

export default Cart;
