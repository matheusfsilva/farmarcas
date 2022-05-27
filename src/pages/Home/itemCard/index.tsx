import React, { useState } from 'react';
import { Paper, Grid } from '@mui/material';
import { NavLink } from 'react-router-dom';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { paperSx, buttonSx, itemSx, itemButtonSx } from './styles';
import Typography from '../../../components/Typograph';
import Switch from '../../../components/switch';
import DeleteDialog from '../../../components/deleteDialog';
import { UserModel } from '../../../providers/models/UserModel';
import Button from '../../../components/Button/index';

interface _ItemCard {
    user: UserModel,
}
export default function ItemCard({ user }: _ItemCard) {
    const [openDelete, setOpenDelete] = useState(false)

    return (
        <Paper elevation={0} sx={paperSx}>
            <DeleteDialog open={openDelete} close={() => setOpenDelete(false)} id={user.id} />
            <Grid container spacing={2}>
                <Grid item xs={6} sm={2} sx={itemSx}>
                    {
                        user.rede.map((e: string) => (<Typography type="title3">{e}</Typography>))
                    }
                </Grid>
                <Grid item xs={6} sm={4} sx={itemSx}>
                    <Typography type="title3" align="left">{user.name}</Typography>
                    <Typography type="subTitle3">{user.email}</Typography>
                </Grid>
                <Grid item xs={6} sm={2} sx={itemSx}>
                    <Typography type="subTitle3">{user.profile}</Typography>
                </Grid>
                <Grid item xs={6} sm={2} sx={itemSx}>
                    <Switch checked={user.status} />
                </Grid>
                <Grid item xs={6} sm={2} sx={itemButtonSx}>
                    <NavLink to={`User/${user.id}`}>
                        <Button variantButton="outlined" colorButton="white" sx={buttonSx}><EditOutlinedIcon /></Button>
                    </NavLink>

                    <Button variantButton="outlined" colorButton="grey700" onClick={() => setOpenDelete(true)}><DeleteOutlinedIcon color="error" /></Button>
                </Grid>
            </Grid>
        </Paper >
    )
}