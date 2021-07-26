import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ListItem from './ListItem/ListItem';

const StyledContainer = styled.ul`
	width: 100%;
	height: 100%;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.color.gray100};
	padding: 20px;
	overflow-y: auto;
	grid-area: 2 / 1 / 3 / 2;
`;

const ItemsList = ({ items }) => (
	<StyledContainer>
		{items.map((item) => (
			<ListItem {...item} key={item.id} />
		))}
	</StyledContainer>
);

ItemsList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemsList;
