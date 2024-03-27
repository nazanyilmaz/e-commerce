//import liraries
import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import WidgetTitle from '../components/widgets/widgetTitle';
import {getRequest} from '../service/verbs';
import {CATEGORY_URL} from '../service/urls';
import WidgetProductCard from '../components/widgets/productCard';

// create a component
const NewArrival = () => {
  const [products, setProducts] = useState([]);
  const getNewAllProducts = () => {
    getRequest(CATEGORY_URL + "/women's clothing", {limit: 4})
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  useEffect(() => {
    getNewAllProducts();
  }, []);

  return (
    <View style={styles.container}>
      <WidgetTitle title={'New Arrival'} category="women's clothing" />
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

//make this component available to the app
export default NewArrival;
