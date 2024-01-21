import {FC} from 'react';
import {StyleSheet} from 'react-native';
import {Button} from 'react-native-paper';
import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Circle, Svg} from 'react-native-svg';

import {ScreenWrapper} from '@components';
import {AnimatedPropsScreenProps} from '@navigators';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const AnimatedPropsScreen: FC<AnimatedPropsScreenProps> = () => {
  const r = useSharedValue(20);

  const handlePress = () => {
    r.value += 10;
  };

  const animatedProps = useAnimatedProps(() => ({
    r: withTiming(r.value),
  }));

  return (
    <ScreenWrapper>
      <Svg style={styles.svg}>
        <AnimatedCircle
          cx="50%"
          cy="50%"
          fill="#b58df1"
          animatedProps={animatedProps}
        />
      </Svg>
      <Button onPress={handlePress}>Click me</Button>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  svg: {
    height: 250,
    width: '100%',
  },
});
