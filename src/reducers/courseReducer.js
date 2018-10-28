import {
	LOAD_COURSES_SUCCESS,
	CREATE_COURSE_SUCCESS,
	UPDATE_COURSE_SUCCESS,
	DELETE_COURSE_SUCCESS,
	ISLOADING_COURSES
} from '../actions/actionTypes';
import { initialCourses } from './initialState';

let index;
const coursesReducer = (state = initialCourses, action) => {
	switch (action.type) {
	case LOAD_COURSES_SUCCESS:
		return {
			...state,
			courses: action.courses
		};
	case ISLOADING_COURSES:
		return {
			...state,
			isLoading: action.status,
		};
	case CREATE_COURSE_SUCCESS:
		return {
			...state,
			courses: [...state.courses, action.course]
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
