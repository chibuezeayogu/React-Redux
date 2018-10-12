import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
	<nav>
		<NavLink to="/" activeClassName="active">Home</NavLink >
		{' | '}
		<Link to="/courses" activeClassName="active">Courses</Link>
		{' | '}
		<Link to="/about" activeClassName="active">About</Link>
	</nav>
);

export default Header;
