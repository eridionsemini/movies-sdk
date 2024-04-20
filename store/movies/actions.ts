import {createAction} from '@reduxjs/toolkit';
import api from '../../api';

import {createAppAsyncThunk, ThunkConfig} from '../helpers';
import {
  FilterKeys,
  MoviesSearchQueryParams,
  MoviesSearchResponse,
  MoviesRequestConfig,
  MoviesThunkName,
} from './types';

const moviesAsyncThunk = (thunkName: MoviesThunkName, requestConfig: MoviesRequestConfig) => {
  return createAppAsyncThunk<MoviesSearchResponse, MoviesSearchQueryParams, ThunkConfig>(
    thunkName,
    async ({s, page, apiKey}, thunkAPI) => {
      const req = requestConfig(s, page, apiKey);
      try {
        return await api.get<MoviesSearchQueryParams, MoviesSearchResponse>(req);
      } catch (e) {
        return thunkAPI.rejectWithValue(e);
      }
    },
  );
};

const movieRequestConfig: MoviesRequestConfig = (s, page, apiKey) =>
  `?apiKey=${apiKey}&page=${page}&s=${s}`;

export const getMoviesList = moviesAsyncThunk('getMoviesList', movieRequestConfig);

export const loadMoreMovies = moviesAsyncThunk('loadMoreMovies', movieRequestConfig);

export const refreshMoviesList = moviesAsyncThunk('refreshMoviesList', movieRequestConfig);

export const resetMoviesListPage = createAction<void>('resetMoviesListPage');
export const incrementMoviesListPage = createAction<void>('incrementMoviesListPage');
export const setFilterValue = createAction<{key: FilterKeys; value: string}>('setFilterValue');
