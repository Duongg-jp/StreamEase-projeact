import React, { useState } from 'react';
import './Card.css'
export default function Card(props) {
    const {product} = props
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={product.imageUrl} alt="picture" />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{product.name}</h3>
                </div>
                <div className='card-body'>
                    <p className='mb-0 d-flex align-items-center'>
                        Type: 
                    <span className='px-2 fw-bold'> {product.type}</span>
                    </p>
                    <p>{product.description}
                    </p>
                </div>
            </div>

            <div className='btn'>
                <button >
                    <div>
                        <a>add to card</a>
                        <a>{product.price}</a>
                    </div>
                </button>
            </div>
        </div>
    );
};
