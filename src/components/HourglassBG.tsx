import { ImageBackground, LayoutChangeEvent, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const hourglassBG = require('../../assets/images/hourglass.webp');

interface Props {
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  onLayout?: (event: LayoutChangeEvent) => void;
}

export function HourglassBG({ children, style, onLayout }: Props) {
  return (
    <SafeAreaView style={styles.container} onLayout={onLayout}>
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
