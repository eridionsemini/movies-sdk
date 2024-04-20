import {Movie} from '../../general-types';

export interface MoviesSearchQueryParams {
  s: string;
  page: number;
  apiKey: string;
}

export interface MoviesSearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
}

export type MoviesThunkName = 'getMoviesList' | 'loadMoreMovies' | 'refreshMoviesList';

export type MoviesRequestConfig = (s: string, page: number, apiKey: string) => string;

export interface Filter {
  [key: string]: string;
}

export type FilterKeys = keyof Filter;

export interface MoviesReducer {
  data: Movie[];
  totalResults: string;
  loading: boolean;
  refreshing: boolean;
  hasMore: boolean;
  page: number;
  filter: Filter;
}
