import * as React from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
    alignItems: 'center',
    '& .MuiBadge-badge': {
        right: 3,
        top: 11,
        position: 'relative',
        height: '20px',
        alignItems: 'center'
    },
}));

interface _StyledBadge extends BadgeProps {
    children: any,
    count: number
}
export default function StyleBadge({ children, count }: _StyledBadge) {
    return (
        <StyledBadge badgeContent={count} color="error">
            {children}
        </StyledBadge>
    );
}