import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../NotFound';


describe('Header Component', () => {
	const wrapper = shallow(<NotFound />);

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
