//import liraries
import React, {useState} from 'react';
import StoreContext from '.';

// create a component
const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const addCart = product => {
    setCart([...cart, product]);
    console.log(product);
  };

  const addToFavorites = product => {
    product.favorite = true;
    setFavorites([...favorites, product]);
    console.log(product);
  };

  return (
    <StoreContext.Provider
      value={{
        cart,
        setCart,
        addCart,
        isLogin,
        setIsLogin,
        favorites,
        setFavorites,
        addToFavorites,
      }}>
      {children}
    </StoreContext.Provider>
  );
};

//make this component available to the app
export default Provider;
