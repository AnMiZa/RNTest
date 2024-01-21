import {NativeStackScreenProps} from '@react-navigation/native-stack';

// AnimationsStack

export type AnimationsStackParamsList = {
  AnimationsScreen: undefined;
  GridMagnificationScreen: undefined;
  CircularProgressIndicatorScreen: undefined;
  AnimatedStylesScreen: undefined;
  AnimatedPropsScreen: undefined;
  ModifiersScreen: undefined;
  GesturesScreen: undefined;
};

export type AnimationsScreenProps = NativeStackScreenProps<
  AnimationsStackParamsList,
  'AnimationsScreen'
>;
export type GridMagnificationScreenProps = NativeStackScreenProps<
  AnimationsStackParamsList,
  'GridMagnificationScreen'
>;
export type CircularProgressIndicatorScreenProps = NativeStackScreenProps<
  AnimationsStackParamsList,
  'CircularProgressIndicatorScreen'
>;
export type AnimatedStylesScreenProps = NativeStackScreenProps<
  AnimationsStackParamsList,
  'AnimatedStylesScreen'
>;
export type AnimatedPropsScreenProps = NativeStackScreenProps<
  AnimationsStackParamsList,
  'AnimatedPropsScreen'
>;
export type ModifiersScreenProps = NativeStackScreenProps<
  AnimationsStackParamsList,
  'ModifiersScreen'
>;
export type GesturesScreenProps = NativeStackScreenProps<
  AnimationsStackParamsList,
  'GesturesScreen'
>;
