/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';

import Heading from 'components/atoms/Heading';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

import closeIcon from 'assets/close.svg';

const containerAnimation = keyframes`
	from {
		opacity: 0 ;
		transform: translate(-50%, -20%);
	}

	to {
		opacity: 1 ;
		transform:  translate(-50%, -50%);
	}
`;

const StyledContainer = styled.section`
	background: white;
	border-radius: 20px;
	position: absolute;
	left: 50%;
	top: 50%;
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	flex-direction: column;
	transform: translate(-50%, -50%);
	padding: 25px 30px;
	box-shadow: 0 0 0 100vw ${({ theme }) => theme.color.alphaBlack2};
	animation: ${containerAnimation} ease-in-out 0.5s;
`;

const StyledWrapper = styled.div`
	width: 100%;
	display: inline-flex;
	padding: 25px 0;

	${({ heading }) =>
		heading &&
		css`
			align-items: center;
			justify-content: space-between;
		`}

	${({ settings }) =>
		settings &&
		css`
			flex-direction: column;
			align-items: center;
			justify-content: flex-start;
		`}
`;

const StyledCloseButton = styled.button`
	width: 32px;
	height: 32px;
	background: url(${closeIcon}) center/contain no-repeat;
`;

const StyledSettingsItem = styled.div`
	display: grid;
	grid-template-columns: auto;
	grid-template-rows: auto;
`;

const StyledParagraph = styled(Paragraph)`
	grid-area: 2 / 1 / 2 / 2;
	width: 70%;
	margin: 12px 0;
`;

const StyledButton = styled(Button)`
	grid-area: 1 / 2 / 3 / 3;
	align-self: center;
	padding: 12px 30px;
`;

const Settings = ({ toggleSettings }) => {
	const handleClearData = () => {
		if (confirm('Are you sure you want to clear all your data?')) {
			localStorage.clear();
			location.reload();
		}
	};

	return (
		<StyledContainer>
			<StyledWrapper heading>
				<Heading>Settings</Heading>
				<StyledCloseButton onClick={() => toggleSettings(false)} />
			</StyledWrapper>
			<StyledWrapper settings>
				<StyledSettingsItem>
					<Heading>Clear data</Heading>
					<StyledParagraph>This opetation will cause loss of data. It can&apos;t be undone.</StyledParagraph>
					<StyledButton secondary onClick={() => handleClearData()}>
						Clear data
					</StyledButton>
				</StyledSettingsItem>
			</StyledWrapper>
		</StyledContainer>
	);
};

Settings.propTypes = {
	toggleSettings: PropTypes.func.isRequired,
};

export default Settings;
