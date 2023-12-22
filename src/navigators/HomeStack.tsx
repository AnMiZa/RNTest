import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens';

const {Navigator, Screen} = createNativeStackNavigator();
export const HomeStack = () => {
  return (
    <Navigator>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};
