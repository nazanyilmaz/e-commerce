import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  CART,
  CHECKOUT,
  LOGIN,
  PRODUCTDETAIL,
  PRODUCTLIST,
  TAB,
} from '../utils/routes';
import Cart from '../screens/cart';
import TabNavigator from './tabNavigator';
import AppColors from '../theme/colors';
import ProductList from '../screens/product/productList';
import ProductDetail from '../screens/product/productDetail';
import HeaderTabRight from '../components/router/headerTabRight';
import Checkout from '../screens/checkout';
import Login from '../screens/login';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: AppColors.GRAY,
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name={TAB}
        component={TabNavigator}
      />
      <Stack.Screen name={CART} component={Cart} />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerRight: ({focused, color, size}) => <HeaderTabRight />,
          title: route?.params?.title,
        })}
        name={PRODUCTLIST}
        component={ProductList}
      />
      <Stack.Screen
        options={({route, navigation}) => ({
          headerRight: ({focused, color, size}) => <HeaderTabRight />,
        })}
        name={PRODUCTDETAIL}
        component={ProductDetail}
      />
      <Stack.Screen name={CHECKOUT} component={Checkout} />
      <Stack.Screen name={LOGIN} component={Login} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
