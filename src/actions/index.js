export const removeItem = (id) => ({
	type: 'REMOVE_ITEM',
	payload: {
		id,
	},
});

export const addItem = (newItem) => ({
	type: 'ADD_ITEM',
	payload: {
		newItem,
	},
});
