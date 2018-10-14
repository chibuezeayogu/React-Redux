/* eslint-disable max-len */

import React from 'react';
import { shallow } from 'enzyme';

import CourseList from './CourseList';

describe('CourseList Component', () => {
	const props = {
		courses: [{
			id: 'react-flux-building-applications',
			title: 'Building Applications in React and Flux',
			watchHref: 'http://www.pluralsight.com/courses/react-flux-building-applications',
			authorId: 'cory-house',
			length: '5:08',
			category: 'JavaScript'
		}]
	};
  
	const wrapper = shallow(<CourseList {...props} />);
  
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});