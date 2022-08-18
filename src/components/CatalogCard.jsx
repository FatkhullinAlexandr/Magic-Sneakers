import React from 'react';

import { AppContext } from '../App';

function CatalogCard({ id, imgUrl, name, price }) {
    const { addToCart, thisItemAdded } = React.useContext(AppContext);

    return (
        <div className="card">
            <div className="card-image">
                <img src={imgUrl} alt="Картинка" />
            </div>
            <div className="card-title">{name}</div>
            <div className="card-footer">
                <span>{price} руб.</span>
                <button
                    className={thisItemAdded(name) ? 'added' : 'not-added'}
                    disabled={thisItemAdded(name) ? true : false}
                    onClick={() => addToCart({ id, imgUrl, name, price })}>
                    {thisItemAdded(name) ? 'Добавлено' : 'Добавить'}
                </button>
            </div>
        </div>
    );
}

export default CatalogCard;
