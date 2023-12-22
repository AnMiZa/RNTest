import {PaperProvider} from 'react-native-paper';
import {ReactNode} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

export const Providers = ({children}: {children: ReactNode | ReactNode[]}) => {
  return (
    <SafeAreaProvider>
      <PaperProvider>{children}</PaperProvider>
    </SafeAreaProvider>
  );
};
