import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigator } from './src/BottomTabNavigator';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;
