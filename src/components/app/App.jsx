import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import CoursesPage from '../../components/courses/ViewCourse/CoursesPage';
import Header from '../common/Header/Header';
import HomePage from '../home/HomePage';
import AboutPage from '../about/AboutPage';
import ManageCoursePage from '../courses/ManageCourse/ManageCourse';
import AuthorsPage from '../authors/viewAuthors/AuthorsPage';
import ManageAuthor from '../authors/ManageAuthor/ManageAuthor';
import NotFound from '../notFoundPage/NotFound';

const App = () => (
	<BrowserRouter>
		<Fragment>
			<Header />
			<div className="container">
				<Switch>
					<Route exact path="/" component={HomePage} />
					<Route exact path="/about" component={AboutPage} />
					<Route exact path="/courses" component={CoursesPage} />
					<Route exact path="/course" component={ManageCoursePage} />
					<Route exact path="/authors" component={AuthorsPage} />
					<Route exact path="/author" component={ManageAuthor} />
					<Route exact path="/author/:id" component={ManageAuthor} />
					<Route exact path="/course/:id" component={ManageCoursePage} />
					<Route component={NotFound} />
				</Switch>
			</div>
		</Fragment>
	</BrowserRouter>
);

export default App;
