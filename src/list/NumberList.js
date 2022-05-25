import React, { useState } from 'react'
import { Heading } from '../styles'
import { Box, ListItem, IconButton, ListItemAvatar, Avatar, Divider, ListItemText } from '@mui/material';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import NumberModal from '../modal/NumberModal'
import '../modal/index.css'


export default function NumberList({ key, data, handleSubmit, handleDelete }) {

    const [number, setNumber] = useState(false);
    const open = () => {
        setNumber(true)
    }
    const close = () => {
        setNumber(false);
    };


    return (
        <Box>
            <Box onClick={open} className='hh'>
                <ListItem
                    secondaryAction={
                        <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(data.id)} sx={{ mr: '20px' }}>
                            <DeleteOutlinedIcon sx={{ color: '#FF3E3E', }} />
                        </IconButton>
                    }
                >
                    <ListItemAvatar sx={{ p: '10px' }}>
                        <Avatar sx={{ bgcolor: 'transparent' }}>
                            <ControlCameraOutlinedIcon sx={{ color: '#BAB2D1' }} />
                        </Avatar>
                    </ListItemAvatar>


                    <ListItemText sx={{ display: 'flex', justifyContent: 'center', mr: '10%' }}
                        primary={<Heading>{data.number}</Heading>}
                    />


                </ListItem>
                <Divider color="#F4F5F7" />
            </Box>
            <NumberModal key={key} data={data} handleSubmit={handleSubmit} number={number} handleClose={close} />
        </Box>
    )
}