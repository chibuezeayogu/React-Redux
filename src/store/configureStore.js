import { createStore, applyMiddleware, compose } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

let enhancers;

const env = process.env.NODE_ENV || 'development';
if (env === 'production') {
	enhancers = [];
} else {
	enhancers = compose(
		window.devToolsExtension ? window.devToolsExtension() : f => f
	);
}

const store = createStore(
	rootReducer,
	enhancers,
	applyMiddleware(thunk, reduxImmutableStateInvariant())
);

export default store;
