import React from 'react';
import { render } from 'react-dom';

export default render(
	'Welcome', document.getElementById('app') || document.createElement('div')
);
