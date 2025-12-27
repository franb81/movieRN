import { Image, View } from 'react-native';
import { Movie } from '../../../core/entities/movie.entity';

interface Props {
  movie: Movie;
}

export const MoviePoster = ({ movie }: Props) => {
  return (
    <View>
      <Image source={{ uri: movie.poster }} />
    </View>
  );
};
