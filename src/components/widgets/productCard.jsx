//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import {height, width} from '../../utils/constans';
import AppColors from '../../theme/colors';
import {Heart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';

// create a component
const WidgetProductCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}>
      <Image
        source={{
          uri: item.image,
        }}
        style={{
          width: width * 0.4,
          height: height * 0.1,
          resizeMode: 'contain',
        }}
      />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <Text
          numberOfLines={2}
          style={{
            fontWeight: '700',
            marginVertical: 5,
            fontSize: 14,
            color: AppColors.BLACK,
          }}>
          {item.title}
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}>
        <View>
          <Text
            style={{
              marginTop: 5,
              marginBottom: 5,
              fontSize: 12,
              color: AppColors.GRAY,
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
        <TouchableOpacity>
          <Heart color={AppColors.PINK} size={18} variant="Bold" />
        </TouchableOpacity>
      </View>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width * 0.35,
    margin: 5,
  },
});

//make this component available to the app
export default WidgetProductCard;
