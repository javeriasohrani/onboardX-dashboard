import React, { useState } from 'react'
import { Heading } from '../styles'
import { Box, ListItem, IconButton, ListItemAvatar, Avatar, Divider, ListItemText, TextField } from '@mui/material';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import TextModal from '../modal/TextModal'
import '../modal/index.css'




export default function TextList({ key, data, handleSubmit, handleDelete }) {
    const [text, setText] = useState(false);
    const open = () => {
        setText(true)
    }
    const close = () => {
        setText(false);
    };
    return (
        <Box>
            <Box onClick={open} className='hh' >
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


                    <ListItemText sx={{display: 'flex', justifyContent: 'center', mr: '10%'   }}
                        primary={<Heading>{data.fieldname === "" ? <>Add Text Here</> : data.fieldname}</Heading>}>
                    </ListItemText>
                    {/* <ListItem>

                        <TextField id="standard-basic" label="Standard" variant="standard" />

                    </ListItem> */}


                </ListItem>
                <Divider color="#F4F5F7" />


            </Box>
            <TextModal key={key} data={data} handleSubmit={handleSubmit} text={text} handleClose={close} />
        </Box>
    )
}