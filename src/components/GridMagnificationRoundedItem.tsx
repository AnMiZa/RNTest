import {FC} from 'react';
import {
  Extrapolation,
  SharedValue,
  interpolate,
  useDerivedValue,
} from 'react-native-reanimated';

import {CANVAS_HEIGHT, CANVAS_WIDTH, MAX_DISTANCE} from '@constants';
import {Group, RoundedRect} from '@shopify/react-native-skia';

type GridMagnificationRoundedItem = {
  x: number;
  y: number;
  width: number;
  height: number;
  point: SharedValue<{x: number; y: number} | null>;
  progress: SharedValue<number>;
};

export const GridMagnificationRoundedItem: FC<GridMagnificationRoundedItem> = ({
  point,
  progress,
  ...squareProps
}) => {
  const {x, y} = squareProps;
  const distance = useDerivedValue(() => {
    if (!point.value) {
      return 0;
    }
    return Math.sqrt((point.value.x - x) ** 2 + (point.value.y - y) ** 2);
  }, [point]);

  const scale = useDerivedValue(() => {
    return interpolate(
      distance.value * progress.value,
      [0, MAX_DISTANCE / 2],
      [1, 0],
      {
        extrapolateLeft: Extrapolation.CLAMP,
        extrapolateRight: Extrapolation.CLAMP,
      },
    );
  }, [distance, progress]);

  const transform = useDerivedValue(() => {
    return [{scale: scale.value}];
  }, [scale]);

  const origin = useDerivedValue(() => {
    if (point.value === null) {
      return {x: CANVAS_WIDTH / 2, y: CANVAS_HEIGHT / 2};
    }
    return point.value;
  }, [point]);

  return (
    <Group origin={origin} transform={transform}>
      <RoundedRect {...squareProps} r={4} />
    </Group>
  );
};
