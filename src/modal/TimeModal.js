import React, { useState } from 'react'
import { Modal, Box, IconButton, TextField, Select, MenuItem, FormControlLabel, Button, Switch} from '@mui/material'
import { Heading, style } from '../styles'
import CloseIcon from '@mui/icons-material/Close';

export default function TimeModal({ key, data, handleSubmit, time, handleClose }) {

    const [old, setOld] = useState(data);
    const [timeselect, setTimeSelect] = useState(10);
    const handleTimeSelect = (event) => {
        setTimeSelect(event.target.value);
    };

    return (
        <Modal open={time} onClose={handleClose}>
            <Box sx={style}>
                <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: '#000000',
                    }}
                >
                    <CloseIcon />
                </IconButton>
                <Heading>Field Name</Heading>
                <TextField hiddenLabel name="fieldname" onChange={handleTimeSelect} placeholder="Enter Field Name" id="margin-normal" margin="normal" />
                <Heading>Placeholder</Heading>
                <TextField hiddenLabel name="placeholder" onChange={handleTimeSelect} placeholder="Enter Placeholder" id="margin-normal" margin="normal" />
                <Heading sx={{ marginBottom: '5px' }}>Field Type</Heading>
                <Select
                    value={timeselect}
                    onChange={handleTimeSelect}
                    displayEmpty
                    sx={{ width: '100%' }}
                >
                    <MenuItem value={10}><Heading>Text</Heading></MenuItem>
                    <MenuItem value={20}><Heading>Text Field</Heading></MenuItem>
                    <MenuItem value={30}><Heading>Drop Down</Heading></MenuItem>
                    <MenuItem value={40}><Heading>Date</Heading></MenuItem>
                    <MenuItem value={50}><Heading>Date and Time</Heading></MenuItem>
                    <MenuItem value={60}><Heading>Attachment</Heading></MenuItem>
                    <MenuItem value={70}><Heading>Number</Heading></MenuItem>
                    <MenuItem value={80}><Heading>Image Video</Heading></MenuItem>
                </Select>
                <Heading>
                    <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                        label={<Heading>Required</Heading>}
                        labelPlacement="start"
                    />
                </Heading>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Button onClick={() => handleSubmit(key, old)} variant="contained" >Save</Button>

                </Box>
            </Box>
        </Modal>
    )
}