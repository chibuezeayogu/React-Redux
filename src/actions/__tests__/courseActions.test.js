import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

import authorApi from '../../api/mockCourseApi';
import courses from '../../__test__/__mocks__/mockCourses';
import {
	LOAD_COURSES_SUCCESS,
	UPDATE_COURSE_SUCCESS,
	CREATE_COURSE_SUCCESS,
	DELETE_COURSE_SUCCESS,
	ISLOADING_COURSES
} from '../actionTypes';
import {
	loadCoursesSuccess,
	updateCourseSuccess,
	createCourseSuccess,
	deleteCourseSuccess,
	loadCourses,
	saveCourse,
	deleteCourse
} from '../courseActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async Actions', () => {
	describe('loadCourses Action', () => {
		afterEach(() => {
			nock.cleanAll();
		});

		it('should load courses when passes LOAD_COURSES_SUCCESS', async (done) => {
			const expectedActions = [
				{
					type: ISLOADING_COURSES,
					status: true
				},
				{
					type: LOAD_COURSES_SUCCESS,
					courses
				},
				{
					type: ISLOADING_COURSES,
					status: false
				},
			];

			const store = mockStore({});
			await store
				.dispatch(loadCourses())
				.then(() => {
					expect(store.getActions()).toEqual(expectedActions);
				});
			done();
		});
	});

	describe('deleteCourse Action', () => {
		afterEach(() => {
			nock.cleanAll();
		});

		it('should delete course when passed DELETE_COURSE_SUCCESS', async (done) => {
			const expectedAction = [
				{
					type: DELETE_COURSE_SUCCESS,
					courseId: courses[0].id
				},
			];

			const store = mockStore({});
			await store
				.dispatch(deleteCourse(courses[0].id))
				.then(() => {
					expect(store.getActions()).toEqual(expectedAction);
				});
			done();
		});
	});

	describe('saveCourseAction', () => {
		afterEach(() => {
			nock.cleanAll();
		});

		it('should update course when passed UPDATE_COURSE_SUCCESS', async (done) => {
			const expectedAction = [
				{
					type: UPDATE_COURSE_SUCCESS,
					course: courses[0]
				},
			];

			const store = mockStore({ courses: [] });
			await store
				.dispatch(saveCourse(courses[0]))
				.then(() => {
					expect(store.getActions()).toEqual(expectedAction);
				});
			done();
		});

		it('should save author when passed CREATE_COURSE_SUCCESS', async (done) => {
			const expectedAction = [
				{
					type: CREATE_COURSE_SUCCESS,
					course: {
						id: 'Writing-Code',
						title: 'Writing Code',
						watchHref: 'http://www.pluralsight.com/courses/Writing-Code',
						authorId: 'cory-house',
						length: '3:10',
						category: 'Software Practices'
					}
				},
			];

			const store = mockStore({});
			await store
				.dispatch(saveCourse({
					title: 'Writing Code',
					authorId: 'cory-house',
					length: '3:10',
					category: 'Software Practices'
				}))
				.then(() => {
					expect(store.getActions()).toEqual(expectedAction);
				});
			done();
		});
	});
});
