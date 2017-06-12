import React from 'react';
import { Route } from 'react-router-dom';
import AsyncComponent from '../AsyncComponent'

const Routes = () => {
  return (
    <div>
      <Route path="/" exact render={() => <AsyncComponent componentName={'home'} />} />
      <Route path="/about" render={() => <AsyncComponent componentName={'about'} />} />
      <Route path="/settings" render={() => <AsyncComponent componentName={'settings'} />} />
    </div>
  );
};

Routes.displayName = 'Routes';

export default Routes;