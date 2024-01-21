import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  AnimatedPropsScreen,
  AnimatedStylesScreen,
  AnimationsScreen,
  CircularProgressIndicatorScreen,
  GesturesScreen,
  GridMagnificationScreen,
  ModifiersScreen,
} from '@screens';

import {AnimationsStackParamsList} from '.';

const {Navigator, Screen} =
  createMaterialTopTabNavigator<AnimationsStackParamsList>();
export const AnimationsStack = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarItemStyle: {width: 100},
        tabBarScrollEnabled: true,
        swipeEnabled: false,
      }}>
      <Screen
        name="AnimationsScreen"
        component={AnimationsScreen}
        options={{tabBarLabel: 'Home'}}
      />
      <Screen
        name="GridMagnificationScreen"
        component={GridMagnificationScreen}
        options={{tabBarLabel: 'Grid Magnification Screen'}}
      />
      <Screen
        name="CircularProgressIndicatorScreen"
        component={CircularProgressIndicatorScreen}
        options={{tabBarLabel: 'Circular Progress Indicator'}}
      />
      <Screen
        name="AnimatedStylesScreen"
        component={AnimatedStylesScreen}
        options={{tabBarLabel: 'Animated Styles'}}
      />
      <Screen
        name="AnimatedPropsScreen"
        component={AnimatedPropsScreen}
        options={{tabBarLabel: 'Animated Props'}}
      />
      <Screen
        name="ModifiersScreen"
        component={ModifiersScreen}
        options={{tabBarLabel: 'Modifiers'}}
      />
      <Screen
        name="GesturesScreen"
        component={GesturesScreen}
        options={{tabBarLabel: 'Gestures'}}
      />
    </Navigator>
  );
};
