import { HttpAdapter } from '../../../config/adapters/http/http.adapter';
import { NowPlayingResponse } from '../../../infrastructure/interfaces/movie-db.responses';
import { MovieMapper } from '../../../infrastructure/mappers/movie.mapper';
import { Movie } from '../../entities/movie.entity';

export const upComing = async (fetcher: HttpAdapter): Promise<Movie[]> => {
  try {
    const resUpcoming = await fetcher.get<NowPlayingResponse>('/upcoming');

    return resUpcoming.results.map(result =>
      MovieMapper.fromMovieDBResultToEntity(result),
    );
  } catch (error) {
    console.error('🔥 ERROR REAL NowPlaying 👉', error);
    throw error;
  }
};
