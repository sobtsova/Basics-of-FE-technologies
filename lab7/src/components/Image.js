import React, { useState } from 'react';

function Image() {
    const [isCloneVisible, setCloneVisible] = useState(false);
    const [scale, setScale] = useState(1);

    const handleAdd = () => {
        setCloneVisible(true);
        setScale(1);
    };

    const handleIncrease = () => {
        if (isCloneVisible) {
            setScale(prevScale => prevScale + 0.1);
        }
    };

    const handleDecrease = () => {
        if (isCloneVisible) {
            setScale(prevScale => Math.max(0.2, prevScale - 0.1));
        }
    };

    const handleRemove = () => {
        setCloneVisible(false);
    };

    return (
        <div>
            <h3>Оригінал зображення</h3>
            <div className="image-container">
                <a href="https://www.schwerte.de/">
                    <img 
                        src="schwerte.jpg" 
                        alt="Шверте Оригінал" 
                        style={{ width: '500px' }} 
                    />
                </a>
            </div>

            <h3>Змінене зображення</h3>
            <div className="clone-container" style={{ 
                width: '500px', 
                height: '350px', 
                overflow: 'hidden', 
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {isCloneVisible && (
                    <img 
                        src="schwerte.jpg" 
                        alt="Шверте Копія" 
                        style={{ 
                            width: '100%', 
                            transform: `scale(${scale})`, 
                            transition: 'transform 0.4s ease',
                        }} 
                    />
                )}
            </div>

            <div id="controls">
                <button onClick={handleAdd}>Додати</button>
                <button onClick={handleIncrease}>Збільшити</button>
                <button onClick={handleDecrease}>Зменшити</button>
                <button onClick={handleRemove}>Видалити</button>
            </div>
        </div>
    );
}

export default Image;