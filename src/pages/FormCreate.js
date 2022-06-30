import React from "react";
import Navbar from "../components/NavBar";
import Breadcrumb from "../components/Breadcrumb";
import NavMenu from "../components/NavMenu";
import Display from "../components/Display";
import { Grid } from "@mui/material";
import { useLocation } from "react-router-dom";

function FormCreate() {
  let {state} = useLocation();
  console.log("USE PARAMS", state);

  return (
    <Grid container sx={{ backgroundColor: "#FAFBFC" }}>
      <Grid item sm={1} md={2}>
        <NavMenu />
      </Grid>
      <Grid item sm={11} md={10}>
        <Navbar />
        <Breadcrumb place={"Form"} />
        <Display formData={state}/>
      </Grid>
    </Grid>
  );
}

export default FormCreate;
