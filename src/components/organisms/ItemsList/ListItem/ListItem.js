import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeItem as removeItemAction } from 'actions';

import Heading from 'components/atoms/Heading/Heading';
import Button from 'components/atoms/Button/Button';

import paint from 'assets/paint.svg';
import heart from 'assets/heart.svg';
import shopping from 'assets/shopping.svg';
import car from 'assets/car.svg';
import tshirt from 'assets/tshirt.svg';
import computer from 'assets/computer.svg';
import chemistry from 'assets/chemistry.svg';
import trash from 'assets/trash.svg';

const icons = {
	paint,
	heart,
	shopping,
	car,
	tshirt,
	computer,
	chemistry,
	trash,
};

const StyledContainer = styled.li`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 12px 0;
	border-bottom: 1px solid ${({ theme }) => theme.color.gray200};

	&:last-child {
		border-bottom: 0;
	}
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

const StyledTrashIcon = styled.span`
	mask: url(${icons.trash}) 50%/75% no-repeat;
	background-color: white;
	display: block;
	width: 30px;
	height: 18px;
`;

const ListItem = ({ id, color, icon, name, value, removeItem }) => (
	<StyledContainer>
		<StyledIconWrapper color={color}>
			<StyledIcon icon={icon} />
		</StyledIconWrapper>
		<StyledHeading>{name}</StyledHeading>
		<StyledValue>{value}</StyledValue>
		<StyledButton sec onClick={() => removeItem(id)}>
			<StyledTrashIcon />
		</StyledButton>
	</StyledContainer>
);

ListItem.propTypes = {
	id: PropTypes.number.isRequired,
	color: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	removeItem: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	removeItem: (id) => dispatch(removeItemAction(id)),
});

export default connect(null, mapDispatchToProps)(ListItem);
