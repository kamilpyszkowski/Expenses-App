import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
	width: 100%;
	height: 64px;
	border-radius: 32px;
	background-color: ${({ theme }) => theme.color.gray100};
	padding: 16px 24px;
	font-size: ${({ theme }) => theme.fontSize.s};

	&::placeholder {
		color: ${({ theme }) => theme.color.gray400};
	}

	&:focus {
		outline: 2px solid ${({ theme }) => theme.color.blue};
	}
`;

const Input = ({ type, name, ...props }) => <StyledInput {...props} type={type} name={name} id={name} />;

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
};

Input.defaultProps = {
	type: 'text',
};

export default Input;
