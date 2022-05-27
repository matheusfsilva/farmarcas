import React from 'react';
import { Paper, Box } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { NavLink } from 'react-router-dom';
import Button from '../Button';
import { primary } from '../../providers/styles/colors';
import { CheckListIcon, PeopleIcon } from '../../assets/icons';
import { paperSx, buttonSx } from './styles';

export default function CardBotoes() {
    return (
        <Paper sx={paperSx} elevation={0}>
            <NavLink to="/">
                <Button sx={buttonSx} variantButton="contained" colorButton="grey700" startIcon={<PeopleIcon />} endIcon={<ArrowForwardIosRoundedIcon />}>
                    <Box>Usuários</Box>
                </Button>
            </NavLink>
            <Button sx={buttonSx} variantButton="contained" colorButton="white" startIcon={<CheckListIcon />} endIcon={<ArrowForwardIosRoundedIcon htmlColor={primary} />}>
                <Box>Perfis de acesso</Box>
            </Button>
        </Paper>
    )
}