import React, { useContext, useEffect } from 'react';
import { useNavigate } from '@reach/router';
import context from 'context';

import PropTypes from 'prop-types';
import styled from 'styled-components';

import { monthNames } from 'utils';

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
	display: block;
	width: 100%;
	height: 100%;
	pointer-events: none;
	transition: all ease-in-out 0.3s;
	color: ${({ theme, secondary }) => (secondary ? theme.color.gray400 : theme.color.gray500)};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme, secondary }) => (secondary ? theme.fontSize.s : theme.fontSize.m)};
`;

const StyledInput = styled.input`
	width: 100%;
	height: 100%;
	opacity: 0;
	position: absolute;
	inset: 0;

	&:checked ~ ${StyledLabel} {
		color: ${({ theme, secondary }) => (secondary ? theme.color.gray500 : theme.color.blue)};
		transform: scale(1.45);
		padding: 0 20px;
	}
`;

const ItemSelector = ({ itemsList, itemType, secondary }) => {
	const { contextDate, setContextDate } = useContext(context);
	const navigate = useNavigate();

	const handleChange = (e) => {
		setContextDate((prevcontextDate) => ({
			...prevcontextDate,
			[itemType]: parseInt(e.target.value, 10),
		}));
		if (itemType === 'month') navigate(`/${monthNames[e.target.value]}`);
	};

	console.log(contextDate[itemType]);

	return (
		<StyledContainer secondary={secondary}>
			{itemsList.map((item) => (
				<StyledItemWrapper key={item}>
					<StyledInput
						type="radio"
						name={itemType}
						id={item}
						secondary={secondary}
						value={item}
						defaultChecked={item === contextDate[itemType]}
						onChange={handleChange}
					/>
					<StyledLabel forHtml={item} secondary={secondary}>
						{itemType === 'month' ? monthNames[item] : item}
					</StyledLabel>
				</StyledItemWrapper>
			))}
		</StyledContainer>
	);
};

ItemSelector.propTypes = {
	itemsList: PropTypes.arrayOf(PropTypes.number).isRequired,
	itemType: PropTypes.string.isRequired,
	secondary: PropTypes.bool,
};

ItemSelector.defaultProps = {
	secondary: false,
};

export default ItemSelector;
