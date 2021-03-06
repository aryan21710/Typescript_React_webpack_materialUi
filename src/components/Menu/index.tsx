import React from 'react';
import { Link } from 'react-router-dom';
import { innerWrapper, outerWrapper } from './styles';
import { Box } from '@material-ui/core';

const Menu:()=>JSX.Element = () => (
    <Box style={outerWrapper}>
        <Box style={innerWrapper}>
            <p>
                <Link to="/">Home</Link>
            </p>
            <p>
                <Link to="/table">Table-View</Link>
            </p>
            <p>
                <Link to="/chart">Chart-View</Link>
            </p>
        </Box>
    </Box>
);

export default Menu;
