import {callApi} from './api';

export const MOVIES_URL = `${window.location.protocol}${'//api.nomoreparties.co'}`;

class MoviesApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
  }

  getMovies() {
    return callApi(`${this._baseUrl}/beatfilm-movies`);
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: MOVIES_URL,
});
