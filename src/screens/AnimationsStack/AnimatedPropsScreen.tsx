import Animated, {
  useAnimatedProps,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {Circle, Svg} from 'react-native-svg';
import {Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {ScreenWrapper} from '@components';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export const AnimatedPropsScreen = () => {
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
