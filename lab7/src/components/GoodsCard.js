import React from 'react';
import './Goods.css'; 

function GoodsCard(props) {
    return (
        <div className="goods-card">
            <div className="image-wrapper">
                <img src={props.image} alt={props.name} />
            </div>
            <h3>{props.name}</h3>
            <p className="price">Ціна: {props.price} грн</p>
        </div>
    );
}

export default GoodsCard;