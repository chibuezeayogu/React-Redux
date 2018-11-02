import coursesReducer from '../courseReducer';
import {
	CREATE_COURSE_SUCCESS,
	LOAD_COURSES_SUCCESS,
	UPDATE_COURSE_SUCCESS,
	DELETE_COURSE_SUCCESS
} from '../../actions/actionTypes';
import { initialCourses } from '../initialState';
import courses from '../../__test__/__mocks__/mockCourses';
import {
	createCourseSuccess, loadCoursesSuccess
} from '../../actions/courseActions';

describe('Course Reducer', () => {
	it('should return initial state', () => {
		expect(coursesReducer(undefined, { courses: [] })).toEqual(initialCourses);
	});

	it('should add course when passed CREATE_COURSE_SUCCESS', () => {
		const action = {
			type: CREATE_COURSE_SUCCESS,
			course: courses[0]
		};

		expect(coursesReducer(initialCourses, action))
			.toEqual({ courses: [courses[0]], isLoading: false });
	});

	it('should return all courses when passed LOAD_COURSES_SUCCESS', () => {
		const action = {
			type: LOAD_COURSES_SUCCESS,
			courses
		};

		expect(coursesReducer(initialCourses, action)).toEqual({ courses, isLoading: false });
	});

	it('should update a course when passed UPDATE_COURSE_SUCCESS', () => {
		const action = {
			type: UPDATE_COURSE_SUCCESS,
			course: courses[0]
		};

		initialCourses.courses.push(courses[0]);
		expect(coursesReducer(initialCourses, action))
			.toEqual({ courses: [courses[0]], isLoading: false });
	});

	it('should delete a course when passed DELETE_COURSE_SUCCESS', () => {
		const action = {
			type: DELETE_COURSE_SUCCESS,
			courseId: courses[0].id
		};

		initialCourses.courses.push(courses[0]);
		expect(coursesReducer(initialCourses, action))
			.toEqual({ courses: [], isLoading: false });
	});
});