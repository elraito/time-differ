import { useContext, useState } from 'react';
import { NativeSyntheticEvent, StyleSheet, Text, TextInput, TextInputChangeEventData, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TimeContext } from '../TimeContext';

interface ValidationErrors {
  [key: string]: undefined | string;
}

export function TimeInputScreen() {
  const { startTime, setStartTime, endTime, setEndTime } = useContext(TimeContext);

  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});

  const validateMinutes = (minutes: number) => {
    if (isNaN(minutes)) {
      return 'should be a number';
    }

    if ([0, 15, 30, 45].includes(minutes) && minutes <= 59) {
      return true;
    } else if (minutes > 59) {
      return 'should be smaller than 60';
    } else {
      return 'should be one of 0, 15, 30, 45';
    }
  };

  const validateHours = (hours: number) => {
    if (isNaN(hours)) {
      return 'should be a number';
    }

    if (hours >= 0 && hours <= 23) {
      return true;
    } else {
      return 'should be between 0 and 23';
    }
  };

  const handleStartHourChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const hours = parseInt(e.nativeEvent.text, 10);
    const hoursValidation = validateHours(hours);

    if (hoursValidation === true) {
      setStartTime(prev => ({ ...prev, hours }));
      setValidationErrors(prev => ({ ...prev, startHours: undefined }));
    } else {
      setValidationErrors(prev => ({ ...prev, startHours: 'Starting hours ' + hoursValidation }));
    }
  };

  const handleEndHourChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const hours = parseInt(e.nativeEvent.text, 10);
    const hoursValidation = validateHours(hours);

    if (hoursValidation === true) {
      setEndTime(prev => ({ ...prev, hours }));
      setValidationErrors(prev => ({ ...prev, endHours: undefined }));
    } else {
      setValidationErrors(prev => ({ ...prev, endHours: 'Ending hours ' + hoursValidation }));
    }
  };

  const handleStartMinuteChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const minutes = parseInt(e.nativeEvent.text, 10);
    const minutesValidation = validateMinutes(minutes);

    if (minutesValidation === true) {
      setStartTime(prev => ({ ...prev, minutes }));
      setValidationErrors(prev => ({ ...prev, startMinutes: undefined }));
    } else {
      setValidationErrors(prev => ({ ...prev, startMinutes: 'Staring minutes ' + minutesValidation }));
    }
  };

  const handleEndMinutesChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
    const minutes = parseInt(e.nativeEvent.text, 10);
    const minutesValidation = validateMinutes(minutes);

    if (minutesValidation === true) {
      setEndTime(prev => ({ ...prev, minutes }));
      setValidationErrors(prev => ({ ...prev, endMinutes: undefined }));
    } else {
      setValidationErrors(prev => ({ ...prev, endMinutes: 'Ending minutes ' + minutesValidation }));
    }
  };

  const hasValidationErrors = () => {
    let errors: string[] = [];
    for (const key in validationErrors) {
      if (validationErrors[key]) {
        errors.push(validationErrors[key]!);
      }
    }
    return errors.length > 0 ? errors : [];
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.text}>Starting time:</Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          defaultValue={startTime.hours.toString()}
          onChange={handleStartHourChange}
          keyboardType="number-pad"
          maxLength={2}
          placeholder="HH"
        />
        <Text style={styles.text}>:</Text>
        <TextInput
          style={styles.input}
          defaultValue={startTime.minutes.toString()}
          onChange={handleStartMinuteChange}
          keyboardType="number-pad"
          maxLength={2}
          placeholder="MM"
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>Ending time:</Text>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.input}
          defaultValue={endTime.hours.toString()}
          onChange={handleEndHourChange}
          keyboardType="number-pad"
          maxLength={2}
          placeholder="HH"
        />
        <Text style={styles.text}>:</Text>
        <TextInput
          style={styles.input}
          defaultValue={endTime.minutes.toString()}
          onChange={handleEndMinutesChange}
          keyboardType="number-pad"
          maxLength={2}
          placeholder="MM"
        />
      </View>
      {hasValidationErrors().length > 0 &&
        hasValidationErrors().map((e, i) => (
          <View style={styles.row} key={i}>
            <Text style={styles.errorMessage}>{e}</Text>
          </View>
        ))}
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  errorMessage: {
    color: 'red',
  },
  text: {
    color: 'black',
    fontSize: 36,
  },
  input: {
    color: 'black',
    fontSize: 36,
    margin: 0,
    padding: 0,
    alignItems: 'center',
    textAlign: 'center',
  },
});
