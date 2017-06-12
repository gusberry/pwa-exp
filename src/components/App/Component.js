import React from 'react';
import PropTypes from 'prop-types';
import Router from './Router';

const App = ({ currentLocation }) => (
  <Router currentLocation={currentLocation} />
);

App.displayName = 'App';
App.propTypes = {
  currentLocation: PropTypes.string,
};

export default App;