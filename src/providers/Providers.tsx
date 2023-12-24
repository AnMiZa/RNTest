import {PaperProvider} from 'react-native-paper';
import {ReactNode} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export const Providers = ({children}: {children: ReactNode | ReactNode[]}) => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <PaperProvider>{children}</PaperProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};
