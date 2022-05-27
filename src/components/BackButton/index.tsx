import React from 'react';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const IconButtonSx = {
    position: 'absolute',
    top: '25px',
    left: '25px'
}

export default function BackButton() {
    const navigate = useNavigate();
    return (
        <IconButton sx={IconButtonSx} onClick={() => navigate(-1)}>
            <ArrowBackIosNewIcon fontSize="large" />
        </IconButton>
    )
}