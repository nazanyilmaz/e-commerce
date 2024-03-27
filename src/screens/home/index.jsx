//import liraries
import React from 'react';
import {View, Text, FlatList} from 'react-native';
import widgets from '../../widgets';
import {screenStyles} from '../../styles/screenStyle';

// create a component
const Home = () => {
  const renderItem = ({item}) => {
    return <View>{item.isShow && item.component}</View>;
  };
  return (
    <View style={screenStyles.container}>
      <FlatList data={widgets} renderItem={renderItem} />
    </View>
  );
};

//make this component available to the app
export default Home;
