import "./DisplayCartUserStyle.css";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from "react";
import { removeFromCart, incrementQuantity, decrementQuantity } from '../Redux/cart/cartSlice';

export const DisplayCartUser = () => {
    const [sortOrder, setSortOrder] = useState("asc");
    const [sortBy, setSortBy] = useState("id"); 
    const cart = useSelector((state) => state.cart.cartArray);
    const totalPrice = useSelector((state) => state.cart.totalPrice);
    const dispatch = useDispatch();

    const removeCartInfo = (id) => {
        dispatch(removeFromCart(id));
    };

    const incrementQuantityBy = (id) => {
        dispatch(incrementQuantity(id));
    };

    const decrementQuantityBy = (id) => {
        dispatch(decrementQuantity(id)); 
    };

    const handleSort = (key) => {
        if (sortBy === key) {
            setSortOrder(sortOrder === "asc" ? "desc" : "asc");
        } else {
            setSortBy(key);
            setSortOrder("asc");
        }
    };

    const sortedData = [...cart].sort((a, b) => {
        const aValue = a[sortBy];
        const bValue = b[sortBy];
        if (typeof aValue === 'string' && typeof bValue === 'string') {
            return sortOrder === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        } else {
            return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
        }
    });

    return (
        <div className='container' style={{ marginTop: "100px" }}>
            <div className='card'>
                <div className='card-body'>
                    <h1 className='card-title'>Shopping Cart</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" style={{ cursor: "pointer" }} onClick={() => handleSort('title')}>
                                    Title {sortBy === "title" && (sortOrder === "asc" ? "↑" : "↓")}
                                </th>
                                <th scope="col">Image</th>
                                <th scope="col" style={{ cursor: "pointer" }} onClick={() => handleSort('category')}>
                                    Category {sortBy === "category" && (sortOrder === "asc" ? "↑" : "↓")}
                                </th>
                                <th scope="col" style={{ cursor: "pointer" }} onClick={() => handleSort('price')}>
                                    Price {sortBy === "price" && (sortOrder === "asc" ? "↑" : "↓")}
                                </th>
                                <th scope='col'></th>
                                <th scope='col'>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedData.map((item, index) => (
                                <tr key={item.id}>
                                    <td>{index + 1}</td>
                                    <td style={{ width: "315px" }}>{item.title}</td>
                                    <td className='ps-1'>
                                        <img className='cartimg' src={item.image} alt="image" />
                                    </td>
                                    <td>{item.category}</td>
                                    <td>{(item.price * item.quantity).toFixed(2)}</td>
                                    <td>
                                        <button className='btn btn-danger' onClick={() => removeCartInfo(item.id)}>Remove</button>
                                    </td>
                                    <td>
                                        <div>
                                            <button className='btn btn-outline-primary' onClick={() => incrementQuantityBy(item.id)}>+</button>
                                            <span className="btn btn-outline-primary">{item.quantity}</span>
                                            <button className='btn btn-outline-primary' onClick={() => decrementQuantityBy(item.id)}>-</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <div>
                        <h3>Total Cart Price: <span>{totalPrice.toFixed(2)}</span></h3>
                    </div>
                    <div>
                        <button className="btn btn-primary">Place Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
