import React, { useState, useEffect } from "react";
import { formData } from "../dummydata/Formdata";
import { empData } from "../dummydata/Empdata";
import { Text } from "../styles";
import {
  Box,
  Grid,
  Select,
  Avatar,
  MenuItem,
  FormControl,
  ListItemAvatar,
  Card,
  CardContent,
  Divider,
  Link as MLink,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { makeStyles } from "@material-ui/core/styles";
import ImageIcon from "@mui/icons-material/Image";
import { Link } from "react-router-dom";
import FlowModal from "../modal/FlowModal";
import { SettingsRemoteSharp } from "@mui/icons-material";
import { isDisabled } from "@testing-library/user-event/dist/utils";
import axios from "axios";
import RegisterEmpModal from "../modal/RegisterEmpModal";
import { All_Employees, All_Form_Data } from "../Apis";
import Spinner from "react-spinner-material";
import { InputLabel } from "@mui/material";
import TaskProgressComponent from "./taskComplete/TaskProgressComponent";
import FormTable from "./form/FormTable";
import EmployeeList from "./EmployeeList";
import SuperEmpDetail from "./SuperEmpDetail";

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

function Dash() {
  const classes = useStyles();
  const completed = 50;
  const progress = 35;
  const overdue = 25;
  const [name, setName] = useState(0);
  const [flow, setFlow] = useState(false);
  const [addemp, setAddEmp] = useState(false);

  const handleClick = (name) => {
    console.log("I am Clicked", name);
  };

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleFlow = () => {
    setFlow(!flow);
  };

  const addnewEmployee = () => {
    setAddEmp(!addemp);
  };

  // const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([
    {
      employee_name: "",
      employee_id: "",
    },
  ]);

  const [allForms, setallForms] = useState([
    {
      form_id: "",
      form_name: "",
      created_at: "",
      created_by: "",
    },
  ]);

  const [employees, setEmployees] = useState([
    {
      form_id: "",
      employee_name: "",
      designation: "",
      image_url: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getData();
    getFormData();
    getEmployees();
  }, []);

  const getData = async () => {
    setIsLoading(true);
    await axios.get(All_Employees).then((res) => {
      console.log(res.data);
      setItems(res.data);
    });
    // .catch(error => console.error(`Error ${error}`));
  };

  const getFormData = async () => {
    await axios.get(All_Form_Data).then((formRes) => {
      console.log("All_Form_Data", formRes.data)
      setallForms(formRes.data);
      console.log("form", formRes);
    });
    // .catch(error => console.error(`Error ${error}`));
  };

  const getEmployees = async () => {
    setIsLoading(true);
    axios.get(All_Employees).then((res) => {
      console.log(res.data);
      setEmployees(res.data);
      setIsLoading(false);
    });
    // .catch(error => console.error(`Error ${error}`));
  };

  return (
    <Box>
      <Box
        sx={{
          overflow: { md: "hidden", xs: "auto" },
          maxWidth: "100%",
          height: "1024px",
          background: "#F4F5F7",
          paddingLeft: "20px",
        }}
      >
        <Grid container sx={{ p: "20px" }}>
          <Grid
            item
            xs={12}
            md={12}
            sx={{ paddingBottom: "15px", marginRight: "48px" }}
          >
            <FormControl sx={{ width: "250px", backgroundColor: "#ffffff" }}>
              {/* <InputLabel id="demo-multiple-name-label">Select Employee</InputLabel> */}

              <Select
                sx={{ height: "40px" }}
                value={name}
                onChange={handleChange}
              >
                <MenuItem value={0}>
                  <Text
                    sx={{
                      fontFamily: "Mulish",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "20px",
                      display: "flex",
                      alignItems: "center",
                      color: "#6B778C",
                    }}
                  >
                    All Employee
                  </Text>
                </MenuItem>
                {items.map((item) => (
                  <MenuItem key={item.employee_id} value={item.employee_id}>
                    {item.employee_id && (
                      <Text
                        sx={{
                          fontFamily: "Mulish",
                          fontStyle: "normal",
                          fontWeight: 400,
                          fontSize: "16px",
                          lineHeight: "20px",
                          display: "flex",
                          alignItems: "center",
                          color: "#6B778C",
                        }}
                      >
                        {item.employee_name}
                      </Text>
                    )}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          {/* TaskProgressComponent here */}
          <Grid container spacing={3} xs={12} md={12}>
            <Grid item xs={12} md={4} sx={{ minWidth: "33.3%" }}>
              <TaskProgressComponent status="completed" completed={completed} />
            </Grid>

            <Grid item xs={12} md={4} sx={{ minWidth: "33.3%" }}>
              <TaskProgressComponent
                status="Inprogress"
                completed={completed}
              />
            </Grid>

            <Grid item xs={12} md={4} sx={{ minWidth: "33.3%" }}>
              <TaskProgressComponent status="overdue" completed={completed} />
            </Grid>
          </Grid>

          {!name && (
            <Grid
              container
              spacing={2}
              xs={12}
              md={12}
              sx={{ paddingTop: "20px" }}
            >
              {/* FormTable Component here */}
              <Grid
                item
                xs={12}
                md={8}
                sx={{ height: "100%", mt: "20px", Width: "50%" }}
              >
                <FormTable
                  allForms={allForms}
                  isLoading={isLoading}
                  handleClick={handleClick}
                  handleFlow={handleFlow}
                  getEmployees={getEmployees}
                />
              </Grid>
              {/* EmployeeList component here */}
              <Grid item xs={12} md={4} sx={{ mt: "10px", Width: "35%" }}>
                <EmployeeList
                  handleFlow={addnewEmployee}
                  employees={employees}
                  getEmployees={getEmployees}
                />
              </Grid>
            </Grid>
          )}
        </Grid>
        {/* SuperEmpDetail component here */}
        {!!name && <SuperEmpDetail eId={name} />}
        {/* <RegisterEmpModal open={flow} handleClose={handleFlow} /> */}

        <RegisterEmpModal open={addemp} handleClose={addnewEmployee} />
      </Box>
    </Box>
  );
}

export default Dash;
