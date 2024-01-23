import {NativeStackScreenProps} from '@react-navigation/native-stack';

// Home Stack

export type HomeStackParamsList = {
  HomeScreen: undefined;
};

export type HomeScreenProps = NativeStackScreenProps<
  HomeStackParamsList,
  'HomeScreen'
>;

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

// Native Modules Stack

export type NativeModulesStackParamsList = {
  CalendarModuleScreen: undefined;
  UTubeModuleScreen: undefined;
  GeolocationModuleScreen: undefined;
};

export type CalendarModuleScreenProps = NativeStackScreenProps<
  NativeModulesStackParamsList,
  'CalendarModuleScreen'
>;
export type UTubeModuleScreenProps = NativeStackScreenProps<
  NativeModulesStackParamsList,
  'UTubeModuleScreen'
>;
export type GeolocationModuleScreenProps = NativeStackScreenProps<
  NativeModulesStackParamsList,
  'GeolocationModuleScreen'
>;

// Test Stack

export type TestStackParamsList = {
  TestRendererScreen: undefined;
};

export type TestRendererScreenProps = NativeStackScreenProps<
  TestStackParamsList,
  'TestRendererScreen'
>;
