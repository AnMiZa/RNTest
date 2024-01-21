import {BottomTabNavigator} from '@navigators';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
