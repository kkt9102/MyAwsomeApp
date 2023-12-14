// MODULE
import {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
// HOOK
import {getMyRepositories} from '~/API/githubAPI';
// PROPS TYPE
type CalendarProps = {};
const Calendar: React.FC<CalendarProps> = () => {
  const [data, setData] = useState([]);
  const Test = async () => {
    try {
      const result = await getMyRepositories();
      console.log('==========================');
      console.log('result', result.data);
      setData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    Test();
  }, []);
  return (
    <View>
      <Text></Text>
      <TouchableOpacity onPress={() => Test()}>
        <Text>API 테스트</Text>
      </TouchableOpacity>
      {data.map((item, index) => (
        <>
          <View key={index}>
            <Text key={index}>{item.name}</Text>
          </View>
        </>
      ))}
    </View>
  );
};

export default Calendar;
