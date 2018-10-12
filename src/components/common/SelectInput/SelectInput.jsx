import React from 'react';
import {
	string, func, arrayOf, object 
} from 'prop-types';

const SelectInput = ({
	name, label, onChange, defaultOption, value, error, options 
}) => (
	<div className="form-group">
		<label htmlFor={name}>{label}</label>
		<div className="field">
			<select
				name={name}
				value={value}
				onChange={onChange}
				className="form-control">
				<option value="">{defaultOption}</option>
				{options.map(option => (
					<option key={option.value} value={option.value}>{option.text}</option>
				))}
			</select>
			{error && <div className="alert alert-danger">{error}</div>}
		</div>
	</div>
);

SelectInput.propTypes = {
	name: string.isRequired,
	label: string.isRequired,
	onChange: func.isRequired,
	defaultOption: string,
	value: string,
	error: string,
	options: arrayOf(object)
};

export default SelectInput;
