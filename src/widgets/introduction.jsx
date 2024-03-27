//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {height, width} from '../utils/constans';
import AppColors from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../utils/routes';

// create a component
const Introduction = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require('../assets/img.png')} style={styles.image} />
      <TouchableOpacity
        onPress={() => navigation.navigate(PRODUCTLIST)}
        style={styles.shop}>
        <Text style={styles.text}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: width - 10,
    height: height / 4.5,
    resizeMode: 'contain',
  },
  shop: {
    position: 'absolute',
    top: 225,
    backgroundColor: AppColors.PINK,
    width: width * 0.4,
    height: height * 0.025,
    borderRadius: 50,
    alignItems: 'center',
  },
  text: {
    color: AppColors.WHITE,
    fontSize: 16,
    fontWeight: 500,
  },
});

//make this component available to the app
export default Introduction;
