import React from 'react'
import { Heading } from '../styles'
import {Box, ListItem, IconButton, ListItemAvatar, Avatar, Divider, ListItemText } from '@mui/material';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import '../modal/index.css'
import TimeModal from '../modal/TimeModal'
import { useState } from 'react';



export default function TimeList({ key, data, handleSubmit, handleDelete }) {

    const [time, setTime] = useState(false);
    const open = () => {
        setTime(true)
    }
    const close = () => {
        setTime(false);
    };
    return (
        <>
            <Box>
                <Box onClick={open} className='hh'  >
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
                    primary={<Heading>{data.datetime}</Heading>}
                />


            </ListItem>
            <Divider color="#F4F5F7" />
                </Box>
                <TimeModal key={key} data={data} handleSubmit={handleSubmit} time={time} handleClose={close} />
            </Box>

        </>
    )
}