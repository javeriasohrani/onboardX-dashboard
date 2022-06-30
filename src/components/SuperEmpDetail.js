import React, { useState, useEffect } from "react";
import { Text } from "../styles";
import {
  Box,
  Grid,
  Select,
  MenuItem,
  FormControl,
  Card,
  CardContent,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import ImageIcon from "@mui/icons-material/Image";
import { Link } from "react-router-dom";
import FlowModal from "../modal/FlowModal";
import Haily from "../images/Haily.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { All_Employees_Form_Status_Detail } from "../Apis";
import { All_Employees } from "../Apis";
import IndividualEmployeeComponent from "./IndividualEmployeeComponent";
import EmployeeTable from "./EmployeeTable";

const useStyles = makeStyles(() => ({
  root: {
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "&::-webkit-scrollbar-track": {
      display: "none",
    },
    "&::-webkit-scrollbar-thumb": {
      display: "none",
    },
    "&::-webkit-scrollbar-corner": {
      display: "none",
    },
  },
}));

function SuperEmpDetail({ eId }) {
  const classes = useStyles();
  const completed = 50;
  const progress = 25;
  const overdue = 25;
  const [name, setName] = useState();
  const [flow, setFlow] = useState(false);

  const handleClick = () => {
    console.log("I am Clicked");
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleFlow = () => {
    setFlow(!flow);
  };

  // const { eId } = useParams();

  const [empInfo, setempInfo] = useState([
    {
      employee_id: "",
      employee_name: "",
      buddyname: "",
      image_url: "",
      designation: "",
      date_of_joining: "",
      user_id: "",
      created_at: "",
      updated_at: "",
      employee_status: "",
      image_url: "",
      video_url: "",
      department_id: "",
      employement_catagory_id: "",
      line_manager_id: "",
      buddy_id: "",
      linemanager: "",
    },
  ]);

  const [formDetail, setFormDetail] = useState([
    {
      form_id: "",
      form_status: "",
      form_name: "",
      date_of_joining: "",
      employee_id: "",
    },
  ]);

  useEffect(() => {
    getData();
    getFormDetail();
  }, [eId]);

  const getData = async () => {
    const res = await axios
      .get(
        `https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com/dev/employee/${eId}`
      )
      .then((res) => {
        // console.log(res.data)
        setempInfo(res.data);
      });
    // .catch(error => console.error(`Error ${error}`));
  };

  const getFormDetail = async () => {
    try {
      const responce = await axios.get(
        `https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com/dev/formStatus-detail?employee_id=${eId}`
      );
      console.log("EmployeeTable",responce.data);
      setFormDetail(responce.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box
      sx={{
      
        backgroundColor: "#F4F5F7",
        overflow: { md: "hidden", xs: "auto" },
      }}
    >
      <Grid container sx={{ p: "20px"}}>
        <Grid container spacing={2} xs={12} md={12} sx={{ paddingTop: "9px" }}>
          
          {/* Table */}
          <Grid item xs={12} md={8} sx={{ height: "100%", p: "10px" }}>
            <EmployeeTable formDetail={formDetail} handleFlow={handleFlow} />
          </Grid>

          {/* individual employe profile */}
          <Grid item xs={12} md={4} sx={{ p: "10px" }}>
            <IndividualEmployeeComponent empInfo={empInfo} />
          </Grid>
        </Grid>
      </Grid>
      <FlowModal open={flow} handleClose={handleFlow} />
    </Box>
  );
}

export default SuperEmpDetail;
