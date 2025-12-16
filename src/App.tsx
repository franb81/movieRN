import { NavigationContainer } from '@react-navigation/native';
import { Text, View } from 'react-native';
import { HomeScreen } from './presentation/screens/home/HomeScreen';

export const App = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  );
};
