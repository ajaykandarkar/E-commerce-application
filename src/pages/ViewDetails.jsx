import React from 'react';
import { useLocation } from 'react-router-dom';
import './ViewDetails.css'
export const ViewDetails = () => {
  const location = useLocation();
  const { id, title, price, category, description, image, rating } = location.state;

  return (
    <div className=" container fixed-top" >
      <div className="row">
        <div className=" card pt-4 ps-5 col-md-4 text-center">
          <img className="img-fluid w-75" src={image} alt={title} />
        </div>
        <div className="col-md-8 ps-5">
          <h1>{title}</h1>
          <p className="text-muted">{category}</p>
          <h4 className="text-success">Price: {price} ₹</h4>
          <p><strong>Rating:</strong> {rating.rate} ⭐ ({rating.count} reviews)</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};
