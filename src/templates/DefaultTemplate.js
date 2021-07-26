import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Navbar from 'components/organisms/Navbar/Navbar';

const StyledContainer = styled.main`
	display: grid;
	height: 100vh;
	grid-gap: 32px 36px;
	padding: 60px 5vw 150px;
	justify-items: start;
	grid-template-columns: 0.9fr 1.1fr;
	grid-template-rows: auto 1fr;
`;

const DefaultTemplate = ({ children }) => (
	<StyledContainer>
		<Navbar />
		{children}
	</StyledContainer>
);

DefaultTemplate.propTypes = {
	children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default DefaultTemplate;
