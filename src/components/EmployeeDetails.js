import { Box, } from "@mui/material";
import React from "react";
import NavMenu from '../components/NavMenu';
import { Grid,} from '@mui/material'
import Navbar from "./NavBar";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../components/nav.css';
import UserProfile from "./UserProfile";
import { Link, unstable_HistoryRouter } from "react-router-dom";




 const EmployeeDetails = () => {

    // let history = unstable_HistoryRouter();



    return(
        <>
        <Grid container sx={{ backgroundColor: 'white' }}>
            <Grid item sm={1} md={2} >
                <NavMenu />
            </Grid>
            <Grid item sm={11} md={10} sx={{ backgroundColor: '#F4F5F7' }} >
                <Navbar/>
                <Link to ="/employee" style = {{textDecoration : 'none', color : '#232F57'}}>
                <Box sx={{display : 'flex', flexDirection : 'row', alignItems : 'center'}}>
                    <ArrowBackIcon fontSize="large" />
                    <span className="spanStyle" >Profile</span>
                </Box>
                </Link>
                <UserProfile/>
            </Grid>
        </Grid>
        </>
    );
}
export default EmployeeDetails;

