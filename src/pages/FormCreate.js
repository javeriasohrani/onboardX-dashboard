import React from 'react'
import Navbar from '../components/NavBar'
import Breadcrumb from '../components/Breadcrumb'
import NavMenu from '../components/NavMenu'
import Display from '../components/Display'
import { Grid } from '@mui/material'

function FormCreate() {
    return (
        <Grid container sx={{ backgroundColor: '#FAFBFC' }}>
            <Grid item sm={1} md={2} >
                <NavMenu />
            </Grid>
            <Grid item sm={11} md={10} >
                <Navbar />
                <Breadcrumb place={"Form"} />
                <Display />
            </Grid>
        </Grid>
    )
}

export default FormCreate