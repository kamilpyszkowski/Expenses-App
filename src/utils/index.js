/* eslint-disable no-restricted-syntax */
export const getDate = (type) => {
	const newDate = new Date();
	const year = newDate.getFullYear();
	const month = newDate.getMonth();
	switch (type) {
		case 'year':
			return year;
		case 'month':
			return month;
		default:
			return null;
	}
};

export const generateId = () => `_${Math.random().toString(36).substr(2, 9)}`;

export const getSummary = (items) => items.reduce((sum, item) => sum + parseInt(item.value, 10), 0);
