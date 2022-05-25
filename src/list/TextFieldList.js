import React, { useState } from 'react'
import { Heading, Description } from '../styles'
import { Box, ListItem, IconButton, ListItemAvatar, Avatar, Divider, ListItemText } from '@mui/material';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import TextFieldModal from '../modal/TextFieldModal'
import '../modal/index.css'

export default function TextFieldList({ key, data, handleSubmit, handleDelete }) {
    const [textfield, setTextfield] = useState(false);
    const open = () => {
        setTextfield(true)
    }
    const close = () => {
        setTextfield(false);
    };


    return (
        <Box>
            <Box onClick={open} className='hh'>
                <ListItem>
                    <ListItemAvatar sx={{ p: '10px' }}>
                        <Avatar sx={{ bgcolor: 'transparent' }}>
                            <ControlCameraOutlinedIcon sx={{ color: '#BAB2D1' }} />
                        </Avatar>
                    </ListItemAvatar>


                    <ListItemText sx={{ display: 'flex', justifyContent: 'center', mr: '10%' }} 
                        primary={<Heading sx={{ mb: '5px' }}>{data.fieldname}</Heading>}
                        secondary={<div><Description>{data.placeholder}</Description>
                            {/* <Divider color="#F4F5F7" /> */}
                            </div>
                        }
                    />
                    <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(data.id)} sx={{ mr: '20px' }}>
                        <DeleteOutlinedIcon sx={{ color: '#FF3E3E', }} />
                    </IconButton>


                </ListItem>
                <Divider color="#F4F5F7" />
            </Box>
            <TextFieldModal key={key} data={data} handleSubmit={handleSubmit} textfield={textfield} handleClose={close} />
        </Box>
    )
}