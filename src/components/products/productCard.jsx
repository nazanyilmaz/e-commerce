//import liraries
import React, {useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
  Pressable,
} from 'react-native';
import {height, width} from '../../utils/constans';
import AppColors from '../../theme/colors';
import {Heart} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import Button from '../ui/button';
import StoreContext from '../../context';
import {LOGIN, PRODUCTDETAIL} from '../../utils/routes';

// create a component
const ProductCard = ({item}) => {
  const navigation = useNavigation();
  const {addCart, addToFavorites, isLogin} = useContext(StoreContext);

  const checkIsLogin = () => {
    if (isLogin) {
      addToFavorites(item);
    } else {
      Alert.alert('Log-in', 'Please Log-in', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => navigation.navigate(LOGIN)},
      ]);
    }
  };

  return (
    <Pressable
      onPress={() => navigation.navigate(PRODUCTDETAIL, {item: item})}
      style={styles.container}>
      <View style={{flex: 1, justifyContent: 'space-between'}}>
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
        <TouchableOpacity onPress={() => checkIsLogin()}>
          {item.favorites ? (
            <Heart color={AppColors.PINK} size={18} variant="Bold" />
          ) : (
            <Heart color={AppColors.PINK} size={18} />
          )}
        </TouchableOpacity>
      </View>

      <Button onPress={() => addCart(item)} title="Add to Cart" />
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: width / 2,
    margin: 5,
    flex: 1,
    marginVertical: 15,
  },
});

//make this component available to the app
export default ProductCard;
