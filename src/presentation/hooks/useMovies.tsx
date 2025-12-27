import { useEffect, useState } from 'react';
import { Movie } from '../../core/entities/movie.entity';

import * as UseCases from '../../core/use-cases';
import { movieDBFetcher } from '../../config/adapters/movieDB.adapter';

export const UseMovies = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [nowPlaying, setnowPlaying] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [topRated, setTopRated] = useState<Movie[]>([]);
  const [upComming, setUpComming] = useState<Movie[]>([]);

  useEffect(() => {
    console.log('disparando el useMovies');
    initialLoad();
  }, []);

  const initialLoad = async () => {
    const nowPlayingPromise = UseCases.moviesNowPlayingUseCase(movieDBFetcher);
    const popularPromise = UseCases.moviesPopularUseCase(movieDBFetcher);
    const topRatedPromise = UseCases.moviesTopRatedUseCase(movieDBFetcher);
    const upCommingPromise = UseCases.upComing(movieDBFetcher);

    const [nowPlayingMovies, popularMovies, topRatedMovies, upCommingMovies] =
      await Promise.all([
        nowPlayingPromise,
        popularPromise,
        topRatedPromise,
        upCommingPromise,
      ]);

    setnowPlaying(nowPlayingMovies);
    setPopularMovies(popularMovies);
    setTopRated(topRatedMovies);
    setUpComming(upCommingMovies);

    setIsLoading(false);
  };

  return {
    isLoading,
    nowPlaying,
  };
};
