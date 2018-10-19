import React, { Component } from 'react';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import Pagination from 'rc-pagination';

import { deleteCourse } from '../../../actions/courseActions';
import CourseList from './CourseList';
import Modal from './Modal';
import formatPagination from '../../../helpers/formatPagination';

/**
 * @class CoursePage
 * @extends Component
 */
export class CoursesPage extends Component {
	static initialState = () => ({
		modalContent: {},
		displayModal: false,
		isDeleting: false,
		courses: [],
		pageSize: '',
		totalCount: '',
		currentPage: '',
	})

	constructor(props) {
		super(props);
		this.state = CoursesPage.initialState();
	}
	
	static getDerivedStateFromProps(nextProps, nextState) {
		const current = Number(nextProps.location.search.slice(6));
		let Output = {};
		if (nextProps.courses.length > 0) {
			Output = formatPagination(nextProps.courses, current);
			return {
				...CoursesPage.initialState(),
				courses: Output.courses,
				pageSize: Output.pageSize,
				totalCount: Output.totalCount,
				currentPage: Output.currentPage
			};
		}

		return null;
	}

	/**
   * @memberof CoursePage
   * @returns {void}
   */
	redirectToAddCoursePage = () => {
		this.props.history.push('/course');
	}

	/**
   * @memberof CoursePage
	 * @param {object} courseDetails
   * @returns {void}
   */
	showDeleteModal = (courseDetails) => {
		this.setState(prev => ({
			displayModal: !prev.displayModal,
			modalContent: courseDetails
		}));
	}

	/**
   * @memberof CoursePage
	 * @param {string} courseId
   * @returns {void}
   */
	deleteCourse = (courseId) => {
		Promise.resolve(this.props.deleteCourse(courseId))
			.then(() => this.closeModal());
	}

	/**
   * @memberof CoursePage
	 * @param {object} courseDetails
   * @returns {void}
   */
	closeModal = (courseDetails) => {
		this.setState(prev => ({
			displayModal: !prev.displayModal
		}));
	}

	/**
   * @memberof CoursePage
	 * @param {object} current
	 * @param {object} pageSize
   * @returns {void}
   */
	handlePageChange = (current) => {
		this.props.history.push(`/courses?page=${current}`);
	}

	render() {
		const {
			displayModal, modalContent, courses, pageSize, totalCount, currentPage
		} = this.state;

		return (
			<div>
				<div className="jumbotron">
					<h1 className="display-4">Courses Page</h1>
					<hr className="my-4"/>
					<button type="button"
						className="btn btn-primary"
						onClick={this.redirectToAddCoursePage}>
							Add Course
					</button>
				</div>
				{courses.length === 0 ? ''
					: <table className="table table-striped">
						<thead>
							<tr>
								<th scope="col">&nbsp;</th>
								<th scope="col">Title</th>
								<th scope="col">Author</th>
								<th scope="col">Category</th>
								<th scope="col">Length</th>
								<th scope="col">&nbsp;</th>
							</tr>
						</thead>
						<tbody>
							{courses.map(course => <CourseList 
								key={course.id} 
								course={course} 
								showDeleteModal={this.showDeleteModal} 
							/>
							)}
						</tbody>
					</table>
				}
				<Modal 
					closeModal={this.closeModal}
					displayModal={displayModal}
					isDeleting={this.state.isDeleting}
					modalContent={modalContent}
					deleteCourse={this.deleteCourse}
				/>
				<Pagination
					onChange={this.handlePageChange}
					current={currentPage}
					pageSize={pageSize}
					total={totalCount}
				/>
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: array.isRequired
};

const mapStateToProps = ({ coursesReducer }) => ({
	courses: coursesReducer.courses
});

export default connect(
	mapStateToProps,
	{ deleteCourse }
)(CoursesPage);