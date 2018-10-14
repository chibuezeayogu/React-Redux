import React from 'react';
import { object } from 'prop-types';
import { Link } from 'react-router-dom';

const CourseListRow = ({ course }) => (
	<tr>
		<td scope="row"><a href={course.watchHref} target="_blank">Watch</a></td>
		<td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
		<td>{course.authorId}</td>
		<td>{course.category}</td>
		<td>{course.length}</td>
	</tr>
);

CourseListRow.propTypes = {
	course: object.isRequired
};

export default CourseListRow;
