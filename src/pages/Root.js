import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from 'store';

import HomePage from 'pages/HomePage';
import OverviewPage from 'pages/OverviewPage';

import StyledTemplate from 'templates/StyledTemplate';

const Root = () => (
	<Provider store={store}>
		<StyledTemplate>
			<BrowserRouter>
				<Switch>
					<Route path="/overview" component={OverviewPage} />
					<Route path="/" component={HomePage} />
				</Switch>
			</BrowserRouter>
		</StyledTemplate>
	</Provider>
);

export default Root;
