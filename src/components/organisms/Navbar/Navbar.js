import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { faHome, faChartLine, faCogs } from '@fortawesome/free-solid-svg-icons';

import NavbarButton from 'components/organisms/Navbar/NavbarButton/NavbarButton';

const StyledContainer = styled.nav`
	min-width: 40vw;
	padding: 8px 20px;
	border-radius: 20px;
	overflow: hidden;
	box-shadow: 0 25px 15px -20px ${({ theme }) => theme.color.alphaBlack2}, 0 0 15px 0 ${({ theme }) => theme.color.alphaBlack1};
	position: absolute;
	bottom: 30px;
	left: 50%;
	transform: translateX(-50%);
`;

const StyledListWrapper = styled.ul`
	display: flex;
	height: 100%;
`;

const StyledListItem = styled.li`
	width: calc(100% / 3);
	border-right: 1px solid ${({ theme }) => theme.color.gray200};
	display: flex;
	align-items: center;
	justify-content: center;

	&:last-child {
		border-right: none;
	}
`;

const Navbar = () => (
	<StyledContainer>
		<StyledListWrapper>
			<StyledListItem>
				<NavbarButton path="/" icon={faHome} label="Home" />
			</StyledListItem>
			<StyledListItem>
				<NavbarButton path="/overview" icon={faChartLine} label="Overview" />
			</StyledListItem>
			<StyledListItem>
				<NavbarButton path="/settings" icon={faCogs} label="Settings" />
			</StyledListItem>
		</StyledListWrapper>
	</StyledContainer>
);

export default Navbar;
