/* eslint-disable react/jsx-props-no-spreading */
import React, { useState } from 'react';
import { OutlinedInput, InputAdornment } from '@mui/material';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import SearchIcon from '@mui/icons-material/Search';
import Button from '../../../../components/Button';
import { inputSx } from './styles';
import { useContextProvider } from '../../../../providers/context/contextProvider';
import { UserModel } from '../../../../providers/models/UserModel';

interface _InputSearch extends OutlinedInputProps {

}
export default function InputSearch(props: _InputSearch) {
    const { setUsers, usersOriginal } = useContextProvider()
    const [searchValue, setSearchValue] = useState('')

    function searchUsers() {
        if (searchValue === '') {
            setUsers(usersOriginal)
        }
        const aux = usersOriginal.filter((e: UserModel) => e.name.includes(searchValue))
        console.log(aux)
        setUsers(aux)
    }
    return (
        <OutlinedInput
            size="small"
            placeholder="pesquisaTesteId"
            sx={inputSx}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            {...props}
            endAdornment={
                <InputAdornment position="end">
                    <Button
                        variantButton="contained"
                        colorButton="primary"
                        data-testid="button"
                        onClick={() => searchUsers()}>
                        <SearchIcon fontSize="small" htmlColor="white" />
                    </Button>
                </InputAdornment>} />
    )
}