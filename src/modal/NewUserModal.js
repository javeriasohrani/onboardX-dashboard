import React from 'react'
import { Modal, Box, IconButton, Button, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ImageIcon from '@mui/icons-material/Image'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Text, TextInput } from '../styles'
import { empData } from '../dummydata/Empdata'
import { makeStyles } from '@material-ui/core'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { All_Users } from '../Apis';
import UserProfileModal from './UserProfileModal';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    // height: '55%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: { sm: 'scroll', md: 'block' }
};
const useStyles = makeStyles(() => ({
    root: {
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        '&::-webkit-scrollbar-track': {
            display: 'none'
        },
        '&::-webkit-scrollbar-thumb': {
            display: 'none'
        },
        '&::-webkit-scrollbar-corner': {
            display: 'none'
        },
    },
}));


function NewUserModal({ open, handleClose }) {
    const classes = useStyles()

    const [user, setUser] = useState(
        [{
            user_name : '',
            user_id : '',
            role_name : ''
        }]
    )
    const [userprofile, setUserProfile] = useState(false)
    // const [userId, setUserId] = useState();

    useEffect(() => {
     getUsers();
    }, [])

    const getUsers = async () => {
        await axios.get(All_Users)
        .then(res => {
            setUser(res.data)
        })
    }

    // const handleUserProfile = (id) => {
    //     setUserProfile(!userprofile)
    //     console.log('id',id)
    //     setUserId(id);
    // }
    return (
        <div style={{ display: { sm: 'scroll', md: 'block' } }}>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                sx={{ display: { sm: 'scroll', md: 'block' } }}
            >
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
                    <Grid container>
                        <Grid item sm={12} md={6} sx={{ p: '10px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Text sx={{ fontSize: '24px' }}>Users</Text>
                                <Button variant="contained" sx={{ width: '135px', height: '30px' }}>
                                    <Text sx={{ fontSize: '12px', color: '#ffffff', fontWeight: 300 }}>New Users</Text>
                                </Button>
                            </Box>
                            <List className={classes.root} sx={{ height: '300px', width: '100%', overflow: 'auto' }}>
                                {user.map((emp) => (
                                    <Box >
                                        <ListItem
                                            secondaryAction={
                                                <IconButton edge="end" aria-label="delete">
                                                    <DeleteOutlinedIcon sx={{ color: '#FF3E3E' }} />
                                                </IconButton>
                                            }
                                        >
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <ImageIcon />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={emp.user_name} secondary={emp.role_name} />
                                        </ListItem>
                                        <Divider />
                                    </Box>
                                ))}
                            </List>
                        </Grid>

                        <Divider orientation='vertical' variant='middle' flexItem sx={{ ml: '1%' }} />
                        <Grid item sm={12} md={5} >
                            <Box sx={{ ml: '18%' }}>
                                <Text sx={{ fontWeight: 900 }}>Add New Users</Text>
                                <Box>
                                    <Text sx={{ fontSize: '16px' }}>Full Name</Text>
                                    <TextInput placeholder='Davis George' />
                                    <Text sx={{ fontSize: '16px' }}>Role</Text>
                                    <TextInput placeholder='davis_george' />
                                    <Text sx={{ fontSize: '16px' }}>Email</Text>
                                    <TextInput placeholder='davis.george@gmail.com' />
                                </Box>
                                <Button variant="contained" sx={{ width: '135px', height: '40px', mt: "20px" }} onClick={handleClose}>
                                    <Text sx={{ fontSize: '12px', color: '#ffffff', fontWeight: 300 }}>Add Users</Text>
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
            {/* <UserProfileModal userIds ={userId} open={userprofile} handleClose={handleUserProfile} /> */}
        </div>
    )
}

export default NewUserModal
