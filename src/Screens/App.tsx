/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
// MODULE
import React from 'react';
// import type {PropsWithChildren} from 'react';

import {GITHUB_DEV_KEY} from '@env';
import {RecoilRoot} from 'recoil';

// import {
//   SafeAreaView,
//   ScrollView,
//   StatusBar,
//   StyleSheet,
//   Text,
//   useColorScheme,
//   View,
// } from 'react-native';

// import {
//   Colors,
//   DebugInstructions,
//   Header,
//   LearnMoreLinks,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// COMPONENT

import Layout from '~/Components/Layout';

function App(): JSX.Element {
  console.log('APP_URL :: ', GITHUB_DEV_KEY);
  return (
    <RecoilRoot>
      {/* <NavigationContainer>
        {isLogin ? (
          <Login />
        ) : (
          <Tab.Navigator>
            <Tab.Screen name="Home" component={Home} />
          </Tab.Navigator>
        )}
      </NavigationContainer> */}
      <Layout />
    </RecoilRoot>
  );
}

// const styles = StyleSheet.create({
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//   },
//   highlight: {
//     fontWeight: '700',
//   },
// });

export default App;
