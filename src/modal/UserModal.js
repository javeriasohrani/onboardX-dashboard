import React, { useState, useEffect } from "react";
import {
  Modal,
  Box,
  IconButton,
  Button,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  ListItemSecondaryAction,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { Text } from "../styles";
import { empData } from "../dummydata/Empdata";
import NewUserModal from "./NewUserModal";
import { makeStyles } from "@material-ui/core";
import UserProfileModal from "./UserProfileModal";
import axios from "axios";
import { All_Users } from "../Apis";
 import { getUsers, getUserById } from "../Apis";
import "../modal/index.css";

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

function UserModal({ open, handleClose }) {
  const classes = useStyles();
  const [newuser, setNewUser] = useState(false);
  const [userprofile, setUserProfile] = useState(false);
  const [userId, setUserId] = useState();

  const handleNewUser = () => {
    // handleClose()
    setNewUser(!newuser);
    getUsersApi();
  };
  const handleUserProfile = (id) => {
    setUserProfile(!userprofile);
    setUserId(id);
    console.log("Emp ID", id);
  };
  const [items, setItems] = useState([]);

  const [userInfo, setUserInfo] = useState([
    {
      user_id: "",
      user_name: "",
      email: "",
      // role_name: "",
      role_id: "",
    },
  ]);

  // useEffect(() => {
  //    getUsersData();
  // }, [])
  // const getUsersData = async () => {
  //    await axios.get(All_Users)
  //     .then(res=>{
  //         setUserInfo(res.data)
  //     })

  // }

  useEffect(() => {
    getUsersApi();
    // getDeleteUserByIdApi();
  }, []);

  const getUsersApi = async () => {
    console.log("all users");
    const res = await getUsers();
    setUserInfo(res.body);
    console.log("my", res.body);
  };

  const getDeleteUserByIdApi = async (e,user) => {
    e.preventDefault();
    const res = await getUserById( user.user_id);
    console.log("delete res ?>>> ", res)
    // setItems(res.body);
    res.status == 200 && getUsersApi()

  };

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
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mt: "15px",
            }}
          >
            <Text sx={{ fontSize: "24px" }}>Users</Text>
            <Button
              variant="contained"
              sx={{ width: "135px", height: "30px" }}
              onClick={handleNewUser}
            >
              <Text
                sx={{ fontSize: "12px", color: "#ffffff", fontWeight: 300 }}
              >
                New User
              </Text>
            </Button>
          </Box>
          <TableContainer
            className={classes.root}
            component={Box}
            sx={{ height: "320px", width: "100%" }}
          >
            <Table stickyHeader={true} size="small">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <Text sx={{ fontSize: "14px" }}>Name</Text>
                  </TableCell>
                  {/* <TableCell align="center">
                    <Text sx={{ fontSize: "14px" }}>Role</Text>
                  </TableCell> */}
                  <TableCell align="center">
                    <Text sx={{ fontSize: "14px" }}>Email</Text>
                  </TableCell>
                  <TableCell align="center">
                    <Text sx={{ fontSize: "14px" }}>Role UserId</Text>
                  </TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {userInfo &&
                  userInfo.map((data) => (
                    <TableRow
                      key={data.user_id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                      className="hh"
                      // onClick={() => handleUserProfile(data.user_id)}
                    >
                      <TableCell component="th" scope="row">
                        {data.user_name}
                      </TableCell>
                      {/* <TableCell align="center">{data.role_name}</TableCell> */}
                      <TableCell align="center">{data.email}</TableCell>
                      <TableCell align="center">{data.role_id}</TableCell>
                      <TableCell align="center">
                        <IconButton edge="end" aria-label="delete">
                          <DeleteOutlinedIcon
                            sx={{ color: "#FF3E3E" }}
                            onClick={(e) => getDeleteUserByIdApi(e,data)}
                          />
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Modal>
      <NewUserModal open={newuser} handleClose={handleNewUser} getUsers = {getUsers}  delete = {getDeleteUserByIdApi}/>
      <UserProfileModal
        EmployeeId={userId}
        open={userprofile}
        handleClose={handleUserProfile}
      />
    </div>
  );
}

export default UserModal;
