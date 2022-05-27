/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState, createContext, useContext, useMemo } from 'react';
import { UserModel } from '../models/UserModel';

type ContextType = {
    users: UserModel[],
    setUsers: Function,
    usersOriginal: UserModel[],
    setUsersOriginal: Function
}

export const Context = createContext({} as ContextType);

export function ContextProvider({ children }: any) {
    const [users, setUsers] = useState<UserModel[]>([])
    const [usersOriginal, setUsersOriginal] = useState<UserModel[]>([])

    const value = useMemo(() => ({
        users, setUsers, usersOriginal, setUsersOriginal
    }), [users, usersOriginal]);

    return (
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

export const useContextProvider = () => useContext(Context);