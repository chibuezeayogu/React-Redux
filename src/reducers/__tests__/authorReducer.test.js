import authorReducer from '../authorReducer';
import {
	LOAD_AUTHORS_SUCCESS,
	DELETE_AUTHOR_SUCCESS,
	UPDATE_AUTHOR_SUCCESS,
	ISLOADING_AUTHORS,
	CREATE_AUTHOR_SUCCESS
} from '../../actions/actionTypes';
import { initialAuthors } from '../initialState';
import authors from '../../__test__/__mocks__/mockAuthors';

describe('Author Reducer', () => {
	it('should return initial state', () => {
		expect(authorReducer(undefined, { authors: [] })).toEqual(initialAuthors);
	});

	it('should return all authors when passed LOAD_AUTHORS_SUCCESS', () => {
		const action = {
			type: LOAD_AUTHORS_SUCCESS,
			authors
		};

		expect(authorReducer(initialAuthors.authors, action)).toEqual({ authors });
	});

	it('should update state with new author when passed CREATE_AUTHOR_SUCCESS', () => {
		const action = {
			type: CREATE_AUTHOR_SUCCESS,
			author: authors[0]
		};

		expect(authorReducer(initialAuthors, action))
			.toEqual({ authors: [authors[0]], isLoading: false });
	});

	it('should update an author when passed UPDATE_AUTHOR_SUCCESS', () => {
		const action = {
			type: UPDATE_AUTHOR_SUCCESS,
			author: authors[0]
		};

		initialAuthors.authors.push(authors[0]);
		expect(authorReducer(initialAuthors, action))
			.toEqual({ authors: [authors[0]], isLoading: false });
	});

	it('should delete an auhtor when passed DELETE_AUTHOR_SUCCESS', () => {
		const action = {
			type: DELETE_AUTHOR_SUCCESS,
			authorId: authors[0].id
		};

		initialAuthors.authors.push(authors[0]);
		expect(authorReducer(initialAuthors, action))
			.toEqual({ authors: [], isLoading: false });
	});
});
