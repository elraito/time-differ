import { StyleSheet, Text } from 'react-native';
import { astroFonts } from '../constants/fonts';

interface BlackTextProps {
  children: React.ReactNode;
}
export function LargeText({ children }: BlackTextProps) {
  return <Text style={styles.text}>{children}</Text>;
}

export const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 36,
    fontFamily: astroFonts.robotoRegular,
  },
});
