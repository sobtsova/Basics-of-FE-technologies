import React from 'react';
import GoodsCard from './GoodsCard';
import './Goods.css';

function GoodsGallery() {
    const goods = [
        { 
            id: 1, 
            name: "VR Окуляри Oculus", 
            price: 15000, 
            image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?w=500&auto=format&fit=crop&q=60" 
        },
        { 
            id: 2, 
            name: "Механічна клавіатура", 
            price: 3400, 
            image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&auto=format&fit=crop&q=60" 
        },
        { 
            id: 3, 
            name: "Дрон DJI Mini", 
            price: 25000, 
            image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=400&auto=format&fit=crop&q=60" 
        },
        { 
            id: 4, 
            name: "Навушники Sony", 
            price: 5600, 
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&auto=format&fit=crop&q=60" 
        },
        { 
            id: 5, 
            name: "Apple Watch", 
            price: 8900, 
            image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&auto=format&fit=crop&q=60" 
        },
        { 
            id: 6, 
            name: "Геймпад Xbox", 
            price: 2100, 
            image: "https://images.unsplash.com/photo-1730872262939-9d34e4381341?q=80&w=842&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        }
    ];

    return (
        <div className="gallery-section">
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Топ гаджетів 2025</h2>
            <div className="goods-grid">
                {goods.map(item => (
                    <GoodsCard 
                        key={item.id} 
                        image={item.image} 
                        name={item.name} 
                        price={item.price} 
                    />
                ))}
            </div>
        </div>
    );
}

export default GoodsGallery;