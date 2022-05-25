import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import { Text } from '../styles';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

export default function Breadcrumb({place}) {
    const breadcrumbs = [
        
        <Link   
            underline="hover"
            key="2"
            color="#000000D9"
            fontSize={22}
            fontWeight={700}
            lineHeight={2}
            href="#"
            sx={{textDecoration:'none'}}
        >
            <Text sx={{fontSize:'25px'}} >{place}</Text>
        </Link>
    ];

    return (
        <Stack spacing={2} sx={{ backgroundColor: '#F4F5F7',paddingLeft:'19px' }}>
            <Breadcrumbs
                separator={""}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>
        </Stack>
    );
}
