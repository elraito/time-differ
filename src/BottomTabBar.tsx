import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import InputIcon from './svg/input.svg';
import HourGlass from './svg/hourglass.svg';
import { astroColors } from './constants/colors';
import { useSafeAreaFrame } from 'react-native-safe-area-context';

export function BottomTabBar({ navigation, state: { index } }: BottomTabBarProps) {
  const { height } = useSafeAreaFrame();

  return (
    <View style={[styles.container, { position: 'absolute', top: height - 48, width: 270 }]}>
      <Pressable
        onPress={() => navigation.navigate('TimeInput')}
        style={[styles.leftButton, index === 0 ? styles.buttonElevation : styles.buttonFlatten]}>
        <InputIcon height={20} width={24} />
        <Text>Time input</Text>
      </Pressable>

      <View style={styles.verticalspacer} />

      <Pressable
        onPress={() => navigation.navigate('TimeDifference')}
        style={[styles.rightButton, index === 1 ? styles.buttonElevation : styles.buttonFlatten]}>
        <HourGlass height={12} width={24} />
        <Text>Results</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 48,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
    maxWidth: 270,
  },
  leftButton: {
    flex: 1,
    height: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 24,
    borderBottomLeftRadius: 24,
  },
  rightButton: {
    flex: 1,
    height: 32,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 24,
    borderBottomRightRadius: 24,
  },
  verticalspacer: {
    width: 1,
    height: 32,
    backgroundColor: 'gray',
  },
  buttonElevation: {
    backgroundColor: astroColors.lightblue700,
    height: 36,
  },
  buttonFlatten: {
    backgroundColor: astroColors.lightblue400,
    height: 32,
  },
});
