//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppColors from '../../theme/colors';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTLIST} from '../../utils/routes';

// create a component
const WidgetTitle = ({title, category}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          color: AppColors.GRAY,
          marginVertical: 10,
          textDecorationLine: 'underline',
          textDecorationColor: AppColors.PINK,
        }}>
        {title}
      </Text>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate(PRODUCTLIST, {category: category, title: title})
        }>
        <Text
          style={{
            marginEnd: 4,
            fontWeight: 'bold',
            textDecorationLine: 'underline',
            textDecorationColor: AppColors.PINK,
          }}>
          See All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

//make this component available to the app
export default WidgetTitle;
