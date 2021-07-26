import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import DefaultTemplate from 'templates/DefaultTemplate';

import DateSwitcher from 'components/organisms/DateSwitcher/DateSwitcher';
import ItemCreator from 'components/organisms/ItemCreator/ItemCreator';
import ItemsList from 'components/organisms/ItemsList/ItemsList';
import SummarySection from 'components/organisms/SummarySection/SummarySection';

const HomePage = ({ items }) => (
	<DefaultTemplate>
		<DateSwitcher />
		<ItemsList items={items} />
		<ItemCreator />
		<SummarySection />
	</DefaultTemplate>
);

HomePage.propTypes = {
	items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

const mapStateToProps = (state) => {
	const { items } = state;
	return { items };
};

export default connect(mapStateToProps)(HomePage);
