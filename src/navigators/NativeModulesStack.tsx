import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
  CalendarModuleScreen,
  GeolocationModuleScreen,
  UTubeModuleScreen,
} from '@screens';

const {Navigator, Screen} = createMaterialTopTabNavigator();
export const NativeModulesStack = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarItemStyle: {width: 100},
        tabBarScrollEnabled: true,
        swipeEnabled: false,
      }}>
      <Screen
        name="CalendarModuleScreen"
        component={CalendarModuleScreen}
        options={{tabBarLabel: 'CalendarModule'}}
      />
      <Screen
        name="UTubeModuleScreen"
        component={UTubeModuleScreen}
        options={{tabBarLabel: 'UTubeModule'}}
      />
      <Screen
        name="GeolocationModuleScreen"
        component={GeolocationModuleScreen}
        options={{tabBarLabel: 'GeolocationModule'}}
      />
    </Navigator>
  );
};
