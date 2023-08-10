import React, { useState } from 'react';
import './Card.css'
import dummyData from '../dummyData'
export default function Card(props) {
    const product = {}
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={product.imageUrl} alt="picture" />
            </div>
            <div className='card-content'>
                <div className='card-title'>
                    <h3>{product.title}</h3>
                </div>
                <div className='card-body'>
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
