const initState = {
	calendar: {
		months: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
		years: [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014],
	},
	items: [
		{
			id: 1,
			icon: 'computer',
			color: 'red',
			name: 'New computer',
			value: '940',
		},
		{
			id: 2,
			icon: 'shopping',
			color: 'green',
			name: 'Groceries',
			value: '80',
		},
		{
			id: 3,
			icon: 'tshirt',
			color: 'yellow',
			name: 'New t-shirt',
			value: '30',
		},
		{
			id: 4,
			icon: 'car',
			color: 'purple',
			name: 'New brake pads',
			value: '480',
		},
		{
			id: 5,
			icon: 'computer',
			color: 'green',
			name: 'React courses',
			value: '3520',
		},
		{
			id: 6,
			icon: 'shopping',
			color: 'red',
			name: 'Chewing gum',
			value: '5',
		},
		{
			id: 7,
			icon: 'heart',
			color: 'orange',
			name: 'Date with Kylie',
			value: '250',
		},
		{
			id: 8,
			icon: 'chemistry',
			color: 'yellow',
			name: 'Medicines',
			value: '90',
		},
	],
};

const rootReducer = (state = initState, action) => {
	switch (action.type) {
		case 'REMOVE_ITEM':
			return {
				...state,
				items: [...state.items.filter((item) => item.id !== action.payload.id)],
			};
		case 'ADD_ITEM':
			return {
				...state,
				items: [...state.items, action.payload.newItem],
			};
		default:
			return state;
	}
};

export default rootReducer;
