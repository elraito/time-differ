import { GestureResponderEvent, Pressable, StyleSheet } from 'react-native';
import { astroColors } from '../constants/colors';
import LinearGradient from 'react-native-linear-gradient';
import { AstroText } from './AstroText';

interface PillButtonProps {
  onPress: (event: GestureResponderEvent) => void | null | undefined;
  text: string;
}

export function PillButton({ onPress, text }: PillButtonProps) {
  return (
    <Pressable onPress={onPress}>
      {({ pressed }) => (
        <LinearGradient
          colors={pressed ? [astroColors.brown400, astroColors.brown700] : [astroColors.brown700, astroColors.brown400]}
          style={pressed ? styles.buttonPressed : styles.button}>
          <AstroText>{text}</AstroText>
        </LinearGradient>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  buttonPressed: {
    borderRadius: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    opacity: 0.8,
  },
});
