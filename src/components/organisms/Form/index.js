import React, { useState, useContext, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { addItem } from 'actions';
import { v4 as uuidv4 } from 'uuid';
import context from 'context';

import Input from 'components/atoms/Input';
import Paragraph from 'components/atoms/Paragraph';
import Button from 'components/atoms/Button';

import RadioButton from 'components/atoms/RadioButton';

import { icons, getDate, monthNames } from 'utils';

const iconNames = ['heart', 'shopping', 'car', 'tshirt', 'computer', 'chemistry'];
const colorNames = ['red', 'orange', 'yellow', 'green', 'purple'];

const StyledContainer = styled.section`
	position: relative;
`;

const StyledWrapper = styled.form`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	position: relative;

	${({ isFormDisabled }) =>
		isFormDisabled &&
		css`
			visibility: hidden;
			opacity: 0;
			pointer-events: none;
		`}
`;

const StyledButton = styled(Button)`
	flex-basis: 60%;
	margin-top: 20px;
`;

const StyledInput = styled(Input)`
	&:nth-of-type(1) {
		flex-basis: calc(60% - 20px);
		margin: 0 10px;
	}

	&:nth-of-type(2) {
		flex-basis: 28%;
	}
`;

const StyledPopupToggle = styled.button`
	flex-basis: 12%;
	background-color: ${({ theme, isPopupVisible }) => (isPopupVisible ? theme.color.blue : theme.color.gray400)};
	mask: url(${icons.paint}) center/60% no-repeat;
	height: 64px;
	border-radius: 50%;
`;

const popupAnimation = keyframes`
    from { 
        opacity: 0;
        transform: scale(0.4)
    }
    to { 
        opacity: 1;
        transform: scale(1)
    }
`;

const StyledPopup = styled.fieldset`
	position: absolute;
	left: 12px;
	bottom: calc(100% - 12px);
	border: none;
	border-radius: 20px 20px 20px 0;
	width: 320px;
	padding: 20px;
	background-color: white;
	filter: drop-shadow(0 8px 5px ${({ theme }) => theme.color.alphaBlack2});
	transform-origin: bottom left;
	transition: all 0.3s ease-out;
	opacity: 0;
	transform: scale(0.4);
	visibility: hidden;

	${({ isPopupVisible }) =>
		isPopupVisible &&
		css`
			opacity: 1;
			transform: scale(1);
			visibility: visible;
		`}

	&:after {
		content: '';
		clip-path: polygon(50% 100%, 0 0, 100% 0);
		width: 40px;
		height: 20px;
		background-color: inherit;
		position: absolute;
		bottom: -20px;
		left: 0;
	}
`;

const StyledPopupLabel = styled.span`
	font-size: ${({ theme }) => theme.fontSize.xs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.gray400};
	display: block;
	margin: 12px 0;
	&:first-child {
		margin-top: 0;
	}
`;

const StyledPopupWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	border-radius: 10px;
	width: 100%;
	padding: 5px;
	background-color: ${({ theme }) => theme.color.gray100};
	pointer-events: none;
`;

const StyledFormDisabled = styled.div`
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	background-color: white;
	pointer-events: none;
	position: absolute;
	left: 0;
	top: 0;
`;

const StyledParagraph = styled(Paragraph)`
	font-size: ${({ theme }) => theme.fontSize.m};
	white-space: pre-line;
`;

const Form = () => {
	const { register, handleSubmit, reset } = useForm();
	const [isPopupVisible, togglePopup] = useState(false);
	const [isFormDisabled, disableForm] = useState(false);
	const dispatch = useDispatch();
	const { contextDate } = useContext(context);

	const parsedContextDate = new Date(contextDate.year, contextDate.month);
	const parsedCurrentDate = new Date(getDate('year'), getDate('month'));

	useEffect(() => {
		if (parsedContextDate < parsedCurrentDate) {
			disableForm(true);
		} else {
			disableForm(false);
		}
	}, [contextDate]);

	const handlePopupToggle = () => {
		togglePopup((prevState) => !prevState);
	};

	const onSubmit = (data) => {
		console.log(data);
		reset();
		dispatch(
			addItem({
				...data,
				id: uuidv4(),
				date: contextDate,
			}),
		);
	};

	const monthName = monthNames[contextDate.month][0].toUpperCase() + monthNames[contextDate.month].substring(1);

	return (
		<StyledContainer>
			{isFormDisabled && (
				<StyledFormDisabled>
					<StyledParagraph>
						Unfortunately {monthName} {contextDate.year} is over. <br /> You can&apos;t add new expense here 😢
					</StyledParagraph>
				</StyledFormDisabled>
			)}
			<StyledWrapper onSubmit={handleSubmit(onSubmit)} isFormDisabled={isFormDisabled}>
				<StyledPopupToggle type="button" onClick={handlePopupToggle} isPopupVisible={isPopupVisible} />
				<StyledPopup isPopupVisible={isPopupVisible} onMouseLeave={handlePopupToggle}>
					<StyledPopupLabel>Pick your color:</StyledPopupLabel>
					<StyledPopupWrapper>
						{colorNames.map((item) => (
							<RadioButton key={item} itemType="color" item={item} register={register} />
						))}
					</StyledPopupWrapper>
					<StyledPopupLabel>Pick your icon:</StyledPopupLabel>
					<StyledPopupWrapper>
						{iconNames.map((item) => (
							<RadioButton key={item} itemType="icon" item={item} register={register} />
						))}
					</StyledPopupWrapper>
				</StyledPopup>
				<StyledInput name="name" register={register} placeholder="What was your expense..." />
				<StyledInput type="number" name="value" register={register} placeholder="Amount..." />
				<StyledButton>Add expense</StyledButton>
			</StyledWrapper>
		</StyledContainer>
	);
};

export default Form;
