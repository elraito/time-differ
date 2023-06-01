import { useContext } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TimeContext } from '../TimeContext';

export function TimeDiffDisplayScreen() {
  const { startTime, endTime } = useContext(TimeContext);

  const calculateTimeDifference = () => {
    let startingMinutes = startTime.hours * 60 + startTime.minutes;
    let endingMinutes = endTime.hours * 60 + endTime.minutes;

    let dayTime = 0;
    let nightTime = 0;

    if (startingMinutes > endingMinutes) {
      startingMinutes = startingMinutes - 1440;
    }

    while (startingMinutes < endingMinutes) {
      startingMinutes = startingMinutes + 15;
      if (startingMinutes > 240 && startingMinutes <= 1320) {
        dayTime = dayTime + 15;
      } else {
        nightTime = nightTime + 15;
      }
    }

    return { dayTime, nightTime };
  };

  const dailyTime = {
    hours: Math.floor(calculateTimeDifference().dayTime / 60),
    minutes: calculateTimeDifference().dayTime % 60,
  };
  const nightlyTime = {
    hours: Math.floor(calculateTimeDifference().nightTime / 60),
    minutes: calculateTimeDifference().nightTime % 60,
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text>
        {startTime.hours}:{startTime.minutes}
      </Text>
      <Text>
        {endTime.hours}:{endTime.minutes}
      </Text>
      <Text>Daily time:</Text>
      <Text>
        {dailyTime.hours}:{dailyTime.minutes}
      </Text>
      <Text>Nightly time</Text>
      <Text>
        {nightlyTime.hours}:{nightlyTime.minutes}
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
