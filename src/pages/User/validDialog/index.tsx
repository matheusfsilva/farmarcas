import React from 'react';
import { Paper } from '@mui/material';
import { paperSx } from './styles';
import CheckImg from '../../../assets/images/check.png'
import Dialog from '../../../components/dialog';
import Typography from '../../../components/Typograph';

interface _validDialog {
    open: boolean,
    close: any
}
export default function ValidDialog({ open, close }: _validDialog) {
    return (
        <Dialog open={open} close={close}>
            <Paper sx={paperSx}>
                <img style={{ width: '100px', marginBottom: '20px' }} src={CheckImg} alt="check" />
                <Typography type="title1" align="center">Informações salvas com sucesso!</Typography>
            </Paper>
        </Dialog>
    )
}