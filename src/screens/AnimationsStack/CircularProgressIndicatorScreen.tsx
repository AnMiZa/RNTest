import {FC, useCallback} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Animated, {
  cancelAnimation,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {ReText} from 'react-native-redash';

import {CircularProgressIndicator, ScreenWrapper} from '@components';
import {theme} from '@constants';
import {CircularProgressIndicatorScreenProps} from '@navigators';
import {useFocusEffect} from '@react-navigation/native';

Animated.addWhitelistedNativeProps({text: true});
export const CircularProgressIndicatorScreen: FC<
  CircularProgressIndicatorScreenProps
> = () => {
  const progress = useSharedValue(0);
  const buttonText = useDerivedValue(() => {
    if (progress.value > 0) {
      return 'Reset';
    } else {
      return 'Run';
    }
  });
  const progressSimulation = useCallback(() => {
    // progress increase simulation
    progress.value = withTiming(0.3, {duration: 2000}, () => {
      progress.value = withTiming(0.6, {duration: 3000}, () => {
        progress.value = withTiming(1, {duration: 1000});
      });
    });
  }, [progress]);

  useFocusEffect(
    useCallback(() => {
      progressSimulation();
      return () => {
        cancelAnimation(progress);
        progress.value = 0;
      };
    }, [progress, progressSimulation]),
  );

  const onPress = useCallback(() => {
    if (progress.value > 0) {
      progress.value = withTiming(0, {duration: 2000});
    } else {
      progressSimulation();
    }
  }, [progress, progressSimulation]);

  return (
    <ScreenWrapper>
      <CircularProgressIndicator progress={progress} />
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <ReText style={styles.buttonText} text={buttonText} />
      </TouchableOpacity>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.indicatorBackground,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  buttonText: {
    fontSize: 25,
    color: 'white',
    padding: 1,
  },
});
