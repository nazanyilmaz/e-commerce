//import liraries
import React, {Component, useContext} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import AppColors from '../../theme/colors';
import StoreContext from '../../context';
import UserInfo from '../../components/profile/userInfo';
import ProfileMenu from '../../components/profile/profileMenu';
import {screenStyles} from '../../styles/screenStyle';

import {Button} from '@ui-kitten/components';
import {LOGIN} from '../../utils/routes';
// create a component
const Profile = ({navigation}) => {
  const {isLogin} = useContext(StoreContext);
  return (
    <View style={screenStyles.container}>
      {isLogin ? (
        <ScrollView>
          <UserInfo />
          <ProfileMenu />
        </ScrollView>
      ) : (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 16, fontWeight: '500', marginVertical: 40}}>
              Please Login
            </Text>
          </TouchableOpacity>
          <Button
            style={{
              backgroundColor: AppColors.PINK,
              color: AppColors.WHITE,
              borderColor: AppColors.PINK,
              borderRadius: 30,
            }}
            onPress={() => navigation.navigate(LOGIN)}
            status="info">
            Log In
          </Button>
        </View>
      )}
    </View>
  );
};

//make this component available to the app
export default Profile;
