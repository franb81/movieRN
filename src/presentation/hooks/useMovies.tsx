import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

export const UseMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);

  useEffect(() => {
    console.log('disparando el useMovies');
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingMovies = await UseCases.moviesNowPlayingUseCase(
      movieDBFetcher,
    );
  };

  return {};
};
