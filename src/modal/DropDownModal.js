import React, { useState } from 'react'
import { Modal, Box, IconButton, TextField, Select, MenuItem, FormControlLabel, Button, Switch } from '@mui/material'
import { Heading, style } from '../styles'
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';



export default function DropDownModal({ key, data, handleSubmit, dropdown, handleClose }) {

    const [old, setOld] = useState(data);
    const [option, setOption] = React.useState([]);
    const [select, setSelect] = useState(30);


    const handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...option];
        list[index][name] = value;
        setOption(list);
    };

    const handleRemoveClick = index => {
        const list = [...option];
        list.splice(index, 1);
        setOption(list);
    };

    const handleAddClick = () => {
        setOption([...option, { data: "" }]);
    };
    const handleSelect = (event) => {
        setSelect(event.target.value);
    };

    const handleChange = (e) => {
        setOld({ ...old, [e.target.name]: e.target.value })
    }
    const handelSave=()=>{
        setOld((prevState) => ({
            ...prevState,
            options: option
        }));
        
        debugger;
        handleSubmit(key, old)

    }

    console.log('dropdown')
        
    console.log(old)
    return (
        <Modal open={dropdown} onClose={handleClose}>
            
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
                <TextField hiddenLabel name="fieldname" onChange={handleChange} placeholder="Enter Field Name" id="margin-normal" margin="normal" />
                <Heading>Placeholder</Heading>
                <TextField hiddenLabel name="placeholder" onChange={handleChange} placeholder="Enter Placeholder" id="margin-normal" margin="normal" />
                <Heading sx={{ marginBottom: '5px' }}>Field Type</Heading>
                <Select
                    value={select}
                    onChange={handleSelect}
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
            <Box sx={{ m: '5px' }} style={{paddingTop : '10px', paddingBottom : '10px'}}>
                    <Heading>
                        Dropdown Options
                        <AddOutlinedIcon onClick={handleAddClick} sx={{ position: 'absolute', right: 26, color: '#0065FF' }} />
                    </Heading>

                </Box>
                {option.map((x, i) => {
                    return (
                        <Box sx={{ position: 'relative', mb: '10px' }} >
                            <TextField name="data" placeholder="Option" value={x.data} onChange={e => handleInputChange(e, i)} />

                            <IconButton
                                aria-label="remove"
                                onClick={handleRemoveClick}
                                sx={{ position: 'absolute', right: 10, top: 15, width: 20, height: 20 }}
                            >
                                <DeleteOutlinedIcon sx={{ color: '#FF3E3E', }} />
                            </IconButton>


                        </Box>
                    )
                })}
                <Heading>
                    <FormControlLabel
                        value="start"
                        control={<Switch color="primary" />}
                        label={<Heading>Required</Heading>}
                        labelPlacement="start"
                    />
                </Heading>
                <Box sx={{ display: 'flex', justifyContent: 'center' }} >
                    <Button 
                    // onClick={() => handleSubmit(key, old)}
                    onClick={handelSave}
                    variant="contained" 
                    >
                        Save
                        </Button>

                </Box>
            </Box>
        </Modal>
    )
}