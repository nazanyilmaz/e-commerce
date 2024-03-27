//import liraries
import React from 'react';
import {CATEGORIES, FAVORITES, HOMES, PROFILE} from '../../utils/routes';
import {Category, Heart, Home2, Profile} from 'iconsax-react-native';

// create a component
const TabIcon = ({name, size, color}) => {
  if (name === HOMES) {
    return <Home2 size={size} color={color} variant="Outline" />;
  } else if (name === CATEGORIES) {
    return <Category size={size} color={color} variant="Outline" />;
  } else if (name === FAVORITES) {
    return <Heart size={size} color={color} variant="Outline" />;
  } else if (name === PROFILE) {
    return <Profile size={size} color={color} variant="Outline" />;
  }
};

export default TabIcon;
