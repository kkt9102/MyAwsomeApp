// MODULE
import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useRecoilValue} from 'recoil';
// RECOIL STATE
import {LoginState} from '~/State/commonState';

// COMPONENT
import Login from '~/Screens/Login';
import Home from '~/Screens/Home';
const Layout = () => {
  const Tab = createBottomTabNavigator();
  const isLogin = useRecoilValue(LoginState);
  return (
    // <SafeAreaView>
    <NavigationContainer>
      {isLogin ? (
        <Login />
      ) : (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default Layout;
