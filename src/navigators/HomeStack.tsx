import {FC} from 'react';

import {HomeScreenProps} from 'navigators/types.ts';

import {CustomNavigationBar} from '@components';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from '@screens';

const {Navigator, Screen} = createNativeStackNavigator();
export const HomeStack: FC<HomeScreenProps> = () => {
  return (
    <Navigator
      screenOptions={{
        // eslint-disable-next-line react/no-unstable-nested-components
        header: props => <CustomNavigationBar {...props} />,
      }}>
      <Screen name="HomeScreen" component={HomeScreen} />
    </Navigator>
  );
};
