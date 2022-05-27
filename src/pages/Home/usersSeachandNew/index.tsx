import React from 'react';
import { Paper, Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import Typography from '../../../components/Typograph';
import Button from '../../../components/Button';
import InputSearch from './inputSearch';
import { paperSx, buttonSx, boxSx } from './styles';

export default function UsersSeachandNew() {
    return (
        <Paper sx={paperSx} elevation={0}>
            <Typography type="title1">Usuários</Typography>
            <Box sx={boxSx}>
                <InputSearch placeholder="Buscar usuário" />
                <NavLink to="User/new">
                    <Button variantButton="contained" colorButton="primary" sx={buttonSx}>Novo usuário</Button>
                </NavLink>
            </Box>
        </Paper>
    )

}