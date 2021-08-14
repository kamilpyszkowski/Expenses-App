import React from 'react';

import DefaultTemplate from 'templates/DefaultTemplate';

import DateSwitcher from 'components/organisms/DateSwitcher';
import Form from 'components/organisms/Form';
import ItemsList from 'components/organisms/ItemsList';
import SummarySection from 'components/organisms/SummarySection';

const Dashboard = () => (
	<DefaultTemplate>
		<DateSwitcher />
		<ItemsList />
		<Form />
		<SummarySection />
	</DefaultTemplate>
);

export default Dashboard;
