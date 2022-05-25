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
  const progress = 25;
  const overdue = 25;
  const [name, setName] = useState(0);
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

  const [empoyees, setEmpoyees] = useState([
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
    const res = await axios.get(All_Employees).then((res) => {
      console.log(res.data);
      setItems(res.data);
    });
    // .catch(error => console.error(`Error ${error}`));
  };

  const getFormData = async () => {
    const formRes = await axios.get(All_Form_Data).then((formRes) => {
      // console.log(formRes.data)
      setallForms(formRes.data);
    });
    // .catch(error => console.error(`Error ${error}`));
  };

  const getEmployees = async () => {
    setIsLoading(true);
    const res = await axios.get(All_Employees).then((res) => {
      // console.log(res.data)
      setEmpoyees(res.data);
      setIsLoading(false);
    });
    // .catch(error => console.error(`Error ${error}`));
  };

  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#F4F5F7",
          overflow: { md: "hidden", xs: "auto" },
        }}
      >
        <Grid container sx={{ p: "20px" }}>
          <Grid item xs={12} md={12} sx={{ paddingBottom: "15px" }}>
            <FormControl sx={{ width: "250px", backgroundColor: "#ffffff" }}>
              {/* <InputLabel id="demo-multiple-name-label">Select Employee</InputLabel> */}

              <Select
                sx={{ height: "40px" }}
                value={name}
                onChange={handleChange}
              >
                <MenuItem disabled value={0}>
                  <Text sx={{ fontWeight: 300, fontColor: "#6B778C" }}>
                    Select Employee
                  </Text>
                </MenuItem>
                {items.map((item) => (
                  <Link
                    to={`/super-dash/${item.employee_id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <MenuItem key={item.employee_id} value={item.employee_name}>
                      <Text>{item.employee_name}</Text>
                    </MenuItem>
                  </Link>
                ))}

                {/* <MenuItem disabled value={0}>
                                <Text sx={{ fontWeight: 300, fontColor: "#6B778C" }}>Select Employee</Text>
                            // </MenuItem> */}
                {/* // <Link to = '/super-dash' style={{textDecoration : 'none'}}>
                                
                            // <MenuItem value={1}><Text>Haris Khan</Text></MenuItem>
                            // </Link> */}
              </Select>
            </FormControl>
          </Grid>

          <Grid container spacing={3} xs={12} md={12}>
            <Grid item xs={12} md={4}>
              <Card sx={{ height: "85%", width: "100%", py: 1 }}>
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Box>
                    <Text
                      sx={{ fontWeight: 600, fontSize: "42px", mt: "10px" }}
                    >
                      90
                    </Text>
                    <Text
                      sx={{ fontWeight: 600, fontSize: "18px", mt: "10px" }}
                    >
                      Completed Tasks
                    </Text>
                  </Box>
                  <Box sx={{ width: "35%", ml: "25px" }}>
                    <CircularProgressbar
                      strokeWidth={12}
                      value={completed}
                      text={`${completed}%`}
                      styles={buildStyles({
                        strokeLinecap: "butt",
                        textColor: "#232F57",
                        pathColor: "#36B37E",
                        trailColor: "#F4F5F7",
                      })}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: "85%", width: "100%", py: 1 }}>
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Box>
                    <Text
                      sx={{ fontWeight: 600, fontSize: "42px", mt: "10px" }}
                    >
                      80
                    </Text>
                    <Text
                      sx={{ fontWeight: 600, fontSize: "18px", mt: "10px" }}
                    >
                      In Progress Tasks
                    </Text>
                  </Box>
                  <Box sx={{ width: "35%", ml: "25px" }}>
                    <CircularProgressbar
                      strokeWidth={12}
                      value={progress}
                      text={`${progress}%`}
                      styles={buildStyles({
                        strokeLinecap: "butt",
                        textColor: "#232F57",
                        pathColor: "#FFAB00",
                        trailColor: "#F4F5F7",
                      })}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4}>
              <Card sx={{ height: "85%", width: "100%", py: 1 }}>
                <CardContent
                  sx={{ display: "flex", justifyContent: "flex-start" }}
                >
                  <Box>
                    <Text
                      sx={{ fontWeight: 600, fontSize: "42px", mt: "10px" }}
                    >
                      90
                    </Text>
                    <Text
                      sx={{ fontWeight: 600, fontSize: "18px", mt: "10px" }}
                    >
                      Overdue Tasks
                    </Text>
                  </Box>
                  <Box sx={{ width: "35%", ml: "25px" }}>
                    <CircularProgressbar
                      strokeWidth={12}
                      value={overdue}
                      text={`${overdue}%`}
                      styles={buildStyles({
                        strokeLinecap: "butt",
                        textColor: "#232F57",
                        pathColor: "#FF5630",
                        trailColor: "#F4F5F7",
                      })}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            xs={12}
            md={12}
            sx={{ paddingTop: "9px" }}
          >
            <Grid item xs={12} md={8} sx={{ height: "100%", p: "10px" }}>
              <Card sx={{ height: "100%", width: "100%" }}>
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text sx={{ fontSize: "24px" }}>Forms</Text>

                    <Button
                      variant="contained"
                      sx={{ width: "135px", height: "30px" }}
                      onClick={handleFlow}
                    >
                      <Text
                        sx={{
                          fontSize: "12px",
                          color: "#ffffff",
                          fontWeight: 300,
                        }}
                      >
                        New Form
                      </Text>
                    </Button>
                  </Box>
                  <TableContainer
                    className={classes.root}
                    component={Box}
                    sx={{ width: "100%" }}
                  >
                    {isLoading ? (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Spinner
                          size={120}
                          spinnerColor={"#333"}
                          spinnerWidth={2}
                          visible={true}
                        />
                      </div>
                    ) : null}
                    <Table stickyHeader={true}>
                      <TableHead>
                        <TableRow>
                          <TableCell>
                            <Text sx={{ fontSize: "14px" }}>Form Name</Text>
                          </TableCell>
                          <TableCell align="center">
                            <Text sx={{ fontSize: "14px" }}>Date Created</Text>
                          </TableCell>
                          <TableCell align="right">
                            <Text sx={{ fontSize: "14px" }}>Created By</Text>
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {allForms.map((data) => (
                          <TableRow
                            key={data.form_id}
                            onClick={() => handleClick()}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {data.form_name}
                            </TableCell>
                            <TableCell align="center">
                              {data.created_at}
                            </TableCell>
                            <TableCell align="right">
                              {data.created_by}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={4} sx={{ p: "10px" }}>
              <Card sx={{ height: "100%", width: "100%" }}>
                <CardContent>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Text sx={{ fontSize: "24px" }}>Employees</Text>
                    <Button
                      variant="contained"
                      sx={{ width: "135px", height: "30px" }}
                      onClick={handleFlow}
                    >
                      <Text
                        sx={{
                          fontSize: "12px",
                          color: "#ffffff",
                          fontWeight: 300,
                        }}
                      >
                        New Employee
                      </Text>
                    </Button>
                  </Box>

                  <List
                    className={classes.root}
                    sx={{ width: "100%", overflow: "auto" }}
                  >
                    {isLoading ? (
                      <div
                        style={{ display: "flex", justifyContent: "center" }}
                      >
                        <Spinner
                          size={120}
                          spinnerColor={"#333"}
                          spinnerWidth={2}
                          visible={true}
                        />
                      </div>
                    ) : null}
                    {empoyees.map((emp) => (
                      <>
                        <ListItem>
                          <ListItemAvatar>
                            <div
                              style={{
                                height: "30px",
                                width: "30px",
                                borderRadius: "50%",
                              }}
                            >
                              <img
                                src={emp.image_url}
                                style={{
                                  height: "30px",
                                  width: "30px",
                                  borderRadius: "50%",
                                }}
                              />
                            </div>
                          </ListItemAvatar>
                          <ListItemText
                            primary={emp.employee_name}
                            secondary={emp.designation}
                          />
                        </ListItem>
                        <Divider />
                      </>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        {/* <RegisterEmpModal open={flow} handleClose={handleFlow} /> */}
      </Box>
    </Box>
  );
}

export default Dash;
