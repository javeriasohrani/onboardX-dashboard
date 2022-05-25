import React from 'react';
import { Text } from '../styles'
import ListData from './ListData'
import { Box, Typography, Divider, Button, Grid, TextField } from '@mui/material';
import { makeStyles } from '@material-ui/core';
import '../components/nav.css'
import { TextData } from '../App';
import { useContext } from 'react';
import { TextDataContext } from '../context/TextDataContext';





export default function NewDrop({ data, setData, }) {

    const [value, setValue] = React.useState('Controlled');

    const {textDataFromModal,settextDataFromModal} = useContext(TextDataContext)
  


    const handleChange = (event) => {
        setValue(event.target.value);
    };


    const useStyles = makeStyles(theme => ({
        root: {
            "& .MuiFormLabel-root": {
                color: "#232F57",
                fontWeight: 700,
                fontSize: '15px'
            }
        }
    }));


    const classes = useStyles();

    return (
        <>
        
           
                
                    <Box>
                    <Grid container padding={2}>
                        <Grid item sm={8} md={8} ml="50px" >
                            {/* <Typography sx={{ fontSize: '24px', fontWeight: '700', color: '#232F57' }}>
                            Add Title
                        </Typography> */}
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
    
                                    <TextField
                                        id="outlined-textarea"
                                        label="Add Title"
                                        // placeholder="333333"
                                        multiline
                                        className={classes.root}
                                    />
    
                                </div>
                            </Box>
                            <br />
                            {/* <Typography sx={{ fontSize: '14px', fontWeight: '600', color: '#5D6C97' }}>
                            Add describtion
                        </Typography> */}
                            <Box
                                component="form"
                                sx={{
                                    '& .MuiTextField-root': { m: 1, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>
    
                                    <TextField
                                        id="outlined-textarea"
                                        label="Add Description"
                                        // placeholder="333333"
                                        multiline
                                        className={classes.root}
                                    />
    
                                </div>
                            </Box>
                        </Grid>
    
                        <Grid item sm={2} md={2} padding={2} ml="30px" >
    
                            <Button variant="contained" >Save</Button>
                        </Grid>
                    </Grid>
    
                    {/* <h1>{textDataFromModal}</h1> */}
    
                    <Divider variant="middle" color="#F4F5F7" />
                    <Box >
                        {data.length === 0
                            ?
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '200px' }}>
                                <Text>Place your Data here</Text>
                            </div>
                            :
                            <ListData data={data} setData={setData} />
                        }
                    </Box>
                </Box>
                
            
        
           
        </>
    );
}