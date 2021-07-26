/* eslint-disable indent */
import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import paintIcon from 'assets/paint.svg';

import PopupField from '../PopupField/PopupField';

const popupColors = ['red', 'orange', 'yellow', 'green', 'purple'];
const popupIcons = ['car', 'heart', 'tshirt', 'chemistry', 'shopping'];

const StyledPopupContainer = styled.fieldset`
	position: absolute;
	left: 12px;
	bottom: calc(100% - 12px);
	border: none;
	border-radius: 20px 20px 20px 0;
	width: 320px;
	padding: 20px;
	background-color: white;
	filter: drop-shadow(0 8px 5px ${({ theme }) => theme.color.alphaBlack2});

	&:after {
		content: '';
		clip-path: polygon(50% 100%, 0 0, 100% 0);
		width: 40px;
		height: 20px;
		background-color: inherit;
		position: absolute;
		bottom: -20px;
		left: 0;
	}
`;

const StyledLabel = styled.span`
	text-transform: uppercase;
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.gray400};
	display: block;
	margin: 12px 0;

	&:first-child {
		margin-top: 0;
	}
`;

const StyledWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	border-radius: 10px;
	width: 100%;
	padding: 5px;
	background-color: ${({ theme }) => theme.color.gray100};
`;

const StyledPopupToggler = styled.button`
	width: 64px;
	height: 64px;
	border-radius: 32px;
	background: ${({ theme }) => theme.color.gray100};
	text-align: center;
	line-height: 64px;
	font-size: ${({ theme }) => theme.fontSize.xxl};
	color: ${({ theme }) => theme.color.alphaBlack3};
	position: relative;

	&::before {
		content: '';
		background: url(${paintIcon}) 50%/50% no-repeat;
		position: absolute;
		opacity: 0.4;
		inset: 0;
		width: 100%;
		height: 100%;
	}

	&:focus {
		outline: 2px solid ${({ theme }) => theme.color.blue};
	}
`;

const CreatorPopup = ({ isVisible, callbackPopup, callbackInput }) => {
	const initialState = { color: null, icon: null };
	const [state, setState] = useState(initialState);

	const handleSaveItem = (e) => {
		setState((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<>
			<StyledPopupToggler onClick={() => callbackPopup()} type="button" />
			{isVisible && (
				<StyledPopupContainer>
					<StyledLabel>Pick your color:</StyledLabel>
					<StyledWrapper>
						{popupColors.map((item) => (
							<PopupField
								callbackState={state}
								callbackSave={handleSaveItem}
								callbackInput={callbackInput}
								name="color"
								item={item}
								key={item}
							/>
						))}
					</StyledWrapper>
					<StyledLabel>Pick your icon:</StyledLabel>
					<StyledWrapper>
						{popupIcons.map((item) => (
							<PopupField
								callbackState={state}
								callbackSave={handleSaveItem}
								callbackInput={callbackInput}
								name="icon"
								item={item}
								key={item}
							/>
						))}
					</StyledWrapper>
				</StyledPopupContainer>
			)}
		</>
	);
};
CreatorPopup.propTypes = {
	isVisible: PropTypes.bool.isRequired,
	callbackPopup: PropTypes.func.isRequired,
	callbackInput: PropTypes.func.isRequired,
};

export default CreatorPopup;
