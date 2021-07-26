import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

import { icons } from 'assets/icons';

import Input from 'components/atoms/Input/Input';

const StyledContainer = styled.div`
	position: relative;
	margin-right: 8px;
	width: 42px;
	height: 42px;
	border-radius: 50%;
	overflow: hidden;

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

const StyledRadioInput = styled(Input)`
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

const PopupField = ({ callbackSave, callbackInput, callbackState, name, item }) => {
	const handleChange = (e) => {
		callbackSave(e);
		callbackInput(e);
	};
	return (
		<StyledContainer>
			<StyledRadioInput
				onChange={(e) => handleChange(e)}
				defaultChecked={callbackState[name] === item}
				type="radio"
				value={item}
				name={name}
				id={item}
			/>
			<StyledMarker name={name} value={item} />
		</StyledContainer>
	);
};

PopupField.propTypes = {
	name: PropTypes.string.isRequired,
	item: PropTypes.string.isRequired,
	callbackSave: PropTypes.func.isRequired,
	callbackInput: PropTypes.func.isRequired,
	callbackState: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default PopupField;
