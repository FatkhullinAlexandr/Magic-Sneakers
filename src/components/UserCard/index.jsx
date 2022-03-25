import React from 'react';

import './usercard.scss';

import { AppContext } from '../../App';

function UserCard({ item }) {
     const { removeFromCart } = React.useContext(AppContext);

     const remove = () => {
          removeFromCart(item.id);
     };

     return (
          <div className="user-card">
               <div className="user-card-image">
                    <img src={item.imgUrl} alt="Картинка" />
               </div>
               <div className="user-card-title">{item.name}</div>
               <div className="user-card-footer">
                    <span>{item.price} руб.</span>
                    <button onClick={remove}>Удалить</button>
               </div>
          </div>
     );
}

export default UserCard;
