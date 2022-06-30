import React, { useState, useEffect } from "react";
import FormModal from "../modal/FormModal";
import { Text } from "../styles";
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
// import { formData } from "../dummydata/Formdata";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@mui/icons-material/Add";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
// import axios from "axios";
import { getForms } from "../Apis";
import Spinner from "react-spinner-material";
import { useNavigate } from "react-router-dom";

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

function FormTable() {
  const navigate = useNavigate();

  const [name, setName] = useState(0);
  const [addform, setAddForm] = useState(false);

  const classes = useStyles();
  const handleAddForm = () => {
    setAddForm(!addform);
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };

  const [formsData, setFormsData] = useState([
    {
      form_id: "",
      form_name: "",
      created_at: "",
      created_by: "",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFormsApi();
  }, []);

  // const formData = async () => {
  //   setIsLoading(true);
  //   axios.get(All_Form_Data).then((res) => {
  //     console.log("res", res.data);
  //     setFormsData(res.data);
  //     setIsLoading(false);
  //   });
  // };
  const getFormsApi = async () => {
    const response = await getForms();
    console.log("res", response);
    setFormsData(response.data);
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
                  Select Here
                </Text>
              </MenuItem>
              {Object.keys(formsData).map((data) => (
                <MenuItem value={data.form_id}>{data.form_name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12} sx={{ height: "100%", paddingBottom: "20px" }}>
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
                        <Text sx={{ fontSize: "14px" }}> Form Name</Text>
                      </TableCell>
                      <TableCell align="center">
                        <Text sx={{ fontSize: "14px" }}>Date</Text>
                      </TableCell>
                      <TableCell align="right">
                        <Text sx={{ fontSize: "14px" }}>Created By</Text>
                      </TableCell>
                      <TableCell></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                
                    {Object.keys(formsData).map((data) => (
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
                            {data.form_name}
                          </Box>
                        </TableCell>
                        <TableCell align="center">{data.created_at}</TableCell>
                        <TableCell align="right">{data.created_by}</TableCell>
                        <TableCell align="right">
                          <Box>
                            <IconButton
                              edge="end"
                              aria-label="edit"
                              onClick={() =>
                                navigate("/form/createform", {state: data})
                              }
                            >
                              <BorderColorOutlinedIcon
                                fontSize="small"
                                sx={{ color: "#2f49a1" }}
                              />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete">
                              <DeleteOutlinedIcon
                                fontSize="small"
                                sx={{ color: "#FF3E3E" }}
                              />
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
            onClick={handleAddForm}
            color="warning"
            aria-label="add"
            sx={{
              position: "fixed",
              bottom: { md: 10, xs: 10 },
              right: { md: 35, xs: 0 },
            }}
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
      <FormModal open={addform} handleClose={handleAddForm} />
    </Box>
  );
}

export default FormTable;
