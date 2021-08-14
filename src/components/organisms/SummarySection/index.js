import React, { useState, useContext, useRef, useEffect } from 'react';
import context from 'context';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { MainTheme } from 'themes/MainTheme';

import { Bar, Doughnut } from 'react-chartjs-2';

import { getSummary, getDate, monthNames } from 'utils';

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
	const { contextDate } = useContext(context);
	const currentDate = getDate();
	const parsedContextDate = new Date(contextDate.year, contextDate.month).getTime();
	const parsedCurrentDate = new Date(currentDate.year, currentDate.month).getTime();

	const items = useSelector((state) => state.items);
	const thisMonthItems = items.filter(
		(item) => item.date.month === currentDate.month && item.date.year === currentDate.year,
	);
	const contextMonthItems = items.filter(
		(item) => item.date.month === contextDate.month && item.date.year === contextDate.year,
	);

	const summaryThisMonth = getSummary(thisMonthItems);
	const summaryContextMonth = getSummary(contextMonthItems);
	const calculatedPercentage = ((summaryContextMonth / summaryThisMonth) * 100).toFixed(2);

	const labels = ['This month', 'Context month'];

	const chartOptions = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			x: {
				stacked: true,
			},
			y: {
				stacked: true,
			},
		},
		plugins: {
			legend: {
				display: false,
			},
			tooltip: {
				enabled: false,
			},
		},
	};

	const datasetTemplate = (item) => {
		const parsedItemDate = new Date(item.date.year, item.date.month).getTime();
		const data = [item.value, null];

		if (parsedItemDate === parsedCurrentDate) {
			data.reverse();
		}

		return {
			label: item.name,
			backgroundColor: MainTheme.color[item.color],
			data,
		};
	};

	const chartData = {
		labels,
		datasets: thisMonthItems.concat(contextMonthItems).map((item) => datasetTemplate(item)),
	};

	console.log(chartData.datasets);

	return (
		<StyledContainer>
			<StyledItemContainer>
				<StyledItemValue>{`$ ${summaryThisMonth}`}</StyledItemValue>
				<StyledItemLabel>Summary in this month</StyledItemLabel>
			</StyledItemContainer>
			<StyledItemContainer>
				<StyledItemValue>{`$ ${summaryContextMonth}`}</StyledItemValue>
				<StyledItemLabel>{`Summary in ${monthNames[contextDate.month]}`}</StyledItemLabel>
			</StyledItemContainer>
			<StyledItemContainer>
				<StyledItemValue>{`${calculatedPercentage}%`}</StyledItemValue>
				<StyledItemLabel>{`Percentage compared to ${monthNames[contextDate.month]}`}</StyledItemLabel>
			</StyledItemContainer>
			<StyledItemContainer>
				{parsedCurrentDate !== parsedContextDate ? (
					<Bar data={chartData} options={chartOptions} />
				) : (
					<Doughnut data={{ labels: labels[0], dataset: contextMonthItems.map((item) => datasetTemplate(item)) }} />
				)}
			</StyledItemContainer>
		</StyledContainer>
	);
};

export default SummarySection;
