import React from 'react';
import { AppContext } from '../../App';

import HeaderClear from '../../svg/clear.svg';

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
                    <img src={HeaderClear} className="header-cart-clear" alt="" />
               </button>
          </div>
     );
}

export default CartCard;
