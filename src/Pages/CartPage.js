import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeFromCart } from '../features/Cart/CartSlice';
import Navbar from '../Components/Navbar';


function CartPage() {
  // Access the items array inside the cart slice
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleIncrease = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h2>Shopping Cart</h2>
        <div className="row">
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            <div className="col-md-12">
              {cart.map((item) => (
                <div className="card mb-3" key={item.id}>
                  <div className="row g-0">
                    <div className="col-md-4">
                      <img
                        src={item.image}
                        className="img-fluid rounded-start"
                        alt={item.title}
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{item.title}</h5>
                        <p className="card-text">Price: ${item.price}</p>
                        <p className="card-text">Quantity: {item.quantity}</p>
                        <button
                          className="btn btn-success me-2"
                          onClick={() => handleIncrease(item.id)}
                        >
                          +
                        </button>
                        <button
                          className="btn btn-warning me-2"
                          onClick={() => handleDecrease(item.id)}
                        >
                          -
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => handleRemove(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <h3>Total: ${totalPrice.toFixed(2)}</h3>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default CartPage;
