//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppColors from '../../theme/colors';
import {height} from '../../utils/constans';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';
import {ArrowRight2} from 'iconsax-react-native';

// create a component
const CategoryCard = ({item}) => {
  const navigation = useNavigation();
  console.log(item);
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate(PRODUCTLIST, {category: item, title: item})
      }>
      <Text
        style={{fontSize: 24, fontWeight: '600', textTransform: 'capitalize'}}>
        {item}
      </Text>
      <ArrowRight2 size="32" color="#c868ae" />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 5,
    padding: 10,
    minHeight: height / 8,
    backgroundColor: AppColors.GRAYSOFT,
    borderWidth: 1,
    borderColor: AppColors.PINK,
  },
});

//make this component available to the app
export default CategoryCard;
