import { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TimeContext } from '../TimeContext';

export function TimeDiffDisplayScreen() {
  const { startTime, endTime } = useContext(TimeContext);

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        {startTime.hours} : {startTime.minutes}
      </Text>
      <Text>
        {endTime.hours} : {endTime.minutes}
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
});
