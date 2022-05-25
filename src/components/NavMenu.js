import React from 'react'
import { NavLink } from 'react-router-dom'
import { Text } from '../styles'
import { Box, Avatar, Button, Stack } from '@mui/material'
import { Link } from 'react-router-dom'
import FlowModal from '../modal/FlowModal'
import { useState } from 'react'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import ArticleIcon from '@mui/icons-material/Article';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import logo1 from '../images/Logo.png';
import '../components/nav.css'
import FormTable from '../modal/FormTable'

function NavMenu() {

    const [flow, setFlow] = useState(false);
    const handleFlow  = () => {
        setFlow(!flow)
    }

    return (
        <Box sx={{ height: '100vh', overflow: 'hidden', display: { md: 'block', xs: "none" } }}  >
            <Box sx={{ m: '20px', }} style = {{display: 'flex', alignItems : 'center'}} >
                <Box >
                    <img src = {logo1} style = {{paddingLeft : '20px'}}/>
                </Box>
                <Box>
                <Text sx={{ fontSize: '24px', fontWeight: 800, color: '#121212', position: 'absolute', left: '95px', top: '15px' }} >PeopleX</Text>
                </Box>
            </Box>
            <Button variant="contained" sx={{ width: '70%', height: '40px', ml: '15%', mt: '15px' }}>
                <Text sx={{ fontSize: '14px', color: '#ffffff', fontWeight: 500 }} onClick={handleFlow }>Create Flow</Text>
            </Button>
            <Box>
                <Stack spacing={2} sx={{ m: '35px' }}>
                    <NavLink to='/dashboard' style={{ textDecoration: 'none' }} activeStyle={{ color: 'red' }}>
                        <Box className='n1'>
                        <Box><DashboardOutlinedIcon className='icon'/></Box>
                        <Box><Text sx={{ fontSize: '14px', color: '#6B778C' }}>Dashboard</Text> </Box>
                        </Box>
                        {/* <Text sx={{ fontSize: '14px', color: '#6B778C' }}>Dashboard</Text> */}
                    </NavLink>
                    <NavLink to='/form' style={{ textDecoration: 'none' }}>
                    <Box className='n1'>
                        <Box><ArticleIcon className='icon'/></Box>
                        <Box><Text sx={{ fontSize: '14px', color: '#6B778C' }}>Form</Text> </Box>
                        </Box>
                    </NavLink>
                    <NavLink to='/employee' style={{ textDecoration: 'none' }}>
                    <Box className='n1'>
                        <Box><PeopleOutlineIcon className='icon'/></Box>
                        <Box><Text sx={{ fontSize: '14px', color: '#6B778C' }}>Employee</Text> </Box>
                        </Box>
                    </NavLink>
                    <NavLink to='/flows' style={{ textDecoration: 'none' }}>
                    <Box className='n1'>
                        <Box><AccountTreeIcon className='icon'/></Box>
                        <Box><Text sx={{ fontSize: '14px', color: '#6B778C' }}>Flows</Text> </Box>
                        </Box>
                    </NavLink>
                    <NavLink to='#' style={{ textDecoration: 'none' }}>
                    <Box className='n1'>
                        <Box><CheckCircleOutlineIcon className='icon'/></Box>
                        <Box><Text sx={{ fontSize: '14px', color: '#6B778C' }}>Approval</Text> </Box>
                        </Box>
                    </NavLink>
                    <NavLink to='/status' style={{ textDecoration: 'none' }}>
                    <Box className='n1'>
                        <Box><AssignmentTurnedInIcon className='icon'/></Box>
                        <Box><Text sx={{ fontSize: '14px', color: '#6B778C' }}>Status</Text> </Box>
                        </Box>
                    </NavLink>
                </Stack>
            </Box>
            <FlowModal open={flow} handleClose={handleFlow} />
        </Box>
    )
}

export default NavMenu
