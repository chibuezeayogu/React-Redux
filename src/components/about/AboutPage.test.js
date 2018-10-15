import React from 'react';
import { shallow } from 'enzyme';

import AboutPage from './AboutPage';

describe('AboutPage Component', () => {
	const wrapper = shallow(<AboutPage />);

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});
});
