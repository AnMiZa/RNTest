import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {BottomTabNavigator} from '@navigators';

const {Navigator, Screen} = createNativeStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
};
