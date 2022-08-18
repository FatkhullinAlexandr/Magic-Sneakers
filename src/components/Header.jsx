import React from 'react';
import { Link } from 'react-router-dom';

import CartCard from './CartItem';
import { AppContext } from '../App';

function Header() {
    const [activeCart, setActiveCart] = React.useState(false);

    const { searchValue, setSearchValue, cartItems, sum } = React.useContext(AppContext);

    const addActiveCart = () => {
        setActiveCart(true);
    };

    const removeActiveCart = () => {
        setActiveCart(false);
    };

    const getInputValue = (e) => {
        setSearchValue(e.target.value);
    };

    const clearInput = () => {
        setSearchValue('');
    };

    return (
        <div className="header">
            <div className="header-container">
                <Link to="/">
                    <p>Magic Sneakers</p>
                </Link>
                <div className="header-icons">
                    <div className="header-search">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 20 20">
                            <title>search</title>
                            <path d="M12.9 14.32c-1.34 1.049-3.050 1.682-4.908 1.682-4.418 0-8-3.582-8-8s3.582-8 8-8c4.418 0 8 3.582 8 8 0 1.858-0.633 3.567-1.695 4.925l0.013-0.018 5.35 5.33-1.42 1.42-5.33-5.34zM8 14c3.314 0 6-2.686 6-6s-2.686-6-6-6v0c-3.314 0-6 2.686-6 6s2.686 6 6 6v0z"></path>
                        </svg>
                        <input
                            value={searchValue}
                            onChange={getInputValue}
                            type="text"
                            placeholder="Поиск..."
                        />
                        <button className={searchValue ? '' : 'close'} onClick={clearInput}>
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 24 24">
                                <title>clear</title>
                                <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                            </svg>
                        </button>
                    </div>
                    <Link to="/user" className="user-link">
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32">
                            <path d="M18 22.082v-1.649c2.203-1.241 4-4.337 4-7.432 0-4.971 0-9-6-9s-6 4.029-6 9c0 3.096 1.797 6.191 4 7.432v1.649c-6.784 0.555-12 3.888-12 7.918h28c0-4.030-5.216-7.364-12-7.918z"></path>
                        </svg>
                    </Link>
                    <button onClick={addActiveCart}>
                        <svg
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 32 32">
                            <path d="M12 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                            <path d="M32 29c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-1.657 1.343-3 3-3s3 1.343 3 3z"></path>
                            <path d="M32 16v-12h-24c0-1.105-0.895-2-2-2h-6v2h4l1.502 12.877c-0.915 0.733-1.502 1.859-1.502 3.123 0 2.209 1.791 4 4 4h24v-2h-24c-1.105 0-2-0.895-2-2 0-0.007 0-0.014 0-0.020l26-3.98z"></path>
                        </svg>
                        <span>{cartItems.length}</span>
                    </button>
                    <span>{sum} р.</span>
                </div>
            </div>
            <div
                className={activeCart ? 'header-cart-background active' : 'header-cart-background'}>
                <div className="header-cart">
                    <div className="header-cart-top">
                        <h2 className="header-cart-title">Корзина</h2>
                        <button onClick={removeActiveCart}>
                            <svg
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24">
                                <title>clear</title>
                                <path d="M18.984 6.422l-5.578 5.578 5.578 5.578-1.406 1.406-5.578-5.578-5.578 5.578-1.406-1.406 5.578-5.578-5.578-5.578 1.406-1.406 5.578 5.578 5.578-5.578z"></path>
                            </svg>
                        </button>
                    </div>
                    <div className="header-cart-items">
                        {cartItems.length > 0 ? (
                            cartItems.map((item, index) => {
                                return <CartCard item={item} key={`${item.name}_${index}`} />;
                            })
                        ) : (
                            <div
                                style={{
                                    fontSize: '24px',
                                    textAlign: 'center',
                                    marginTop: '50px',
                                }}>
                                Ваша корзина пуста!
                            </div>
                        )}
                    </div>
                    <div className="header-cart-footer">
                        <div className="header-cart-sum">Итого: {sum} руб.</div>
                        <div className="header-cart-buttons">
                            <button onClick={removeActiveCart}>Продолжить покупки</button>
                            <Link
                                to="/user"
                                onClick={removeActiveCart}
                                className="header-cart-link">
                                Перейти в профиль
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
