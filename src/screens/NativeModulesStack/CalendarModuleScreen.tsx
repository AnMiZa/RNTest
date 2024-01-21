import {FC} from 'react';
import {Button} from 'react-native-paper';
import {ScreenWrapper} from '@components';
import {CalendarModule, GeolocationModule} from '@native-modules';

export const CalendarModuleScreen: FC<any> = () => {
  return (
    <ScreenWrapper>
      <CalendarModuleButton />
    </ScreenWrapper>
  );
};

const CalendarModuleButton = () => {
  const onPress = () => {
    // CalendarModule.createCalendarEvent('test', 'testLocation', '2024-01-13');
    // console.log(DEFAULT_EVENT_NAME);
    GeolocationModule.getLocation(coordinates => console.log(coordinates));
  };

  return (
    <Button onPress={onPress}>"Click to invoke your native module!"</Button>
  );
};
