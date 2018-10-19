import React, { Component, Fragment } from 'react';
import { object, array, func } from 'prop-types';
import { connect } from 'react-redux';

import inputValidation from '../../../helpers/inputValidation';
import { saveCourse } from '../../../actions/courseActions';
import CourseForm from '../CourseForm/CourseForm';
import getCourseById from '../../../helpers/getCourseById';
import formattedAuthorsDropdown from '../../../helpers/formatAuthorsDropdown';

/**
 * @class ManageCoursePage
 * @extends Component
 */
export class ManageCourse extends Component {
	constructor(props) {
		super(props);
    
		this.state = {
			course: { 
				title: '', 
				authorId: '', 
				length: '', 
				category: ''
			},
			errors: {}
		};
	}
	
	static getDerivedStateFromProps(nextProps, prevState) {
		const courseId = nextProps.match.params.id;

		if (courseId && nextProps.courses.length > 0) {
			return {
				course: getCourseById(nextProps.courses, courseId),
			};
		}
		
		return null;
	}

	/**
   * 
   * @memberof ManageCoursePage
   * @param {Object} event
   * @returns {void}
   */
	onChange = (event) => {
		const { errors } = this.state;
	

		if (Object.entries(errors).length > 0) {
			this.setState({ errors: {} });
		}
		
		this.setState(prev => ({
			course: {
				[event.target.name]: event.target.value
			}
		}));
	}
  
	/**
   * 
   * @memberof ManageCoursePage
   * @param {Object} evt
   * @returns {void}
   */
	saveCourse = (evt) => {
		evt.preventDefault();
		const err = inputValidation(this.state.course);
		if (err.isEmpty) {
			this.props.saveCourse(this.state.course);
			this.props.history.push('/courses');
		} else {
			this.setState({ errors: err.errors });
		}
	}

	render() {
		const authorsDropdown = formattedAuthorsDropdown(this.props.authors);

		return (
			<Fragment>
				<div className="jumbotron">
					<h1 className="display-4">Manage Course</h1>
					<hr className="my-4"/>
				</div>
				<CourseForm
					allAuthors={authorsDropdown}
					onChange={this.onChange}
					onSave={this.saveCourse}
					course={this.state.course}
					errors={this.state.errors}/>
			</Fragment>
		);
	}
}

ManageCourse.propTypes = {
	courses: array.isRequired,
	authors: array.isRequired,
	saveCourse: func.isRequired
};


const mapStateToProps = ({ coursesReducer, authorsReducer }) => ({
	courses: coursesReducer.courses,
	authors: authorsReducer.authors
});

export default connect(mapStateToProps, { saveCourse })(ManageCourse);
