import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Modal,
  IconButton,
  Button,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { Text, TextInput } from "../styles";
import CloseIcon from "@mui/icons-material/Close";
import axios from "axios";
import { All_Employees, createEmployees } from "../Apis";
import { Insert_Employees_Data } from "../Apis";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  // height: '55%',
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: { sm: "scroll", md: "block" },
};

function RegisterEmpModal({ open, handleClose, update}) {
  const [name, setName] = useState();
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const [empDetail, setEmpDetail] = useState([
    {
      designation: "",
      linemanager: "",
      buddyname: "",
      department_id: "",
      buddy_id: "",
      line_manager_id: "",
      employee_status: "",
    },
  ]);

  let buddy_name = ["Ali", "javeria", "saba", "mudasir"];

  let departments = ["Interne", "Manager", "Developer", "QA"];

  let employee_category = ["Interne", "Manager", "Developer", "QA"];

  let line_managers = ["Ali", "usman", "Hasnain", "Umer"];

  const [empName, setEmpName] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [designation, setDesignation] = useState("");
  const [buddy, setBuddy] = useState();
  const [department, setDepartment] = useState();
  const [catagory, setCatagory] = useState();
  const [lineManager, setLineManager] = useState();
  const [newUserData, setNewUserData] = useState({});
  const [userItems, setUserItems] = useState("");
  const [user, setUser] = useState([{}]);

  // const [empData, setEmpData] = useState();

  // useEffect(() => {
  //     getEmployeData();
  //     postEmpData();
  // }, [])

  const newUserDataHandler = (e) => {
    setNewUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const newUserSelectHandler = (e) => {
    setNewUserData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const createEmployeesApi = async () => {
    console.log("newUserData", newUserData);
    const response = await createEmployees(newUserData);
    setEmpDetail(response);
    response.status === 200 && update();
  };

  // const postEmpData = async () => {

  //     const data = {
  //         employee_name: empName,
  //         created_at: createdAt,
  //         designation: designation,
  //         buddyname : buddy,
  //         linemanager: lineManager,
  //         employee_status : catagory

  //     }

  //     try {
  //         // console.log('empData--------------', empData)
  //         const res = await axios.post('https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com/dev/employee', data)
  //         console.log(res)
  //     } catch (err) {
  //         console.log(err)
  //     }
  // }

  //   const submitUserData = async () => {
  //     const res = await createNewUser(newUserData);
  //     setUserItems(res.rows);
  //    res.status === 200 && setUser((prev) => [...prev, newUserData]);
  //   };

  return (
    <div style={{ overflow: { sm: "scroll", md: "none" } }}>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
        sx={{ display: { sm: "scroll", md: "block" } }}
      >
        <Box sx={style}>
          <IconButton
            aria-label="close"
            onClick={() => handleClose()}      
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#000000",
            }}
          >
            <CloseIcon />
          </IconButton>

          <Grid container spacing={3} sx={{ paddingLeft: 5 }}>
            <Grid item sm={12} md={6}>
              <Box>
                <Text sx={{ fontSize: "16px" }}>Name*</Text>
                <TextInput
                  sx={{ width: "80%" }}
                  placeholder="Davis George"
                  //   value={empName}
                  id="employee_name"
                  onChange={newUserDataHandler}
                />
                <Text sx={{ fontSize: "16px" }}>Date of Joining*</Text>
                <TextInput
                  sx={{ width: "80%" }}
                  placeholder="davis_george"
                  //   value={createdAt}
                  id="date_of_joining"
                  onChange={newUserDataHandler}
                />
                <Text sx={{ fontSize: "16px" }}>Designation*</Text>
                <TextInput
                  sx={{ width: "80%" }}
                  placeholder="davis.george@gmail.com"
                  //   value={designation}
                  id="designation"
                  onChange={newUserDataHandler}
                />
                <Text sx={{ fontSize: "16px" }}>Assign Buddy</Text>
                <FormControl sx={{ width: "80%", backgroundColor: "#ffffff" }}>
                  <Select
                    sx={{ height: "40px" }}
                    // value={buddy}
                    onChange={newUserSelectHandler}
                    name="buddy"
                  >
                    <MenuItem disabled value={0}>
                      <Text sx={{ fontWeight: 300, fontColor: "#6B778C" }}>
                        Select Employee
                      </Text>
                    </MenuItem>
                    {buddy_name.map((data) => (
                      <MenuItem key={data} value={data}>
                        {data}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Box>
            </Grid>

            <Grid item sm={12} md={6}>
              <Box>
                <Box>
                  <Text sx={{ fontSize: "16px" }}>Department*</Text>
                  <FormControl
                    sx={{ width: "80%", backgroundColor: "#ffffff" }}
                  >
                    <Select
                      sx={{ height: "40px", width: "100%" }}
                      value={department}
                      onChange={newUserSelectHandler}
                      name="department"
                    >
                      <MenuItem disabled value={0}>
                        <Text sx={{ fontWeight: 300, fontColor: "#6B778C" }}>
                          Select Department
                        </Text>
                      </MenuItem>
                      {departments.map((data) => (
                        <MenuItem key={data} value={data}>
                          {data}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Text sx={{ fontSize: "16px" }}>Employee Catagory*</Text>
                  <FormControl
                    sx={{ width: "80%", backgroundColor: "#ffffff" }}
                  >
                    <Select
                      sx={{ height: "40px" }}
                      value={catagory}
                      onChange={newUserSelectHandler}
                      name="category"
                    >
                      <MenuItem disabled value={0}>
                        <Text sx={{ fontWeight: 300, fontColor: "#6B778C" }}>
                          Select Category
                        </Text>
                      </MenuItem>
                      {employee_category.map((data) => (
                        <MenuItem value={data}>{data}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <Text sx={{ fontSize: "16px" }}>Line Manager*</Text>
                  <FormControl
                    sx={{ width: "80%", backgroundColor: "#ffffff" }}
                  >
                    <Select
                      sx={{ height: "40px" }}
                      value={lineManager}
                      onChange={newUserSelectHandler}
                      name="manager"
                    >
                      <MenuItem disabled value={0}>
                        <Text sx={{ fontWeight: 300, fontColor: "#6B778C" }}>
                          Select Manager
                        </Text>
                      </MenuItem>
                      {line_managers.map((data) => (
                        <MenuItem key={data} value={data}>
                          {data}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ ml: "40%", paddingTop: 3 }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ width: "135px", height: "40px" }}
              onClick={() => createEmployeesApi()}
            >
              <Text
                sx={{ fontSize: "12px", color: "#ffffff", fontWeight: 300 }}
              >
                Save
              </Text>
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default RegisterEmpModal;
