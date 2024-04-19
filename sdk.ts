import { RootState } from './store/helpers';
import { store as redux } from './index';

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

class MySDK {
  private store: RootState;

  constructor() {
    this.store = redux.getState();
  }

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

export default MySDK;
