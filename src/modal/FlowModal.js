import React, { useEffect, useState } from "react";
import { empData } from "../dummydata/Empdata";
import { formData } from "../dummydata/Formdata";
import FinishModal from "./FinishModal";
import {
  Modal,
  Box,
  IconButton,
  ButtonGroup,
  Stepper,
  Step,
  Stack,
  StepLabel,
  Button,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableCell,
  TableBody,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { Text, StyledTableRow } from "../styles";
import CloseIcon from "@mui/icons-material/Close";
import TableFlow from "../components/TableFlow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { All_Form_Data, AssignForm } from "../Apis";
import axios from "axios";
import AssignaDeadline from "../components/AssignaDeadline";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "65%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  display: { sm: "scroll", md: "block" },
};
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

const steps = ["Select Form", "Assign Deadline", "Select Employee", "Publish"];
const header1 = ["Form Name", "Created Date", "Created By"];
const header2 = ["Employee Name", "Department", "Line Manager"];

function FlowModal({ open, handleClose, handleChange, handlerChange }) {
  const classes = useStyles();
  const [day1, setDay1] = useState(0);
  const [employeeData, setEmployeeData] = useState([]);
  const [bankData, setBankData] = useState([]);

  const setEmployeeDataHandler = (data) => {
    setEmployeeData(data)
    setFlowData((prevState) => ({
      ...prevState,

      employee_id: data[0],
    }));
    setEmployeeData(data);
  };
  const setBankDataHandler = (data) => {
    setBankData(data);
    setFlowData((prevState) => ({
      ...prevState,

      form_id: data[0],
    }));
  };

  console.log(bankData, "bankdata", employeeData);

  const handleDay1Increment = () => {
    setDay1((preday) => preday + 1);
  };
  const handleDay1Decrement = () => {
    day1 > 0 && setDay1((preday) => preday - 1);
  };

  const [day2, setDay2] = useState(0);
  const handleDay2Increment = () => {
    setDay2((preday) => preday + 1);
  };
  const handleDay2Decrement = () => {
    day2 > 0 && setDay2((preday) => preday - 1);
  };
  const [publishData, setPublishData] = "";
  const [finish, setFinish] = useState(false);
  const handleFinish = () => {
    setFinish(!finish);
  };

  const [empSelect, setEmpSelect] = useState(0);
  const handleEmpSelect = (event) => {
    setEmpSelect(event.target.value);
  };
  const [formSelect, setFormSelect] = useState(0);
  const handleFormSelect = (event) => {
    debugger;
    setFormSelect(event.target.value);
  };
  const [activeStep, setActiveStep] = useState(0);
  const handleNext = () => {
    // setFlowData({ form_id: form_id})
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const [flowData, setFlowData] = useState({
    form_id: "",
    form_name: "",
    assigned_date: "",
    created_at: "",
    created_by: "",
    employee_id: "",
    employee_name: "",
    designation: "",
    linemanager: "",
  });

  const handlePublish = async () => {
    AssignFormApi(flowData);
    handleClose();
    handleFinish();
    setActiveStep(0);
    console.log("API");
  };

  console.log(flowData, "flowdata");
  const AssignFormApi = async (params) => {
    let assign = {
      form_id: params.form_id,
      employee_id: params.employee_id,
      status: "PENDING",
      assigned_date: params.assignDate,
      form_name: params.formName,
      created_at: params.createdAt,
      created_by: params.createdBy,
      employee_name: params.EmployeeName,
      designation: params.Designation,
      linemanager: params.linemanager,
    };
    const res = await AssignForm(assign);
    // setFlowData(res);
  };

  // const createFormApi = async () => {
  //   let form = {
  //     form_id: 2,
  //     form_name: formName.name,
  //     form_fields: data,
  //     user_id: 265,
  //     flow_name: "Onboarding Interns",
  //     flow_name: formName.description,
  //     created_by: "Javeria Baloch",
  //   };
  //   const res = await createForm(form);
  // };

  return (
    <div style={{ display: { sm: "scroll", md: "block" } }}>
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
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "#000000",
            }}
          >
            <CloseIcon />
          </IconButton>
          <Box sx={{ width: "95%", p: "15px" }}>
            <Stepper activeStep={activeStep}>
              {steps.map((label, index) => {
                return (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                );
              })}
            </Stepper>
            {activeStep === steps.length ? null : (
              <React.Fragment>
                <Box sx={{ height: "46vh", width: "98%", p: "15px" }}>
                  {activeStep === 0 && (
                    <Box>
                      <Text>{steps[activeStep]}</Text>

                      <TableFlow
                        header={header1}
                        data={formData}
                        handleChange={handleChange}
                        dataUpdater={(data) => setBankDataHandler(data)}
                        type="form"
                      />
                    </Box>
                  )}
                  {activeStep === 1 && (
                    <Box>
                      <Text>{steps[activeStep]}</Text>
                      <AssignaDeadline />
                    </Box>
                  )}
                  {activeStep === 2 && (
                    <Box>
                      <Text>{steps[activeStep]}</Text>
                      <TableFlow
                        header={header2}
                        data={empData}
                        handlerChange={handlerChange}
                        dataUpdater={(data) => setEmployeeDataHandler(data)}
                        type="employee"
                      />
                    </Box>
                  )}
                  {activeStep === 3 && (
                    <Box display="flex" justifyContent="center" mt="18%">
                      <TextField
                        placeholder="Name this Flow"
                        sx={{
                          width: "400px",
                          boxShadow: "0px 4px 4px rgba(223, 223, 223, 0.25)",
                        }}
                      />
                    </Box>
                  )}
                </Box>
                <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
                  <Button
                    variant="contained"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1, width: "135px", height: "30px" }}
                  >
                    <Text
                      sx={{
                        fontSize: "12px",
                        color: "#ffffff",
                        fontWeight: 300,
                      }}
                    >
                      Back
                    </Text>
                  </Button>
                  <Box sx={{ flex: "1 1 auto" }} />

                  <Button
                    onClick={() => {
                      activeStep === steps.length - 1
                        ? handlePublish()
                        : handleNext();
                    }}
                    variant="contained"
                    sx={{ width: "135px", height: "30px" }}
                  >
                    <Text
                      sx={{
                        fontSize: "12px",
                        color: "#ffffff",
                        fontWeight: 300,
                      }}
                    >
                      {activeStep === steps.length - 1 ? "Publish!!!!" : "Next"}
                    </Text>
                  </Button>
                </Box>
              </React.Fragment>
            )}
          </Box>
        </Box>
      </Modal>
      <FinishModal open={finish} handleClose={handleFinish} />
    </div>
  );
}

export default FlowModal;
