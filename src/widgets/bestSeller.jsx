import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/productCard';
import CategorySelect from '../components/widgets/categorySelect';

// create a component
const BestSeller = () => {
  const [products, setProducts] = useState([]);
  const getBestSellerProducts = (category = 'jewelery') => {
    getRequest(CATEGORY_URL + `/${category}`, {limit: 4})
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getBestSellerProducts();
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle title={'Best Seller'} category="men's clothing" />
      <CategorySelect onSelect={value => getBestSellerProducts(value)} />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator="false"
        data={products}
        renderItem={({item}) => <WidgetProductCard item={item} />}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default BestSeller;
