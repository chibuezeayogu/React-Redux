import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

import authorApi from '../api/mockCourseApi';
import authors from '../__test__/__mocks__/mockAuthors';
import {
	LOAD_AUTHORS_SUCCESS,
	ISLOADING_AUTHORS,
	DELETE_AUTHOR_SUCCESS,
	CREATE_AUTHOR_SUCCESS,
	UPDATE_AUTHOR_SUCCESS,
} from './actionTypes';
import {
	loadAuthorsSuccess,
	loadAuthors,
	deleteAuthor,
	saveAuthor
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

	describe('loadAuthors Action', () => {
		afterEach(() => {
			nock.cleanAll();
		});

		it('should loadAuthors', async (done) => {
			const expectedActions = [
				{
					type: ISLOADING_AUTHORS,
					status: true
				},
				{
					type: LOAD_AUTHORS_SUCCESS,
					authors
				},
				{
					type: ISLOADING_AUTHORS,
					status: false
				},
			];

			const store = mockStore({});
			await store
				.dispatch(loadAuthors())
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				});
			done();
		});
	});

	describe('deleteAuthor Action', () => {
		afterEach(() => {
			nock.cleanAll();
		});

		it('should delete author when passed DELETE_AUTHOR_SUCCESS', async (done) => {
			const expectedAction = [
				{
					type: DELETE_AUTHOR_SUCCESS,
					authorId: authors[0].id
				},
			];

			const store = mockStore({});
			await store
				.dispatch(deleteAuthor(authors[0].id))
				.then(() => {
					expect(store.getActions()).toEqual(expectedAction);
				});
			done();
		});
	});

	describe('saveAuthor Action', () => {
		afterEach(() => {
			nock.cleanAll();
		});

		it('should save author when passed UPDATE_AUTHOR_SUCCESS', async (done) => {
			const expectedAction = [
				{
					type: UPDATE_AUTHOR_SUCCESS,
					author: authors[0]
				},
			];

			const store = mockStore({});
			await store
				.dispatch(saveAuthor(authors[0]))
				.then(() => {
					expect(store.getActions()).toEqual(expectedAction);
				});
			done();
		});

		it('should save author when passed CREATE_AUTHOR_SUCCESS', async (done) => {
			const expectedAction = [
				{
					type: CREATE_AUTHOR_SUCCESS,
					author: {
						id: 'scott-allen',
						firstName: 'Scott',
						lastName: 'Allen'
					},
				},
			];

			const store = mockStore({});
			await store
				.dispatch(saveAuthor({
					id: '',
					firstName: 'Scott',
					lastName: 'Allen'
				}))
				.then(() => {
					expect(store.getActions()).toEqual(expectedAction);
				});
			done();
		});
	});
});
