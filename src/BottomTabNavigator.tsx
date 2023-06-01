import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TimeInputScreen } from './screens/TimeInputScreen';
import { TimeDiffDisplayScreen } from './screens/TimeDiffDisplayScreen';

const TabNavigator = createBottomTabNavigator();

export function BottomTabNavigator() {
  return (
    <TabNavigator.Navigator>
      <TabNavigator.Screen name="Time Input" component={TimeInputScreen} />
      <TabNavigator.Screen name="Time Difference" component={TimeDiffDisplayScreen} />
    </TabNavigator.Navigator>
  );
}
