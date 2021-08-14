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
	outline: none;

	&::placeholder {
		color: ${({ theme }) => theme.color.gray400};
	}

	&:focus {
		box-shadow: inset 0 0 0 2px ${({ theme }) => theme.color.blue};
	}
`;

const Input = (props) => {
	const { register, name, type } = props;

	return <StyledInput {...props} {...register(name)} id={name} type={type} />;
};

Input.propTypes = {
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	register: PropTypes.node.isRequired,
};

Input.defaultProps = {
	type: 'text',
};

export default Input;
