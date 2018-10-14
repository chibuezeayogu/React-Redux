/* eslint-disable max-len */
import React from 'react';
import { shallow } from 'enzyme';

import CourseListRow from './CourseListRow';

describe('CourseListRow Component', () => {
	const props = {
		course: {
			id: 'react-flux-building-applications',
			title: 'Building Applications in React and Flux',
			watchHref: 'http://www.pluralsight.com/courses/react-flux-building-applications',
			authorId: 'cory-house',
			length: '5:08',
			category: 'JavaScript'
		}
	};
  
	const wrapper = shallow(<CourseListRow {...props} />);
  
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});