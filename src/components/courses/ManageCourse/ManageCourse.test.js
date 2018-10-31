import React from 'react';
import { shallow } from 'enzyme';

import { ManageCourse } from './ManageCourse';


describe('ManageCourse Component', () => {
	const props = {
		history: {
			push: jest.fn()
		},
		saveCourse: jest.fn().mockImplementation(() => Promise.resolve()),
		match: { params: { id: 'courseID' } },
		courses: [{
			id: 'courseID', 
			watchHref: '', 
			title: '', 
			authorId: '', 
			length: '', 
			category: ''
		}],
		authors: [{
			id: 'cory-house',
			firstName: 'Cory',
			lastName: 'House'
		}]
	};
 
	const state = {
		course: {
			id: '',
			watchHref: '', 
			title: '', 
			authorId: '', 
			length: '', 
			category: ''
		},
		auhtors: [],
		errors: {},
		hasUnsavedChanges: false
	};
  
	const wrapper = shallow(<ManageCourse {...props} {...state} />);

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.length).toEqual(1);
		expect(wrapper.find('div.jumbotron')).toHaveLength(1);
		expect(wrapper.find('h1.display-4')).toHaveLength(1);
		expect(wrapper.find('h1').text()).toBe('Manage Course');
	});

	it('should call onChange method', () => {
		const spy = jest.spyOn(wrapper.instance(), 'onChange');
		const event = {
			target: {
				name: 'title',
				value: 'title'
			}
		};
		wrapper.setState({ errors: { title: '*required' } });
		wrapper.instance().onChange(event);
		expect(spy).toHaveBeenCalled();
		expect(wrapper.instance().state.course.title).toEqual('title');
		expect(wrapper.instance().state.hasUnsavedChanges).toEqual(true);
	});

	it('should call saveCourse', () => {
		const spy = jest.spyOn(wrapper.instance(), 'saveCourse');
		wrapper.instance().saveCourse({ preventDefault: jest.fn() });
		expect(spy).toHaveBeenCalled();
	});

	it('should saveCourse if correct values are supplied', () => {
		const spy = jest.spyOn(wrapper.instance(), 'saveCourse');
		wrapper.instance().saveCourse({ preventDefault: jest.fn() });
		expect(spy).toHaveBeenCalled();
	});
});
