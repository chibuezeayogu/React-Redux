import React, { Component, Fragment } from 'react';
import { object, array, func } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Prompt } from 'react-router-dom';

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
	static initialState = () => ({
		course: { 
			title: '', 
			authorId: '', 
			length: '', 
			category: ''
		},
		hasUnsavedChanges: false,
		loading: false,
		errors: {}
	})
		

	constructor(props) {
		super(props);
    
		this.state = ManageCourse.initialState();
	}
	
	static getDerivedStateFromProps(nextProps, prevState) {
		const courseId = nextProps.match.params.id;

		if (courseId && nextProps.courses.length > 0) {
			return {
				...ManageCourse.initialState(),
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
		const { errors, course } = this.state;
	
		if (Object.entries(errors).length > 0) {
			this.setState({ errors: {} });
		}
		course[event.target.name] = event.target.value;
		
		this.setState({ 
			course,
			hasUnsavedChanges: true
		});
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
		if (!err.isEmpty) {
			this.setState({ errors: err.errors });
		} else {
			this.setState({ loading: true });
			this.props.saveCourse(this.state.course)
				.then(() => {
					this.setState({ 
						hasUnsavedChanges: false,
						loading: false
					});
					this.props.history.push('/courses');
				});
		}
	}

	render() {
		const authorsDropdown = formattedAuthorsDropdown(this.props.authors);
		const {
			hasUnsavedChanges, course, loading, errors 
		} = this.state;
		return (
			<Fragment>
				<Prompt
					when={hasUnsavedChanges}
					message="Your unsaved data will be lost"
				/>
				<div className="jumbotron">
					<h1 className="display-4">Manage Course</h1>
					<hr className="my-4"/>
				</div>
				<CourseForm
					allAuthors={authorsDropdown}
					onChange={this.onChange}
					onSave={this.saveCourse}
					course={course}
					errors={errors}
					loading={loading}/>
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
