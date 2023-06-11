import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { StyleSheet } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { TimeContext } from '../TimeContext';
import { AstroText } from '../components/AstroText';
import { DescriptionModal } from '../components/DescriptionModal';
import { HourglassBG } from '../components/HourglassBG';
import { PillButton } from '../components/PillButton';
import { astroColors } from '../constants/colors';
import { Row } from '../components/Row';

export function TimeInputScreen() {
  const { addTimeEntry } = useContext(TimeContext);
  const { navigate } = useNavigation();

  const [startDate, setStartDate] = useState(new Date('2023-10-10T06:00:00'));
  const [endDate, setEndDate] = useState(new Date('2023-10-10T22:00:00'));
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    addTimeEntry({
      startTime: { hours: startDate.getHours(), minutes: startDate.getMinutes() },
      endTime: { hours: endDate.getHours(), minutes: endDate.getMinutes() },
      description,
    });

    setStartDate(new Date('2023-10-10T06:00:00'));
    setEndDate(new Date('2023-10-10T22:00:00'));

    setDescription('');
    navigate('TimeDifference');
  };

  return (
    <HourglassBG style={styles.container}>
      <Row>
        <AstroText large>Töö algus:</AstroText>
      </Row>
      <Row>
        <DatePicker
          style={styles.timePicker}
          date={startDate}
          onDateChange={setStartDate}
          minuteInterval={15}
          mode="time"
          locale="et"
          textColor={astroColors.black}
          fadeToColor={astroColors.transparent}
        />
      </Row>
      <Row>
        <AstroText large>Töö lõpp:</AstroText>
      </Row>
      <Row>
        <DatePicker
          style={styles.timePicker}
          date={endDate}
          onDateChange={setEndDate}
          minuteInterval={15}
          mode="time"
          locale="et"
          textColor={astroColors.black}
          fadeToColor={astroColors.transparent}
        />
      </Row>
      <Row>
        <DescriptionModal submitText={setDescription} />
        <PillButton onPress={handleSubmit} text="Kinnita" />
      </Row>
    </HourglassBG>
  );
}

export const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  timePicker: {
    height: 96,
  },
});
