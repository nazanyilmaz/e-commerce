//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {height, width} from '../../utils/constans';
import AppColors from '../../theme/colors';

// create a component
const UserInfo = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile.png')}
        style={{
          width: width * 0.4,
          height: height * 0.2,
          resizeMode: 'center',
          borderRadius: 1000,
        }}
      />
      <Text style={{fontWeight: '800', fontSize: 18, marginVertical: 10}}>
        Nazan Yilmaz
      </Text>
      <Text
        style={{
          fontWeight: '400',
          fontSize: 16,
          marginVertical: 5,
          color: AppColors.PINKSOFT,
        }}>
        Mobile Developer
      </Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    minHeight: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

//make this component available to the app
export default UserInfo;
