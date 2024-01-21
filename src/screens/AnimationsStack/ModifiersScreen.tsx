import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from 'react-native-reanimated';

import {ScreenWrapper} from '@components';
import {ModifiersScreenProps} from '@navigators';

export const ModifiersScreen: FC<ModifiersScreenProps> = () => {
  const offset = useSharedValue(0);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: offset.value}],
  }));

  const OFFSET = 40;
  const TIME = 250;

  const handlePress = () => {
    offset.value = withSequence(
      withTiming(-OFFSET, {duration: TIME / 2}),
      withRepeat(withTiming(OFFSET, {duration: TIME}), 5, true),
      withTiming(0, {duration: TIME / 2}),
    );
  };

  return (
    <ScreenWrapper>
      <Animated.View style={[styles.box, animatedStyles]} />
      <Button onPress={handlePress}>Shake</Button>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
  },
  box: {
    width: 100,
    height: 100,
    margin: 50,
    borderRadius: 15,
    backgroundColor: '#b58df1',
  },
});
