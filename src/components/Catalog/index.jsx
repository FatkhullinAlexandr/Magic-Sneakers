import React from 'react';

import CatalogCard from '../CatalogCard';
import { AppContext } from '../../App';

import './catalog.scss';

function Catalog() {
     const { catalogItems, searchValue, setSearchValue } = React.useContext(AppContext);

     return (
          <div className="catalog">
               <div className="catalog-container">
                    <div className="catalog-title">
                         {searchValue
                              ? `Поиск по запросу: ${searchValue}`
                              : `Наши кроссовки: (${catalogItems.length})`}
                    </div>
                    <div className="catalog-body">
                         {catalogItems
                              .filter((item) =>
                                   item.name.toLowerCase().includes(searchValue.toLowerCase()),
                              )
                              .map((item, index) => {
                                   return <CatalogCard {...item} key={`${item.name}_${index}`} />;
                              })}
                    </div>
               </div>
          </div>
     );
}

export default Catalog;
