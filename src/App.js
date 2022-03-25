import React from 'react';
import axios from 'axios';
import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Catalog from './components/Catalog';
import User from './components/User';

export const AppContext = React.createContext();

function App() {
     const [catalogItems, setCatalogItems] = React.useState([]);
     const [cartItems, setCartItems] = React.useState([]);
     const [searchValue, setSearchValue] = React.useState('');

     React.useEffect(() => {
          const awaitData = async () => {
               const dataCartItems = await axios.get(
                    'https://62305ae0f113bfceed4ec6cf.mockapi.io/sneakers-cart',
               );
               const dataCatalogItems = await axios.get(
                    'https://62305ae0f113bfceed4ec6cf.mockapi.io/sneakers',
               );

               setCartItems(dataCartItems.data);
               setCatalogItems(dataCatalogItems.data);
          };

          awaitData();
     }, []);

     const addToCart = async (object) => {
          try {
               const { data } = await axios.post(
                    'https://62305ae0f113bfceed4ec6cf.mockapi.io/sneakers-cart',
                    object,
               );
               setCartItems((prev) => [...prev, data]);
          } catch (error) {
               alert('Не удалось добавить в корзину');
          }
     };

     const removeFromCart = (id) => {
          axios.delete(`https://62305ae0f113bfceed4ec6cf.mockapi.io/sneakers-cart/${id}`);
          setCartItems(cartItems.filter((item) => Number(item.id) !== Number(id)));
     };

     const thisItemAdded = (name) => {
          return cartItems.some((item) => String(item.name) === String(name));
     };

     const sum = cartItems.map((item) => item.price).reduce((prev, curr) => prev + curr, 0);

     return (
          <AppContext.Provider
               value={{
                    catalogItems,
                    cartItems,
                    searchValue,
                    setSearchValue,
                    addToCart,
                    removeFromCart,
                    thisItemAdded,
                    sum,
               }}>
               <div className="App">
                    <div className="wrapper">
                         <Header />
                         <div className="content">
                              <Routes>
                                   <Route element={<Catalog />} path="/" exact />
                                   <Route element={<User />} path="/user" exact />
                              </Routes>
                         </div>
                         <footer style={{ background: '#edf6ff', height: '80px' }} />
                    </div>
               </div>
          </AppContext.Provider>
     );
}

export default App;
