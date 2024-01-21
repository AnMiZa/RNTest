import {FC} from 'react';
import {Button} from 'react-native-paper';

import {ScreenWrapper} from '@components';
import {CalendarModule} from '@native-modules';

export const CalendarModuleScreen: FC<any> = () => {
  return (
    <ScreenWrapper>
      <CalendarModuleButton />
    </ScreenWrapper>
  );
};

const CalendarModuleButton = () => {
  const onPress = () => {
    CalendarModule.createCalendarEvent('test', 'testLocation', '2024-01-13');
  };

  return (
    <Button onPress={onPress}>"Click to invoke your native module!"</Button>
  );
};
