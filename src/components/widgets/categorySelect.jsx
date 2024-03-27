//import liraries
import React, {Component, useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import AppColors from '../../theme/colors';
import {getRequest} from '../../service/verbs';
import {CATEGORIES_URL} from '../../service/urls';

// create a component
const CategorySelect = ({onSelect}) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState();

  const getCategories = () => {
    getRequest(CATEGORIES_URL)
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const selectCategory = category => {
    setCategory(category);
    onSelect(category);
  };

  useEffect(() => {
    getCategories();
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => selectCategory(item)}
        style={
          category == item ? styles.activeCategory : styles.inactiveCategory
        }>
        <Text
          style={category == item ? styles.activeText : styles.inactiveText}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator="false"
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    marginBottom: 15,
  },
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
export default CategorySelect;
