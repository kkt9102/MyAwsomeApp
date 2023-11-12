/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// MODULE
import React from 'react';
import {RecoilRoot} from 'recoil';
// HOOKS

// COMPONENT

import Layout from '~/Components/Layout';

function App(): JSX.Element {
  return (
    <RecoilRoot>
      <Layout />
    </RecoilRoot>
  );
}
export default App;
