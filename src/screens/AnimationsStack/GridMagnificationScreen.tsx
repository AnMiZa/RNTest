import {StyleSheet, View} from 'react-native';
import {Canvas, Group, SweepGradient, vec} from '@shopify/react-native-skia';
import {GridMagnificationRoundedItem} from '@components';
import {useSharedValue, withTiming} from 'react-native-reanimated';
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  PADDING,
  SQUARE_CONTAINER_SIZE,
  SQUARE_SIZE,
  SQUARES_AMOUNT_HORIZONTAL,
  SQUARES_AMOUNT_VERTICAL,
} from '@constants';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';

export const GridMagnificationScreen = () => {
  const touchedPoint = useSharedValue<{x: number; y: number} | null>(null);
  const progress = useSharedValue(0);
  // const touchHandler = useTouchHandler({
  //   onStart: event => {
  //     progress.value = withTiming(1, {duration: 300});
  //     touchedPoint.value = {x: event.x, y: event.y};
  //   },
  //   onActive: event => {
  //     touchedPoint.value = {x: event.x, y: event.y};
  //     console.log({x: event.x, y: event.y});
  //   },
  //   onEnd: () => {
  //     progress.value = withTiming(0, {duration: 300}, () => {
  //       touchedPoint.value = null;
  //     });
  //   },
  // });

  const tap = Gesture.Pan()
    .onBegin(event => {
      touchedPoint.value = {x: event.x, y: event.y};
      progress.value = withTiming(1, {duration: 300});
    })
    .onChange(event => {
      touchedPoint.value = {x: event.x, y: event.y};
    })
    .onFinalize(() => {
      progress.value = withTiming(0, {duration: 300}, () => {
        touchedPoint.value = null;
      });
    });

  return (
    <View style={styles.container}>
      <GestureDetector gesture={tap}>
        <Canvas style={styles.canvas}>
          <Group>
            {new Array(SQUARES_AMOUNT_HORIZONTAL).fill(0).map((_, i) => {
              return new Array(SQUARES_AMOUNT_VERTICAL).fill(0).map((_, j) => {
                return (
                  <GridMagnificationRoundedItem
                    point={touchedPoint}
                    key={`i${i}-j${j}`}
                    x={i * SQUARE_CONTAINER_SIZE + PADDING / 2}
                    y={j * SQUARE_CONTAINER_SIZE + PADDING / 2}
                    width={SQUARE_SIZE}
                    height={SQUARE_SIZE}
                    progress={progress}
                  />
                );
              });
            })}
            <SweepGradient
              c={vec(CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2)}
              colors={['cyan', 'magenta', 'yellow', 'cyan']}
            />
          </Group>
        </Canvas>
      </GestureDetector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  canvas: {
    height: CANVAS_HEIGHT,
    width: CANVAS_WIDTH,
  },
});
