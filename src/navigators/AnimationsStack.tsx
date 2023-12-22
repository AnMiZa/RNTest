import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AnimationsScreen} from '@screens';

const {Navigator, Screen} = createNativeStackNavigator();
export const AnimationsStack = () => {
  return (
    <Navigator>
      <Screen name="AnimationsScreen" component={AnimationsScreen} />
    </Navigator>
  );
};
