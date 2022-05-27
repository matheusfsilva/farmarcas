/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { OutlinedInput } from '@mui/material';
import { OutlinedInputProps } from '@mui/material/OutlinedInput';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { inputSx, iconErrorSx } from './styles'
import Typography from '../Typograph';

interface _Input extends OutlinedInputProps {
    labelinput?: string,
    cpfMask?: boolean,
    sublabelinput?: string,
}
export default function InputSearch(props: _Input) {
    return (
        <>
            <Typography type="label1">
                {props?.labelinput}
            </Typography>
            <OutlinedInput
                sx={inputSx}
                size="small"
                fullWidth
                {...props} />
            {
                props?.sublabelinput &&
                <Typography type="label1">
                    {props?.sublabelinput}
                </Typography>
            }

            {
                props.error &&
                <Typography type="labelError">
                    <InfoOutlinedIcon sx={iconErrorSx} />{props.error}
                </Typography>
            }

        </>

    )
}