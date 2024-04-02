//import liraries
import React, {useContext, useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from 'react-native';

import Button from '../../components/ui/button';
import Counter from '../../components/ui/counter';
import AppColors from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {PRODUCTS_URL} from '../../service/urls';
import Spinner from '../../components/ui/spinner';
import {width} from '../../utils/constans';
import {Heart} from 'iconsax-react-native';
import StoreContext from '../../context';
import {LOGIN} from '../../utils/routes';

// create a component
const ProductDetail = ({route, navigation}) => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {addCart, addToFavorites, isLogin} = useContext(StoreContext);

  const {item} = route?.params;
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
  const getProductDetail = () => {
    setIsLoading(true);
    getRequest(PRODUCTS_URL + `/${item.id}`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
    setIsLoading(false);
  };
  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: AppColors.WHITE}}>
      <View
        style={{
          paddingHorizontal: 10,
          flex: 1,
          backgroundColor: AppColors.WHITE,
        }}>
        {isLoading ? (
          <Spinner />
        ) : (
          <ScrollView>
            <View>
              <Image
                source={{
                  uri: item.image,
                }}
                style={{
                  margin: 15,
                  width: width,
                  height: width * 0.5,
                  resizeMode: 'contain',
                }}
              />
              <Text
                numberOfLines={3}
                style={{
                  fontWeight: '700',
                  marginVertical: 5,
                  fontSize: 20,
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
                    marginTop: 15,
                    marginBottom: 5,
                    fontSize: 14,
                    fontWeight: 'bold',
                    color: AppColors.GRAY,
                  }}>
                  {item.category.toUpperCase()}
                </Text>

                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 16,
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
            <View>
              <Text
                style={{
                  marginTop: 15,
                  marginBottom: 5,
                  fontSize: 14,
                  fontWeight: 'bold',
                  color: AppColors.GRAY,
                }}>
                {item.description}
              </Text>
            </View>
          </ScrollView>
        )}
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 40,
          padding: 10,
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          borderTopWidth: 1,
          borderColor: AppColors.GRAY,
        }}>
        <View style={{flex: 1}}>
          <Counter onChange={value => console.log(value)} />
        </View>
        <TouchableOpacity style={{flex: 2}}>
          <Button onPress={() => addCart(item)} title="Add to Cart" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

//make this component available to the app
export default ProductDetail;
