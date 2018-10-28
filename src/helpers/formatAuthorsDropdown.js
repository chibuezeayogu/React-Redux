const formattedAuthorsDropdown = (authors) => (
	authors.map(author => ({
		value: author.id,
		text: `${author.firstName} ${author.lastName}`
	}))
);

export default formattedAuthorsDropdown;