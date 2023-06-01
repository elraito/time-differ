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

    const isDayBreak = startingMinutes > endingMinutes;

    if (isDayBreak) {
      endingMinutes = endingMinutes + 1440;
    }

    console.log(startingMinutes, endingMinutes);

    while (startingMinutes < endingMinutes) {
      startingMinutes = startingMinutes + 15;
      if (isDayBreak) {
        if (startingMinutes > 1320 && startingMinutes <= 2760) {
          dayTime = dayTime + 15;
        } else {
          nightTime = nightTime + 15;
        }
      } else {
        if (startingMinutes > 360 && startingMinutes <= 1320) {
          dayTime = dayTime + 15;
        } else {
          nightTime = nightTime + 15;
        }
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
      <BlackText>
        {startTime.hours}:{startTime.minutes}
      </BlackText>
      <BlackText>
        {endTime.hours}:{endTime.minutes}
      </BlackText>
      <BlackText>Daily time</BlackText>
      <BlackText>
        {dailyTime.hours}:{dailyTime.minutes}
      </BlackText>
      <BlackText>Nightly time</BlackText>
      <BlackText>
        {nightlyTime.hours}:{nightlyTime.minutes}
      </BlackText>
    </SafeAreaView>
  );
}

interface BlackTextProps {
  children: React.ReactNode;
}

function BlackText({ children }: BlackTextProps) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    color: 'black',
    fontSize: 36,
  },
});
