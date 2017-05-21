import Index from './components/index';
import Layout from './components/layout';
import React from 'react';
import { Route, IndexRoute } from 'react-router';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={Index} />
  </Route>
);

export default routes;