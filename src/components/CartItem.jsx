import React from 'react';

import { AppContext } from '../App';

function CartCard({ item }) {
    const { removeFromCart } = React.useContext(AppContext);

    const remove = () => {
        removeFromCart(item.id);
    };

    return (
        <div className="header-cart-item">
            <div className="header-cart-image">
                <img src={item.imgUrl} alt="Картинка" />
            </div>
            <div className="header-cart-info">
                <div className="header-cart-title">{item.name}</div>
                <div className="header-cart-price">{item.price} руб.</div>
            </div>
            <button onClick={remove}>
                <svg
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24">
                    <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                </svg>
            </button>
        </div>
    );
}

export default CartCard;
