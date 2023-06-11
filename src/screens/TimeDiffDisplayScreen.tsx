import { useContext, useState } from 'react';
import { TimeContext } from '../TimeContext';
import { HourglassBG } from '../components/HourglassBG';
import { AstroText } from '../components/AstroText';
import { FlatList, LayoutRectangle, Pressable, StyleSheet, View } from 'react-native';
import { Row } from '../components/Row';
import MoonIcon from '../svg/moon.svg';
import SunIcon from '../svg/sun.svg';
import TrashIcon from '../svg/trash.svg';
import { astroColors } from '../constants/colors';

export function TimeDiffDisplayScreen() {
  const { timeEntries, deleteEntry } = useContext(TimeContext);
  const [layout, setLayout] = useState<LayoutRectangle | undefined>();
  const isLandScape = layout?.width ? layout.width > layout.height : true;

  return (
    <HourglassBG style={styles.container} onLayout={e => setLayout(e.nativeEvent.layout)}>
      {timeEntries.length === 0 ? (
        <Row>
          <AstroText>Sul ei ole sissekandeid.</AstroText>
        </Row>
      ) : (
        <FlatList
          numColumns={isLandScape ? 2 : 1}
          key={isLandScape ? 2 : 1}
          columnWrapperStyle={isLandScape && styles.columnWrapperStyle}
          data={timeEntries}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item, index }) => (
            <View style={styles.cardContainer}>
              <Row>
                <View style={styles.textLeftColumn}>
                  <AstroText style={styles.smallText}>
                    {item.startTime.hours}:{item.startTime.minutes}
                  </AstroText>
                </View>
                <AstroText style={styles.smallText}>kuni</AstroText>
                <View style={styles.textRightColumn}>
                  <AstroText style={styles.smallText}>
                    {item.endTime.hours}:{item.endTime.minutes}
                  </AstroText>
                </View>
                <Pressable onPress={() => deleteEntry(index)} style={styles.deleteIcon}>
                  <TrashIcon height={20} width={20} color="black" />
                </Pressable>
              </Row>
              <Row>
                <View style={styles.textLeftColumn}>
                  <AstroText style={styles.smallText}>Öine aeg:</AstroText>
                  <AstroText style={styles.smallText}>
                    {item.nigtlyTime.hours}:{item.nigtlyTime.minutes}
                  </AstroText>
                </View>
                <View style={styles.textRightColumn}>
                  <AstroText style={styles.smallText}>Päevane aeg:</AstroText>
                  <AstroText style={styles.smallText}>
                    {item.dailyTime.hours}:{item.dailyTime.minutes}
                  </AstroText>
                </View>
              </Row>
              <Row style={styles.barContainer}>
                <View style={styles.nightBarContainer}>
                  {(item.nigtlyTime.hours > 0 || item.nigtlyTime.minutes > 0) && <MoonIcon height={12} width={12} />}
                  <View
                    style={{ ...styles.nightBar, width: item.nigtlyTime.hours * 6 + item.nigtlyTime.minutes / 15 }}
                  />
                </View>
                <View style={styles.verticalspacer} />
                <View style={styles.dayBarContainer}>
                  <View style={{ ...styles.dayBar, width: item.dailyTime.hours * 6 + item.dailyTime.minutes / 15 }} />
                  {(item.dailyTime.hours > 0 || item.dailyTime.minutes > 0) && (
                    <SunIcon height={12} width={12} color="black" />
                  )}
                </View>
              </Row>
              {item.description.length > 0 && (
                <Row>
                  <AstroText style={styles.smallText}>{item.description}</AstroText>
                </Row>
              )}
            </View>
          )}
        />
      )}
    </HourglassBG>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 48,
    paddingTop: 48,
  },
  listContainer: {
    gap: 12,
    justifyContent: 'center',
  },
  cardContainer: {
    backgroundColor: astroColors.brown400translucent,
    borderRadius: 12,
    paddingVertical: 8,
    gap: 8,
  },
  verticalspacer: {
    width: 1,
    height: 16,
    backgroundColor: 'gray',
  },
  textLeftColumn: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    gap: 4,
  },
  textRightColumn: {
    flex: 1,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    gap: 4,
  },
  barContainer: {
    marginVertical: 8,
    gap: 0,
  },
  nightBarContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nightBar: {
    backgroundColor: 'blue',
    height: 8,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
  dayBarContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dayBar: {
    backgroundColor: 'yellow',
    height: 8,
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
  },
  smallText: {
    fontSize: 12,
  },
  deleteIcon: {
    position: 'absolute',
    left: 280,
    padding: 4,
  },
  columnWrapperStyle: {
    gap: 12,
  },
});
