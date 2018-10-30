import React from 'react';
import toJson from 'enzyme-to-json';
import Index from '../index';

describe('Render Dom', () => {
	it('renders without crashing', () => {
		expect(
			toJson(
				Object.assign({}, Index, { _reactInternalInstance: 'censored' }),
			),
		).toMatchSnapshot();
	});
});
