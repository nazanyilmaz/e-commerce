//import liraries
import React, {useContext} from 'react';
import {View, FlatList} from 'react-native';
import {screenStyles} from '../../styles/screenStyle';
import StoreContext from '../../context';
import FavoriteCard from '../../components/favorites/favoritesCard';
import ListEmtyComponent from '../../components/ui/listEmtyComponent';

// create a component
const Favorites = () => {
  const {favorites} = useContext(StoreContext);
  return (
    <View style={screenStyles.container}>
      <FlatList
        ListEmptyComponent={() => <ListEmtyComponent />}
        contentContainerStyle={{paddingBottom: 40}}
        showsVerticalScrollIndicator={false}
        data={favorites}
        renderItem={({item}) => <FavoriteCard item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

//make this component available to the app
export default Favorites;
