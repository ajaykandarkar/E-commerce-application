import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.png';
import './Header.css';
import { FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';
import { useSelector } from 'react-redux';
export const Header = () => {

  const count = useSelector((state)=>state.cart.count)

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top shadow">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src={logo} alt="Logo" width="40" height="40" className="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item ms-3">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link to="/electronicProduct" className="nav-link">
                  Electronics
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link to="/jewelery" className="nav-link">
                  Jewelry
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link to="/mensclothData" className="nav-link">
                  Men's Clothing
                </Link>
              </li>
              <li className="nav-item ms-4">
                <Link to="/womensclothData" className="nav-link">
                  Women's Clothing
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto mx-5">
              <li className=" remove nav-item position-relative mx-3">
                <Link to="/cart" className=" nav-link btn btn-outline-warning"  >
                  <FaShoppingCart /> Cart Product
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {count}
                  <span class="visually-hidden">unread messages</span>
                </span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link to="#" className="nav-link">
                  <FaSignOutAlt /> Log Out
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
