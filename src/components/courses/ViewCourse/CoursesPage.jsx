import React, { Component } from 'react';
import _ from 'lodash';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import Pagination from 'rc-pagination';
import { BounceLoader } from 'react-spinners';
import { css } from 'react-emotion';


import { deleteCourse, loadCourses } from '../../../actions/courseActions';
import CourseList from './CourseList';
import formatPagination from '../../../helpers/formatPagination';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

/**
 * @class CoursePage
 * @extends Component
 */
export class CoursesPage extends Component {
	static initialState = () => ({
		isDeleting: false,
		courses: [],
		pageSize: '',
		totalCount: '',
		currentPage: 1,
	})

	state = CoursesPage.initialState();

	static getDerivedStateFromProps(nextProps, nextState) {
		const { currentPage } = nextState;
		let Output = {};
		if (nextProps.courses.length >= 0) {
			Output = formatPagination(nextProps.courses, currentPage);
			return {
				...CoursesPage.initialState(),
				courses: Output.state,
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
	 * @param {string} courseId
   * @returns {void}
   */
	deleteCourse = (courseId) => {
		this.props.deleteCourse(courseId);
	}

	renderCourses = () => {
		const {
			courses, pageSize, totalCount, currentPage
		} = this.state;
		return (
			<div>
				{courses && courses.length === 0 
					? <p className="lead text-center">Course List is Empty. Add Course</p>
					: <div>
						<table className="table table-striped">
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
									id={course.id}
									course={course} 
									deleteCourse={this.deleteCourse} 
								/>
								)}
							</tbody>
						</table>
						<Pagination
							onChange={this.handlePageChange}
							current={currentPage}
							pageSize={pageSize}
							total={totalCount}
						/>
					</div>
				}
			</div>
		);
	}

	/**
   * @memberof CoursePage
	 * @param {object} currentPage
	 * @param {object} pageSize
   * @returns {void}
   */
	handlePageChange = (currentPage) => {
		this.setState({ currentPage });
	} 
	

	render() {
		const { isLoading } = this.props;

		return (
			<div>
				<div className="jumbotron">
					<h1 className="display-4">Courses Page</h1>
					<button type="button"
						className="btn btn-primary"
						onClick={this.redirectToAddCoursePage}>
						Add Course
					</button>
				</div>
				{ isLoading
					? <div className="sweet-loading">
						<BounceLoader
							className={override}
							sizeUnit={'px'}
							size={150}
							color={'#123abc'}
							loading={true}
						/>
					</div> : this.renderCourses()
				}
			</div>
		);
	}
}

CoursesPage.propTypes = {
	courses: array.isRequired
};

const mapStateToProps = ({ coursesReducer }) => ({
	courses: _.sortBy(coursesReducer.courses, ['title']),
	isLoading: coursesReducer.isLoading
});

export default connect(
	mapStateToProps,
	{ 
		deleteCourse,
		loadCourses
	}
)(CoursesPage);