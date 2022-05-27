/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React from 'react';
import TypographyMaterial, { TypographyProps } from '@mui/material/Typography';
import { title2, title1, title3, label1, subTitle3, labelError } from './styles';

interface _Typography extends TypographyProps {
    type?: 'title2' | 'title1' | 'title3' | 'subTitle3' | 'label1' | 'labelError'
}

export default function Typography({ type, children, ...props }: _Typography) {


    function getStyle() {
        if (type === 'title2') {
            return title2
        }
        if (type === 'title1') {
            return title1
        }
        if (type === 'title3') {
            return title3
        }
        if (type === 'subTitle3') {
            return subTitle3
        }
        if (type === 'label1') {
            return label1
        }
        if (type === 'labelError') {
            return labelError
        }
        return {}
    }
    return (
        <TypographyMaterial sx={getStyle()} {...props}>{children}</TypographyMaterial>
    )
}