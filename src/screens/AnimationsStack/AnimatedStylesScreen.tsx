import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';
import {ScreenWrapper} from '@components';

export const AnimatedStylesScreen = () => {
  const translateX = useSharedValue(0);

  const handlePress = () => {
    translateX.value += 50;
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{translateX: withSpring(translateX.value * 2)}],
  }));

  return (
    <ScreenWrapper>
      <Animated.View style={[styles.box, animatedStyles]} />
      <View style={styles.container}>
        <Button onPress={handlePress}>Click me</Button>
      </View>
    </ScreenWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  box: {
    height: 120,
    width: 120,
    backgroundColor: '#b58df1',
    borderRadius: 20,
    marginVertical: 50,
  },
});
