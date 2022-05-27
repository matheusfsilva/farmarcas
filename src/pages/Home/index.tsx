import React, { useEffect, useState } from 'react';
import { List } from '@mui/material';
import { getUsers } from '../../services/apis/usersAPI';
import OrdersBox from './ordersBox';
import ItemCard from './itemCard';
import UsersSeachandNew from './usersSeachandNew'
import { UserModel } from '../../providers/models/UserModel'
import { useContextProvider } from '../../providers/context/contextProvider';
import LoadingFull from '../../components/LoadingFull';

export default function ListUsers() {
    const { users, setUsers, setUsersOriginal } = useContextProvider();
    const [load, setLoad] = useState(false)

    async function getApi() {
        const response = await getUsers()
        if (response.status === 200) {
            setUsers(response.data);
            setUsersOriginal(response.data)
        }
    }
    useEffect(() => {
        async function get() {
            setLoad(true)
            await getApi()
            setLoad(false)
        }
        get()
    }, [])
    return (
        <>
            <LoadingFull open={load} />
            <UsersSeachandNew />
            <OrdersBox />
            <List>
                {
                    users.map((e: UserModel) => (
                        <ItemCard key={e.id} user={e} />
                    ))
                }
            </List>
        </>
    )

}