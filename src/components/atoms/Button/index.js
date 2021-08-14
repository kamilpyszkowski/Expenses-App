import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const backShadow = '0 6px 8px 2px rgba(0,0,0,.2)';

const StyledButton = styled.button`
	position: relative;
	padding: ${({ secondary }) => (secondary ? '2px 30px' : '10px 40px')};
	border-radius: 8px;
	background-color: ${({ theme, secondary }) => (secondary ? theme.color.gray300 : theme.color.blue)};
	color: ${({ theme }) => theme.color.white};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme, secondary }) => (secondary ? theme.fontSize.xxs : theme.fontSize.xs)};
	box-shadow: 0 8px 0 0 ${({ theme, secondary }) => (secondary ? theme.color.gray350 : theme.color.blueDark)},
		${backShadow};
	top: -8px;
	transition: ease 0.2s;

	&:active {
		top: 0;
		box-shadow: 0 0 0 0, 0 0px 2px 2px rgba(0, 0, 0, 0.1);
	}
`;

const StyledIcon = styled.span`
	mask: url(${({ icon }) => icon}) center/80% no-repeat;
	background-color: white;
	display: block;
	width: 32px;
	height: 32px;
	margin: 0 auto;
`;

const Button = ({ ...props }) => (
	<StyledButton {...props} as={props.href && 'a'}>
		{props.icon ? <StyledIcon icon={props.icon} /> : props.children}
	</StyledButton>
);

Button.propTypes = {
	href: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
	secondary: PropTypes.bool,
	icon: PropTypes.bool,
};

Button.defaultProps = {
	href: null,
	secondary: false,
	icon: false,
	children: null,
};

export default Button;
