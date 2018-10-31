import React, { PropTypes } from 'react';
import {
	object, array, func, bool, shape
} from 'prop-types';
import TextInput from '../../common/TextInput/TextInput';

const AuthorForm = ({
	author, onSave, onChange, loading, errors 
}) => (
	<form>
		<TextInput
			name="firstName"
			label="First Name"
			value={author.firstName}
			onChange={onChange}
			error={errors.firstName}/>

		<TextInput
			name="lastName"
			label="Last Name"
			value={author.lastName}
			onChange={onChange}
			error={errors.lastName}/>

		<button
			disabled={loading}
			className="btn btn-primary"
			onClick={onSave}
		>
			{loading ? 'Saving...' : 'Save'}
		</button>
	</form>
);

AuthorForm.propTypes = {
	author: shape({}).isRequired,
	onSave: func.isRequired,
	onChange: func.isRequired,
	loading: bool,
	errors: object
};

export default AuthorForm;