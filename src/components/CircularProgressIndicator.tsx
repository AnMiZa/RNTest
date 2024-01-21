import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedProps,
  useDerivedValue,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';
import {Circle, Svg} from 'react-native-svg';

import {theme, useAppTheme} from '@constants';

const CIRCLE_LENGTH = 500;
const RADIUS = CIRCLE_LENGTH / (2 * Math.PI);

const CONTAINER_SIZE = RADIUS * 2 + 36;
const HALF_OF_CONTAINER_SIZE = CONTAINER_SIZE / 2;

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
export const CircularProgressIndicator: FC<{
  progress: SharedValue<number>;
}> = ({progress}) => {
  const {
    colors: {indicatorBackground, indicatorForeground},
  } = useAppTheme();

  const animatedProps = useAnimatedProps(() => ({
    strokeDashoffset: CIRCLE_LENGTH * (1 - progress.value),
  }));

  const progressText = useDerivedValue(() => {
    return `${Math.floor(progress.value * 100)}%`;
  });

  return (
    <View style={styles.container}>
      <Svg style={styles.svg}>
        <Circle
          cx={HALF_OF_CONTAINER_SIZE}
          cy={HALF_OF_CONTAINER_SIZE}
          r={RADIUS}
          stroke={indicatorBackground}
          strokeWidth={15}
          fill="none"
        />
        <AnimatedCircle
          cx={HALF_OF_CONTAINER_SIZE}
          cy={HALF_OF_CONTAINER_SIZE}
          r={RADIUS}
          stroke={indicatorForeground}
          strokeWidth={15}
          strokeDasharray={CIRCLE_LENGTH}
          animatedProps={animatedProps}
          strokeLinecap={'round'}
          fill="none"
        />
      </Svg>
      <ReText style={styles.progressText} text={progressText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: CONTAINER_SIZE,
    width: CONTAINER_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressText: {
    fontSize: 40,
    color: theme.colors.indicatorBackground,
    width: 200,
    textAlign: 'center',
  },
  svg: {
    position: 'absolute',
  },
});
