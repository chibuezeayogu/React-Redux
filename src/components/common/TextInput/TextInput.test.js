import React from 'react';
import { shallow } from 'enzyme';

import TextInput from './TextInput';

describe('TextInput Component', () => {
	const props = {
		name: '',
		label: '',
		onChange: jest.fn(),
		placeholder: '',
		value: '',
		error: 'error',
	};

	const wrapper = shallow(<TextInput {...props} />);
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});