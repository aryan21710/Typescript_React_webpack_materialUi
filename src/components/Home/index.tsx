import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { outerWrapper, text } from './styles';

const Home = () => {
	return (
		<Box style={outerWrapper}>
			<Typography style={text}>WELCOME TO THE HOME PAGE</Typography>
		</Box>
	);
};

export default Home;
