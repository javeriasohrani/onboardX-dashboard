import React from 'react'
import { Grid } from '@mui/material'
import EmpTable from '../components/EmpTable'
import Navbar from '../components/NavBar'
import Breadcrumb from '../components/Breadcrumb'
import NavMenu from '../components/NavMenu'
import UserProfile from '../components/UserProfile'

function Employee() {
    return (
        <Grid container sx={{ backgroundColor: '#FAFBFC' }}>
            <Grid item sm={1} md={2} >
                <NavMenu />
            </Grid>
            <Grid item sm={11} md={10} >
                <Navbar />
                <Breadcrumb place={"Employees"} />
                <EmpTable />
                {/* <UserProfile /> */}
            </Grid>
        </Grid>
    )
}

export default Employee
