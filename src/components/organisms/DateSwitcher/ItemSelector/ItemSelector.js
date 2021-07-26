/* eslint-disable react/no-unused-state */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const monthNames = [
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

const StyledContainer = styled.div`
	display: flex;
	align-items: ${({ secondary }) => (secondary ? 'flex-end' : 'flex-start')};
`;
const StyledItemWrapper = styled.div`
	margin-right: 20px;
	position: relative;

	&:last-child {
		margin-right: 0;
	}
`;

const StyledLabel = styled.label`
	width: 100%;
	height: 100%;
	pointer-events: none;
	transition: all ease 0.3s;
	color: ${({ theme, secondary }) => (secondary ? theme.color.gray400 : theme.color.gray500)};
	font-weight: ${({ theme, secondary }) => (secondary ? theme.fontWeight.bold : null)};
	font-size: ${({ theme, secondary }) => (secondary ? theme.fontSize.s : theme.fontSize.m)};

	&::first-letter {
		text-transform: uppercase;
	}
`;

const StyledInput = styled.input`
	width: 100%;
	height: 100%;
	opacity: 0;
	position: absolute;
	inset: 0;

	&:checked ~ ${StyledLabel} {
		color: ${({ theme, secondary }) => (secondary ? theme.color.gray500 : theme.color.blue)};
		font-size: ${({ theme, secondary }) => (secondary ? theme.fontSize.l : theme.fontSize.xl)};
		font-weight: ${({ theme }) => theme.fontWeight.bold};
	}
`;

const ItemSelector = ({ currentValue, itemList, name, secondary }) => {
	const [selectedItem, setSelection] = useState(currentValue);

	return (
		<StyledContainer secondary={secondary}>
			{itemList.map((item) => (
				<StyledItemWrapper key={item}>
					<StyledInput
						type="radio"
						name={name}
						id={item}
						secondary={secondary}
						value={item}
						defaultChecked={currentValue === item}
						onChange={(e) => setSelection(e.currentTarget.value)}
					/>
					<StyledLabel forHtml={item} secondary={secondary}>
						{name === 'month' ? monthNames[item] : item}
					</StyledLabel>
				</StyledItemWrapper>
			))}
		</StyledContainer>
	);
};

ItemSelector.propTypes = {
	itemList: PropTypes.arrayOf(PropTypes.number).isRequired,
	currentValue: PropTypes.number.isRequired,
	name: PropTypes.string.isRequired,
	secondary: PropTypes.bool,
};

ItemSelector.defaultProps = {
	secondary: false,
};

export default ItemSelector;
