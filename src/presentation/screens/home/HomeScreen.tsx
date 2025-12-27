import { Text, View, ScrollView } from 'react-native';
import { UseMovies } from '../../hooks/useMovies';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PosterCarousel } from '../../components/movies/PosterCarousel';

export const HomeScreen = () => {
  /*  */
  const { top } = useSafeAreaInsets();

  const { isLoading, nowPlaying } = UseMovies();

  console.log('isLoading:', isLoading);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView>
      <View style={{ flex: 1, marginTop: 20, paddingTop: 30 }}>
        <PosterCarousel movies={nowPlaying} />
      </View>
    </ScrollView>
  );
};
