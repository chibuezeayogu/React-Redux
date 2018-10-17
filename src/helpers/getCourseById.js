const getCourseById = (courses, courseId) => {
	const foundCourse = courses.find(course => course.id === courseId);
	if (foundCourse) return foundCourse;
	return null;
};

export default getCourseById;
