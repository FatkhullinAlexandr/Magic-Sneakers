import React from 'react';
import { Link } from 'react-router-dom';

import CartCard from '../CartCard';
import { AppContext } from '../../App';

import './header.scss';

import HeaderUser from '../../svg/user.svg';
import HeaderCart from '../../svg/cart.svg';
import HeaderSearch from '../../svg/search.svg';
import HeaderClear from '../../svg/clear.svg';

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
                              <img src={HeaderSearch} className="header-search-icon" alt="" />
                              <input
                                   value={searchValue}
                                   onChange={getInputValue}
                                   type="text"
                                   placeholder="Поиск..."
                              />
                              <button className={searchValue ? '' : 'close'} onClick={clearInput}>
                                   <img src={HeaderClear} className="header-search-close" alt="" />
                              </button>
                         </div>
                         <Link to="/user" className="user-link">
                              <img src={HeaderUser} alt="Пользователь" />
                         </Link>
                         <button onClick={addActiveCart}>
                              <img src={HeaderCart} alt="Корзина" />
                              <span>{cartItems.length}</span>
                         </button>
                         <span>{sum} р.</span>
                    </div>
               </div>
               <div
                    className={
                         activeCart ? 'header-cart-background active' : 'header-cart-background'
                    }>
                    <div className="header-cart">
                         <div className="header-cart-top">
                              <h2 className="header-cart-title">Корзина</h2>
                              <button onClick={removeActiveCart}>
                                   <img src={HeaderClear} alt="" />
                              </button>
                         </div>
                         <div className="header-cart-items">
                              {cartItems.length > 0 ? (
                                   cartItems.map((item, index) => {
                                        return (
                                             <CartCard item={item} key={`${item.name}_${index}`} />
                                        );
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
