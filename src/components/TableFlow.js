import React from "react";
import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableBody,
  Button,
  Checkbox,
  TextField,
} from "@mui/material";
import { All_Form_Data } from "../Apis";
import { makeStyles } from "@material-ui/core/styles";
import { Text, StyledTableRow } from "../styles";
import axios from "axios";
import { getForms } from "../Apis";
import { useState, useEffect } from "react";
import { All_Employees } from "../Apis";
import Spinner from "react-spinner-material";

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

function TableFlow({ header, data, type,dataUpdater,setFlowData }) {
  const classes = useStyles();
  const [searchText, setSearchText] = useState("");
  const [selectedBank,setSelectedBank] = useState([])
  useEffect(()=>{
    if(selectedBank.length){
      dataUpdater(selectedBank)
    }
  },[selectedBank])
  const [selectedEmployee,setSelectedEmployee] = useState([])
  useEffect(()=>{
    if(selectedEmployee.length){
      dataUpdater(selectedEmployee)
    }
  },[selectedEmployee])

  const [modalFormData, setModalFormData] = useState([
    {
      form_id: "",
      form_name: "",
      created_at: "",
      created_by: "",
    },
  ]);
  const [modalEmpData, setModalEmpData] = useState([
    {
      employee_name: "",
      designation: "",
      linemanager: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  const getEmployeeData = () => {
    setIsLoading(true);
    axios.get(All_Employees).then((res) => {
      setModalEmpData(res.data);
      setIsLoading(false);
    });
  };
  const handleChange = (e) => {
    let isChecked = e.target.checked;
    let isCheckedValue = e.target.value;
    if(isChecked){
      setSelectedBank([...selectedBank,isCheckedValue])
    } else{
        let tempBankSelected = [...selectedBank];
        tempBankSelected.splice(0,tempBankSelected.indexOf(isCheckedValue))
      setSelectedBank([...tempBankSelected])
    }
    console.log(selectedBank,'form')
    // setModalFormData()
  };
  const handlerChange = (e) => {
    let isChecked = e.target.checked;
    let isCheckedValue = e.target.value;
    if(isChecked){
      setSelectedEmployee([...selectedEmployee,isCheckedValue])
    } else{
        let tempEmployeeSelected = [...selectedEmployee];
        tempEmployeeSelected.splice(0,tempEmployeeSelected.indexOf(isCheckedValue))
      setSelectedEmployee([...tempEmployeeSelected])
    }
    console.log(selectedEmployee)
    // setModalEmpData()
  };
  useEffect(() => {
    getFormsApi();
    getEmployeeData();
  }, []);

  const getFormsApi = async () => {
    const response = await getForms();
    console.log("res");
    setModalFormData(response.data);
  };

  const searchHandlerForm = (event) => {
    setSearchText(event.target.value);
    console.log(event.target.value);

    type === "form" ? formApiCall(searchText) : employeeApiCall(searchText);
  };

  const formApiCall = (text) => {};
  const employeeApiCall = (text) => {};

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", ml: "5px" }}>
        <TextField
          id="search"
          value={searchText}
          placeholder="Search Here"
          sx={{ "& .MuiInputBase-input": { height: "0px" } }}
          onChange={searchHandlerForm}
        />
        <Button
          variant="contained"
          sx={{ width: "135px", height: "30px", backgroundColor: "#ffffff" }}
        >
          <Text sx={{ fontSize: "12px", color: "black", fontWeight: 300 }}>
            {type === "form" ? "New Form" : "Add Employee"}
          </Text>
        </Button>
      </Box>
      <TableContainer
        component={Box}
        className={classes.root}
        sx={{ height: "35vh" }}
      >
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
        <Table
          stickyHeader={true}
          size="small"
          sx={{ borderSpacing: "0px 5px" }}
        >
          <TableHead>
            <StyledTableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  color="secondary"
                  // checked={checkedItems}
                />
              </TableCell>
              {header.map((head, index) => {
                return (
                  <TableCell
                    key={index}
                    align={index === 0 ? "left" : "center"}
                  >
                    <Text sx={{ fontSize: "14px" }}> {head} </Text>
                  </TableCell>
                );
              })}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {type === "form" ? (
              <>
                {Object.keys(modalFormData)?.map((data) => (
                  <StyledTableRow
                    hover
                    key={data.name}
                    onChange={(e) => handleChange(e)}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        onChange={(e) => handleChange(e)}
                        value={data.form_id}
                        // inputProps={{
                        //     'aria-labelledby': labelId,
                        // }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Text
                        sx={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          fontWeight: "600",
                        }}
                      >
                        {" "}
                        {data.form_name}{" "}
                      </Text>
                    </TableCell>
                    <TableCell align="center">
                      <Text
                        sx={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          fontWeight: "600",
                        }}
                      >
                        {" "}
                        {data.created_at}{" "}
                      </Text>
                    </TableCell>
                    <TableCell align="center">
                      <Text
                        sx={{
                          fontSize: "14px",
                          lineHeight: "20px",
                          fontWeight: "600",
                        }}
                      >
                        {" "}
                        {data.created_by}{" "}
                      </Text>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </>
            ) : (
              <>
                {modalEmpData.map((data) => (
                  <StyledTableRow
                    hover
                    key={data.name}
                    onChange={(e) => handlerChange(e,)}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        value={data.employee_id}
                        onChange={(e) => handlerChange(e)}
                        color="primary"
                        // checked={isItemSelected}
                        // inputProps={{
                        //     'aria-labelledby': labelId,
                        // }}
                      />
                    </TableCell>
                    <TableCell component="th" scope="row">
                      <Text sx={{ fontSize: "14px", lineHeight: "20px" }}>
                        {" "}
                        {data.employee_name}{" "}
                      </Text>
                    </TableCell>
                    <TableCell align="center">
                      <Text sx={{ fontSize: "14px", lineHeight: "20px" }}>
                        {" "}
                        {data.designation}{" "}
                      </Text>
                    </TableCell>
                    <TableCell align="center">
                      <Text sx={{ fontSize: "14px", lineHeight: "20px" }}>
                        {" "}
                        {data.linemanager}{" "}
                      </Text>
                    </TableCell>
                  </StyledTableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TableFlow;
