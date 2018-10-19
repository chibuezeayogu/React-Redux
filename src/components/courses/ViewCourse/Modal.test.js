import React from 'react';
import { shallow } from 'enzyme';

import Modal from './Modal';

describe('Modal Component', () => {
	const props = {
		modalContent: {
			id: 'react-flux-building-applications',
			title: 'Building Applications in React and Flux',
			watchHref: 'http://www.pluralsight.com/courses/react-flux-building',
			authorId: 'cory-house',
			length: '5:08',
			category: 'JavaScript'
		},
		deleteCourse: jest.fn(),
		closeModal: jest.fn(),
		displayModal: true
	};
  
	const wrapper = shallow(<Modal {...props} />);
  
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});