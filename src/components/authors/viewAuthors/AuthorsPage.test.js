import React from 'react';
import { shallow } from 'enzyme';

import { AuthorsPage } from './AuthorsPage';
import courses from '../../../__test__/__mocks__/mockCourses';
import authors from '../../../__test__/__mocks__/mockAuthors';

describe('AuthorsPage Component', () => {
	const props = {
		history: {
			push: jest.fn()
		},
		courses,
		authors,
		deleteAuthor: jest.fn().mockImplementation(() => Promise.resolve())
	};
	const wrapper = shallow(<AuthorsPage {...props}/>);
  
	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should call redirectToAddAuthorPage method', () => {
		const spy = jest.spyOn(wrapper.instance(), 'redirectToAddAuthorPage');
		wrapper.instance().redirectToAddAuthorPage();
		expect(spy).toHaveBeenCalled();
	});
	
	it('should call deleteCourse method', () => {
		const deleteAuthorSpy = jest.spyOn(wrapper.instance(), 'deleteAuthor');
		wrapper.instance().deleteAuthor();
		expect(deleteAuthorSpy).toHaveBeenCalled();
	});
	
	it('should call handlePageChange method', () => {
		const spy = jest.spyOn(wrapper.instance(), 'handlePageChange');
		wrapper.instance().handlePageChange();
		expect(spy).toHaveBeenCalled();
	});
});
