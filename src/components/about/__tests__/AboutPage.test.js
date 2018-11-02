import React from 'react';
import { shallow } from 'enzyme';

import AboutPage from '../AboutPage';

describe('AboutPage Component', () => {
	const wrapper = shallow(<AboutPage />);

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('div')).toHaveLength(1);
		expect(wrapper.find('div').hasClass('jumbotron')).toEqual(true);
		expect(wrapper.find('h1')).toHaveLength(1);
		expect(wrapper.find('h1').hasClass('display-4')).toEqual(true);
		expect(wrapper.find('p')).toHaveLength(1);
		expect(wrapper.find('p').hasClass('lead')).toEqual(true);
		expect(wrapper.find('p').text()).toEqual('This is about page!.');
	});
});
