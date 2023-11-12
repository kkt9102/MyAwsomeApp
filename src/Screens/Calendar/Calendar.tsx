// MODULE
import {View, Text} from 'react-native';

import {GITHUB_DEV_KEY} from '@env';
const Calendar = () => {
  return (
    <View>
      <Text>{GITHUB_DEV_KEY}</Text>
    </View>
  );
};

export default Calendar;
