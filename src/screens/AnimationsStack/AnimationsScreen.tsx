import {
  Canvas,
  LinearGradient,
  Rect,
  vec,
  Text,
  useFont,
  matchFont,
} from '@shopify/react-native-skia';
import {Platform, StyleSheet, useWindowDimensions} from 'react-native';
import {
  cancelAnimation,
  useDerivedValue,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useFocusEffect} from '@react-navigation/native';
import {useCallback} from 'react';

const getRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `#${r.toString(16)}${g.toString(16)}${b.toString(16)}`;
};

const CHANGE_DURATION = 2000;

const fontFamily = Platform.select({ios: 'Helvetica', default: 'serif'});
const fontStyle = {
  fontFamily,
  fontSize: 20,
  fontWeight: 'bold',
} as const;
const font = matchFont(fontStyle);
const title = 'This is testing field for Animations';
const {width: titleWidth} = font.measureText(title);

export const AnimationsScreen = () => {
  const {width, height} = useWindowDimensions();

  const leftColor = useSharedValue('red');
  const rightColor = useSharedValue('blue');

  const colors = useDerivedValue(() => {
    return [leftColor.value, rightColor.value];
  });

  useFocusEffect(
    useCallback(() => {
      const interval = setInterval(() => {
        leftColor.value = withRepeat(
          withTiming(getRandomColor(), {duration: CHANGE_DURATION}),
          -1,
          true,
        );
        rightColor.value = withRepeat(
          withTiming(getRandomColor(), {duration: CHANGE_DURATION}),
          -1,
          true,
        );
      }, CHANGE_DURATION * 3);
      return () => clearInterval(interval);
    }, [leftColor, rightColor]),
  );

  return (
    <>
      <Canvas style={{width, height}}>
        <Rect x={0} y={0} width={width} height={height}>
          <LinearGradient
            start={vec(0, 0)}
            end={vec(width, height)}
            colors={colors}
          />
        </Rect>
        <Text x={width / 2 - titleWidth / 2} y={120} text={title} font={font} />
      </Canvas>
    </>
  );
};
