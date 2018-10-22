import React from 'react';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import ManageCourse from './ManageCourse';

const mockStore = configureStore();
const InitialState = {
	coursesReducer: {
		courses: [{
			id: 'courseID', 
			watchHref: '', 
			title: '', 
			authorId: '', 
			length: '', 
			category: ''
		},
		{
			id: '', 
			watchHref: '', 
			title: '', 
			authorId: '', 
			length: '', 
			category: ''
		}]
	},
	authorsReducer: { authors: [] }
};
const store = mockStore(InitialState);

describe('ManageCourse Component', () => {
	const props = {
		history: {
			push: jest.fn()
		},
		match: { params: { id: 'courseID' } },
		courses: [{
			id: 'courseID', 
			watchHref: '', 
			title: '', 
			authorId: '', 
			length: '', 
			category: ''
		},
		{
			id: '', 
			watchHref: '', 
			title: '', 
			authorId: '', 
			length: '', 
			category: ''
		}],
		saveCourse: jest.fn(),
		authors: [{
			id: 'cory-house',
			firstName: 'Cory',
			lastName: 'House'
		}]
	};
 
	const state = {
		course: {
			watchHref: 'http://www.pluralsight.com', 
			title: 'title', 
			authorId: 'cory-house', 
			length: '5:40', 
			category: 'Software Architecture'
		},
		auhtors: [],
		errors: {}
	};
  
	const wrapper = mount( 
		<BrowserRouter>
			<Provider store={store}>
				<ManageCourse {...props} {...state}/>
			</Provider>
		</BrowserRouter>);

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});