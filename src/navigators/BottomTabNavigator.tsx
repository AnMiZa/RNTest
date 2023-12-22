import {
  createMaterialBottomTabNavigator,
  MaterialBottomTabNavigationOptions,
} from 'react-native-paper/react-navigation';
import {AnimationsStack, HomeStack} from '@navigators';
import {Icon, MD3Colors} from 'react-native-paper';
import {HomeScreen} from '@screens';

const {Navigator, Screen} = createMaterialBottomTabNavigator();

const bottomTabBarOptions: Record<
  'home' | 'animations',
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
};

export const BottomTabNavigator = () => {
  return (
    <Navigator>
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
    </Navigator>
  );
};
