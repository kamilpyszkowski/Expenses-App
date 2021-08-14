import React, { useContext } from 'react';
import context from 'context';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import placeholder from 'assets/list-placeholder.svg';

import ListItem from './ListItem';

const placeholderAnimation = keyframes`
	from {
		opacity: 0;
		transform: scale(0.8)
	}

	to {
		opacity: 1;
		transform: scale(1)
	}
`;

const StyledContainer = styled.ul`
	width: 100%;
	height: 100%;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.color.gray100};
	padding: 20px;
	overflow-x: hidden;
	grid-area: 2 / 1 / 3 / 2;
	position: relative;

	${({ isEmpty }) =>
		isEmpty &&
		css`
			&::before {
				content: '';
				mask: url(${placeholder}) center/75% no-repeat;
				background-color: ${({ theme }) => theme.color.gray300};
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				animation: ${placeholderAnimation} ease-in-out 0.5s;
			}
		`}
`;

const ItemsList = () => {
	const items = useSelector((state) => state.items);
	const { contextDate } = useContext(context);

	const filteredItems = items.filter(
		(item) => item.date.month === contextDate.month && item.date.year === contextDate.year,
	);

	return (
		<StyledContainer isEmpty={filteredItems.length === 0}>
			{filteredItems.map((item) => (
				<ListItem {...item} key={item.id} />
			))}
		</StyledContainer>
	);
};

ItemsList.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ItemsList;
