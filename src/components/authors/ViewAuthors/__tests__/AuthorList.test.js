import React from 'react';
import { shallow } from 'enzyme';

import AuthorList from '../AuthorList';

describe('CourseList Component', () => {
	const props = {
		deleteAuthor: jest.fn(),
		author: {
			id: 'chibueze-ayogu',
			firstName: 'Chibueze',
			lastName: 'Ayugo'
		}
	};

	const wrapper = shallow(<AuthorList {...props} />);

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.find('button')).toHaveLength(1);
		expect(wrapper.find('button').text()).toEqual('Delete');
		expect(wrapper.find('tr')).toHaveLength(1);
	});

	it('should call handleDeleteAuthor method', () => {
		const spy = jest.spyOn(wrapper.instance(), 'handleDeleteAuthor');
		wrapper.instance().handleDeleteAuthor({ id: 'chibueze-ayogu' });
		expect(spy).toHaveBeenCalled();
	});

	it('should simulate delete button click', () => {
		expect(wrapper.find('button')).toHaveLength(1);
		wrapper.find('button').simulate('click');
	});
});
