import React,{useEffect} from "react";
import { NavLink } from "react-router-dom";
import { Text } from "../styles";
import { Box, Avatar, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";
import FlowModal from "../modal/FlowModal";
import { useState } from "react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import ArticleIcon from "@mui/icons-material/Article";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import logo1 from "../images/Logo.png";
import "../components/nav.css";
import FormTable from "../modal/FormTable";
import { getEmployees } from "../Apis";



function NavMenu() {
  const [flow, setFlow] = useState(false);
  const handleFlow = () => {
    setFlow(!flow);
  };


  useEffect(() => {
    // getEmployeesApi();
   }, []);

   const [employees, setEmployees] = useState([
    {
      employee_name: "",
      employee_id: "",
      designation: "",
      linemanager: "",
    },
  ]);
  // const getEmployeesApi = async () =>{
  //   const res = await getEmployees()
  //   setEmployees(res);

  // }

  return (
    <Box
      sx={{
        height: "100vh",
        overflow: "hidden",
        minwidth: "100vw",
        height: "800px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        background: "#FFFFFF",
        Blend: "Pass through",
        left: "0px",
        top: "0px",
        width:"280px",
        borderRadius: "0px",
        position: "fixed",
        top: 0,
        left: 0,
        display: { md: "block", xs: "none" },
      }}
    >
      <Box sx={{ m: "20px" }} style={{ display: "flex", alignItems: "center" }}>
        <Box>
          <img
            src={logo1}
            style={{
              paddingLeft: "20px",
              width: "28px",
              height: "28px",
              marginRight: "30px",
            }}
          />
        </Box>
        <Box>
          <Text
            sx={{
              fontFamily: "Mulish",
              fontStyle: "normal",
              fontWeight: 800,
              fontSize: "26px",
              lineHeight: "34px",
              color: "#121212",
            }}
          >
            PeopleX
          </Text>
        </Box>
      </Box>
      <Button
        variant="contained"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginLeft: "30px",
          alignItems: "center",
          padding: "5px 16px",
          background: "#0065FF",
          Width: "100%",
          width: "175px",
          boxShadow: "0px 2px 0px rgba(0, 0, 0, 0.043)",
          borderRadius: "5px",
        }}
      >
        <Text
          sx={{
            fontFamily: "Mulish",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: "18px",
            lineHeight: "23px",
            textAlign: "center",
            color: "#FFFFFF",
            flex: "none",
            order: 0,
            flexGrow: 0,
            textTransform: "capitalize",
          }}
          onClick={handleFlow}
        >
          Create Flow
        </Text>
      </Button>
      <Box>
        <Stack
          spacing={6}
          sx={{
            m: "35px",
            display: "flex",
            flexDirection: "coloum",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <NavLink
            to="/dashboard"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            <Box className="n1">
              <Box>
                <DashboardOutlinedIcon
                  className="icon"
                  sx={{ mr: "10px", Fill: "Solid #0065FF" }}
                />
              </Box>
              <Box>
                <Text
                  sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: 700,
                    fontSize: "18px",
                    lineHeight: "23px",
                    display: "flex",
                    alignItems: "center",
                    color: "#6B778C",
                  }}
                  className="nav-text"
                >
                  Dashboard!
                </Text>{" "}
              </Box>
            </Box>
            {/* <Text sx={{ fontSize: '14px', color: '#6B778C' }}>Dashboard</Text> */}
          </NavLink>
          <NavLink
            to="/form"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            <Box className="n1">
              <Box>
                <ArticleIcon className="icon" sx={{ mr: "10px" }} />
              </Box>
              <Box>
                <Text
                  sx={{
                    fontFamily: "font-family: 'Roboto';",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "23px",
                    display: "flex",
                    alignItems: "center",
                    color: "#6B778C",
                  }}
                >
                  Form
                </Text>{" "}
              </Box>
            </Box>
          </NavLink>
          <NavLink
            to="/employee"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            <Box className="n1">
              <Box>
                <PeopleOutlineIcon className="icon" sx={{ mr: "10px" }} />
              </Box>
              <Box>
                <Text 
            //  onClick = {()=>getEmployeesApi()}
                  sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "23px",
                    display: "flex",
                    alignItems: "center",
                    color: "#6B778C",
                  }}
                >
                  Employee
                </Text>{" "}
              </Box>
            </Box>
          </NavLink>
          <NavLink
            to="/flows"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            <Box className="n1">
              <Box>
                <AccountTreeIcon className="icon" sx={{ mr: "10px" }} />
              </Box>
              <Box>
                <Text
                  sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "23px",
                    display: "flex",
                    alignItems: "center",
                    color: "#6B778C",
                  }}
                >
                  Flows
                </Text>{" "}
              </Box>
            </Box>
          </NavLink>
          <NavLink
            to="#"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            <Box className="n1">
              <Box>
                <CheckCircleOutlineIcon className="icon" sx={{ mr: "10px" }} />
              </Box>
              <Box>
                <Text
                  sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "23px",
                    display: "flex",
                    alignItems: "center",
                    color: "#6B778C",
                  }}
                >
                  Approval
                </Text>{" "}
              </Box>
            </Box>
          </NavLink>
          <NavLink
            to="/status"
            style={{ textDecoration: "none" }}
            className={({ isActive }) => (isActive ? "link-active" : "")}
          >
            <Box className="n1">
              <Box>
                <AssignmentTurnedInIcon className="icon" sx={{ mr: "10px" }} />
              </Box>
              <Box>
                <Text
                  sx={{
                    fontFamily: "Mulish",
                    fontStyle: "normal",
                    fontWeight: "700",
                    fontSize: "18px",
                    lineHeight: "23px",
                    display: "flex",
                    alignItems: "center",
                    color: "#6B778C",
                  }}
                >
                  Status
                </Text>{" "}
              </Box>
            </Box>
          </NavLink>
        </Stack>
      </Box>
      <FlowModal open={flow} handleClose={handleFlow} />
    </Box>
  );
}

export default NavMenu;
