import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TimeInputScreen } from './screens/TimeInputScreen';
import { TimeDiffDisplayScreen } from './screens/TimeDiffDisplayScreen';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import HourGlass from './svg/hourglass.svg';
import InputIcon from './svg/input.svg';

const TabNavigator = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <TabNavigator.Navigator>
        <TabNavigator.Screen
          name="Time Input"
          component={TimeInputScreen}
          options={{ tabBarIcon: () => <InputIcon height={24} width={24} /> }}
        />
        <TabNavigator.Screen
          name="Time Difference"
          component={TimeDiffDisplayScreen}
          options={{ tabBarIcon: () => <HourGlass height={24} width={24} /> }}
        />
      </TabNavigator.Navigator>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
