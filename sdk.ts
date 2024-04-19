import {RootState} from './store/helpers';

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
} from './index';

export class MySDK {
  private store: RootState;

  getStore(): RootState {
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
    };
  }
}

