import React, { useState } from 'react'
import { Heading, Description} from '../styles'
import { ListItem, IconButton, ListItemAvatar, Avatar, Divider, ListItemText, FormControl, Select, MenuItem, Box } from '@mui/material';
import ControlCameraOutlinedIcon from '@mui/icons-material/ControlCameraOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import DropDownModal from '../modal/DropDownModal'
import '../modal/index.css'

export default function DropDownList({ key, data, handleSubmit, handleDelete }) {

    const [dropdown, setDropDown] = useState(false);
    const open = () => {
        setDropDown(true)
    }
    const close = () => {
        setDropDown(false);
    };

    const [typed, setTyped] = useState(0);


    const handleChange = (event, index) => {
        setTyped(event.target.value);
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


                    <ListItemText sx={{display: 'flex', justifyContent: 'center', mr: '10%'   }}
                        primary={<Heading>{data.fieldname}</Heading>}
                        secondary={
                            // <FormControl variant="standard" sx={{ pt: '1', width: '100%' }}>
                                
                            //     <Select
                            //         value={typed}
                            //         onChange={e => handleChange(e, data.id)}
                            //         displayEmpty
                            //         sx={{ width: '100%' }}
                            //     >
                            //         {data.options.map((value, i) => {
                            //             return (
                            //                 <MenuItem value={i}><Option>{value.data}</Option></MenuItem>
                            //             )
                            //         })}

                            //     </Select>
                            // </FormControl>
                            <div><Description>{data.holder}</Description>
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
            <DropDownModal key={key} data={data} handleSubmit={handleSubmit} dropdown={dropdown} handleClose={close} />

        </Box>
    )
}