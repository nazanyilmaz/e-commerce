//import liraries
import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';

import StoreContext from '../../context';
import CartCard from './cartCard';
import {screenStyles} from '../../styles/screenStyle';
import Summary from '../../components/cart/summary';
// create a component
const Cart = () => {
  const {cart} = useContext(StoreContext);
  return (
    <View style={screenStyles.container}>
      <FlatList
        contentContainerStyle={{paddingBottom: 40}}
        showsVerticalScrollIndicator={false}
        data={cart}
        renderItem={({item}) => <CartCard item={item} />}
        keyExtractor={item => item.id}
      />
      <Summary />
    </View>
  );
};

//make this component available to the app
export default Cart;
