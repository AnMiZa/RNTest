import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withTiming,
} from 'react-native-reanimated';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {LayoutChangeEvent, StyleSheet, View} from 'react-native';

const SIZE = 120;

export const GesturesScreen = () => {
  const pressed = useSharedValue(false);
  const offsetX = useSharedValue(0);
  const width = useSharedValue(0);

  const onLayout = (event: LayoutChangeEvent) => {
    width.value = event.nativeEvent.layout.width;
  };

  const tap = Gesture.Pan()
    .onBegin(() => (pressed.value = true))
    .onChange(event => {
      offsetX.value += event.changeX;
    })
    .onFinalize(event => {
      offsetX.value = withDecay({
        velocity: event.velocityX,
        rubberBandEffect: true,
        clamp: [-(width.value / 2) + SIZE / 2, width.value / 2 - SIZE / 2],
      });
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? '#FFE04B' : '#B58DF1',
    transform: [
      {translateX: offsetX.value},
      {scale: withTiming(pressed.value ? 1.2 : 1)},
    ],
  }));

  return (
    <View style={styles.container} onLayout={onLayout}>
      <GestureDetector gesture={tap}>
        <Animated.View style={[styles.circle, animatedStyles]} />
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  circle: {
    height: 120,
    width: 120,
    borderRadius: 500,
  },
});
