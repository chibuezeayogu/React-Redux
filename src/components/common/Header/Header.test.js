import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';


describe('Header Component', () => {
	const wrapper = shallow(<Header />);
  
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
