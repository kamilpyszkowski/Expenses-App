import React from 'react';
import styled from 'styled-components';

import { calendar } from 'utils';

import ItemSelector from './ItemSelector';

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

const DateSwitcher = () => (
	<StyledContainer>
		<ItemSelector itemType="year" itemsList={calendar.years} secondary />
		<ItemSelector itemType="month" itemsList={calendar.months} />
	</StyledContainer>
);

export default DateSwitcher;
