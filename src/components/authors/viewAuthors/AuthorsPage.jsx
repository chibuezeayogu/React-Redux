import React, { Component } from 'react';
import _ from 'lodash';
import { array } from 'prop-types';
import { connect } from 'react-redux';
import Pagination from 'rc-pagination';
import { BounceLoader } from 'react-spinners';
import { css } from 'react-emotion';
import toastr from 'toastr';


import { loadAuthors, deleteAuthor } from '../../../actions/authorActions';
import AuthorList from './AuthorList';
import formatPagination from '../../../helpers/formatPagination';

const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

/**
 * @class AuthorsPage
 * @extends Component
 */
export class AuthorsPage extends Component {
	static initialState = () => ({
		isDeleting: false,
		authors: [],
	})

	state = AuthorsPage.initialState();

	static getDerivedStateFromProps(nextProps, nextState) {
		const { currentPage } = nextState;
		let Output = {};
		if (nextProps.authors.length >= 0) {
			Output = formatPagination(nextProps.authors, currentPage);
			return {
				...AuthorsPage.initialState(),
				authors: Output.state,
				pageSize: Output.pageSize,
				totalCount: Output.totalCount,
				currentPage: Output.currentPage
			};
		}

		return null;
	}

	/**
   * @memberof AuthorsPage
   * @returns {void}
   */
	redirectToAddAuthorPage = () => {
		this.props.history.push('/author');
	}

	/**
   * @memberof AuthorsPage
	 * @param {string} authorId
   * @returns {void}
   */
	deleteAuthor = (authorId) => {
		const { courses } = this.props;
		const id = courses.findIndex(course => course.authorId === authorId);
		if (id === -1) {
			this.props.deleteAuthor(authorId);
		} else {
			toastr.error('can\'t delete author with a course');
		}
	}

	renderAuthors = () => {
		const {
			authors, pageSize, totalCount, currentPage 
		} = this.state;
		return (
			<div>
				{authors && authors.length === 0 
					? <p className="lead text-center">Authors List is Empty. Add Author</p>
					: <div>
						<table className="table table-striped">
							<thead>
								<tr>
									<th scope="col">S/N</th>
									<th scope="col">First Name</th>
									<th scope="col">Last Name</th>
									<th scope="col">&nbsp;</th>
								</tr>
							</thead>
							<tbody>
								{authors.map(author => <AuthorList 
									key={author.id}
									id={author.id}
									author={author} 
									deleteAuthor={this.deleteAuthor} 
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
   * @memberof AuthorsPage
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
					<h1 className="display-4">Authors Page</h1>
					<button type="button"
						className="btn btn-primary"
						onClick={this.redirectToAddAuthorPage}>
						Add Author
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
					</div> : this.renderAuthors()
				}
			</div>
		);
	}
}

AuthorsPage.propTypes = {
	authors: array.isRequired
};

const mapStateToProps = ({ authorsReducer, coursesReducer }) => ({
	authors: authorsReducer.authors,
	isLoading: authorsReducer.isLoading,
	courses: coursesReducer.courses
});

export default connect(
	mapStateToProps,
	{ 
		loadAuthors,
		deleteAuthor
	}
)(AuthorsPage);