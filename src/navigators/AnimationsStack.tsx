import {
  AnimatedPropsScreen,
  AnimatedStylesScreen,
  AnimationsScreen,
  CircularProgressIndicatorScreen,
  GridMagnificationScreen,
  ModifiersScreen,
} from '@screens';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {GesturesScreen} from '@screens';

const {Navigator, Screen} = createMaterialTopTabNavigator();
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
        name="AnimatedStyles"
        component={AnimatedStylesScreen}
        options={{tabBarLabel: 'Animated Styles'}}
      />
      <Screen
        name="AnimatedProps"
        component={AnimatedPropsScreen}
        options={{tabBarLabel: 'Animated Props'}}
      />
      <Screen
        name="Modifiers"
        component={ModifiersScreen}
        options={{tabBarLabel: 'Modifiers'}}
      />
      <Screen
        name="Gestures"
        component={GesturesScreen}
        options={{tabBarLabel: 'Gestures'}}
      />
    </Navigator>
  );
};
