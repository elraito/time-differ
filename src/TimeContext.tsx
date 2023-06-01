import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

export interface TimeFormat {
  hours: number;
  minutes: number;
}

interface TimeContext {
  startTime: TimeFormat;
  setStartTime: Dispatch<SetStateAction<TimeFormat>>;
  endTime: TimeFormat;
  setEndTime: Dispatch<SetStateAction<TimeFormat>>;
}

export const TimeContext = createContext<TimeContext>({
  startTime: { hours: 0, minutes: 0 },
  endTime: { hours: 0, minutes: 0 },
  setStartTime: () => {},
  setEndTime: () => {},
});

interface TimeContextProviderProps {
  children: ReactNode;
}

export function TimeContextProvider({ children }: TimeContextProviderProps): JSX.Element {
  const [startTime, setStartTime] = useState<TimeFormat>({
    hours: 0,
    minutes: 0,
  });
  const [endTime, setEndTime] = useState<TimeFormat>({ hours: 0, minutes: 0 });

  return (
    <TimeContext.Provider value={{ startTime, setStartTime, endTime, setEndTime }}>{children}</TimeContext.Provider>
  );
}
