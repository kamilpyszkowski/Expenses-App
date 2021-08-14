const initState = {
	items: [
		{
			id: 1,
			icon: 'computer',
			color: 'red',
			name: 'New computer',
			value: '940',
			date: {
				month: 5,
				year: 2021,
			},
		},
		{
			id: 2,
			icon: 'shopping',
			color: 'green',
			name: 'Groceries',
			value: '80',
			date: {
				month: 6,
				year: 2021,
			},
		},
		{
			id: 3,
			icon: 'tshirt',
			color: 'yellow',
			name: 'New t-shirt',
			value: '30',
			date: {
				month: 5,
				year: 2021,
			},
		},
		{
			id: 4,
			icon: 'car',
			color: 'purple',
			name: 'New brake pads',
			value: '480',
			date: {
				month: 7,
				year: 2021,
			},
		},
		{
			id: 5,
			icon: 'computer',
			color: 'purple',
			name: 'React courses',
			value: '1200',
			date: {
				month: 6,
				year: 2021,
			},
		},
		{
			id: 6,
			icon: 'shopping',
			color: 'red',
			name: 'Chewing gum',
			value: '5',
			date: {
				month: 9,
				year: 2021,
			},
		},
		{
			id: 7,
			icon: 'heart',
			color: 'orange',
			name: 'Date with Kylie',
			value: '250',
			date: {
				month: 7,
				year: 2021,
			},
		},
		{
			id: 8,
			icon: 'chemistry',
			color: 'yellow',
			name: 'Medicines',
			value: '90',
			date: {
				month: 5,
				year: 2021,
			},
		},
	],
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'REMOVE_ITEM':
			return {
				items: [...state.items.filter((item) => item.id !== action.payload.id)],
			};
		case 'ADD_ITEM':
			return {
				items: [...state.items, action.payload.newItem],
			};
		default:
			return state;
	}
};

export default rootReducer;
