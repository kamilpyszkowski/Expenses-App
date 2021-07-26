import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import homeIcon from 'assets/home.svg';
import overviewIcon from 'assets/overview.svg';
import settingsIcon from 'assets/settings.svg';

const NavLinkAnimation = keyframes`
    from {
        transform: scale(0.85);
    }
    to {
        transform: scale(1);
    }
`;

const StyledIcon = styled(FontAwesomeIcon)`
	font-size: ${({ theme }) => theme.fontSize.l};
	margin-bottom: 4px;
	opacity: 0.65;
`;

const StyledLabel = styled.span`
	font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledNavLink = styled(NavLink)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;
	padding: 8px 0;

	&.active {
		animation: ease-in ${NavLinkAnimation} 0.2s;
		transform: scale(1);

		&::before {
			content: '';
			width: 60%;
			height: 30px;
			border-radius: 16px;
			background-color: ${({ theme }) => theme.color.blue};
			position: absolute;
			bottom: -30px;
			left: 20%;
		}
	}
`;

const NavbarButton = ({ path, label, icon }) => (
	<StyledNavLink exact to={path} activeClassName="active">
		<StyledIcon icon={icon} />
		<StyledLabel>{label}</StyledLabel>
	</StyledNavLink>
);

NavbarButton.propTypes = {
	path: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default NavbarButton;
