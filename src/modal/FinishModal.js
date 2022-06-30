import React from 'react'
import { Modal, Box, IconButton, Stack, Avatar } from '@mui/material'
import { Text } from '../styles'
import CloseIcon from '@mui/icons-material/Close';
import Finish1 from '../images/Finish1.png'
import Finish2 from '../images/Finish2.jpg'



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


function    FinishModal({ open, handleClose }) {
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
                    <Stack justifyContent='center' alignItems='center' mt={2}>
                        <Text>Flow Created Successfully</Text>
                        
                            
                            <Avatar
                                sx={{ height: '35%', width: '35%' }}
                                alt="Finish"
                                src={Finish1} />
                        
                    </Stack>
                </Box>
            </Modal>
        </div>
    )
}

export default FinishModal
