import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {TestRendererScreen} from '@screens';

const {Navigator, Screen} = createMaterialTopTabNavigator();
export const TestStack = () => {
  return (
    <Navigator
      screenOptions={{
        tabBarItemStyle: {width: 100},
        tabBarScrollEnabled: true,
        swipeEnabled: false,
      }}>
      <Screen
        name="TestRendererScreen"
        component={TestRendererScreen}
        options={{tabBarLabel: 'Test Renderer'}}
      />
    </Navigator>
  );
};
