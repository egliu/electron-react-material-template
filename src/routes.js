import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import FormPage from './containers/FormPage';
import TablePage from './containers/TablePage';
import Dashboard from './containers/DashboardPage';
import store from './Store.js';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

const createElement = (Component, props) => {
  return (
    <Provider store={store}>
      <Component {...props} />
    </Provider>
  );
};

const history = syncHistoryWithStore(browserHistory, store);

const Routes = () => (
  <Router history={history} createElement={createElement}>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard} />
      <Route path="form" component={FormPage} />
      <Route path="table" component={TablePage}/>
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
);

export default Routes;
