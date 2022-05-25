import React from 'react'
import { Box, Grid, Modal, Avatar, IconButton, Stack, Button } from '@mui/material'
import { Text, TextInput } from '../styles'
import CloseIcon from '@mui/icons-material/Close';
import ProfileBig from '../images/ProfileBig.jpg'


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

function ProfileModal({ open, handleClose }) {
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

                    <Grid container padding={3} spacing={3}>
                        <Grid item sm={12} md={4}>
                            <Box>
                                <Stack spacing={2} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                                    <Avatar
                                        alt="Remy Sharp"
                                        src={ProfileBig}
                                        sx={{ width: '90%', height: '90%' }}
                                    />
                                    <Text>Davis George</Text>
                                </Stack>
                            </Box>
                        </Grid>


                        <Grid item sm={12} md={4} >
                            <Box>
                                <Text sx={{ fontWeight: 900 }}>Account Information</Text>
                                <Box>
                                    <Text sx={{ fontSize: '16px' }}>Full Name</Text>
                                    <TextInput placeholder='Davis George' />
                                    <Text sx={{ fontSize: '16px' }}>User Name</Text>
                                    <TextInput placeholder='davis_george' />
                                    <Text sx={{ fontSize: '16px' }}>Email</Text>
                                    <TextInput placeholder='davis.george@gmail.com' />
                                </Box>
                            </Box>
                        </Grid>


                        <Grid item sm={12} md={4} >
                            <Box>
                                <Text sx={{ fontWeight: 900 }}>Change Password</Text>
                                <Box>
                                    <Text sx={{ fontSize: '16px' }}>Current Password</Text>
                                    <TextInput placeholder='***********' />
                                    <Text sx={{ fontSize: '16px' }}>New Password</Text>
                                    <TextInput placeholder='New Password' />
                                    <Text sx={{ fontSize: '16px' }}>Confirm Password</Text>
                                    <TextInput placeholder='Confirm Password' />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ ml: '35%' }} >
                        <Button variant="contained" sx={{ width: '135px', height: '30px' }} onClick={handleClose}>
                            <Text sx={{ fontSize: '12px', color: '#ffffff', fontWeight: 300 }}>Save Changes</Text>
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div >
    )
}

export default ProfileModal
