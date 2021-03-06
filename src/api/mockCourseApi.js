/* eslint-disable max-len */
import delay from './delay';

const courses = [
	{
		id: 'react-flux-building-applications',
		title: 'Building Applications in React and Flux',
		watchHref: 'http://www.pluralsight.com/courses/react-flux-building-applications',
		authorId: 'cory-house',
		length: '5:08',
		category: 'JavaScript'
	},
	{
		id: 'clean-code',
		title: 'Clean Code: Writing Code for Humans',
		watchHref: 'http://www.pluralsight.com/courses/writing-clean-code-humans',
		authorId: 'cory-house',
		length: '3:10',
		category: 'Software Practices'
	},
	{
		id: 'architecture',
		title: 'Architecting Applications for the Real World',
		watchHref: 'http://www.pluralsight.com/courses/architecting-applications-dotnet',
		authorId: 'cory-house',
		length: '2:52',
		category: 'Software Architecture'
	},
	{
		id: 'career-reboot-for-developer-mind',
		title: 'Becoming an Outlier: Reprogramming the Developer Mind',
		watchHref: 'http://www.pluralsight.com/courses/career-reboot-for-developer-mind',
		authorId: 'cory-house',
		length: '2:30',
		category: 'Career'
	},
	{
		id: 'web-components-shadow-dom',
		title: 'Web Component Fundamentals',
		watchHref: 'http://www.pluralsight.com/courses/web-components-shadow-dom',
		authorId: 'cory-house',
		length: '5:10',
		category: 'HTML5'
	}
];

const replaceAll = (str, find, replace) => (
	str.replace(new RegExp(find, 'g'), replace)
);

// This would be performed on the server in a real app. Just stubbing in.
export const generateId = (course) => replaceAll(course.title, ' ', '-');

/**
 * @class
 * 
 */
class CourseApi {
	static getAllCourses() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], courses));
			}, delay);
		});
	}

	static saveCourse(course) {
		course = Object.assign({}, course);
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minCourseTitleLength = 1;
				if (course.title.length < minCourseTitleLength) {
					reject(new Error(
						`Title must be at least ${minCourseTitleLength} characters.`
					));
				}

				if (course.id) {
					const existingCourseIndex = courses
						.findIndex(a => a.id === course.id);
					courses.splice(existingCourseIndex, 1, course);
				} else {
					course.id = generateId(course);
					course.watchHref = `http://www.pluralsight.com/courses/${course.id}`;
					courses.push(course);
				}

				resolve(course);
			}, delay);
		});
	}

	static deleteCourse(courseId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfCourseToDelete = courses
					.findIndex(course => course.id === courseId);
				courses.splice(indexOfCourseToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default CourseApi;
