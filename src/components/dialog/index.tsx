/* eslint-disable react/destructuring-assignment */
import * as React from 'react';
import DialogMaterial, { DialogProps } from '@mui/material/Dialog';

interface _DialogCheck extends DialogProps {
    open: boolean,
    close: any
}

export default function Dialog(props: _DialogCheck) {
    return (
        <DialogMaterial
            open={props.open}
            onClose={props.close}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            {props.children}
        </DialogMaterial>
    );
}