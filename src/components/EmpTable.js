import React, { useState, useEffect } from "react";
import RegisterEmpModal from "../modal/RegisterEmpModal";
import { Text } from "../styles";
import { Link } from "react-router-dom";
import {
  Box,
  Grid,
  Select,
  Avatar,
  MenuItem,
  IconButton,
  FormControl,
  Card,
  CardContent,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Fab,
} from "@mui/material";
import { empData } from "../dummydata/Empdata";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@mui/icons-material/Add";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import axios from "axios";
import Spinner from "react-spinner-material";
import { getEmployees } from "../Apis";

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

function EmpTable() {
  const [name, setName] = useState(0);
  const [addemp, setAddEmp] = useState(false);

  const classes = useStyles();
  const handleEmployee = () => {
    setAddEmp(!addemp);
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };
 
  const [employees, setEmployees] = useState([
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
   getEmployeesApi();
  }, []);

  const accessToken = "5IKPzBo1MP9i6fVi1bcYc0Rx5g/eqwiBPfh7Qc31";

  const authAxios = axios.create({
    baseURL: "https://api-vx-onboarding.packagex.xyz/employees/getAllEmployees",
    headers: {
      Authorization: `Bearer${accessToken}`,
    },
  });
  const getEmployeesApi = async () =>{
    const res = await getEmployees()
    console.log("get employee data", res);
    setEmployees(res.data);

  }
  // const getEmployees = async () => {
  //   setIsLoading(true);
  //   const res = await axios
  //     .get(
  //       "https://api-vx-onboarding.packagex.xyz/employees/getAllEmployees"
  //     )
  //     .then((res) => {
  //       // console.log(res.data)
  //       setEmployees(res.data);
  //       setIsLoading(false);
  //     });
  //   // .catch(error => console.error(`Error ${error}`));
  // };

  
  const DeleteEmp = (deleteID) => {
    // alert(deleteID)
    const res = authAxios
      .delete(`all-employees/${deleteID}`)
      .then((responce) => {
        console.log(responce.data);
      })
      .catch((error) => console.error(`Deletion Error ${error}`));
  };

  return (
    <Box sx={{ bgcolor: "#F4F5F7", overflow: { md: "hidden", xs: "auto" } }}>
      <Grid container sx={{ height: "40%", p: "20px" }}>
        <Grid item xs={12} md={12} sx={{ paddingBottom: "15px" }}>
          <FormControl sx={{ width: "250px", backgroundColor: "#ffffff" }}>
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
               {employees.map((item) => (
                <MenuItem value={item.employee_id}>
                  {item.employee_name}
                </MenuItem>
              ))} 
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12} sx={{ height: "70vh" }}>
          <Card sx={{ height: "100%", width: "100%" }}>
            <CardContent>
              {isLoading ? (
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Spinner
                    size={120}
                    spinnerColor={"#333"}
                    spinnerWidth={2}
                    visible={true}
                  />
                </div>
              ) : null}
              <TableContainer
                className={classes.root}
                component={Box}
                sx={{ height: "100%", width: "100%" }}
              >
                <Table stickyHeader={true} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Text sx={{ fontSize: "14px" }}> Employee Name!!!</Text>
                      </TableCell>
                      <TableCell align="center">
                        <Text sx={{ fontSize: "14px" }}>Department</Text>
                      </TableCell>
                      <TableCell align="right">
                        <Text sx={{ fontSize: "14px" }}>Line Manager</Text>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employees.map((data) => (
                      <TableRow
                        key={data.name}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          <Box
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              flexDirection: "row",
                            }}
                          >
                            <Avatar sx={{ mr: "10px" }} />
                            {data.employee_name}
                          </Box>
                        </TableCell>
                        <TableCell align="center">{data.designation}</TableCell>
                        <TableCell align="right">{data.linemanager}</TableCell>
                        <TableCell align="right">
                          <Box>
                            <Link to={`/user-profile/${data.employee_id}`}>
                              <IconButton edge="end" aria-label="delete">
                                <BorderColorOutlinedIcon
                                  sx={{
                                    color: "#2f49a1",
                                    paddingRight: "20px",
                                  }}
                                />
                              </IconButton>
                            </Link>
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => DeleteEmp(data.employee_id)}
                            >
                              <DeleteOutlinedIcon sx={{ color: "#FF3E3E" }} />
                            </IconButton>
                          </Box>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
          <Fab
            onClick={handleEmployee}
            color="primary"
            aria-label="add"
            sx={{
              position: "absolute",
              bottom: { md: 35, xs: 5 },
              right: { md: 35, xs: 0 },
            }}
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
      <RegisterEmpModal open={addemp} handleClose={handleEmployee} update={getEmployeesApi}/>
    </Box>
  );
}

export default EmpTable;
