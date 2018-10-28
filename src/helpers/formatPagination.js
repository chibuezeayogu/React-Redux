const formatPagination = (state, currentPage = 1, pageSize = 4) => {
	const result = {};
	result.totalCount = state.length;
	result.pageSize = pageSize; 
	result.currentPage = currentPage;
	if (currentPage <= 1) {
		result.state = state.slice(0, pageSize);
	} else {
		result.state = state
			.slice(((currentPage - 1) * pageSize), (currentPage * pageSize));
	}
  
	return result;
};

export default formatPagination;