import {
	LOAD_AUTHORS_SUCCESS
} from '../actions/actionTypes';
import { initialAuthors } from './initialState';

const authorsReducer = (state = initialAuthors, action) => {
	switch (action.type) {
	case LOAD_AUTHORS_SUCCESS:
		return {
			...state,
			authors: action.authors
		};
	default:
		return state;
	}
};

export default authorsReducer;
