import React from 'react';
import { shallow } from 'enzyme';

import { CoursesPage } from './CoursesPage';

describe('CoursePage Component', () => {
	const props = {
		history: {
			push: jest.fn()
		},
	};
	const wrapper = shallow(<CoursesPage {...props}/>);
  
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call redirectToAddCoursePage method', () => {
		const spy = jest.spyOn(wrapper.instance(), 'redirectToAddCoursePage');
		wrapper.instance().redirectToAddCoursePage();
		expect(spy).toHaveBeenCalled();
	});
});
