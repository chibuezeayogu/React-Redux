import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

import authorApi from '../api/mockCourseApi';
import authors from '../test/__mocks__/mockAuthors';
import {
	LOAD_AUTHORS_SUCCESS
} from './actionTypes';
import {
	loadAuthorsSuccess,
	loadAuthors
} from './authorActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Author Actions', () => {
	describe('loadAuthorsSuccess Action', () => {
		it('should load all authors', () => {
			const expectedAction = {
				type: LOAD_AUTHORS_SUCCESS, authors
			};
      
			expect(loadAuthorsSuccess(authors)).toEqual(expectedAction);
		});
	});
});
