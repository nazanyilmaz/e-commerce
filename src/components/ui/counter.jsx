//import liraries
import {AddCircle, MinusCirlce} from 'iconsax-react-native';
import React, {Component, useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppColors from '../../theme/colors';

// create a component
const Counter = ({onChange, size = 24}) => {
  const [count, setCount] = useState(0);
  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
      onChange(count - 1);
    }
  };
  const increase = () => {
    if (count < 5) {
      setCount(count + 1);
      onChange(count + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={decrease} style={styles.button}>
        <MinusCirlce size={size} variant="Outline" color={AppColors.PINK} />
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 500,
          textAlign: 'center',
          color: AppColors.PINK,
        }}>
        {count}
      </Text>
      <TouchableOpacity onPress={increase} style={styles.button}>
        <AddCircle size={size} variant="Outline" color={AppColors.PINK} />
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 20,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

//make this component available to the app
export default Counter;
