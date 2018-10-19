import React, { Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CoursesPage from '../../components/courses/ViewCourse/CoursesPage';
import Header from '../common/Header/Header';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import ManageCoursePage from '../courses/ManageCourse/ManageCourse';

const App = () => (
	<BrowserRouter>
		<Fragment>
			<Header />
			<div className="container">
				<Route exact path="/" component={HomePage} />
				<Route exact path="/about" component={AboutPage} />
				<Route exact path="/courses" component={CoursesPage} />
				<Route exact path="/course" component={ManageCoursePage} />
				<Route exact path="/course/:id" component={ManageCoursePage} />
			</div>
		</Fragment>
	</BrowserRouter>
);

export default App;
