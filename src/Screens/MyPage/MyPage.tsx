// MODULE
import {createStackNavigator} from '@react-navigation/stack';
// COMPONENT
import Main from '~/Components/MyPage/Main';
// PROPS TYPE
type MyPageProps = {};

const Stack = createStackNavigator();
const MyPage: React.FC<MyPageProps> = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="마이페이지" component={Main} />
    </Stack.Navigator>
  );
};

export default MyPage;
