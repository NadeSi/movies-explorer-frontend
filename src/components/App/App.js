import React, {useState, useEffect} from 'react';
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';

import {CurrentUserContext} from '../../contexts/CurrentUserContext';

import Main from '../main/Main/Main';
import Movies from '../movies/Movies/Movies';
import Register from '../authorization/Register/Register';
import SavedMovies from '../movies/SavedMovies/SavedMovies';
import Profile from '../authorization/Profile/Profile';
import Login from '../authorization/Login/Login';
import PageNotFound from '../common/PageNotFound/PageNotFound';
import InfoPopup from '../common/InfoPopup/InfoPopup';
import Preloader from '../movies/Preloader/Preloader';
import ProtectedRoute from '../common/ProtectedRoute/ProtectedRoute';

import {moviesApi} from '../../utils/api/MoviesApi';
import {getLoginErrorMessage, getRegisterErrorMessage, getUpdateProfileErrorMessage} from '../../utils/error-messages';
import {formatMovies} from '../../utils/movies-utils';

import {LOCAL_STORAGE_VARIABLE} from '../../utils/const/local-storage';
import {MESSAGES} from '../../utils/const/messages';
import {mainApi} from '../../utils/api/MainApi';
import {ROUTES} from '../../utils/const/routes';

import './App.css';
import PropTypes from 'prop-types';

const currentUserInitialState = {name: '', email: ''};

function App() {
  const history = useHistory();

  const [isLoading, setLoading] = useState(false);
  const [isPopupOpened, setPopupOpened] = useState(false);
  const [message, setMessage] = useState('');

  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem(LOCAL_STORAGE_VARIABLE.JWT));
  const [currentUser, setCurrentUser] = useState(currentUserInitialState);

  const [movies, setMovies] = useState(undefined);
  const [savedMovies, setSavedMovies] = useState([]);

  useEffect(() => {
    handleTokenCheck();
  }, []);

  useEffect(() => {
    loggedIn && handleMoviesCheck();
  }, [loggedIn]);

  const resetErrors = () => {
    setMessage('');
  };

  const showPopupMessage = (message) => {
    setMessage(message ? message : MESSAGES.ERROR);
    setPopupOpened(true);
  };

  function handleTokenCheck() {
    const jwt = localStorage.getItem(LOCAL_STORAGE_VARIABLE.JWT);
    if (jwt) {
      setLoading(true);
      mainApi
        .checkToken(jwt)
        .then((user) => {
          if (user) {
            setCurrentUser(user);
            setLoggedIn(true);
          }
        })
        .catch((error) => {
          setLoggedIn(false);
          showPopupMessage(getLoginErrorMessage(error));
        })
        .finally(() => {
          setLoading(false);
        });
    } else setLoggedIn(false);
  }

  function handleMoviesCheck() {
    const moviesData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_VARIABLE.MOVIES_DATA));
    if (!moviesData) {
      getMovies();
    } else {
      setMovies(moviesData);
    }
    getSavedMovies();
  }

  const handleLogin = ({email, password}) => {
    setLoading(true);
    mainApi
      .signin({email, password})
      .then((data) => {
        if (data.token) {
          localStorage.setItem(LOCAL_STORAGE_VARIABLE.JWT, data.token);
          setLoggedIn(true);
          handleTokenCheck();
        }
      })
      .catch((e) => {
        setMessage(getLoginErrorMessage(e));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleLogout = () => {
    localStorage.clear();
    setLoggedIn(false);
    setCurrentUser(currentUserInitialState);
    setMovies([]);
    resetErrors();
    history.push(ROUTES.MAIN);
  };

  const handleRegister = ({name, email, password}) => {
    setLoading(true);
    mainApi
      .signup({name, email, password})
      .then((res) => {
        if (res) {
          handleLogin({email, password});
        }
      })
      .catch((e) => {
        setMessage(getRegisterErrorMessage(e));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleUpdateUserProfile = ({name, email}) => {
    setLoading(true);
    mainApi
      .updateUserProfile({name, email})
      .then((user) => {
        if (user) {
          setCurrentUser(user);
          showPopupMessage(MESSAGES.UPDATE_SUCCESS);
        }
      })
      .catch((e) => {
        showPopupMessage(getUpdateProfileErrorMessage(e));
      })
      .finally(() => {
        setLoading(false);
      });
  };

  function getMovies() {
    moviesApi
      .getMovies()
      .then((data) => {
        if (data) {
          const movies = formatMovies(data);
          localStorage.setItem(LOCAL_STORAGE_VARIABLE.MOVIES_DATA, JSON.stringify(movies));
          setMovies(movies);
        }
      })
      .catch((e) => {
        setMessage(MESSAGES.SEARCH_MOVIES_ERROR);
      });
  }

  function getSavedMovies() {
    mainApi
      .getSavedMovies()
      .then((movies) => {
        if (movies) {
          setSavedMovies(movies);
        }
      })
      .catch((e) => {
        setMessage(MESSAGES.SEARCH_MOVIES_ERROR);
      });
  }

  function handleChangeFavorite({movie, isFavorite}) {
    const method = isFavorite ? 'createSavedMovie' : 'deleteSavedMovie';

    mainApi[method](movie, isFavorite)
      .then((savedMovie) => {
        const newSavedMovies = isFavorite
          ? savedMovies.concat(savedMovie)
          : savedMovies.filter((m) => m.movieId !== savedMovie.movieId);
        setSavedMovies(newSavedMovies);
      })
      .catch(({error}) => {
        showPopupMessage(error ? error.message : null);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <Switch>
          <Route exact path={ROUTES.MAIN}>
            <Main loggedIn={loggedIn} />
          </Route>
          <Route exact path={ROUTES.SIGNIN}>
            {loggedIn ? (
              <Redirect to={ROUTES.MOVIES} />
            ) : (
              <Login onLogin={handleLogin} authErrorMessage={message} resetErrors={resetErrors} />
            )}
          </Route>
          <Route path={ROUTES.SIGNUP}>
            {loggedIn ? (
              <Redirect to={ROUTES.MOVIES} />
            ) : (
              <Register onRegister={handleRegister} authErrorMessage={message} resetErrors={resetErrors} />
            )}
          </Route>
          <ProtectedRoute
            path={ROUTES.MOVIES}
            component={Movies}
            loggedIn={loggedIn}
            showPopupMessage={showPopupMessage}
            movies={movies}
            savedMovies={savedMovies}
            onChangeFavorite={handleChangeFavorite}
          />
          <ProtectedRoute
            path={ROUTES.SAVED_MOVIES}
            component={SavedMovies}
            loggedIn={loggedIn}
            showPopupMessage={showPopupMessage}
            savedMovies={savedMovies}
            onChangeFavorite={handleChangeFavorite}
          />
          <ProtectedRoute
            path={ROUTES.PROFILE}
            component={Profile}
            loggedIn={loggedIn}
            onLogout={handleLogout}
            onUpdateProfile={handleUpdateUserProfile}
          />
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        <InfoPopup isOpen={isPopupOpened} onClose={() => setPopupOpened(false)} text={message} />
        <Preloader isLoading={isLoading} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
