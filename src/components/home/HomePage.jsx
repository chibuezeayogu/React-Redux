import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
	<div className="jumbotron">
		<h1 className="display-4">PluralSight Course Admin!</h1>
		<p className="lead">React, Redux and React Router in ES6!</p>
		<hr className="my-4"/>
		<Link to="about" className="btn btn-primary btn-large">Learn More</Link>
	</div>
);


export default HomePage;
