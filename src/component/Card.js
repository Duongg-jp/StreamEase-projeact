import React from "react";
import "./Card.css";

export default function Card(props) {
  const { product } = props;

  return (
    <div className="card-container rounded">
      <div className="image-container">
        <img src={product.imageUrl} alt={product.name} />
      </div>
      <div className="card-content bg-light">
        <div className="card-title">
          <h3>{product.name}</h3>
        </div>
        <div className="card-body">
          <p className="mb-0 d-flex align-items-center">
            Type:
            <span className="px-2 fw-bold"> {product.type}</span>
          </p>
          <p className="mb-0 d-flex align-items-center">
            Price:
            <span className="px-2 fw-bold"> {product.price} $</span>
          </p>
          <p className="mb-2">{product.description}</p>
        </div>
        <div className="py-3">
          <button className="left-button">
            <div>
              <a>Đặt Hàng</a>
            </div>
          </button>
          <button className="right-button">
            <div>
              <a>Mua Trả Góp</a>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
