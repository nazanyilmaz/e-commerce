//import liraries
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppColors from '../../theme/colors';

// create a component
const Button = props => {
  const {title} = props;
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Text style={{color: AppColors.WHITE, fontWeight: 'bold'}}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PINK,
    borderRadius: 20,
    marginTop: 3,
    marginBottom: 3,
    padding: 3,
    height: 30,
  },
});

//make this component available to the app
export default Button;
