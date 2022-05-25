import React, { useState } from 'react'
import { Heading } from '../styles'
import { Box, ListItem, IconButton, ListItemAvatar, Avatar, Divider, ListItemText } from '@mui/material';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AttachmentModal from '../modal/AttachmentModal'
import '../modal/index.css'


export default function AttachmentList({ key, data, handleSubmit, handleDelete }) {

    const [attach, setAttach] = useState(false);
    const open = () => {
        setAttach(true)
    }
    const close = () => {
        setAttach(false);
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
                        primary={<Heading>{data.name}</Heading>}
                    />


                </ListItem>
                <Divider color="#F4F5F7" />
            </Box>
            <AttachmentModal key={key} data={data} handleSubmit={handleSubmit} attach={attach} handleClose={close} />
        </Box>
    )
}