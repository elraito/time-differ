import { BottomTabBarProps } from '@react-navigation/bottom-tabs';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import InputIcon from './svg/input.svg';
import HourGlass from './svg/hourglass.svg';
import { astroColors } from './constants/colors';
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import { astroFonts } from './constants/fonts';
import LinearGradient from 'react-native-linear-gradient';

export function BottomTabBar({ navigation, state: { index } }: BottomTabBarProps) {
  const { height } = useSafeAreaFrame();

  return (
    <View style={[styles.container, { top: height - 48 }]}>
      <Pressable
        onPress={() => navigation.navigate('TimeInput')}
        style={[styles.leftButton, index === 0 ? styles.buttonElevation : styles.buttonFlatten]}>
        <LinearGradient
          colors={[astroColors.brown400, astroColors.brown700]}
          style={[styles.leftButton, index === 0 ? styles.buttonElevation : styles.buttonFlatten]}>
          <InputIcon height={20} width={24} />
          <Text
            style={{
              fontFamily: index === 0 ? astroFonts.robotoBold : astroFonts.robotoRegular,
              color: astroColors.black,
            }}>
            Lisa aeg
          </Text>
        </LinearGradient>
      </Pressable>

      <View style={styles.verticalspacer} />

      <Pressable
        onPress={() => navigation.navigate('TimeDifference')}
        style={[styles.rightButton, index === 1 ? styles.buttonElevation : styles.buttonFlatten]}>
        <LinearGradient
          colors={[astroColors.brown400, astroColors.brown700]}
          style={[styles.rightButton, index === 1 ? styles.buttonElevation : styles.buttonFlatten]}>
          <HourGlass height={12} width={24} />
          <Text
            style={{
              fontFamily: index === 1 ? astroFonts.robotoBold : astroFonts.robotoRegular,
              color: astroColors.black,
            }}>
            Jaotus
          </Text>
        </LinearGradient>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    height: 48,
    width: 270,
    borderRadius: 24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    alignSelf: 'center',
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
    backgroundColor: astroColors.brown700,
    height: 36,
  },
  buttonFlatten: {
    backgroundColor: astroColors.brown400,
    height: 32,
  },
});
