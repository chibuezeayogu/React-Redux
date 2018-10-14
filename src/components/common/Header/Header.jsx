import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
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
							Courses
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

export default Header;
