import React from 'react';

import { AppContext } from '../App';

import UserCard from '../components/UserCard';

function User() {
    const { cartItems, sum } = React.useContext(AppContext);

    return (
        <div className="user">
            <div className="user-container">
                <h2 className="user-title">
                    {cartItems.length > 0
                        ? `Ваша корзина (${cartItems.length})`
                        : 'Ваша корзина пуста :('}
                </h2>
                <div className="user-body">
                    {cartItems.map((item) => {
                        return <UserCard item={item} />;
                    })}
                </div>
                <div className="user-footer">
                    <p>Итого: {sum} руб.</p>
                    <button>Оформить заказ</button>
                </div>
            </div>
        </div>
    );
}

export default User;
