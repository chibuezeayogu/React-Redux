/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';

import CourseList from './CourseList';

describe('CourseList Component', () => {
	const props = {
		deleteCourse: jest.fn(),
		course: {
			id: 'react-flux-building-applications',
			title: 'Building Applications in React and Flux',
			watchHref: 'http://www.pluralsight.com/courses/react-flux-building-applications',
			authorId: 'cory-house',
			length: '5:08',
			category: 'JavaScript'
		}
	};
  
	const wrapper = shallow(<CourseList {...props} />);
  
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('button')).toHaveLength(1);
		expect(wrapper.find('button').text()).toEqual('Delete');
		expect(wrapper.find('tr')).toHaveLength(1);
	});

	it('should call handleDeleteCourse method', () => {
		const spy = jest.spyOn(wrapper.instance(), 'handleDeleteCourse');
		wrapper.instance().handleDeleteCourse();
		expect(spy).toHaveBeenCalled();
	});

	it('should simulate delete button click', () => {
		expect(wrapper.find('button')).toHaveLength(1);
		wrapper.find('button').simulate('click');
	});
});