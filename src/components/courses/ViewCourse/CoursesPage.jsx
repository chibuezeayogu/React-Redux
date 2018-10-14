import React, { Component } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import { loadCourses } from '../../../actions/courseActions';
import { loadAuthors } from '../../../actions/authorActions';
import CourseList from './CourseList';

/**
 * @class CoursePage
 * @extends Component
 */
export class CoursesPage extends Component {
	/**
   * @memberof CoursePage
   * @returns {void}
   */
	redirectToAddCoursePage = () => {
		this.props.history.push('/courses');
	}

	render() {
		const { courses } = this.props;

		return (
			<div>
				<div className="jumbotron">
					<h1>Courses Page</h1>
					<button type="button"
						className="btn btn-primary"
						onClick={this.redirectToAddCoursePage}>
							Add Course
					</button>
				</div>
				<CourseList courses={courses}/>
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: array
	// createCourse: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
	courses: state.courses
});

// const mapDispatchToProps = (dispatch) => ({
// 	// createCourse: course => dispatch(courseActions.createCourse(course))
// });

export default connect(
	mapStateToProps,
	null
)(CoursesPage);