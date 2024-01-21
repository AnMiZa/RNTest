import {Icon, MD3Colors} from 'react-native-paper';
import {
  MaterialBottomTabNavigationOptions,
  createMaterialBottomTabNavigator,
} from 'react-native-paper/react-navigation';

import {AnimationsStack, HomeStack, NativeModulesStack, TestStack} from '.';

const {Navigator, Screen} = createMaterialBottomTabNavigator();

const bottomTabBarOptions: Record<
  'home' | 'animations' | 'nativeModules' | 'test',
  MaterialBottomTabNavigationOptions
> = {
  home: {
    tabBarIcon: ({focused}) => (
      <Icon
        source="home"
        color={focused ? MD3Colors.error50 : MD3Colors.error20}
        size={25}
      />
    ),
  },
  animations: {
    tabBarIcon: ({focused}) => (
      <Icon
        source="animation"
        color={focused ? MD3Colors.error50 : MD3Colors.error20}
        size={25}
      />
    ),
  },
  nativeModules: {
    tabBarIcon: ({focused}) => (
      <Icon
        source="view-module"
        color={focused ? MD3Colors.error50 : MD3Colors.error20}
        size={25}
      />
    ),
  },
  test: {
    tabBarIcon: ({focused}) => (
      <Icon
        source="test-tube"
        color={focused ? MD3Colors.error50 : MD3Colors.error20}
        size={25}
      />
    ),
  },
};

export const BottomTabNavigator = () => {
  return (
    <Navigator initialRouteName="Animations">
      <Screen
        name="Home"
        component={HomeStack}
        options={bottomTabBarOptions.home}
      />
      <Screen
        name="Animations"
        component={AnimationsStack}
        options={bottomTabBarOptions.animations}
      />
      <Screen
        name="NativeModules"
        component={NativeModulesStack}
        options={bottomTabBarOptions.nativeModules}
      />
      <Screen
        name="Test"
        component={TestStack}
        options={bottomTabBarOptions.test}
      />
    </Navigator>
  );
};
