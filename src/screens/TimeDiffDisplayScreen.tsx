import { useContext } from 'react';
import { TimeContext } from '../TimeContext';
import { HourglassBG } from '../components/HourglassBG';
import { LargeText } from '../components/LargeText';

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

    while (startingMinutes < endingMinutes) {
      startingMinutes = startingMinutes + 15;
      if (isDayBreak) {
        if (startingMinutes > 1320 && startingMinutes <= 2760) {
          nightTime = nightTime + 15;
        } else {
          dayTime = dayTime + 15;
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
    <HourglassBG>
      <LargeText>Daily time</LargeText>
      <LargeText>
        {dailyTime.hours} : {dailyTime.minutes}
      </LargeText>
      <LargeText>Nightly time</LargeText>
      <LargeText>
        {nightlyTime.hours} : {nightlyTime.minutes}
      </LargeText>
    </HourglassBG>
  );
}
