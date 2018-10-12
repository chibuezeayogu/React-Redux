import React from 'react';
import { shallow } from 'enzyme';

import SelectInput from './SelectInput';

describe('SelectInput Component', () => {
	const props = {
		name: '',
		label: '',
		onChange: jest.fn(),
		defaultOption: '',
		value: '',
		error: 'error',
		options: [{ value: 'text', text: 'text' }]
	};

	const wrapper = shallow(<SelectInput {...props} />);
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
