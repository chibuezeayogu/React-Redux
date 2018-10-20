import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

/**
 * @class Header
 * @extends Component
 */
export class Header extends Component {
	render() {
		const { courses, authors } = this.props;
 
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">
					<a className="navbar-brand">Navbar</a>
					<button
						className="navbar-toggler" 
						type="button" 
						data-toggle="collapse" 
						data-target="#navbarNav" 
						aria-controls="navbarNav" 
						aria-expanded="false" 
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div 
						className="collapse navbar-collapse justify-content-end"
						id="navbarNav">
						<div className="navbar-nav">
							<NavLink to="/"
								activeClassName="active"
								className="nav-item nav-link"
							>
									Home<span className="sr-only">(current)</span>
							</NavLink>
							<NavLink to="/courses"
								activeClassName="active"
								className="nav-item nav-link"
							>
									Courses <span className="badge badge-info">{courses.length}</span>
							</NavLink>
							<NavLink
								to="/about"
								activeClassName="active"
								className="nav-item nav-link"
							>
									About
							</NavLink>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

const mapStateTpProps = ({ coursesReducer, authorsReducer }) => ({
	courses: coursesReducer.courses,
	authors: authorsReducer.authors
});

export default connect(mapStateTpProps, null)(Header);
