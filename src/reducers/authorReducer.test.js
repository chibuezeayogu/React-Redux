import authorReducer from './authorReducer';
import { LOAD_AUTHORS_SUCCESS } from '../actions/actionTypes';
import { initialAuthors } from './initialState';
import authors from '../test/__mocks__/mockAuthors';

describe('Author Reducer', () => {
	it('should return initial state', () => {
		expect(authorReducer(undefined, { authors: [] })).toEqual(initialAuthors);
	});

	it('should return all courses when passed LOAD_COURSES_SUCCESS', () => {
		const action = {
			type: LOAD_AUTHORS_SUCCESS,
			authors
		};

		expect(authorReducer(initialAuthors.authors, action)).toEqual({ authors });
	});
});
