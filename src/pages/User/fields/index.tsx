/* eslint-disable no-param-reassign */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import { Paper, Grid } from '@mui/material';
import { paperSx } from './styles'
import Input from '../../../components/input';
import Select from '../../../components/select';
import AutoCompleteChip from '../../../components/autoCompleteChip';
import { peofiles, redes, Lojas } from '../../../providers/models/Consumable';
import { UserModel } from '../../../providers/models/UserModel';

interface _Fields {
    user: UserModel,
    submit: any,
    setUser: React.Dispatch<React.SetStateAction<UserModel>>,
    errors: any
}

export default function Fields({ user, submit, setUser, errors }: _Fields) {
    const mask = (v: string) => {
        v = v.replace(/\D/g, "")
        if (v.length <= 11) {
            v = v.replace(/(\d{3})(\d)/, "$1.$2")
            v = v.replace(/(\d{3})(\d)/, "$1.$2")
            v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        } else {
            v = v.slice(0, -1)
            v = v.replace(/(\d{3})(\d)/, "$1.$2")
            v = v.replace(/(\d{3})(\d)/, "$1.$2")
            v = v.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
        }
        return v
    }
    return (
        <Paper sx={paperSx} elevation={0}>
            <form onSubmit={submit}>
                <Grid container spacing={2}>
                    <Grid item sm={6} xs={12}>
                        <Input
                            labelinput="Nome do usuário"
                            value={user.name}
                            error={errors.name}
                            onChange={(e) => setUser((prevState) => (
                                { ...prevState, name: e.target.value }
                            ))} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Input
                            labelinput="CPF"
                            value={user.cpf}
                            error={errors.cpf}
                            onChange={(e) => setUser((prevState) => (
                                { ...prevState, cpf: mask(e.target.value) }
                            ))} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Input
                            labelinput="E-mail"
                            value={user.email}
                            error={errors.email}
                            onChange={(e) => setUser((prevState) => (
                                { ...prevState, email: e.target.value }
                            ))} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Select
                            labelinput="Perfil de acesso"
                            list={peofiles}
                            value={user.profile}
                            error={errors.profile}
                            onChange={(e: any) => setUser((prevState) => (
                                { ...prevState, profile: e.target.value }
                            ))} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <AutoCompleteChip
                            labelinput="Redes"
                            list={redes}
                            disabled={!user.profile}
                            valueInitial={user.rede}
                            error={errors.rede}
                            sublabelinput="Você pode indicar mais de uma rede"
                            addList={(e: any) => setUser((prevState) => (
                                { ...prevState, rede: e }
                            ))} />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <AutoCompleteChip
                            labelinput="Loja"
                            list={Lojas}
                            disabled={user.rede.length === 0}
                            sublabelinput="Você pode indicar mais de uma rede"
                            valueInitial={user.loja}
                            error={errors.loja}
                            addList={(e: any) => setUser((prevState) => (
                                { ...prevState, loja: e }
                            ))} />
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )

}