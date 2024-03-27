//import liraries
import {SearchNormal1, ShoppingCart} from 'iconsax-react-native';
import React, {useContext} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import AppColors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {CART} from '../../utils/routes';
import Badge from '../cart/badge';
import StoreContext from '../../context';

// create a component
const HeaderTabRight = () => {
  const navigation = useNavigation();
  const {cart} = useContext(StoreContext);
  //console.log(cart.length);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <SearchNormal1 color={AppColors.GRAY} size={25} variant="Outline" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(CART)}>
        {cart?.length > 0 && <Badge count={cart?.length} />}
        <ShoppingCart color={AppColors.GRAY} size={25} variant="Outline" />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    backgroundColor: AppColors.WHITE,
  },
  button: {
    marginHorizontal: 8,
  },
});

//make this component available to the app
export default HeaderTabRight;
