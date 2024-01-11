import React from 'react';
import {RootNavigator} from '@navigators';
import {Providers} from '@providers';

function App(): React.JSX.Element {
  return (
    <Providers>
      <RootNavigator />
    </Providers>
  );
}

export default App;
