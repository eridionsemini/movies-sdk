import { store as redux } from './index';
import { Store } from '@reduxjs/toolkit';

import {
  addMovieToFavourites,
  removeMovieFromFavourites,
  refreshMovieDetails,
  getMoviesList,
  refreshMoviesList,
  incrementMoviesListPage,
  resetMoviesListPage,
  loadMoreMovies,
  clearMovieDetails,
  setFilterValue,
  moviesSelector,
  movieDetailsSelector,
  favouritesSelector,
  getMovieDetails,
} from './index';

export class MoviesSDK {
  private readonly store: Store;
  private readonly apiKey: string;


  constructor() {
    this.store = redux;
  }

  getStore(): Store {
    return this.store;
  }

  getActions() {
    return {
      addMovieToFavourites,
      refreshMovieDetails,
      getMoviesList,
      refreshMoviesList,
      incrementMoviesListPage,
      resetMoviesListPage,
      removeMovieFromFavourites,
      loadMoreMovies,
      clearMovieDetails,
      setFilterValue,
      getMovieDetails,
    };
  }

  getSelectors() {
    return {
      moviesSelector,
      movieDetailsSelector,
      favouritesSelector,
    };
  }
}
