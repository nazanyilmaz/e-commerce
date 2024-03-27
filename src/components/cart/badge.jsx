import {Text, View} from 'react-native';
import AppColors from '../../theme/colors';

AppColors;

// create a component
const Badge = ({count}) => {
  return (
    <View
      style={{
        backgroundColor: AppColors.PINK,
        justifyContent: 'center',
        alignItems: 'center',
        width: 18,
        height: 18,
        borderRadius: 100,
        position: 'absolute',
        zIndex: 99,
        right: -9,
        top: -9,
      }}>
      <Text
        style={{
          fontSize: 12,
          fontWeight: '500',
          color: AppColors.WHITE,
        }}>
        {count}
      </Text>
    </View>
  );
};

export default Badge;
