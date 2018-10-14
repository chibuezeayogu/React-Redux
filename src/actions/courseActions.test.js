import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

import authorApi from '../api/mockCourseApi';
import courses from '../test/__mocks__/mockCourses';
import * as types from './actionTypes';
import {
	loadCoursesSuccess,
	updateCourseSuccess,
	createCourseSuccess,
	loadCourses,
	saveCourse
} from './courseActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Course Actions', () => {
	it('should call loadCoursesSuccess to load all courses', () => {
		const expectedAction = {
			type: types.LOAD_COURSES_SUCCESS, courses
		};
    
		expect(loadCoursesSuccess(courses)).toEqual(expectedAction);
	});
  
	it('should call updateCourseSuccess to update a course', () => {
		const expectedAction = {
			type: types.UPDATE_COURSE_SUCCESS, 
			course: courses[0]
		};
    
		expect(updateCourseSuccess(courses[0])).toEqual(expectedAction);
	});
  
	it('should call createCourseSuccess to create a courses', () => {
		const expectedAction = {
			type: types.CREATE_COURSE_SUCCESS,
			course: courses[0]
		};
    
		expect(createCourseSuccess(courses[0])).toEqual(expectedAction);
	});
});
