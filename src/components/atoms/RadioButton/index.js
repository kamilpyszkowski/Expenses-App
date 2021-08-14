import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { icons } from 'utils';

const StyledContainer = styled.div`
	position: relative;
	margin-right: 8px;
	width: 42px;
	height: 42px;
	border-radius: 50%;
	overflow: hidden;
	pointer-events: all;

	&:last-child {
		margin-right: 0;
	}
`;

const StyledMarker = styled.span`
	background-color: ${({ theme, value }) => theme.color[value]};
	display: block;
	position: absolute;
	inset: 0;
	width: 100%;
	height: 100%;
	pointer-events: none;
	transition: all 0.2s ease-in-out;

	${({ name }) =>
		name === 'icon' &&
		css`
			mask: url(${({ value }) => icons[value]}) 50%/60% no-repeat;);
            background-color:  ${({ theme }) => theme.color.gray500};
		`}

	&:before {
		content: '';
		mask: url(${icons.tick}) 50%/50% no-repeat;
		background-color: white;
		opacity: 0;
		display: ${({ name }) => (name === 'icon' ? 'none' : 'block')};
		position: absolute;
		inset: 0;
		width: 100%;
		height: 100%;
		z-index: 999;
	}
`;

const StyledRadioInput = styled.input`
	width: 100%;
	height: 100%;
	opacity: 0;

	&:checked + ${StyledMarker}:before {
		opacity: 1;
	}

	&:checked + ${StyledMarker} {
		background-color: ${({ theme }) => theme.color.blue};
		box-shadow: inset 0 0 0 6px ${({ theme, value }) => theme.color[value]}, inset 0 0 0 8px white;
		border-radius: 50%;

		${({ name }) =>
			name === 'icon' &&
			css`
				border-radius: none;
				box-shadow: none;
				transform: scale(1.4);
			`}
	}
`;

const RadioButton = ({ item, itemType, register }) => {
	const a = 'a';

	return (
		<StyledContainer>
			<StyledRadioInput
				{...register(itemType)}
				defaultChecked={false}
				type="radio"
				value={item}
				name={itemType}
				id={item}
			/>
			<StyledMarker name={itemType} value={item} />
		</StyledContainer>
	);
};

RadioButton.propTypes = {
	item: PropTypes.string.isRequired,
	itemType: PropTypes.string.isRequired,
	register: PropTypes.func.isRequired,
};

export default RadioButton;
