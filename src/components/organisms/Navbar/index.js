import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import logo from 'assets/logo.svg';

const StyledContainer = styled.nav`
	min-width: 40vw;
	padding: 18px 20px;
	border-radius: 20px;
	overflow: hidden;
	background-color: ${({ theme }) => theme.color.gray100};
	position: absolute;
	bottom: 30px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledLogo = styled.span`
	content: url(${logo});
	height: 100%;
`;

const StyledButton = styled.button`
	border-radius: 20px;
	background-color: ${({ theme }) => theme.color.gray200};
	padding: 15px 20px;
	font-weight: ${({ theme }) => theme.fontWeight.bold}; ;
`;

const Navbar = ({ toggleSettings }) => (
	<StyledContainer>
		<StyledLogo />
		<StyledButton onClick={() => toggleSettings(true)}>Settings</StyledButton>
	</StyledContainer>
);

Navbar.propTypes = {
	toggleSettings: PropTypes.func.isRequired,
};

export default Navbar;
