import React from 'react';
import {StyleSheet} from 'react-native';
import {RootNavigator} from '@navigators';
import {Providers} from '@providers';

function App(): React.JSX.Element {
  return (
    <Providers>
      <RootNavigator />
    </Providers>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
