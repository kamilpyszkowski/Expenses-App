import React from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { MainTheme } from 'themes/MainTheme';
import GlobalStyle from 'themes/GlobalStyle';

const StyledTemplate = ({ children }) => (
	<>
		<GlobalStyle />
		<ThemeProvider theme={MainTheme}>{children}</ThemeProvider>
	</>
);

StyledTemplate.propTypes = {
	children: PropTypes.element.isRequired,
};

export default StyledTemplate;
