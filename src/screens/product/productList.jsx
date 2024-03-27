//import liraries
import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {PRODUCTS_URL} from '../../service/urls';
import ProductCard from '../../components/products/productCard';
import {getRequest} from '../../service/verbs';
import {screenStyles} from '../../styles/screenStyle';
import Spinner from '../../components/ui/spinner';
import CategorySelect from '../../components/widgets/categorySelect';

// create a component
const ProductList = ({route}) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const productCategory = route?.params?.category;
  const getAllProducts = category => {
    const url = category
      ? PRODUCTS_URL + `/category/${category}`
      : PRODUCTS_URL;
    setIsLoading(true);
    getRequest(url)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  useEffect(() => {
    getAllProducts(productCategory);
  }, []);
  return (
    <View style={screenStyles.container}>
      <CategorySelect onSelect={value => getAllProducts(value)} />
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          contentContainerStyle={{paddingBottom: 40}}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={products}
          renderItem={({item}) => <ProductCard item={item} />}
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default ProductList;
