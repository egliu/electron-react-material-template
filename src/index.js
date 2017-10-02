import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './routes.js';

require('./favicon.ico');

injectTapEventPlugin();

ReactDOM.render(
	<Routes />,
	document.getElementById('root')
);

registerServiceWorker();
