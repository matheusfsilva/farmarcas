import React from 'react';
import { Box } from '@mui/material';
import Bagde from '../../../assets/images/edeliveryBadge.png';
import { boxSx } from './styles';

export default function Header() {
    return (
        <Box sx={boxSx}>
            <img alt='Logo' src={Bagde} style={{ height: '39px' }} />
        </Box>
    )
}