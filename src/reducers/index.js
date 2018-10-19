import { combineReducers } from 'redux';
import coursesReducer from './courseReducer';
import authorsReducer from './authorReducer';

const rootReducer = combineReducers({
	coursesReducer,
	authorsReducer
});

export default rootReducer;
