import {Button, Text} from 'react-native-paper';
import {ScreenWrapper} from '@components';
import Animated, {useSharedValue, withSpring} from 'react-native-reanimated';

export const AnimationsScreen = () => {
  const width = useSharedValue(100);
  const height = useSharedValue(100);

  const handlePress = () => {
    if (width.value > 300) {
      width.value = withSpring(width.value - width.value + 100);
      height.value = withSpring(height.value - height.value + 100);
      return;
    }
    width.value = withSpring(width.value + 50);
    height.value = withSpring(height.value + 50);
  };

  return (
    <ScreenWrapper>
      <Animated.View
        style={{
          width,
          height,
          backgroundColor: 'red',
        }}
      />
      <Button onPress={handlePress}>Press me</Button>
    </ScreenWrapper>
  );
};
