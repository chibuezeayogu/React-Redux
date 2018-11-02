import React from 'react';
import { shallow } from 'enzyme';

import AuthorForm from '../AuthorForm';

describe('AboutPage Component', () => {
	const props = {
		onSave: jest.fn(),
		onChange: jest.fn(),
		loading: false,
		author: {
			id: '',
			firstName: '',
			lastName: ''
		},
		errors: {
			firstName: '',
			lastName: ''
		}
	};

	const wrapper = shallow(<AuthorForm {...props} />);

	it('should render correctly', () => {
		expect(wrapper.exists()).toBeTruthy();
		expect(wrapper).toMatchSnapshot();
	});

	it('should render form, TextInput, button', () => {
		expect(wrapper.find('form')).toHaveLength(1);
		expect(wrapper.find('button')).toHaveLength(1);
		expect(wrapper.find('button').text()).toEqual('Save');
		expect(wrapper.find('TextInput')).toHaveLength(2);
		expect(wrapper.find('TextInput')).toHaveLength(2);
	});
});