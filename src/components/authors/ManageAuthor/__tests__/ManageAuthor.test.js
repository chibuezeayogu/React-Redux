import React from 'react';
import { shallow } from 'enzyme';

import { ManageAuthor } from '../ManageAuthor';


describe('ManageAuthor Component', () => {
	const props = {
		history: {
			push: jest.fn()
		},
		saveAuthor: jest.fn().mockImplementation(() => Promise.resolve()),
		match: { params: { id: 'courseID' } },
		courses: [{
			id: 'courseID',
			watchHref: '',
			title: '',
			authorId: '',
			length: '',
			category: ''
		}],
		authors: [{
			id: 'cory-house',
			firstName: 'Cory',
			lastName: 'House'
		}]
	};

	const wrapper = shallow(<ManageAuthor {...props} />);

	it('should render correctly', () => {
		expect(wrapper).toMatchSnapshot();
		expect(wrapper.length).toEqual(1);
		expect(wrapper.find('div.jumbotron')).toHaveLength(1);
		expect(wrapper.find('h1.display-4')).toHaveLength(1);
		expect(wrapper.find('h1').text()).toBe('Manage Author');
	});

	it('should call onChange method', () => {
		const spy = jest.spyOn(wrapper.instance(), 'onChange');
		const event = {
			target: {
				name: 'firstName',
				value: 'firstName'
			}
		};
		wrapper.instance().onChange(event);
		expect(spy).toHaveBeenCalled();
	});

	it('should return an error message if firstName is empty', () => {
		const spy = jest.spyOn(wrapper.instance(), 'saveAuthor');
		wrapper.instance().saveAuthor({ preventDefault: jest.fn() });
		expect(spy).toHaveBeenCalled();
	});

	it('should saveAuthor if correct values are supplied', () => {
		const spy = jest.spyOn(wrapper.instance(), 'saveAuthor');
		wrapper.setState({
			author: {
				firstName: 'Chibueze',
				lastName: 'Ayogu',
			}
		});
		wrapper.instance().saveAuthor({ preventDefault: jest.fn() });
		expect(spy).toHaveBeenCalled();
	});
});