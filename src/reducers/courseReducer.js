import _ from 'lodash';
import {
	LOAD_COURSES_SUCCESS,
	CREATE_COURSE_SUCCESS,
	UPDATE_COURSE_SUCCESS,
	DELETE_COURSE_SUCCESS,
} from '../actions/actionTypes';
import { initialCourses } from './initialState';

let index;

const coursesReducer = (state = initialCourses, action) => {
	switch (action.type) {
	case LOAD_COURSES_SUCCESS:
		return {
			...state,
			courses: _.sortBy(action.courses, ['title'])
		};
	case CREATE_COURSE_SUCCESS:
		return {
			...state,
			courses: _.sortBy([...state.courses, action.course], ['title'])
		};
	case UPDATE_COURSE_SUCCESS:
		index = state.courses.findIndex(course => course.id === action.course.id);
		return {
			...state,
			courses: [
				...state.courses.slice(0, index),
				action.course,
				...state.courses.slice(index + 1),
			]
		};
	case DELETE_COURSE_SUCCESS:
		return {
			...state,
			courses: state.courses.filter(course => course.id !== action.courseId)
		};
	default:
		return state;
	}
};

export default coursesReducer;
