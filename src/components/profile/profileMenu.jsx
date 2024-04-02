//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AppColors from '../../theme/colors';
import {
  ArrowRight2,
  Book,
  Cards,
  Heart,
  Location,
  Notification,
  UserEdit,
} from 'iconsax-react-native';

// create a component
const ProfileMenu = () => {
  const buttons = [
    {
      title: 'Edit Profile',
      icon: <UserEdit size="32" color={AppColors.PINKSOFT} variant="Bold" />,
    },
    {
      title: 'Shopping Adress',
      icon: <Location size="32" color={AppColors.PINKSOFT} variant="Bold" />,
    },
    {
      title: 'Wishlist',
      icon: <Heart size="32" color={AppColors.PINKSOFT} variant="Bold" />,
    },
    {
      title: 'Order History',
      icon: <Book size="32" color={AppColors.PINKSOFT} variant="Bold" />,
    },
    {
      title: 'Notification',
      icon: (
        <Notification size="32" color={AppColors.PINKSOFT} variant="Bold" />
      ),
    },
    {
      title: 'Cards',
      icon: <Cards size="32" color={AppColors.PINKSOFT} variant="Bold" />,
    },
  ];
  return (
    <View style={styles.container}>
      {buttons.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 5,
              marginVertical: 10,
            }}>
            {item.icon}
            <Text
              style={{
                marginStart: 15,
                fontSize: 16,
                fontWeight: '600',
              }}>
              {item.title}
            </Text>
          </View>
          <ArrowRight2 size="32" color="#697689" variant="Outline" />
        </TouchableOpacity>
      ))}
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
export default ProfileMenu;
