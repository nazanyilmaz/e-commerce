//import liraries
import React, {Component, useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import Button from '../ui/button';
import AppColors from '../../theme/colors';
import StoreContext from '../../context';
import {useNavigation} from '@react-navigation/native';
import {CHECKOUT, LOGIN} from '../../utils/routes';

// create a component
const Summary = () => {
  const {isLogin} = useContext(StoreContext);
  const navigation = useNavigation();
  const checkOut = () => {
    if (isLogin) {
      navigation.navigate(CHECKOUT);
    } else {
      Alert.alert('Log-in', 'Please Log-in', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate(LOGIN)},
      ]);
    }
  };
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{color: AppColors.GRAY}}>Subtotal</Text>
        <Text style={{fontWeight: '700'}}>$800</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{color: AppColors.GRAY}}>Delivery fee</Text>
        <Text style={{fontWeight: '700'}}>$10</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
        }}>
        <Text style={{color: AppColors.GRAY}}>Discount</Text>
        <Text style={{fontWeight: '700'}}>$720</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 20,
        }}>
        <Text style={{color: AppColors.GRAY}}>Total</Text>
        <Text style={{fontWeight: '700'}}>$720</Text>
      </View>
      <Button title="Check Out" onPress={checkOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 400,
    marginHorizontal: 13,
    flex: 1,
    paddingHorizontal: 15,
    position: 'absolute',
    top: 600,
    backgroundColor: AppColors.WHITE,
    borderTopWidth: 1,
    borderBlockColor: AppColors.GRAYSOFT,
  },
});

//make this component available to the app
export default Summary;
