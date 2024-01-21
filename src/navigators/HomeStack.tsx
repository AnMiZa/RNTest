import {CustomNavigationBar} from '@components';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens';

const {Navigator, Screen} = createNativeStackNavigator();
export const HomeStack = () => {
  return (
    <Navigator
      screenOptions={{
        header: props => <CustomNavigationBar {...props} />,
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};
