import { useContext } from 'react';
import { TimeContext } from '../TimeContext';
import { HourglassBG } from '../components/HourglassBG';
import { AstroText } from '../components/AstroText';
import { FlatList, Platform, StyleSheet, View } from 'react-native';
import { Row } from '../components/Row';
import { PillButton } from '../components/PillButton';

export function TimeDiffDisplayScreen() {
  const { timeEntries, deleteEntry } = useContext(TimeContext);

  return (
    <HourglassBG style={styles.container}>
      {timeEntries.length === 0 ? (
        <Row>
          <AstroText>Sul ei ole sissekandeid.</AstroText>
        </Row>
      ) : (
        <FlatList
          data={timeEntries}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item, index }) => (
            <View>
              <View>
                <Row>
                  <AstroText>Päevane aeg:</AstroText>
                  <AstroText>
                    {item.dailyTime.hours}:{item.dailyTime.minutes}
                  </AstroText>
                </Row>
                <Row>
                  <AstroText>Öine aeg:</AstroText>
                  <AstroText>
                    {item.nigtlyTime.hours}:{item.nigtlyTime.minutes}
                  </AstroText>
                </Row>
              </View>
              <Row>
                <PillButton onPress={() => deleteEntry(index)} text="Eemalda" />
              </Row>
            </View>
          )}
        />
      )}
    </HourglassBG>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: Platform.OS === 'ios' ? 48 : 96,
    paddingTop: 48,
  },
  listContainer: {
    gap: 12,
    justifyContent: 'center',
  },
});
