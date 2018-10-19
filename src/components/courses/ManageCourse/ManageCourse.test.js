import React from 'react';
import { mount } from 'enzyme';

import { ManageCourse, ManageCoursePage } from './ManageCourse';

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
  
	const wrapper = mount(<ManageCourse {...props} {...state}/>);

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call onChange method', () => {
		const Spy = jest
			.spyOn(wrapper.instance(), 'onChange');
		const event = { 
			preventDefault: jest.fn(),
			target: {
				value: '',
				name: ''
			}
		};
		wrapper.setState({ errors: { id: '*required' } });
		wrapper.instance().onChange(event);
		expect(Spy).toHaveBeenCalled();
	});

	it('should call saveCourse method empty fields', () => {
		const Spy = jest
			.spyOn(wrapper.instance(), 'saveCourse');
		const event = { preventDefault: jest.fn() };
		wrapper.instance().saveCourse(event);
		expect(Spy).toHaveBeenCalled();
	});

	it('should call saveCourse method with valid input', () => {
		const Spy = jest
			.spyOn(wrapper.instance(), 'saveCourse');
		const event = { preventDefault: jest.fn() };
		wrapper.setProps({ match: { params: { id: '' } } });
		wrapper.setState({
			course: {
				id: 'course-id',
				watchHref: 'http://www.pluralsight.com', 
				title: 'title', 
				authorId: 'cory-house', 
				length: '5:40', 
				category: 'Software Architecture'
			}
		});
		wrapper.instance().saveCourse(event);
		expect(Spy).toHaveBeenCalled();
	});
});
