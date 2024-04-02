//import liraries
import React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {height, width} from '../../utils/constans';
import AppColors from '../../theme/colors';
import {Heart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {PRODUCTDETAIL} from '../../utils/routes';

// create a component
const FavoriteCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}
      style={styles.container}>
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
        <Heart size="32" color="#c868ae" variant="Bold" />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

//make this component available to the app
export default FavoriteCard;
