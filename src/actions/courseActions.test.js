import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import nock from 'nock';

import authorApi from '../api/mockCourseApi';
import courses from '../test/__mocks__/mockCourses';
import {
	LOAD_COURSES_SUCCESS,
	UPDATE_COURSE_SUCCESS,
	CREATE_COURSE_SUCCESS,
	DELETE_COURSE_SUCCESS,
} from './actionTypes';
import {
	loadCoursesSuccess,
	updateCourseSuccess,
	createCourseSuccess,
	deleteCourseSuccess,
	loadCourses,
	saveCourse
} from './courseActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Course Actions', () => {
	it('should call loadCoursesSuccess to load all courses', () => {
		const expectedAction = {
			type: LOAD_COURSES_SUCCESS, courses
		};
    
		expect(loadCoursesSuccess(courses)).toEqual(expectedAction);
	});
  
	it('should call updateCourseSuccess to update a course', () => {
		const expectedAction = {
			type: UPDATE_COURSE_SUCCESS, 
			course: courses[0]
		};
    
		expect(updateCourseSuccess(courses[0])).toEqual(expectedAction);
	});
  
	it('should call createCourseSuccess to create a courses', () => {
		const expectedAction = {
			type: CREATE_COURSE_SUCCESS,
			course: courses[0]
		};
    
		expect(createCourseSuccess(courses[0])).toEqual(expectedAction);
	});

	it('should delete course when passed DELETE_COURSE_SUCCESS', () => {
		const expectedAction = {
			type: DELETE_COURSE_SUCCESS, 
			courseId: courses[0].id
		};
    
		expect(deleteCourseSuccess(courses[0].id)).toEqual(expectedAction);
	});
});
