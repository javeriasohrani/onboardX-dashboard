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
  CardHeader,
  ListItemAvatar,
  Card,
  CardContent,
  Divider,
  CardActions,
  Stack,
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
import Haily from "../images/Haily.jpg";
import { useParams } from "react-router-dom";
import axios from "axios";
import { All_Employees_Form_Status_Detail } from "../Apis";
import { All_Employees } from "../Apis";

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

function SuperEmpDetail() {
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

  const { eId } = useParams();

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

  const { id } = useParams();
  // console.log(id)

  useEffect(() => {
    getData();
    getFormDetail();
  }, []);

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
      console.log(responce.data);
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
      <Grid container sx={{ p: "20px" }}>
        <Grid item xs={12} md={12} sx={{ paddingBottom: "15px" }}>
          <FormControl sx={{ width: "250px", backgroundColor: "#ffffff" }}>
            <Select
              sx={{ height: "40px" }}
              value={name}
              onChange={handleChange}
            >
              <MenuItem disabled value={0}>
                {/* <Text sx={{ fontWeight: 300, fontColor: "#6B778C" }}>Select Employee</Text> */}
              </MenuItem>

              {/* <MenuItem value = {0}><Text></Text></MenuItem> */}
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
                  <Text sx={{ fontWeight: 300, fontSize: "42px", mt: "10px" }}>
                    90
                  </Text>
                  <Text sx={{ fontWeight: 400, fontSize: "18px", mt: "10px" }}>
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
                  <Text sx={{ fontWeight: 300, fontSize: "42px", mt: "10px" }}>
                    90
                  </Text>
                  <Text sx={{ fontWeight: 400, fontSize: "18px", mt: "10px" }}>
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
                  <Text sx={{ fontWeight: 300, fontSize: "42px", mt: "10px" }}>
                    90
                  </Text>
                  <Text sx={{ fontWeight: 400, fontSize: "18px", mt: "10px" }}>
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

        <Grid container spacing={2} xs={12} md={12} sx={{ paddingTop: "9px" }}>
          <Grid item xs={12} md={8} sx={{ height: "100%", p: "10px" }}>
            <Card sx={{ height: "100%", width: "100%" }}>
              <CardContent>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Text sx={{ fontSize: "24px" }}>Assigned Forms</Text>

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
                      New Foam
                    </Text>
                  </Button>
                </Box>
                <TableContainer
                  className={classes.root}
                  component={Box}
                  sx={{ height: "500px", width: "100%" }}
                >
                  <Table stickyHeader={true}>
                    <TableHead>
                      <TableRow>
                        <TableCell>
                          <Text sx={{ fontSize: "14px" }}>Form Name</Text>
                        </TableCell>
                        <TableCell align="center">
                          <Text sx={{ fontSize: "14px" }}>Assigned Date</Text>
                        </TableCell>
                        <TableCell align="right">
                          <Text sx={{ fontSize: "14px" }}>Status</Text>
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {formDetail.map((data) => (
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
                            {data.date_of_joining}
                          </TableCell>
                          <TableCell align="right">
                            {data.form_status}
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
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Text sx={{ fontSize: "24px" }}>Profile</Text>

                  {empInfo.map((data) => (
                    <Link to={`/user-profile/${data.employee_id}`}>
                      <Button
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
                          Edit
                        </Text>
                      </Button>
                    </Link>
                  ))}
                </Box>

                {empInfo.map((data) => (
                  <Card
                    sx={{
                      height: "100%",
                      width: "100%",
                      border: "none",
                      boxShadow: "none",
                      paddingTop: "30px",
                    }}
                  >
                    <CardHeader
                      avatar={
                        <Avatar
                          alt="Haily Sharp"
                          src={data.image_url}
                          sx={{ width: "100px", height: "100px" }}
                        />
                      }
                      title={<Text>{data.employee_name}</Text>}
                      subheader={
                        <Text sx={{ fontWeight: 400, fontSize: "14px" }}>
                          {data.designation}
                        </Text>
                      }
                    ></CardHeader>
                    <CardContent>
                      <Grid container>
                        <Grid item xs={6} md={6}>
                          <Stack spacing={2}>
                            <Text sx={{ fontSize: "14px", color: "#232F57" }}>
                              Department
                            </Text>
                            <Text sx={{ fontSize: "14px", color: "#232F57" }}>
                              Date of Joining
                            </Text>
                            <Text sx={{ fontSize: "14px", color: "#232F57" }}>
                              Employment Catagory
                            </Text>
                            <Text sx={{ fontSize: "14px", color: "#232F57" }}>
                              Line Manager
                            </Text>
                            <Text sx={{ fontSize: "14px", color: "#232F57" }}>
                              Buddy
                            </Text>
                          </Stack>
                        </Grid>
                        <Grid item xs={6} md={6}>
                          <Stack spacing={2}>
                            <Text sx={{ fontWeight: 500, fontSize: "14px" }}>
                              {data.designation}
                            </Text>
                            <Text sx={{ fontWeight: 500, fontSize: "14px" }}>
                              {data.date_of_joining}
                            </Text>
                            <Text sx={{ fontWeight: 500, fontSize: "14px" }}>
                              {data.designation}
                            </Text>
                            <Text sx={{ fontWeight: 500, fontSize: "14px" }}>
                              {data.linemanager}
                            </Text>
                            <Text sx={{ fontWeight: 500, fontSize: "14px" }}>
                              {data.buddyname}
                            </Text>
                          </Stack>
                        </Grid>
                      </Grid>
                    </CardContent>
                  </Card>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Grid>
      <FlowModal open={flow} handleClose={handleFlow} />
    </Box>
  );
}

export default SuperEmpDetail;
