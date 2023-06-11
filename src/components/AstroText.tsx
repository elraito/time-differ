import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native';
import { astroFonts } from '../constants/fonts';

interface Props {
  children: React.ReactNode;
  large?: boolean;
  style?: StyleProp<TextStyle>;
}
export function AstroText({ children, large, style }: Props) {
  return <Text style={[large ? styles.large : styles.regular, style]}>{children}</Text>;
}

export const styles = StyleSheet.create({
  large: {
    color: 'black',
    fontSize: 36,
    fontFamily: astroFonts.robotoRegular,
  },
  regular: {
    color: 'black',
    fontSize: 16,
    fontFamily: astroFonts.robotoRegular,
  },
});
