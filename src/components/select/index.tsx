/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/require-default-props */
/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SelectMaterial, { SelectProps } from '@mui/material/Select';
import { iconSx } from './style';
import Input from '../input';

interface _Select extends SelectProps {
    labelinput?: string,
    list: string[],
}

const ITEM_HEIGHT = 35;
const ITEM_PADDING_TOP = 8;

const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            border: '1px solid',
            borderColor: '#dee2e6',
            marginTop: '10px',
            boxShadow: 'none'
        },
    },
};

export default function Select(props: _Select) {
    return (
        <SelectMaterial
            input={<Input labelinput={props.labelinput} />}
            variant="outlined"
            {...props}
            IconComponent={() => (<KeyboardArrowDownIcon sx={iconSx} />)}
            MenuProps={MenuProps}
        >
            {
                props.list.map((e: string) => (
                    <MenuItem key={e} value={e}>{e}</MenuItem>
                ))
            }
        </SelectMaterial>
    );
}
