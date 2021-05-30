import {MOVIES_URL} from './api/MoviesApi';

export const formatMovies = (movies) => {
  return movies.map((movie) => {
    return {
      country: movie.country ? movie.country : 'Неизвестно',
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      trailer: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      image: movie.image ? MOVIES_URL.concat(movie.image.url) : null,
      thumbnail: movie.image ? MOVIES_URL.concat(movie.image.formats.thumbnail.url) : null,
      movieId: movie.id,
    };
  });
};

export const getFilteredMovies = ({movies, searchKey, isShortFilm}) => {
  let films = movies ? JSON.parse(JSON.stringify(movies)) : [];
  if (isShortFilm) {
    films = films.filter((film) => film.duration <= 40);
  }
  return films.filter((film) => film.nameRU.toLowerCase().includes(searchKey.toLowerCase().trim()));
};

export const getTimeStr = (duration) => {
  if (!duration) {
    return '';
  }

  const timeHours = parseInt(duration / 60);
  const timeMin = duration % 60;

  return `${timeHours > 0 ? timeHours.toString().concat('ч') : ''} ${
    timeMin > 0 ? timeMin.toString().concat('м') : ''
  }`.trim();
};
