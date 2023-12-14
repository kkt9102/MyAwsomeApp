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
          screenOptions={{
            headerShown: false,
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {backgroundColor: '#fff'},
          }}>
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: '홈',
              // tabBarIcon: () => {
              //   return <HomeIcon width={29} height={20} />;
              // },
            }}
          />
          <Tab.Screen
            name="Calendar"
            component={Calendar}
            options={{
              tabBarStyle: {
                // display: 'none',
                height: 0,
                overflow: 'hidden',
              },
            }}
          />
        </Tab.Navigator>
      )}
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default Layout;
