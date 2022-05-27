import React, { useState } from 'react';
import { Paper, Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import Typography from '../../../components/Typograph';
import Button from '../../../components/Button';
import Switch from '../../../components/switch';
import DeleteDialog from '../../../components/deleteDialog';
import { paperSx, buttonSx, boxSx } from './styles';
import { UserModel } from '../../../providers/models/UserModel';

interface _UsersSave {
    submit: any,
    user: UserModel,
    setUser: any
}

export default function UsersSave({ submit, user, setUser }: _UsersSave) {
    const [openDelete, setOpenDelete] = useState(false)
    const { id } = useParams();
    return (
        <>
            <DeleteDialog open={openDelete} close={() => setOpenDelete(false)} id={user.id} />
            <Paper sx={paperSx} elevation={0}>
                <Typography type="title1">{id === 'new' ? 'Novo usuário' : 'Editar usuário'}</Typography>
                <Box sx={boxSx}>
                    {
                        id !== 'new' &&
                        <Switch checked={user.status} onChange={(e) => setUser((prevState: UserModel) => (
                            { ...prevState, status: e.target.checked }
                        ))} />
                    }
                    {
                        id !== 'new' &&
                        < Button
                            variantButton="outlined"
                            colorButton="white"
                            sx={buttonSx}
                            type="submit"
                            // onClick={() => submit()}
                            startIcon={<ElectricBoltOutlinedIcon />}>
                            Resetar senha
                        </Button>
                    }
                    <Button
                        variantButton="contained"
                        colorButton="primary"
                        sx={buttonSx}
                        type="submit"
                        onClick={() => submit()}
                        startIcon={<SaveOutlinedIcon />}>
                        Salvar alterações
                    </Button>
                    {
                        id !== 'new' &&
                        < Button
                            variantButton="contained"
                            colorButton="danger"
                            sx={buttonSx}
                            type="submit"
                            onClick={() => setOpenDelete(true)}
                            startIcon={<DeleteOutlinedIcon />}>
                            Excluir usuário
                        </Button>
                    }
                </Box>
            </Paper >
        </>

    )

}