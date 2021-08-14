import React, { useState, useEffect } from 'react';
import { Router, Redirect } from '@reach/router';
import { Provider as StoreProvider } from 'react-redux';
import Context from 'context';
import store from 'store';

import { getDate, monthNames } from 'utils';

import Dashboard from 'pages/Dashboard';

import StyledTemplate from 'templates/StyledTemplate';

const initialDate = {
	month: getDate('month'),
	year: getDate('year'),
};

const Root = () => {
	const [contextDate, setContextDate] = useState(initialDate);

	const currentLocation = window.location.pathname.substring(1);
	const currentMonth = monthNames[contextDate.month];

	useEffect(() => {
		if (currentLocation !== '') {
			setContextDate((prevDate) => ({
				...prevDate,
				month: monthNames.indexOf(currentLocation),
			}));
		}
	}, [currentLocation]);

	return (
		<StoreProvider store={store}>
			<Context.Provider value={{ contextDate, setContextDate }}>
				<StyledTemplate>
					<Router>
						<Redirect from="/" to={`/${currentMonth}`} noThrow />
						<Dashboard path="/" />
						<Dashboard path="/:month" />
					</Router>
				</StyledTemplate>
			</Context.Provider>
		</StoreProvider>
	);
};

export default Root;
