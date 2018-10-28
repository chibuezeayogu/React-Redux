import React, { Component } from 'react';
import { object, func } from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * @class AuthorList
 * @extends Compoent
 * 
 */
class AuthorList extends Component {
/**
 * @memberof AuthorList
 * @method handleDeleteCourse
 * @param {string} id
 * @returns {void}
 */
	handleDeleteAuthor = (id) => {
		this.props.deleteAuthor(id);
	}
	
	render() {
		const { author } = this.props;
		return (
			<tr>
				<td><Link to={`/author/${author.id}`}>{author.id}</Link></td>
				<td>{author.firstName}</td>
				<td>{author.lastName}</td>
				<td>
					<button 
						type="button" 
						onClick={() => this.handleDeleteAuthor(author.id)} 
						className="btn btn-danger"
					>
							Delete
					</button>
				</td>
			</tr>
		);
	}
}

AuthorList.propTypes = {
	course: object,
	showDeleteModal: func
};

export default AuthorList;
