import paint from 'assets/paint.svg';
import heart from 'assets/heart.svg';
import shopping from 'assets/shopping.svg';
import car from 'assets/car.svg';
import tshirt from 'assets/tshirt.svg';
import computer from 'assets/computer.svg';
import chemistry from 'assets/chemistry.svg';
import trash from 'assets/trash.svg';
import tick from 'assets/tick.svg';

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
			return { month, year };
	}
};

export const calendar = {
	months: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
	years: [2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014],
};

export const monthNames = [
	'january',
	'february',
	'march',
	'april',
	'may',
	'june',
	'july',
	'august',
	'september',
	'october',
	'november',
	'december',
];

export const getSummary = (items) => items.reduce((sum, item) => sum + parseInt(item.value, 10), 0);

export const icons = {
	paint,
	heart,
	shopping,
	car,
	tshirt,
	computer,
	chemistry,
	trash,
	tick,
};
