import React from 'react';
import { shallow } from 'enzyme';

import CourseForm from '../CourseForm';

describe('AboutPage Component', () => {
	const props = {
		onSave: jest.fn(),
		onChange: jest.fn(),
		course: {
			title: '',
			authorId: '',
			category: '',
			length: ''
		},
		allAuthors: [],
		loading: false,
		errors: {
			title: '',
			authorId: '',
			category: '',
			length: ''
		}
	};

	const wrapper = shallow(<CourseForm {...props} />);

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
