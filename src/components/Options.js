import React from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Buttons } from '../styles'
import { Box, Grid } from '@mui/material';
import EventAvailableOutlinedIcon from '@mui/icons-material/EventAvailableOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import AttachmentOutlinedIcon from '@mui/icons-material/AttachmentOutlined';
import FormatAlignJustifyOutlinedIcon from '@mui/icons-material/FormatAlignJustifyOutlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import Filter7OutlinedIcon from '@mui/icons-material/Filter7Outlined';




export default function NewOptions({ data, setData }) {



    const addText = () => {
        setData([...data,
        {
            id: uuidv4(),
            type: "text",
            fieldname: " Text Here",
            required: false
        }
        ])
    }
    const addTextField = () => {
        setData([...data,
        {
            id: uuidv4(),
            type: "textfield",
            fieldname: "Text Field",
            placeholder: "",
            required: false
        }
        ])
    }
    const addDropDown = () => {
        setData([...data,
        {
            id: uuidv4(),
            type: "dropdown",
            fieldname: "Drop Down",
            placeholder: "",
            required: false,
            options: []
        }
        ])
    }
    const addDate = () => {
        setData([...data,
        {
            id: uuidv4(),
            type: "date",
            date: "Date",
            required: false
        }
        ])
    }
    const addTime = () => {
        setData([...data,
        {
            id: uuidv4(),
            type: "time",
            time: "Date and Time",
            datetime : "Date and Time",
            required: false
        }
        ])
    }
    const addAttachment = () => {
        setData([...data,
        {
            id: uuidv4(),
            type: "attachment",
            name: "Upload Docement",
            attachment: "",
            required: false
        }
        ])
    }
    const addNumber = () => {
        setData([...data,
        {
            id: uuidv4(),
            type: "number",
            number: "Number",
            required: false
        }
        ])
    }
    const addImage = () => {
        setData([...data,
        {
            id: uuidv4(),
            type: "image",
            name: "Image/Video",
            image: "",
            required: false
        }
        ])
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={4} padding={1}>
                <Grid item xs={12} md={6} sm = {12} >
                    <Buttons onClick={addText}>
                        <FormatColorTextOutlinedIcon sx={{ mr: '20%', pl : '10px' }} />
                        Text
                    </Buttons>
                </Grid>
                <Grid item xs={12} md={6} sm = {12}>
                    <Buttons onClick={addTextField}>
                        <FormatAlignJustifyOutlinedIcon sx={{ mr: '20%', pl : '10px' }} />
                        Text Field
                    </Buttons>
                </Grid>
                <Grid item xs={12} md={6} sm = {12}>
                    <Buttons onClick={addDropDown}>
                        <ArrowDropDownOutlinedIcon sx={{ mr: '20%', pl : '10px' }} />
                        DropDown
                    </Buttons>
                </Grid>
                <Grid item xs={12} md={6} sm = {12}>
                    <Buttons onClick={addDate}>
                        <EventAvailableOutlinedIcon sx={{ marginRight: '20%', pl : '10px' }} />
                        Date
                    </Buttons>
                </Grid>
                <Grid item xs={12} md={6} sm = {12}>
                    <Buttons onClick={addTime}>
                        <AccessTimeOutlinedIcon sx={{ marginRight: '20%', pl : '10px' }} />
                        Date&Time
                    </Buttons>
                </Grid>
                <Grid item xs={12} md={6} sm = {12}>
                    <Buttons onClick={addAttachment}>
                        <AttachmentOutlinedIcon sx={{ marginRight: '20%', pl : '10px' }} />
                        Attachment
                    </Buttons>
                </Grid>
                <Grid item xs={12} md={6} sm = {12}>
                    <Buttons onClick={addNumber}>
                        <Filter7OutlinedIcon sx={{ marginRight: '20%', pl : '10px' }} />
                        Numbers
                    </Buttons>
                </Grid>
                <Grid item xs={12} md={6} sm = {12}>
                    <Buttons onClick={addImage}>
                        <ImageOutlinedIcon sx={{ marginRight: '20%', pl : '10px' }} />
                        Image/Videos
                    </Buttons>
                </Grid>
            </Grid>
        </Box>
    )
}