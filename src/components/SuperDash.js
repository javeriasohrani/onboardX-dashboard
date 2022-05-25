import React from 'react'
import { Grid } from '@mui/material'
import Dash from '../components/Dash'
import Navbar from '../components/NavBar'
import Breadcrumb from '../components/Breadcrumb'
import NavMenu from '../components/NavMenu'
import SuperEmpDetail from './SuperEmpDetail'

function SuperDash() {
    return (
        <Grid container sx={{ backgroundColor: '#FAFBFC' }}>
            <Grid item sm={1} md={2} >
                <NavMenu />
            </Grid>
            <Grid item sm={11} md={10} >
                <Navbar />
                <Breadcrumb place={"Dashboard"}/>
                <SuperEmpDetail />
            </Grid>
        </Grid>
    )
}

export default SuperDash
