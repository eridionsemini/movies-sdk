import { store as redux } from './index';
import {Store} from "@reduxjs/toolkit";

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
  favouritesSelector
} from './index';

export class MySDK {
  private readonly store:Store;

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
    }
  }

  getSelectors() {
    return {
      moviesSelector,
      movieDetailsSelector,
      favouritesSelector
    }
  }

}
