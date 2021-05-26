import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom';

import Main from '../main/Main/Main';
import Movies from '../movies/Movies/Movies';
import Register from '../authorization/Register/Register';
import SavedMovies from '../movies/SavedMovies/SavedMovies';
import Profile from '../authorization/Profile/Profile';
import Login from '../authorization/Login/Login';
import PageNotFound from '../common/PageNotFound/PageNotFound';
import InfoPopup from '../common/InfoPopup/InfoPopup';

import './App.css';

function App() {
  const [showMessage, setShowMessage] = useState(false);

  return (
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="*">
          <PageNotFound />
        </Route>
      </Switch>
      <InfoPopup isOpen={showMessage} onClose={() => setShowMessage(false)} />
    </div>
  );
}

export default App;
