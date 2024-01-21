import React, {FC} from 'react';
import {
  DimensionValue,
  HostComponent,
  Platform,
  View,
  requireNativeComponent,
} from 'react-native';

const AndroidView: HostComponent<any> = requireNativeComponent('RNUTubeView');

const UTComponent = Platform.OS === 'android' ? AndroidView : View;

interface IUTubePlayerView {
  width: DimensionValue;
  height: DimensionValue;
  videoId: string;
}

export const UTubePlayerView: FC<IUTubePlayerView> = ({
  width = '100%',
  height = 200,
  videoId,
}) => {
  return <UTComponent videoId={videoId} style={{width, height}} />;
};
