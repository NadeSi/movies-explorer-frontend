import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom';

import {ROUTES} from '../../../utils/const/routes';

const ProtectedRoute = ({component: Component, ...props}) => {
  return <Route>{() => (props.loggedIn ? <Component {...props} /> : <Redirect to={ROUTES.SIGNIN} />)}</Route>;
};

ProtectedRoute.propTypes = {
  loggedIn: PropTypes.bool,
  component: PropTypes.any,
};

export default ProtectedRoute;
