import React, { useState } from 'react';
import { Paper, Avatar, Box } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import { deleteUser } from '../../services/apis/usersAPI';
import LoadingFull from '../LoadingFull';
import { paperSx, avatarSx, buttonSx } from './styles';
import Dialog from '../dialog';
import Typography from '../Typograph';
import { useContextProvider } from '../../providers/context/contextProvider';

interface _DeleteDialog {
    open: boolean,
    close: any,
    id: number
}
export default function DeleteDialog({ open, close, id }: _DeleteDialog) {
    const [load, setLoad] = useState(false)
    const { users, setUsers, setUsersOriginal } = useContextProvider()
    const navigate = useNavigate();

    function spliceUser() {
        const aux = [...users]
        aux.forEach((e, index) => {
            if (e.id === id) {
                aux.splice(index, 1)
            }
        });
        setUsers(aux)
        setUsersOriginal(aux)
    }
    async function deleteUserCall() {
        setLoad(true)
        await deleteUser(id)
        spliceUser()
        setLoad(false)
        close()
        navigate('/')
    }
    return (
        <Dialog open={open} close={close}>
            <LoadingFull open={load} />
            <Paper sx={paperSx}>
                <Avatar sx={avatarSx}><InfoOutlinedIcon htmlColor="#d32f2f" fontSize="large" /></Avatar>
                <Typography type="title1" align="center">Excluir usuário</Typography>
                <Typography type="label1" align="center">Você deseja excluir este usuário definitvamente?
                    Esta ação não poderá ser desfeita.</Typography>
                <Box>
                    <Button variantButton="contained" colorButton="primary" sx={buttonSx} onClick={close}>Não</Button>
                    <Button variantButton="outlined" sx={buttonSx} onClick={() => deleteUserCall()}>Sim</Button>
                </Box>
            </Paper>
        </Dialog>
    )
}