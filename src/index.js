import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import registerServiceWorker from './registerServiceWorker';

require('./favicon.ico');

injectTapEventPlugin();

ReactDOM.render(<Router routes={routes} history={browserHistory} />, document.getElementById('root'));
registerServiceWorker();
