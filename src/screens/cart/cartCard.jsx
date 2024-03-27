//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {height, width} from '../../utils/constans';
import AppColors from '../../theme/colors';
import Counter from '../../components/ui/counter';

// create a component
const CartCard = ({item}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={{
            uri: item.image,
          }}
          style={{
            width: width * 0.13,
            height: height * 0.13,
            resizeMode: 'contain',
            alignItems: 'center',
          }}
        />
      </View>

      <View style={{flex: 3, justifyContent: 'center'}}>
        <Text
          numberOfLines={1}
          style={{
            fontWeight: '700',
            marginVertical: 5,
            fontSize: 16,
            color: AppColors.BLACK,
          }}>
          {item.title}
        </Text>
        <Text
          style={{
            marginTop: 5,
            marginBottom: 5,
            fontSize: 12,
            color: AppColors.GRAY,
            textTransform: 'capitalize',
          }}>
          {item.category}
        </Text>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 14,
            color: AppColors.BLACK,
          }}>
          ${item.price}
        </Text>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end'}}>
        <Counter onChange={value => console.log(value)} size={18} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

//make this component available to the app
export default CartCard;
