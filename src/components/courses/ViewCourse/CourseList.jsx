import React from 'react';
import { object, func } from 'prop-types';
import { Link } from 'react-router-dom';

const CourseList = ({ course, showDeleteModal }) => (
	<tr>
		<td scope="row"><a href={course.watchHref} target="_blank">Watch</a></td>
		<td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
		<td>{course.authorId}</td>
		<td>{course.category}</td>
		<td>{course.length}</td>
		<td>
			<span
				type="button"
				tabIndex={1}
				onClick={() => showDeleteModal(course)}
			>
			delete
			</span>
		</td>
	</tr>
);

CourseList.propTypes = {
	course: object,
	showDeleteModal: func
};

export default CourseList;
