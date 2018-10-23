import toastr from 'toastr';

import {
	LOAD_COURSES_SUCCESS,
	UPDATE_COURSE_SUCCESS,
	CREATE_COURSE_SUCCESS,
	DELETE_COURSE_SUCCESS,
	ISLOADING_COURSES,
} from './actionTypes';
import courseApi, { generateId } from '../api/mockCourseApi';

export const loadCoursesSuccess = courses => ({ 
	type: LOAD_COURSES_SUCCESS, courses 
});
export const isLoadingCourses = status => ({ 
	type: ISLOADING_COURSES,
	status
});

export const updateCourseSuccess = course => ({ 
	type: UPDATE_COURSE_SUCCESS, course 
});

export const createCourseSuccess = course => ({
	type: CREATE_COURSE_SUCCESS, course
});

export const deleteCourseSuccess = courseId => ({
	type: DELETE_COURSE_SUCCESS, courseId
});

export const loadCourses = () => dispatch => 	{
	dispatch(isLoadingCourses(true));
	return courseApi.getAllCourses().then(courses => {
		dispatch(loadCoursesSuccess(courses));
		dispatch(isLoadingCourses(false));
	}).catch(error => {
		dispatch(isLoadingCourses(false));
		throw (error);
	});
};

export const saveCourse = course => (dispatch, getState) => courseApi
	.saveCourse(course).then(savedCourse => {
		if (course.id) {
			dispatch(updateCourseSuccess(savedCourse));
			toastr.success('Updated Successfully');
		} else {
			dispatch(createCourseSuccess(savedCourse));
			toastr.success('Created Successfully');
		}
	}).catch(error => {
		throw (error);
	});


export const deleteCourse = (courseId) => dispatch => courseApi
	.deleteCourse(courseId).then(() => {
		dispatch(deleteCourseSuccess(courseId));
		toastr.success('Deleted Successfully');
	}).catch(error => {
		throw (error);
	});
