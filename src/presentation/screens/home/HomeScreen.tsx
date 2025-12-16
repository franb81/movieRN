import { Text, View } from 'react-native';
import { UseMovies } from '../../hooks/useMovies';

export const HomeScreen = () => {
  const {} = UseMovies();

  return (
    <View>
      <Text>Hola friend! Home</Text>
    </View>
  );
};
