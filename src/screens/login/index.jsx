//import liraries
import React, {Component, useContext, useState} from 'react';
import {View, Text, StyleSheet, ScrollView, Image, Alert} from 'react-native';
import {Input} from '@ui-kitten/components';
import {height, width} from '../../utils/constans';
import AppColors from '../../theme/colors';
import Button from '../../components/ui/button';
import {Eye, EyeSlash} from 'iconsax-react-native';
import {postRequest} from '../../service/verbs';
import {LOGIN_URL} from '../../service/urls';
import StoreContext from '../../context';

// create a component
const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [disableButton, setDisabledButton] = useState(false);
  const {setIsLogin} = useContext(StoreContext);

  const login = () => {
    const form = {
      username: null,
      password: null,
    };
    if (username) {
      form.username = username;
    } else Alert.alert('Please type your Username');
    if (password) form.password = password;
    else Alert.alert('Please type your Password');
    if (username && password) {
      //console.log(form);
      setDisabledButton(true);
      postRequest(LOGIN_URL, form)
        .then(response => {
          console.log(response.data);
          setIsLogin(true);
          navigation.goBack();
        })
        .catch(error => {
          console.log(error.response);
        })
        .finally(() => {
          setDisabledButton(false);
        });
    }
    //username: "mor_2314", apiden gelen default username
    //password: "83r5^_", apiden gelen default passsword
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Text
          style={{
            marginVertical: 25,
            marginHorizontal: 55,
            fontWeight: 'bold',
            fontSize: 22,
          }}>
          Welcome to Sho
          <Text
            style={{fontWeight: 'bold', fontSize: 22, color: AppColors.PINK}}>
            PPINK
          </Text>
        </Text>
        <Image
          source={require('../../assets/shopping-bag.png')}
          style={{
            width: width * 0.4,
            height: height * 0.1,
            resizeMode: 'contain',
            marginHorizontal: 85,
            marginBottom: 20,
          }}
        />
        <Input
          style={{
            marginVertical: 10,
            borderColor: AppColors.PINK,
          }}
          value={username}
          label="Email"
          placeholder="Type your username"
          onChangeText={nextValue => setUsername(nextValue)}
        />
        <Input
          style={{marginTop: 10, marginBottom: 20, borderColor: AppColors.PINK}}
          value={password}
          label="Password"
          placeholder="Type your password"
          secureTextEntry={secureTextEntry}
          accessoryRight={() =>
            secureTextEntry ? (
              <Eye
                size="18"
                color={AppColors.PINKSOFT}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              />
            ) : (
              <EyeSlash
                size="18"
                color={AppColors.PINKSOFT}
                onPress={() => setSecureTextEntry(!secureTextEntry)}
              />
            )
          }
          onChangeText={nextValue => setPassword(nextValue)}
        />
        <Button onPress={login} disabled={disableButton} title="Log in" />
      </ScrollView>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 40,
  },
});

//make this component available to the app
export default Login;
