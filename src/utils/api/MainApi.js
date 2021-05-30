import {callApi} from './api';
import {LOCAL_STORAGE_VARIABLE} from '../const/local-storage';
import {MESSAGES} from '../const/messages';

export const MAIN_URL = `${window.location.protocol}${process.env.REACT_APP_API_URL || '//localhost:3000/api'}`;

class MainApi {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  getFullUrl(url) {
    return `${this._baseUrl}${url}`;
  }

  getAuthorizationHeaders(token = localStorage.getItem(LOCAL_STORAGE_VARIABLE.JWT)) {
    return {
      ...this._headers,
      Authorization: `Bearer ${token}`,
    };
  }

  //Authorization
  ///////////////////////////////////////////////////////
  signup({name, email, password}) {
    return callApi(this.getFullUrl('/signup'), {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });
  }

  signin({email, password}) {
    return callApi(this.getFullUrl('/signin'), {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
  }

  checkToken(token) {
    return callApi(this.getFullUrl('/users/me'), {
      method: 'GET',
      headers: this.getAuthorizationHeaders(token),
    });
  }

  updateUserProfile({name, email}) {
    return callApi(this.getFullUrl('/users/me'), {
      method: 'PATCH',
      headers: this.getAuthorizationHeaders(),
      body: JSON.stringify({
        name,
        email,
      }),
    });
  }

  //SavedMovies
  ///////////////////////////////////////////////////////
  getSavedMovies() {
    return callApi(this.getFullUrl('/movies'), {
      headers: this.getAuthorizationHeaders(),
    });
  }

  createSavedMovie(movie) {
    return callApi(this.getFullUrl('/movies'), {
      method: 'POST',
      headers: this.getAuthorizationHeaders(),
      body: JSON.stringify(movie),
    });
  }

  deleteSavedMovie(movie) {
    if (movie._id) {
      return callApi(this.getFullUrl(`/movies/${movie._id}`), {
        method: 'DELETE',
        headers: this.getAuthorizationHeaders(),
      });
    } else return Promise.reject({error: {message: MESSAGES.MOVIE_DELETE_ERROR}});
  }
}

export const mainApi = new MainApi({
  baseUrl: MAIN_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
