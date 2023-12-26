// MODULE
import * as React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
// PROPS TYPE
type NavigationProps = {
  state: any;
  descriptors: any;
  navigation: any;
};
const Navigation: React.FC<NavigationProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const deviceWidth = Dimensions.get('window').width;
  const activeMenu = state?.index;
  return (
    <View style={[styles.navigationBar, {width: deviceWidth}]}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>홈</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Calendar')}>
        <Text>일정</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('MyPage')}>
        <Text>마이페이지</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
});
export default Navigation;
