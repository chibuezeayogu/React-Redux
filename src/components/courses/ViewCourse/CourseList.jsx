import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * @class CourseList
 * @extends Compoent
 * 
 */
class CourseList extends Component {
/**
 * @memberof CourseList
 * @method handleDeleteCourse
 * @param {string} id
 * @returns {void}
 */
	handleDeleteCourse = (id) => {
		this.props.deleteCourse(id);
	}
	
	render() {
		const { course } = this.props;

		return (
			<tr>
				<td scope="row"><a href={course.watchHref} target="_blank">Watch</a></td>
				<td><Link to={`/course/${course.id}`}>{course.title}</Link></td>
				<td>{course.authorId}</td>
				<td>{course.category}</td>
				<td>{course.length}</td>
				<td>
					<button 
						type="button" 
						onClick={() => this.handleDeleteCourse(course.id)} 
						className="btn btn-danger"
					>
							Delete
					</button>
				</td>
			</tr>
		);
	}
}

CourseList.propTypes = {
	course: object,
	showDeleteModal: func
};

export default CourseList;
