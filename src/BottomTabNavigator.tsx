import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TimeInputScreen } from './screens/TimeInputScreen';
import { TimeDiffDisplayScreen } from './screens/TimeDiffDisplayScreen';
import { KeyboardAvoidingView, Platform, StyleSheet } from 'react-native';
import HourGlass from './svg/hourglass.svg';
import InputIcon from './svg/input.svg';
import { BottomTabBar } from './BottomTabBar';

export type RootStackParamList = {
  TimeInput: undefined;
  TimeDifference: undefined;
};

const TabNavigator = createBottomTabNavigator<RootStackParamList>();

export function BottomTabNavigator() {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
      <TabNavigator.Navigator tabBar={props => <BottomTabBar {...props} />}>
        <TabNavigator.Screen
          name="TimeInput"
          component={TimeInputScreen}
          options={{ tabBarIcon: () => <InputIcon height={24} width={24} /> }}
        />
        <TabNavigator.Screen
          name="TimeDifference"
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
