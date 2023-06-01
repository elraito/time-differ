import { Dispatch, ReactNode, SetStateAction, createContext, useState } from 'react';

interface InputTime {
  hours: number;
  minutes: number;
}

interface TimeContext {
  startTime: InputTime;
  setStartTime: Dispatch<SetStateAction<InputTime>>;
  endTime: InputTime;
  setEndTime: Dispatch<SetStateAction<InputTime>>;
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
  const [startTime, setStartTime] = useState<InputTime>({
    hours: 0,
    minutes: 0,
  });
  const [endTime, setEndTime] = useState<InputTime>({ hours: 0, minutes: 0 });

  return (
    <TimeContext.Provider value={{ startTime, setStartTime, endTime, setEndTime }}>{children}</TimeContext.Provider>
  );
}
