import {FC} from 'react';

import {ScreenWrapper} from '@components';
import {UTubePlayerView} from '@native-modules';

export const UTubeModuleScreen: FC = () => {
  return (
    <ScreenWrapper>
      <UTubePlayerView width="100%" height={200} videoId={'5758jHtfBUM'} />
    </ScreenWrapper>
  );
};
