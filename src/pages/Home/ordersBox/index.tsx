import React from 'react';
import { Box, Grid } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import Button from '../../../components/Button';
import { boxSx } from './styles';

export default function OrdersBox() {

    function orderByRede() {
        return '1'
    }

    function orderByNome() {
        return '2'
    }

    function orderByPerfil() {
        return '3'
    }

    function orderByStatus() {
        return '4'
    }

    return (
        <Box sx={boxSx}>
            <Grid container>
                <Grid item sm={2} xs={3}>
                    <Button variantButton="none" colorButton="blackCustom" onClick={() => orderByRede()}>Rede<UnfoldMoreIcon /></Button>
                </Grid>
                <Grid item sm={4} xs={3}>
                    <Button variantButton="none" colorButton="blackCustom" onClick={() => orderByNome()}>Nome<UnfoldMoreIcon /></Button>
                </Grid>
                <Grid item sm={2} xs={3}>
                    <Button variantButton="none" colorButton="blackCustom" onClick={() => orderByPerfil()}>Perfil<UnfoldMoreIcon /></Button>
                </Grid>
                <Grid item sm={2} xs={3}>
                    <Button variantButton="none" colorButton="blackCustom" onClick={() => orderByStatus()}>Status<UnfoldMoreIcon /></Button>
                </Grid>
            </Grid>
        </Box>
    )
}