import React from 'react';
import { Box } from '@mui/material';
import TopHeader from './topHeader'
import SubHeader from './subHeader';
import { boxSx } from './styles';

export default function Header() {
    return (
        <Box sx={boxSx}>
            <TopHeader />
            <SubHeader />
        </Box>
    )
}