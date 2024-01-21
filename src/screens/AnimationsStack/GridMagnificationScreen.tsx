import {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import {useSharedValue, withTiming} from 'react-native-reanimated';

import {GridMagnificationRoundedItem} from '@components';
import {
  CANVAS_HEIGHT,
  CANVAS_WIDTH,
  PADDING,
  SQUARES_AMOUNT_HORIZONTAL,
  SQUARES_AMOUNT_VERTICAL,
  SQUARE_CONTAINER_SIZE,
  SQUARE_SIZE,
} from '@constants';
import {GridMagnificationScreenProps} from '@navigators';
import {Canvas, Group, SweepGradient, vec} from '@shopify/react-native-skia';

export const GridMagnificationScreen: FC<GridMagnificationScreenProps> = () => {
  const touchedPoint = useSharedValue<{x: number; y: number} | null>(null);
  const progress = useSharedValue(0);

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
