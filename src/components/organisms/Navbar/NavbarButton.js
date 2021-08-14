import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import homeIcon from 'assets/home.svg';
import overviewIcon from 'assets/overview.svg';
import settingsIcon from 'assets/settings.svg';

const LinkAnimation = keyframes`
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

const StyledLink = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	position: relative;
	padding: 8px 0;

	&.active {
		animation: ease-in ${LinkAnimation} 0.2s;
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
	<StyledLink exact to={path} activeClassName="active">
		<StyledIcon icon={icon} />
		<StyledLabel>{label}</StyledLabel>
	</StyledLink>
);

NavbarButton.propTypes = {
	path: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	icon: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default NavbarButton;
