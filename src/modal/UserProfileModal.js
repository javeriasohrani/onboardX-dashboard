import React,{useEffect, useState} from 'react'
import { Modal, Box, Stack, IconButton, Button, Grid, List, ListItem, ListItemText, ListItemAvatar, Avatar, Divider } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import ImageIcon from '@mui/icons-material/Image'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import { Text } from '../styles'
import { empData } from '../dummydata/Empdata'
import ProfileBig from '../images/ProfileBig.jpg'
import { makeStyles } from '@material-ui/core';
import { All_Users } from '../Apis';
import axios from 'axios';



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

function UserProfileModal({ open, handleClose, EmployeeId }) {
    const classes = useStyles()

    const [user, setuser] = useState(
        [{
            user_id : '',
            user_name : '',
            role_name  : ''
        }]
    )


    useEffect(()=>{
        // console.log("Employee ID from User Modal", EmployeeId )
        getAllUsers();
    },[])

    

    const getAllUsers = async () => {
        await axios.get(All_Users)
        .then(res=>{
            setuser(res.data)
        })
    }


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
                                {user.map((users) => (
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
                                            <ListItemText key={users.user_id} primary={users.user_name} secondary={users.role_name} />
                                        </ListItem>
                                        <Divider />
                                    </Box>
                                ))}
                            </List>
                        </Grid> 
                        <Divider orientation="vertical" sx={{ ml: '2%' }} flexItem />
                        <Grid item sm={12} md={5} >
                            <Box sx={{ ml: '18%' }}>
                                <Box>
                                    <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Avatar
                                            alt="Remy Sharp"
                                            src={ProfileBig}
                                            sx={{ width: '50%', height: '50%' }}
                                        />
                                        <Text sx={{ fontSize: '16px', lineHeight: "10px" }}>Hanna Culhane</Text>
                                        <Text sx={{ fontSize: '16px', fontWeight: '400', lineHeight: "10px" }}>Role</Text>
                                        <Text sx={{ fontSize: '16px', fontWeight: '400', lineHeight: "10px" }}>hanna.culhane@gmail.com</Text>
                                        <Text sx={{ fontSize: '16px', fontWeight: '400', lineHeight: "20px" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
                                    </Stack>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}

export default UserProfileModal
