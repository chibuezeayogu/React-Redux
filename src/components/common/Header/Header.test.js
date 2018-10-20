import React from 'react';
import { shallow } from 'enzyme';

import { Header } from './Header';


describe('Header Component', () => {
	const props = {
		courses: [{
			id: 'react-flux-building-applications',
			title: 'Building Applications in React and Flux',
			watchHref: 'http://www.pluralsight.com/courses/react-flux',
			authorId: 'cory-house',
			length: '5:08',
			category: 'JavaScript'
		}]
	};

	const wrapper = shallow(<Header {...props} />);
  
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
