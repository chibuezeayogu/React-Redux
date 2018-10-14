import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CoursesPage from '../../components/courses/ViewCourse/CoursesPage';
import Header from '../common/Header/Header';
import HomePage from '../home/HomePage';

const App = () => (
	<Router>
		<Fragment>
			<Header />
			<div className="container">
				<Route exact path="/" component={HomePage} />
				<Route exact path="/courses" component={CoursesPage} />
			</div>
		</Fragment>
	</Router>
);

export default App;
