import {ReactNode, useMemo} from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MD3Colors} from 'react-native-paper';

const DEFAULT_PADDING = 16;
export const ScreenWrapper = ({
  children,
  extraStyles,
}: {
  children: ReactNode | ReactNode[];
  extraStyles?: ViewStyle;
}) => {
  const {top, bottom, left, right} = useSafeAreaInsets();
  const wrapper = useMemo(
    () =>
      StyleSheet.compose(styles.wrapper, {
        paddingTop: top + DEFAULT_PADDING,
        paddingBottom: bottom + DEFAULT_PADDING,
        paddingLeft: left + DEFAULT_PADDING,
        paddingRight: right + DEFAULT_PADDING,
      }),
    [top, bottom, left, right],
  );

  return <View style={[wrapper, extraStyles]}>{children}</View>;
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: MD3Colors.neutral100,
  },
});
