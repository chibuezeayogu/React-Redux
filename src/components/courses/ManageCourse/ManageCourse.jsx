import React, { Component, Fragment } from 'react';
import { array, func, shape } from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Prompt } from 'react-router-dom';

import inputValidation from '../../../helpers/inputValidation';
import { saveCourse } from '../../../actions/courseActions';
import CourseForm from '../CourseForm/CourseForm';
import getById from '../../../helpers/getById';
import formattedAuthorsDropdown from '../../../helpers/formatAuthorsDropdown';

/**
 * @class ManageCoursePage
 * @extends Component
 */
export class ManageCourse extends Component {
	static initialState = () => ({
		course: { 
			id: '',
			title: '',
			length: '',
			authorId: '',
			category: '',
			watchHref: '',
		},
		hasUnsavedChanges: false,
		loading: false,
		errors: {}
	})
	
	static getDerivedStateFromProps(nextProps, prevState) {
		const { match: { params: { id } }, courses } = nextProps;
		if (id && courses && !prevState.course.id) {
			return {
				...ManageCourse.initialState(),
				course: Object.assign({}, getById(courses, id))
			};
		}
		
		return null;
	}
	
	state = ManageCourse.initialState();

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
		const { authors } = this.props;
		const {
			hasUnsavedChanges, course, loading, errors 
		} = this.state;
		
		const formatedAuthors = formattedAuthorsDropdown(authors);

		return (
			<Fragment>
				<Prompt
					when={hasUnsavedChanges}
					message="Your unsaved data will be lost"
				/>
				<div className="jumbotron">
					<h1 className="display-4">Manage Course</h1>
				</div>
				<CourseForm
					allAuthors={formatedAuthors}
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
	course: shape({}).isRequired,
	authors: array.isRequired,
	saveCourse: func.isRequired
};


const mapStateToProps = ({ coursesReducer, authorsReducer }) => ({
	courses: coursesReducer.courses,
	authors: authorsReducer.authors
});

export default
connect(mapStateToProps,
	{ saveCourse }
)(ManageCourse);
