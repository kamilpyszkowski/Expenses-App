import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getDate } from 'utils';

import ItemSelector from './ItemSelector/ItemSelector';

const StyledContainer = styled.div`
	width: 80%;
	height: 100px;
	justify-self: center;
	position: relative;
	grid-area: 1 / 1 / 2 / 3;
	display: flex;
	justify-content: space-around;
	flex-direction: column;
	align-items: center;
`;

const DateSwitcher = ({ calendar }) => (
	<StyledContainer>
		<ItemSelector currentValue={getDate('year')} name="year" itemList={calendar.years} secondary />
		<ItemSelector currentValue={getDate('month')} name="month" itemList={calendar.months} />
	</StyledContainer>
);

DateSwitcher.propTypes = {
	calendar: PropTypes.objectOf(PropTypes.array).isRequired,
};

const mapStateToProps = (state) => {
	const { calendar } = state;
	return { calendar };
};

export default connect(mapStateToProps)(DateSwitcher);
