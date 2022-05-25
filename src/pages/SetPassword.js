import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import React, { useState } from "react";
import { Link } from "react-router-dom";
import Photo from "../images/Login.jpg";
import { Text, TextBox, OutlinedTextBox } from "../styles";
import {
  Box,
  Grid,
  FormControl,
  IconButton,
  InputAdornment,
  Button,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material/";
import "../pages/style.css";
import DoneIcon from "@mui/icons-material/Done";

function SetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showpass, setShowPass] = useState(false);
  const [showConfirmPass, setshowConfirmPass] = useState(false);
  const handleClickShowPassword = () => {
    setShowPass(!showpass);
  };
  const handleClickShowConfirmPassword = () => {
    setshowConfirmPass(!showConfirmPass);
  };

  // form validation rules
  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters")
      .matches(
        /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
        "Password must contain at least 8 characters, one uppercase, one number and one special case character"
      ),

    confirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("password")], "Passwords must match"),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit(data) {
    // display form data on success
    alert("SUCCESS!! :-)\n\n" + JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <>
      <Box>
        <Grid sx={{ flexGrow: 1 }} container>
          <Grid item md={6.5}>
            <div
              style={{
                height: "100vh",
                width: "100%",
                backgroundImage: `url(${Photo})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            >
              {/* <img
                src={Photo}
                alt=""
                style={{ width: "100%", height: "100vh", objectFit: "cover" }}
              /> */}
            </div>
          </Grid>
          <Grid item md={5.5}>
            <div
              style={{
                // padding: 20,
                height: "auto",
                width: "65%",
                margin: "0 auto",
                display:"block"
              }}
            >
              <Box component="form" justifyContent="center" sx={{ mt: "45%" }}>
                <Text sx={{ fontSize: "24px" }}>Set Password</Text>
                {/* <TextBox size='small' id="margin-normal" margin="normal" value={name} name="name" placeholder="Username*" onChange={(e) => setName(e.target.value)} /> */}
                <FormControl
                  sx={{ mb: "8px", width: "100%", paddingY: "10px" }}
                  variant="outlined"
                >
                  <OutlinedTextBox
                    size="small"
                    placeholder="New Password*"
                    fullWidth={true}
                    id="outlined-adornment-password"
                    // type="password"
                    {...register("password")}
                    type={showpass ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          edge="end"
                        >
                          {showpass ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <Text sx={{ fontSize: "14px" }}>
                    {errors.password?.message}
                  </Text>
                </FormControl>
                <FormControl
                  sx={{ mb: "8px", width: "100%", paddingY: "10px" }}
                  variant="outlined"
                >
                  <OutlinedTextBox
                    size="small"
                    placeholder="Confirm Password*"
                    fullWidth={true}
                    id="outlined-adornment-password"
                    // type="password"
                    {...register("confirmPassword")}
                    type={showConfirmPass ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowConfirmPassword}
                          edge="end"
                        >
                          {showConfirmPass ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <Text sx={{ fontSize: "14px" }}>
                    {errors.confirmPassword?.message}
                  </Text>
                </FormControl>
                <Box style={{ display: "flex", flexDirection: "row" }}>
                  <Box style={{ paddingRight: "20px" }}>
                    <Button
                      variant="contained"
                      sx={{
                        width: "175px",
                        height: "50px",
                        textDecoration: "none",
                        borderBottom: "none",
                      }}
                      onClick={handleSubmit(onSubmit)}
                    >
                      <Text
                        sx={{
                          fontSize: "14px",
                          color: "#ffffff",
                          fontWeight: 500,
                        }}
                      >
                        Set Password
                      </Text>
                    </Button>
                  </Box>
                  <Box>
                    <Link to="/login">
                      <Button
                        variant="contained"
                        sx={{
                          width: "175px",
                          height: "50px",
                          textDecoration: "none",
                          borderBottom: "none",
                        }}
                      >
                        <Text
                          sx={{
                            fontSize: "14px",
                            color: "#ffffff",
                            fontWeight: 500,
                          }}
                        >
                          Login In
                        </Text>
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>

              <Box>
                <Text
                  sx={{
                    fontSize: "20px",
                    color: "#11142D",
                    fontWeight: 600,
                    paddingTop: "20px",
                    lineHeight: "28px",
                  }}
                >
                  Password must contain
                </Text>
              </Box>
              <Box className="c1">
                <Box className="c2">
                  <Box className="tick">
                    <DoneIcon
                      style={{ color: "grey" }}
                      className="i1"
                      fontSize="small"
                    />
                  </Box>
                </Box>
                <Box>
                  <Text
                    sx={{
                      fontSize: "14px",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#172B4D",
                    }}
                  >
                    Min 8 characters
                  </Text>
                </Box>
              </Box>
              <Box className="c1">
                <Box className="c2">
                  <Box className="tick">
                    <DoneIcon
                      style={{ color: "grey" }}
                      className="i1"
                      fontSize="small"
                    />
                  </Box>
                </Box>
                <Box>
                  <Text
                    sx={{
                      fontSize: "14px",
                      fontSize: "14px",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#172B4D",
                    }}
                  >
                    At least one number
                  </Text>
                </Box>
              </Box>
              <Box className="c1">
                <Box className="c2">
                  <Box className="tick">
                    <DoneIcon
                      style={{ color: "grey" }}
                      className="i1"
                      fontSize="small"
                    />
                  </Box>
                </Box>
                <Box>
                  <Text
                    sx={{
                      fontSize: "14px",
                      fontSize: "14px",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#172B4D",
                    }}
                  >
                    Atleast one special character
                  </Text>
                </Box>
              </Box>
              <Box className="c1">
                <Box className="c2">
                  <Box className="tick">
                    <DoneIcon
                      style={{ color: "grey" }}
                      className="i1"
                      fontSize="small"
                    />
                  </Box>
                </Box>
                <Box>
                  <Text
                    sx={{
                      fontSize: "14px",
                      fontSize: "14px",
                      fontFamily: "Inter",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "16px",
                      lineHeight: "24px",
                      textAlign: "center",
                      color: "#172B4D",
                    }}
                  >
                    A mixture of special character
                  </Text>
                </Box>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default SetPassword;

// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import Photo from '../images/Login.jpg'
// import { Text, TextBox, OutlinedTextBox } from '../styles'
// import { Box, Grid, FormControl, IconButton, InputAdornment, Button } from '@mui/material'
// import { Visibility, VisibilityOff } from '@mui/icons-material/';
// import '../pages/style.css'
// import DoneIcon from '@mui/icons-material/Done';

// const SetPassword = () => {

//     const [password, setPassword] = useState("")
//     const [confirmPassword, setConfirmPassword] = useState("")
//     const [showpass, setShowPass] = useState(false)
//     const handleClickShowPassword = () => {
//         setShowPass(!showpass)}

//     return (
//         <Box>
//             <Grid sx={{ flexGrow: 1 }} container >
//                 <Grid item md={6.5}  >
//                     <div style={{ height: '100vh', width: '100%' }} >
//                         <img src={Photo} alt="" style={{ width: '100%', height: '100vh', objectFit: 'cover' }} />
//                     </div>
//                 </Grid>
//                 <Grid item md={5.5} >
//                     < div style={{ padding: 20, height: 'auto', width: '65%', margin: "20px auto" }} >
//                         <Box component='form' justifyContent='center' sx={{ mt: '45%' }}>
//                             <Text sx={{ fontSize: '24px' }}>
//                                 Set Password
//                             </Text>
//                             {/* <TextBox size='small' id="margin-normal" margin="normal" value={name} name="name" placeholder="Username*" onChange={(e) => setName(e.target.value)} /> */}
//                             <FormControl sx={{ mb: '8px', width: '100%', paddingY: '10px' }} variant="outlined">
//                                 <OutlinedTextBox
//                                     size='small'
//                                     placeholder="New Password*"
//                                     fullWidth={true}
//                                     id="outlined-adornment-password"
//                                     type={showpass ? 'text' : 'password'}
//                                     value={password}
//                                     onChange={(e) => setPassword(e.target.value)}
//                                     endAdornment={
//                                         <InputAdornment position="end">
//                                             <IconButton
//                                                 aria-label="toggle password visibility"
//                                                 onClick={handleClickShowPassword}
//                                                 edge="end"
//                                             >
//                                                 {showpass ? <VisibilityOff /> : <Visibility />}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     }

//                                 />
//                             </FormControl>
//                             <FormControl sx={{ mb: '8px', width: '100%', paddingY: '10px' }} variant="outlined">
//                                 <OutlinedTextBox
//                                     size='small'
//                                     placeholder="Confirm Password*"
//                                     fullWidth={true}
//                                     id="outlined-adornment-password"
//                                     type={showpass ? 'text' : 'password'}
//                                     value={confirmPassword}
//                                     onChange={(e) => setConfirmPassword(e.target.value)}
//                                     endAdornment={
//                                         <InputAdornment position="end">
//                                             <IconButton
//                                                 aria-label="toggle password visibility"
//                                                 onClick={handleClickShowPassword}
//                                                 edge="end"
//                                             >
//                                                 {showpass ? <VisibilityOff /> : <Visibility />}
//                                             </IconButton>
//                                         </InputAdornment>
//                                     }

//                                 />
//                             </FormControl>
//                             <Box>
//                                 <Link to="/login" sx = {{textDecoration: 'none' }}>
//                                     <Button variant="contained" sx={{ width: '175px', height: '50px', textDecoration : 'none', borderBottom : 'none'  }}>
//                                         <Text sx={{ fontSize: '14px', color: '#ffffff', fontWeight: 500 }}>Set Password</Text>
//                                     </Button>
//                                 </Link>

//                                <Box>
//                                <Text sx={{ fontSize: '20px', color: '#11142D', fontWeight: 600, paddingTop : '20px', lineHeight : '28px'}}>Password must contain</Text>

//                                </Box>
//                                <Box className='c1'>
//                                    <Box className='c2'>
//                                    <Box className='tick'>
//                                        <DoneIcon style={{color : 'grey'}} className='i1'  fontSize="small" />
//                                    </Box>
//                                    </Box>
//                                    <Box><Text sx={{ fontSize: '14px', }}>Min 8 characters</Text></Box>
//                                </Box>
//                                <Box className='c1'>
//                                    <Box className='c2'>
//                                    <Box className='tick'>
//                                        <DoneIcon style={{color : 'grey'}} className='i1'  fontSize="small" />
//                                    </Box>
//                                    </Box>
//                                    <Box><Text sx={{ fontSize: '14px', }}>At least one number</Text></Box>
//                                </Box>
//                                <Box className='c1'>
//                                    <Box className='c2'>
//                                    <Box className='tick'>
//                                        <DoneIcon style={{color : 'grey'}} className='i1'  fontSize="small" />
//                                    </Box>
//                                    </Box>
//                                    <Box><Text sx={{ fontSize: '14px', }}>Atleast one special character</Text></Box>
//                                </Box>
//                                <Box className='c1'>
//                                    <Box className='c2'>
//                                    <Box className='tick'>
//                                        <DoneIcon style={{color : 'grey'}} className='i1'  fontSize="small" />
//                                    </Box>
//                                    </Box>
//                                    <Box><Text sx={{ fontSize: '14px', }}>A mixture of special character</Text></Box>
//                                </Box>

//                             </Box>
//                         </Box>
//                     </div >
//                 </Grid>
//             </Grid>
//         </Box>
//     )
// }

// export default SetPassword;
