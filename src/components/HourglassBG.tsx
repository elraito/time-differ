import { ImageBackground, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const hourglassBG = require('../../assets/images/hourglass.webp');

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

export function HourglassBG({ children, style }: Props) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={hourglassBG} imageStyle={styles.imageStyle} style={[styles.container, style]}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    opacity: 0.3,
  },
});
