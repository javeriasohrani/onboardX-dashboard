import React from 'react'
import { Modal, Box, IconButton, Grid, Avatar, Card, CardHeader, CardContent, CardActions, Stack, Button } from '@mui/material'
import { Text } from '../styles'
import CloseIcon from '@mui/icons-material/Close';
import Haily from '../images/Haily.jpg'




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    height: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: { sm: 'scroll', md: 'block' }


};


function StatusModalOverdue({ open, handleClose }) {

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
                    <Grid container justifyContent='center' alignItems='center'>
                        <Card sx={{ height: "100%", width: '100%', border: "none", boxShadow: "none" }}>
                            <CardHeader
                                avatar={
                                    <Avatar
                                        alt="Haily Sharp"
                                        src={Haily}
                                        sx={{ width: '90%', height: '90%' }}
                                    />
                                }

                                title={<Text>Haily Philips</Text>}
                                subheader={<Text sx={{ fontWeight: 600, fontSize: '14px' }}>Finance Intern</Text>}
                            >
                            </CardHeader>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={6} md={6}>
                                        <Stack>
                                            <Text sx={{ fontWeight: 700, fontSize: '14px' }}>Assigned Flow</Text>
                                            <Text sx={{ fontWeight: 700, fontSize: '14px' }}>Status</Text>
                                        </Stack>
                                    </Grid>
                                    <Grid item xs={6} md={6}>
                                        <Stack>
                                            <Text sx={{ fontWeight: 700, fontSize: '14px' }}>Onboarding Finance</Text>
                                            <Text sx={{ fontWeight: 700, fontSize: '14px', color: '#FF5630' }}>Completed</Text>
                                        </Stack>
                                    </Grid>
                                </Grid>
                            </CardContent>
                            <CardActions>
                                <Button size="medium" variant="contained">View Profile</Button>
                                <Button size="medium" variant="contained"  color='#FF5630'>Notifys</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}

export default StatusModalOverdue
