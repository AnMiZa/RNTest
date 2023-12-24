import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens';
import {CustomNavigationBar} from '@components';

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
