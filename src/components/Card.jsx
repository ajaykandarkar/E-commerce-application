import React from 'react';
import './Card.css';
import { FaShoppingCart, FaInfoCircle } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addtoCart, removeFromCart } from '../Redux/cart/cartSlice';
import { useNavigate } from 'react-router-dom';

export const Card = (props) => {
  const { id, title, price,category,description, image, rating } = props;
  const toggleCartBtn = useSelector((state) => state.cart.cartToggleStatus[id] ?? true);
  const dispatch = useDispatch();
  
  const AddtoCart = () => {
    if (toggleCartBtn) {
      dispatch(addtoCart(props));
    } else {
      dispatch(removeFromCart(id));
    }
  };

  const navigate = useNavigate();
  const handelNavigate = () => {
    navigate('/viewDetails', { state:props});
  };

  return (
    <>
      <div className="card product-card m-3" style={{ width: '22rem', transition: 'transform 0.2s ease' }}>
        <img className="card-img-top img-fluid mt-4" src={image} alt={title} />
        <div className="card-body d-flex flex-column justify-content-between">
          <h5 className="card-title">{title}</h5>
          <p className="text-muted">{category}</p>
          <h5 className="text-success">Price: {price} ₹</h5>
          <p><strong>Rating:</strong> {rating.rate} ⭐ ({rating.count} reviews)</p>
          <div className="d-flex justify-content-between mt-3">
            <button
              className={`btn ${toggleCartBtn ? 'btn-primary' : 'btn-danger'}`}
              onClick={AddtoCart}
            >
              <FaShoppingCart /> {toggleCartBtn ? 'Add to Cart' : 'Remove'}
            </button>
            <button className="btn btn-warning" onClick={handelNavigate}>
              <FaInfoCircle /> View Details
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
