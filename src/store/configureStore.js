import { createStore, applyMiddleware, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

const initialState = {};

const middlewares = process.env.NODE_ENV === 'production' 
	? [thunk] 
	: [thunk, reduxImmutableStateInvariant()];
/**
 * @export
 * @param {any} {}
 * @returns {object} object
 */
const configureStore = () => {
	const middleware = process.env.NODE_ENV === 'development'
		? composeWithDevTools(applyMiddleware(...middlewares)) 
		: applyMiddleware(...middlewares);

	return createStore(
		rootReducer,
		initialState,
		middleware
	);
};

export default configureStore;