import React from 'react';
import { Box } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import StyleBadge from './StyledBadge'
import { buttonSx, boxSx } from './styles';
import Button from '../../Button';

export default function SubHeader() {
    return (
        <Box sx={boxSx}>
            <Box>
                <Button sx={buttonSx} variantButton='none' colorButton="grey700">Redes</Button>
                <Button sx={buttonSx} variantButton='none' colorButton="grey700"><StyleBadge count={2}>Produtos</StyleBadge></Button>
                <Button sx={buttonSx} variantButton='none' colorButton="primary">Configurações</Button>
            </Box>
            <Box>
                <Button sx={buttonSx} variantButton='none' colorButton="blackCustom">João da neves <KeyboardArrowDownIcon /></Button>
            </Box>
        </Box >
    )
}