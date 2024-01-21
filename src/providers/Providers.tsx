import {ReactNode} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {PaperProvider} from 'react-native-paper';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {theme} from '@constants';

export const Providers = ({children}: {children: ReactNode | ReactNode[]}) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <PaperProvider theme={theme}>{children}</PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
