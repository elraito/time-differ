import { ReactNode, createContext, useState } from 'react';

interface TimeEntry {
  startTime: TimeFormat;
  endTime: TimeFormat;
  dailyTime: TimeFormat;
  nigtlyTime: TimeFormat;
  description: string;
}

export interface TimeFormat {
  hours: number;
  minutes: number;
}

interface TimeContext {
  addTimeEntry: ({
    startTime,
    endTime,
    description,
  }: {
    startTime: TimeFormat;
    endTime: TimeFormat;
    description: string;
  }) => void;
  timeEntries: TimeEntry[];
  deleteEntry: (index: number) => void;
}

export const TimeContext = createContext<TimeContext>({
  addTimeEntry: () => {},
  timeEntries: [],
  deleteEntry: () => {},
});

interface TimeContextProviderProps {
  children: ReactNode;
}

export function TimeContextProvider({ children }: TimeContextProviderProps): JSX.Element {
  const [timeEntries, setTimeEntries] = useState<TimeEntry[]>([]);

  const addTimeEntry = ({
    startTime,
    endTime,
    description = '',
  }: {
    startTime: TimeFormat;
    endTime: TimeFormat;
    description: string;
  }) => {
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

    setTimeEntries(prev => [
      ...prev,
      {
        startTime,
        endTime,
        dailyTime: {
          hours: Math.floor(calculateTimeDifference().dayTime / 60),
          minutes: calculateTimeDifference().dayTime % 60,
        },
        nigtlyTime: {
          hours: Math.floor(calculateTimeDifference().nightTime / 60),
          minutes: calculateTimeDifference().nightTime % 60,
        },
        description,
      },
    ]);
  };

  const deleteEntry = (index: number) => {
    setTimeEntries(prev => {
      return prev.filter((_, i) => i !== index);
    });
  };

  return <TimeContext.Provider value={{ addTimeEntry, timeEntries, deleteEntry }}>{children}</TimeContext.Provider>;
}
