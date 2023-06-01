import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/BottomTabNavigator';
import { TimeContextProvider } from './src/TimeContext';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <TimeContextProvider>
        <BottomTabNavigator />
      </TimeContextProvider>
    </NavigationContainer>
  );
}

export default App;
