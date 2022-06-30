import React, { useState} from "react";
import FlowModal from "../modal/FlowModal";
import { Text } from "../styles";
import {
  Box,
  Grid,
  Select,
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
import { flowData } from "../dummydata/Flowdata";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@mui/icons-material/Add";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

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

function FlowTable() {
  const [name, setName] = useState(0);
  const [flow, setFlow] = useState(false);
  // const[flowData,setFlowData] = useState(
  //   {
  //         // employee_form_mapping_id:"",
  //         // employee_id :"",
  //         form_id: "",
  //         form_data: "",
  //         // form_fields:""   ,  
  //         // status: "",
  //         // user_id: "",
  //         // due_date: "",
  //         created_at: "",

  //       flow: "",
  //       to: "",
  //       date: "",
  //       deadline: "01/12/2021",
  //       status: "Inprogress",
  //       by: "Tania Sibtain"
  //   },
      
    
  // )

//   useEffect(() => {
//  getFormsDataApi()
//   })
  

  const classes = useStyles();
  const handleFlow = () => {
    setFlow(!flow);
  };
  const handleChange = (event) => {
    setName(event.target.value);
  };
//  const  getFormsDataApi = async() =>{
//   const res = await getFormsDataApi();
//   setFlowData(res)


//  }

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
                  Select Employee!!!
                </Text>
              </MenuItem>
              <MenuItem value={10}>Name</MenuItem>
              <MenuItem value={20}>Name</MenuItem>
              <MenuItem value={30}>name</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={12} sx={{ height: "70vh" }}>
          <Card sx={{ height: "100%", width: "100%" }}>
            <CardContent>
              <TableContainer
                className={classes.root}
                component={Box}
                sx={{ height: "70vh", width: "100%" }}
              >
                <Table stickyHeader={true} size="small">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <Text sx={{ fontSize: "14px" }}> Flow Name</Text>
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
                    {flowData.map((data) => (
                      <TableRow
                        key={data.flow}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {data.flow}
                        </TableCell>
                        <TableCell align="center">{data.date}</TableCell>
                        <TableCell align="right">{data.by}</TableCell>
                        <TableCell align="right">
                          <Box>
                            <IconButton edge="end" aria-label="delete">
                              <BorderColorOutlinedIcon
                                sx={{ color: "#2f49a1" }}
                              />
                            </IconButton>
                            <IconButton edge="end" aria-label="delete">
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
            onClick={handleFlow}
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
      <FlowModal open={flow} handleClose={handleFlow} />
    </Box>
  );
}

export default FlowTable;
