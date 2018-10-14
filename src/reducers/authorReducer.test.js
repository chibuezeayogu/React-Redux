import authorReducer from './authorReducer';
import * as types from '../actions/actionTypes';
import initialState from './initialState';
import authors from '../test/__mocks__/mockAuthors';

describe('Author Reducer', () => {
	it('should return initial state', () => {
		expect(authorReducer(undefined, {})).toEqual(initialState.authors);
	});

	it('should return all courses when passed LOAD_COURSES_SUCCESS', () => {
		const action = {
			type: types.LOAD_AUTHORS_SUCCESS,
			authors
		};

		expect(authorReducer(initialState.authors, action)).toEqual(authors);
	});
});
