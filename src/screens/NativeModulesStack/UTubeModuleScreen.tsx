import {FC} from 'react';

import {ScreenWrapper} from '@components';
import {UTubePlayerView} from '@native-modules';
import {UTubeModuleScreenProps} from '@navigators';

export const UTubeModuleScreen: FC<UTubeModuleScreenProps> = () => {
  return (
    <ScreenWrapper>
      <UTubePlayerView width="100%" height={200} videoId={'5758jHtfBUM'} />
    </ScreenWrapper>
  );
};
