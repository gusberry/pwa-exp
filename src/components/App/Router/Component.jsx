import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getIsomorphicRouter } from '../../../services/isomorphicHelpers';

import Routes from './Routes';

const context = {};

const Router = ({ currentLocation }) => {
  const IsomorphicRouter = getIsomorphicRouter();

  return (
    <IsomorphicRouter location={currentLocation} context={context}>
      <div className="App">
        <div className="App-header">
          <p>
            <Link to="/">Home</Link>
          </p>
          <p>
            <Link to="/about">About</Link>
          </p>
          <p>
            <Link to="/settings">Settings</Link>
          </p>
        </div>
        <Routes />
      </div>
    </IsomorphicRouter>
  );
};

Router.displayName = 'Router';
Router.propTypes = {
  currentLocation: PropTypes.string,
};


export default Router;