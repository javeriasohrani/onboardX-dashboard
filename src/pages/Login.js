import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Photo from '../images/Login.jpg'
import { Text, TextBox, OutlinedTextBox } from '../styles'
import { Box, Grid, FormControl, IconButton, InputAdornment, Button } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material/';
// import { useHistory } from "react-router-dom";



function Login() {

    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [showpass, setShowPass] = useState(false)
    // const history = useHistory();
    const handleClickShowPassword = () => {
        setShowPass(!showpass)
    }

    // async const LogIn = () => {
    //     console.warn(name, password)
    //     let item = { name, password }
    //     let res = await fetch('',
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 'Accept': 'application/json'
    //             },
    //             body: JSON.stringify(item)
    //         });
    //     res = await.res.json();
    //     localStorage.setItem('user-info', JSON.stringify(res));
    //     history.push('/dashboard');


    // }

    return (
        <Box>
            <Grid sx={{ flexGrow: 1 }} container >
                <Grid item md={6.5}  >
                    <div style={{ 
                height: "100vh",
                width: "100%",
                backgroundImage: `url(${Photo})`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
               }} >
                       
                    </div>
                </Grid>
                <Grid item md={5.5} >
                    < div style={{ padding: 20, height: 'auto', width: '65%', display:"block", margin: "0 auto" }} >
                        <Box component='form' justifyContent='center' sx={{ mt: '45%' }}>
                            <Text sx={{ fontSize: '24px' }}>
                                Login
                            </Text>
                            <TextBox size='small' id="margin-normal" margin="normal" value={name} name="name" placeholder="Username*" onChange={(e) => setName(e.target.value)} />
                            <FormControl sx={{ mb: '8px', width: '100%', paddingY: '10px' }} variant="outlined">
                                <OutlinedTextBox
                                    size='small'
                                    placeholder="Password*"
                                    fullWidth={true}
                                    id="outlined-adornment-password"
                                    type={showpass ? 'text' : 'password'}
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
                            </FormControl>
                            <Box sx ={{    display: "flex",justifyContent:
                        "space-between"}}>
                                <Link to="/dashboard" >
                                <Button variant="contained" sx={{ width: '26%', height: '40px' }}>
                                    <Text sx={{ fontSize: '14px', color: '#ffffff', fontWeight: 500 }}>Login</Text>
                                </Button>
                                </Link>

                                <Link to='#' sx={{ color: '#232F57', position: 'absolute', right: 110 }}>
                                    <Text sx={{ fontSize: '14px',color :"#0277bd" }}>Forget password?</Text>
                                </Link>
                            </Box>
                        </Box>
                    </div >
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;



