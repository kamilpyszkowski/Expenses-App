import React, { useState } from 'react';
import styled from 'styled-components';

const StyledContainer = styled.section`
	width: 100%;
	height: 100%;
	border-radius: 20px;
	background-color: ${({ theme }) => theme.color.gray100};
	padding: 20px;
	overflow-y: auto;
	grid-area: 2 / 2 / 4 / 3;
	display: inline-grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: auto 1fr;
	grid-gap: 20px 10px;
`;

const StyledItemContainer = styled.div`
	border-radius: 20px;
	background-color: ${({ theme }) => theme.color.gray200};
	display: flex;
	align-items: center;
	flex-direction: column;
	padding: 6px 8px;

	&:last-child {
		grid-column: 1 / 4;
		background-color: transparent;
	}
`;

const StyledItemValue = styled.span`
	font-size: ${({ theme }) => theme.fontSize.xxl};
	color: ${({ theme }) => theme.color.blue};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	padding: 4px 0;
`;

const StyledItemLabel = styled.span`
	font-size: ${({ theme }) => theme.fontSize.xxs};
	font-weight: ${({ theme }) => theme.fontWeight.bold};
	color: ${({ theme }) => theme.color.gray400};
	text-transform: uppercase;
	text-align: center;
`;

const SummarySection = () => {
	const [state, setState] = useState();

	return (
		<StyledContainer>
			<StyledItemContainer>
				<StyledItemValue>$ 1234</StyledItemValue>
				<StyledItemLabel>Summary in this month</StyledItemLabel>
			</StyledItemContainer>
			<StyledItemContainer>
				<StyledItemValue>$ 1234</StyledItemValue>
				<StyledItemLabel>Summary in last month</StyledItemLabel>
			</StyledItemContainer>
			<StyledItemContainer>
				<StyledItemValue>99%</StyledItemValue>
				<StyledItemLabel>Percentage compared to last month</StyledItemLabel>
			</StyledItemContainer>
			<StyledItemContainer>Pie chart here soon...</StyledItemContainer>
		</StyledContainer>
	);
};

export default SummarySection;
