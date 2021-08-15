import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem } from 'actions';

import Heading from 'components/atoms/Heading';
import Button from 'components/atoms/Button';

import { icons } from 'utils';

const itemAnimation = keyframes`
	from {
		opacity: 0;
		transform: translateY(25%);
	}
	to {
		opacity: 1;
		transform: translateY(0);
	}
`;

const removalAnimation = keyframes`
	from {
		opacity: 1;
		transform: translateX(0);
	}
	to {
		opacity: 0;
		transform: translateX(100%);
	}
`;

const StyledContainer = styled.li`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 0;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray200};
	animation: ${({ isRemoved }) => (isRemoved ? removalAnimation : itemAnimation)} ease-in-out 0.4s;

	&:last-child {
		border-bottom: 0;
	}

	${({ isRemoved }) =>
		isRemoved &&
		css`
			~ ${StyledContainer} {
				transition: transform 0.35s ease-in-out;
				transform: translateY(-100%);
			}
		`}
`;

const StyledIconWrapper = styled.div`
	border-radius: 50%;
	width: 52px;
	height: 52px;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: ${({ theme }) => theme.fontSize.xl};
	color: ${({ theme }) => theme.color.alphaBlack3};
	aspect-ratio: 1/1;
	background-color: ${({ theme, color }) => theme.color[color] || theme.color.gray200};
`;

const StyledHeading = styled(Heading)`
	width: 100%;
	margin: 0 20px;
	font-weight: ${({ theme }) => theme.fontWeight.light};
`;

const StyledValue = styled.span`
	border-radius: 32px;
	padding: 12px 0;
	background-color: hsl(0, 0%, 90%);
	margin-right: 20px;
	min-width: 110px;
	text-align: center;
	font-size: ${({ theme }) => theme.fontSize.l};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.gray500};
`;

const StyledButton = styled(Button)`
	margin-top: 8px;
	padding: 8px 16px;
`;

const StyledIcon = styled.span`
	opacity: 0.4;
	background: url(${({ icon }) => icons[icon]}) 50%/60% no-repeat;
	width: 100%;
	height: 100%;
`;

const ListItem = ({ id, color, icon, name, value }) => {
	const [isRemoved, setIsRemoved] = useState(false);
	const dispatch = useDispatch();

	const handleRemoval = () => {
		setIsRemoved(true);
		setTimeout(() => {
			dispatch(removeItem(id));
		}, 400);
	};

	return (
		<StyledContainer isRemoved={isRemoved}>
			<StyledIconWrapper color={color}>
				<StyledIcon icon={icon} />
			</StyledIconWrapper>
			<StyledHeading>{name}</StyledHeading>
			<StyledValue>{value}</StyledValue>
			<StyledButton secondary onClick={handleRemoval} icon={icons.trash} />
		</StyledContainer>
	);
};

ListItem.propTypes = {
	id: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
};

export default ListItem;
