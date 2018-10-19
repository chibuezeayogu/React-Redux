import React, { PropTypes } from 'react';
import {
	object, array, func, bool 
} from 'prop-types';
import TextInput from '../../common/TextInput/TextInput';
import SelectInput from '../../common/SelectInput/SelectInput';

const CourseForm = ({
	course, allAuthors, onSave, onChange, loading, errors 
}) => (
	<form>
		<TextInput
			name="title"
			label="Title"
			value={course.title}
			onChange={onChange}
			error={errors.title}/>

		<SelectInput
			name="authorId"
			label="Author"
			value={course.authorId}
			defaultOption="Select Author"
			options={allAuthors}
			onChange={onChange}
			error={errors.authorId}/>

		<TextInput
			name="category"
			label="Category"
			value={course.category}
			onChange={onChange}
			error={errors.category}/>

		<TextInput
			name="length"
			label="Length"
			value={course.length}
			onChange={onChange}
			error={errors.length}/>

		<button
			disabled={loading}
			className="btn btn-primary"
			onClick={onSave}
		>
			{loading ? 'Saving...' : 'Save'}
		</button>
	</form>
);

CourseForm.propTypes = {
	course: object.isRequired,
	allAuthors: array.isRequired,
	onSave: func.isRequired,
	onChange: func.isRequired,
	loading: bool,
	errors: object
};

export default CourseForm;
