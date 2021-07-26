import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const backShadow = '0 6px 8px 2px rgba(0,0,0,.2)';

const StyledButton = styled.button`
	position: relative;
	padding: 8px 40px;
	border-radius: 8px;
	background-color: ${({ theme, sec }) => (sec ? theme.color.gray300 : theme.color.blue)};
	color: ${({ theme }) => theme.color.white};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	font-size: ${({ theme, sec }) => (sec ? theme.fontSize.xxs : theme.fontSize.xs)};
	box-shadow: 0 8px 0 0 ${({ theme, sec }) => (sec ? theme.color.gray350 : theme.color.blueDark)}, ${backShadow};
	top: -8px;
	transition: ease 0.2s;

	&:active {
		top: 0;
		box-shadow: 0 0 0 0, 0 0px 2px 2px rgba(0, 0, 0, 0.1);
	}
`;

const Button = ({ ...props }) => (
	<StyledButton {...props} as={props.href && 'a'}>
		{props.children}
	</StyledButton>
);

Button.propTypes = {
	href: PropTypes.string,
	children: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
	sec: PropTypes.bool,
};

Button.defaultProps = {
	href: null,
	sec: false,
};

export default Button;
