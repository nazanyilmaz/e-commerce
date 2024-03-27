//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import AppColors from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';
import CategoryCard from '../../components/categories/categoryCart';
import {screenStyles} from '../../styles/screenStyle';
import Spinner from '../../components/ui/spinner';

// create a component
const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getCategories = () => {
    setIsLoading(true);
    getRequest(CATEGORIES_URL)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <View style={screenStyles.container}>
      {isLoading ? (
        <Spinner />
      ) : (
        <FlatList
          data={categories}
          renderItem={({item}) => <CategoryCard item={item} />}
          showsHorizontalScrollIndicator="false"
        />
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  activeCategory: {
    padding: 8,
    backgroundColor: AppColors.PINK,
    marginRight: 8,
    borderRadius: 20,
  },
  activeText: {
    color: AppColors.WHITE,
    fontWeight: 300,
  },
  inactiveCategory: {
    padding: 8,
    backgroundColor: AppColors.PINKSOFT,
    marginRight: 8,
    borderRadius: 20,
  },
  inactiveText: {
    color: AppColors.BLACK,
    fontWeight: 300,
  },
});

//make this component available to the app
export default Categories;
