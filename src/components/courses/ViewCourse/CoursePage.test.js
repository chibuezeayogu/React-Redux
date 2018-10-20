import React from 'react';
import { shallow } from 'enzyme';

import { CoursesPage } from './CoursesPage';

describe('CoursePage Component', () => {
	const props = {
		history: {
			push: jest.fn()
		},
		location: { search: '?page=1' },
		courses: [{
			id: 'react-flux-building-applications',
			title: 'Building Applications in React and Flux',
			watchHref: 'http://www.pluralsight.com/courses/react-flux-building',
			authorId: 'cory-house',
			length: '5:08',
			category: 'JavaScript'
		}],
		deleteCourse: jest.fn().mockImplementation(() => Promise.resolve())
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
	
	it('should call deleteCourse method', () => {
		const deleteVendorSpy = jest.spyOn(wrapper.instance(), 'deleteCourse');
		wrapper.instance().deleteCourse();
		expect(deleteVendorSpy).toHaveBeenCalled();
	});
});
