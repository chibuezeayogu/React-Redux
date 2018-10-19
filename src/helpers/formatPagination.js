const formatPagination = (courses, currentPage = 1, pageSize = 4) => {
	const result = {};
	result.totalCount = courses.length;
	result.pageSize = pageSize; 
	result.currentPage = currentPage;
	if (currentPage <= 1) {
		result.courses = courses.slice(0, pageSize);
	} else {
		result.courses = courses
			.slice(((currentPage - 1) * pageSize), (currentPage * pageSize));
	}
  
	return result;
};

export default formatPagination;