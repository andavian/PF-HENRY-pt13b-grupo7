import React from 'react';

const CardCart = ({ product }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={product.primaryimage} className="img-fluid rounded-start" alt={product.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-text">
              <small className="text-muted">Price: ${product.price} - Quantity: {product.quantity} - Total: ${product.price * product.quantity}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCart;
