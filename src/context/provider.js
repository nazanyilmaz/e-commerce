//import liraries
import React, {useState} from 'react';
import StoreContext from '.';

// create a component
const Provider = ({children}) => {
  const [cart, setCart] = useState([]);
  const [isLogin, setIsLogin] = useState(false);
  const addCart = product => {
    setCart([...cart, product]);
    console.log(product);
  };

  return (
    <StoreContext.Provider
      value={{cart, setCart, addCart, isLogin, setIsLogin}}>
      {children}
    </StoreContext.Provider>
  );
};

//make this component available to the app
export default Provider;
