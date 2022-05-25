import React, { useState } from 'react'
import { Modal, Box, IconButton,  Select, MenuItem, FormControlLabel, Button, Switch, TextField } from '@mui/material'
import { Heading, style } from '../styles'
import CloseIcon from '@mui/icons-material/Close';


export default function ImageModal({ key, data, handleSubmit, image, handleClose }) {

    const [old, setOld] = useState(data);
    const [selectedFile, setSelectedFile] = React.useState();
    const [imageselect, setImageSelect] = useState(80);
    const handleImageSelect = (event) => {
        setImageSelect(event.target.value);
    };

    const changeImageHandler = e => {
        setSelectedFile(e.target.files[0]);
        setOld({ ...old, name: e.target.files[0].name, image: e.target.files[0] })
    }
    return (
        <Modal open={image} onClose={handleClose}>
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
                <Heading style = {{paddingBottom : '10px'}}>Field Name</Heading>
                <TextField hiddenLabel name="number" onChange={handleImageSelect} placeholder="Enter Field Name" id="margin-normal" margin="normal" />
                <Heading style = {{paddingBottom : '10px'}}>Placeholder</Heading>
                <TextField hiddenLabel name="number" onChange={handleImageSelect} placeholder="Upload Image/Video" id="margin-normal" margin="normal" />
                {/* <input type="file" name="file" onChange={changeImageHandler} style = {{paddingBottom : '10px', fontSize : '16px'}} /> */}
                <Heading sx={{ marginBottom: '5px' }}>Field Type</Heading>
                <Select
                    value={imageselect}
                    onChange={handleImageSelect}
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