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
import Calendar from '~/Screens/Calendar';
import Navigation from '../Navigation';
import MyPage from '~/Screens/MyPage';
// PROPS TYPE
type LayoutProps = {};

const Layout: React.FC<LayoutProps> = () => {
  const Tab = createBottomTabNavigator();
  const isLogin = useRecoilValue(LoginState);
  return (
    // <SafeAreaView>
    <NavigationContainer>
      {isLogin ? (
        <Login />
      ) : (
        <Tab.Navigator
          tabBar={props => <Navigation {...props} />}
          screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {backgroundColor: '#fff'},
          }}>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Calendar" component={Calendar} />
          <Tab.Screen name="MyPage" component={MyPage} />
        </Tab.Navigator>
      )}
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default Layout;
