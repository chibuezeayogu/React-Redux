import React from 'react';
import { string, func } from 'prop-types';

const TextInput = ({
	name, label, onChange, placeholder, value, error
}) => {
	let wrapperClass = 'form-group';
	if (error && error.length > 0) {
		wrapperClass += ' has-error';
	}

	return (
		<div className={wrapperClass}>
			<label htmlFor={name}>{label} {error && <span>{error}</span>}</label>
			<div className="field">
				<input
					type="text"
					name={name}
					className="form-control"
					placeholder={placeholder}
					value={value}
					onChange={onChange}/>
			</div>
		</div>
	);
};

TextInput.propTypes = {
	name: string.isRequired,
	label: string.isRequired,
	onChange: func.isRequired,
	placeholder: string,
	value: string,
	error: string
};

export default TextInput;
