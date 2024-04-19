import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query';
import logger from 'redux-logger';

import {favouriteMoviesReducer} from './favourites';
import {movieReducer} from './movie';
import {moviesReducer} from './movies';

export const rootReducer = combineReducers({
  favourites: favouriteMoviesReducer,
  movies: moviesReducer,
  movie: movieReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat([logger]),
});

setupListeners(store.dispatch);
