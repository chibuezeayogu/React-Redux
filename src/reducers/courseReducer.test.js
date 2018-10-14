import courseReducer from './courseReducer';
import * as types from '../actions/actionTypes';
import initialState from './initialState';
import courses from '../test/__mocks__/mockCourses';
import { 
	createCourseSuccess, loadCoursesSuccess
} from '../actions/courseActions';

describe('Course Reducer', () => {
	it('should return initial state', () => {
		expect(courseReducer(undefined, {})).toEqual(initialState.courses);
	});
  
	it('should add course when passed CREATE_COURSE_SUCCESS', () => {
		const action = {
			type: types.CREATE_COURSE_SUCCESS,
			course: courses[0]
		};

		expect(courseReducer(initialState.courses, action)).toEqual([courses[0]]);
	});

	it('should return all courses when passed LOAD_COURSES_SUCCESS', () => {
		const action = {
			type: types.LOAD_COURSES_SUCCESS,
			courses
		};

		expect(courseReducer(initialState.courses, action)).toEqual(courses);
	});

	it('should update a course when passed UPDATE_COURSE_SUCCESS', () => {
		const action = {
			type: types.UPDATE_COURSE_SUCCESS,
			course: courses[0]
		};
    
		initialState.courses = [courses[0]];
    
		expect(courseReducer(initialState.courses, action))
			.toEqual([courses[0]]);
	});
});