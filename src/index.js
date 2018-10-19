import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import Popper from 'popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import '../node_modules/rc-pagination/assets/index.css';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import App from './components/app/App';
import configureStore from './store/configureStore';
import './styles/main.scss';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

export default render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app') || document.createElement('div')
);
