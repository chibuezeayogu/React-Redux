const getById = (states, id) => {
	const foundItem = states.find(state => state.id === id);
	if (foundItem) return foundItem;
	return null;
};

export default getById;
