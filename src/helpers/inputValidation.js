const inputValidation = (formFields) => {
	const errors = {};
	Object.entries(formFields).forEach(([key, value]) => {
		if (value.toString().trim() === '' && key !== 'id' && key !== 'watchHref') {
			errors[key] = '*required';
		}
	});

	return {
		isEmpty: Object.keys(errors).length === 0,
		errors 
	};
};

export default inputValidation;
