//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {height} from '../../utils/constans';
import {Button} from '@ui-kitten/components';
import AppColors from '../../theme/colors';
import {Heart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';

// create a component
const ListEmtyComponent = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 10,
          flexDirection: 'row',
        }}>
        <Heart size="32" color="#c868ae" variant="Bold" />
        <Text style={{fontSize: 16, fontWeight: '500'}}>
          Your Favorites Emty
        </Text>
        <Heart size="32" color="#c868ae" variant="Bold" />
      </TouchableOpacity>
      <Button
        onPress={() => navigation.navigate(PRODUCTLIST)}
        style={styles.button}
        status="info">
        All Products
      </Button>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: height / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginVertical: 20,
    width: 300,
    backgroundColor: AppColors.PINK,
    borderColor: AppColors.PINKSOFT,
  },
});

//make this component available to the app
export default ListEmtyComponent;
