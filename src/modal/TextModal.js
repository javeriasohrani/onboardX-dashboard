import React, { createContext, useState } from 'react'
import { Modal, Box, IconButton, TextField, Select, MenuItem, FormControlLabel, Button, Switch } from '@mui/material'
import { Heading, style } from '../styles'
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { TextDataContext } from '../context/TextDataContext';
import { useContext } from 'react';






export default function TextModal({ key, data, handleSubmit, text, handleClose }) {


    const {textDataFromModal,settextDataFromModal} = useContext(TextDataContext)
    


    const [old, setOld] = useState(data);
    const [textselect, setTextSelect] = useState(10);


    const [textData, settextData] = useState()
    console.log("Text Data for Context Hook", textData)
    // console.log("Text Data for old",old)


    const handleTextSelect = (event) => {
        setTextSelect(event.target.value);
  
            };


    // console.log('Current Old Value', old)

    const [modalData, setmodalData] = useState()

    const handleTextChange = (e) => {
        setOld({ ...old, [e.target.name]: e.target.value })
        // let textData = e.target.value;
        // console.log('Text Data', textData);
        // setData([...data, {
        //     ...data,
        //     [e.target.name]: e.target.value
        // }])
        // const old=data
        // setData({ ...data, [e.target.name]: e.target.value })
        // const { name, value } = e.target;
        // const list = [...option];
        // list[index][name] = value;
        // setOption(list);

    };
    // const hanldeTextSubmit = () => {
    //     setData(old)
    // }

    const handleTextModalData = (txt) => {
        settextData(txt)
        // console.log('txt', txt)

        settextDataFromModal(txt.fieldname)
      
        // console.log('Text Field Value',textData)
    }
    

    return (
        <>
        <Modal open={text} onClose={handleClose} textData = {textData} >
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
                <TextField hiddenLabel name="fieldname" onChange={handleTextChange} placeholder="Enter Field Name" id="margin-normal" margin="normal" />
                <Heading sx={{ marginBottom: '5px' }}>Field Type</Heading>
                <Select
                    value={textselect}
                    onChange={handleTextSelect}
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
                    {/* <Button onClick={() => handleSubmit(key, old)} variant="contained" >Save</Button> */}
                    <Button onClick={() => handleTextModalData(old)} variant="contained" >Save</Button>

                </Box>
            </Box>
        </Modal>
        </>
    )
}

// export {TextModalData};