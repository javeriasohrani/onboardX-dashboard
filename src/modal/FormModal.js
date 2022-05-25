import React from 'react'
import { Modal, Box, IconButton, Stack, Button, Avatar } from '@mui/material'
import { Text } from '../styles'
import CloseIcon from '@mui/icons-material/Close';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import Template from '../images/Template.jpg'
import { Link } from 'react-router-dom'




const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '25%',
    height: '30%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: { sm: 'scroll', md: 'block' }


};

const btnstyle = {
    border: "1px solid #F4F5F7",
    boxShadow: "0px 4px 4px rgba(186, 178, 209, 0.25)",
    borderRadius: '5px',
    width: '75%',
    padding: '5px',
}


function FormModal({ open, handleClose }) {
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
                    <Stack justifyContent='center' alignItems='center' spacing={2} mt={4}>
                        <Link to="/form/createform" style={{ textDecoration: 'none', width: "100%", marginLeft: '25%' }}>
                            <Button variant="text" startIcon={<AddOutlinedIcon fontSize="small" />} sx={btnstyle}>
                                <Text fontSize='14px'> Create New</Text>
                            </Button>
                        </Link>
                        <Button variant="text" startIcon={<Avatar sx={{ width: 20, height: 20 }} src={Template} />} sx={btnstyle}>
                            <Text fontSize='14px'> Choose Template</Text>
                        </Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}

export default FormModal
