import {
	LOAD_AUTHORS_SUCCESS,
	ISLOADING_AUTHORS,
	DELETE_AUTHOR_SUCCESS,
	CREATE_AUTHOR_SUCCESS,
	UPDATE_AUTHOR_SUCCESS,
} from '../actions/actionTypes';
import { initialAuthors } from './initialState';

let index;
const authorsReducer = (state = initialAuthors, action) => {
	switch (action.type) {
	case LOAD_AUTHORS_SUCCESS:
		return {
			...state,
			authors: action.authors
		};
	case ISLOADING_AUTHORS:
		return {
			...state,
			isLoading: action.status,
		};
	case CREATE_AUTHOR_SUCCESS:
		return {
			...state,
			authors: [...state.authors, action.author]
		};
	case UPDATE_AUTHOR_SUCCESS:
		index = state.authors.findIndex(author => author.id === action.author.id);
		return {
			...state,
			authors: [
				...state.authors.slice(0, index),
				action.author,
				...state.authors.slice(index + 1),
			]
		};
	case DELETE_AUTHOR_SUCCESS:
		return {
			...state,
			authors: state.authors.filter(author => author.id !== action.authorId)
		};
	default:
		return state;
	}
};

export default authorsReducer;
