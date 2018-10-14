import React from 'react';
import { array } from 'prop-types';

import CourseListRow from './CourseListRow';

const CourseList = ({ courses }) => (
	<table className="table table-striped">
		<thead>
			<tr>
				<th scope="col">&nbsp;</th>
				<th scope="col">Title</th>
				<th scope="col">Author</th>
				<th scope="col">Category</th>
				<th scope="col">Length</th>
			</tr>
		</thead>
		<tbody>
			{courses.map(course => <CourseListRow key={course.id} course={course}/>
			)}
		</tbody>
	</table>
);

CourseList.propTypes = {
	courses: array
};

export default CourseList;
