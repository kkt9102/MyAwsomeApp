// MODULE
import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// HOOK
import {getMyRepositories} from '~/API/githubAPI';
const Calendar = () => {
  const [data, setData] = useState(null);
  const Test = async () => {
    try {
      const result = await getMyRepositories();
      console.log('result', result);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Test();
  }, []);
  return (
    <View>
      <TouchableOpacity onPress={() => Test()}>
        <Text>API 테스트</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Calendar;
