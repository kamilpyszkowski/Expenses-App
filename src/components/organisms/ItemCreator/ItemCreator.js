/* eslint-disable no-debugger */
import React, { useState } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';
import PropTypes from 'prop-types';

import { generateId } from 'utils';

import Button from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import CreatorPopup from './CreatorPopup/CreatorPopup';

const StyledContainer = styled.section`
	width: 100%;
	height: 30%;
	position: relative;
`;

const StyledForm = styled.form`
	display: grid;
	grid-template-columns: 64px 50% auto;
	grid-gap: 18px;
`;
const StyledButton = styled(Button)`
	grid-column: 1 / 4;
	justify-self: center;
	min-width: 364px;
`;

const ItemCreator = ({ addItem }) => {
	const initialState = {
		isPopupVisible: false,
		newItem: {},
	};
	const [state, setState] = useState(initialState);

	const togglePopup = () => {
		setState((prevState) => ({
			...prevState,
			isPopupVisible: !prevState.isPopupVisible,
		}));
	};

	const handleInput = (e) => {
		setState((prevState) => ({
			...prevState,
			newItem: {
				...prevState.newItem,
				[e.target.name]: e.target.value,
			},
		}));
	};

	const handleSubmit = (e) => {
		const id = generateId();
		setState((prevState) => ({
			...prevState,
			newItem: {
				...prevState.newItem,
				id,
			},
		}));
		e.preventDefault();
		e.target.reset();
		addItem(state.newItem);
	};

	return (
		<StyledContainer>
			<StyledForm onSubmit={(e) => handleSubmit(e)}>
				<CreatorPopup isVisible={state.isPopupVisible} callbackPopup={togglePopup} callbackInput={handleInput} />
				<Input onChange={(e) => handleInput(e)} name="name" placeholder="I spent my money on" required />
				<Input onChange={(e) => handleInput(e)} type="number" name="value" placeholder="Amount" required />
				<StyledButton type="submit">Submit</StyledButton>
			</StyledForm>
		</StyledContainer>
	);
};

ItemCreator.propTypes = {
	addItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	addItem: (newItem) => dispatch(addItemAction(newItem)),
});

export default connect(null, mapDispatchToProps)(ItemCreator);
