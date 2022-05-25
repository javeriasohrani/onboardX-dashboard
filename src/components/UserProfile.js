import React, { useState, useEffect } from 'react'
import { Grid, Box, Stack, Avatar, Button, Tab, Divider, IconButton, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Card, CardMedia, CardContent, Fab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Text } from '../styles'
import { formData } from '../dummydata/Formdata'
import Alena from '../images/Alena.jpg'
import Resume from '../images/Resume.jpg'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import AddIcon from '@mui/icons-material/Add';
import { All_Employees } from '../Apis'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function UserProfile() {

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const [empInfo, setempInfo] = useState(
        [
            {
                employee_id: '',
                employee_name: '',
                buddyname: '',
                image_url: '',
                designation: '',
                date_of_joining: '',
                user_id: '',
                created_at: '',
                updated_at: '',
                employee_status: '',
                image_url: '',
                video_url: '',
                department_id: '',
                employement_catagory_id: '',
                line_manager_id: '',
                buddy_id: '',
                linemanager : ''
            }
        ]
    )
    const { id } = useParams();
    // console.log(id)

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {


        const res = await axios.get(`https://tvrj97vxf0.execute-api.us-east-1.amazonaws.com/dev/employee/${id}`)
            .then((res) => {
                console.log(res.data)
                setempInfo(res.data)

            })
        // .catch(error => console.error(`Error ${error}`));

    }



    return (

        <Box sx={{ height: 'auto', backgroundColor: '#F4F5F7' }}>


            <Grid container sx={{ p: '20px' }}>


                <Grid container xs={12} md={3} justifyContent='center' alignItems="center" sx={{ backgroundColor: '#ffffff' }}  >
                    <div style={{ boderRadius: '50%' }}>
                        <Avatar
                            alt="Remy Sharp"
                            src={Alena}
                            sx={{ width: { md: '100%' }, height: { md: '100%', xs: '100%' } }}
                        />
                    </div>
                </Grid>


                {empInfo.map(data =>(

                    <Grid container xs={12} md={9} justifyContent='center' alignItems="center" sx={{ backgroundColor: '#ffffff' }}>


                        <Grid container xs={12} md={12} sx={{ mt: '2%' }}>
                            <Grid item xs={3} md={3}>

                                <Stack>
                                    <Text sx={{ fontSize: '24px' }}>{data.employee_name}</Text>
                                    <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>{data.designation}</Text>
                                </Stack>

                            </Grid>

                            <Grid item xs={7} md={7}>
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <LocationOnIcon sx={{ color: '#B3BAC5', mr: '5px' }} />
                                    <Text sx={{ fontWeight: 300 }}>Islamabad, Pakistan</Text>
                                </Box>
                            </Grid>
                            <Grid item xs={2} md={2}>
                                <Button variant="contained" sx={{ width: '100px', height: '30px' }}>
                                    <Text sx={{ fontSize: '12px', color: '#ffffff', fontWeight: 300 }}>Edit</Text>
                                </Button>
                            </Grid>
                        </Grid>


                        <Grid container xs={12} md={12}>
                            <Grid item xs={6} md={4}>
                                <Stack>
                                    <Text>Department</Text>
                                    <Text>Contact</Text>
                                    <Text>Email Address</Text>
                                    <Text>Buddy</Text>
                                </Stack>
                            </Grid>
                            <Grid item xs={6} md={8}>

                                <Stack>
                                    <Text>{data.designation}</Text>
                                    <Text>0334-5314404</Text>
                                    <Text>Alena.Lubin@gmail.com</Text>
                                    <Text>{data.buddyname}</Text>
                                </Stack>

                            </Grid>
                        </Grid>


                    </Grid>
                ))}


                <Grid container xs={12} md={12} sx={{ backgroundColor: '#ffffff', p: '20px' }}>
                    <TabContext value={value} >


                        <Grid item xs={12} md={12}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                <TabList variant="scrollable" onChange={handleChange} aria-label="lab API tabs example">
                                    <Tab label="Employee Information" value="1" />
                                    <Tab label="Attachments" value="2" />
                                    <Tab label="Status" value="3" />
                                </TabList>
                            </Box>
                        </Grid>


                        <Grid item xs={12} md={12}>
                            <TabPanel value="1">
                                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Text sx={{ fontSize: '20px' }}>Employee Information</Text>
                                    <Button variant="contained" sx={{ width: '135px', height: '30px' }}>
                                        <Text sx={{ fontSize: '12px', color: '#ffffff', fontWeight: 300 }}>Edit</Text>
                                    </Button>
                                </Box>
                                {empInfo.map(data=>(
                                      <Grid container >

                                      <Grid container xs={12} md={6}>
                                          <Grid item xs={6} md={6}>
                                              <Stack>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Full Name</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Phone no</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Address</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>City</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>State/Province</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Country Name</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Zip/Postal Code</Text>
  
                                              </Stack>
                                          </Grid>
                                          <Grid item xs={6} md={6}>
                                              <Stack>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>{data.employee_name}</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>0334-1234567</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>House 172 Street 7</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Islamabad</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Punjab</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Pakistan</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>44000</Text>
  
                                              </Stack>
                                          </Grid>
                                      </Grid>
  
                                      <Divider orientation="vertical" variant="middle" flexItem />
  
  
                                      <Grid container xs={12} md={5} sx={{ ml: '5%' }} >
                                          <Grid item xs={6} md={6}>
                                              <Stack>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Employee ID</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Date of Joining</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Employment Catagory</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Designation</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Department</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Line Manager</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>CNIC/SSN</Text>
  
                                              </Stack>
                                          </Grid>
                                          <Grid item xs={6} md={6}>
                                              <Stack>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>{data.employee_id}</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>{data.date_of_joining}</Text>
                                                  <Text sx={{ mb: { xs: '30px', md: '0px' }, lineHeight: '30px', fontWeight: 300 }}>{data.designation}</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>{data.designation}</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>Accounts</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>{data.linemanager}</Text>
                                                  <Text sx={{ lineHeight: '30px', fontWeight: 300 }}>*****-*******-*</Text>
  
                                              </Stack>
                                          </Grid>
                                      </Grid>
  
                                  </Grid>
                                ))}
                            </TabPanel>


                            <TabPanel value="2">
                                <Text sx={{ fontSize: '20px' }}>Attachments</Text>
                                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                    <Card sx={{ maxWidth: 270 }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={Resume}
                                            alt="Resume"
                                        />
                                        <CardContent sx={{ height: '20px' }}>
                                            <Text sx={{ fontSize: '16px' }}>
                                                Resume
                                            </Text>
                                        </CardContent>
                                    </Card>
                                    <Card sx={{ maxWidth: 270, ml: '20px' }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={Resume}
                                            alt="Resume"
                                        />
                                        <CardContent sx={{ height: '20px' }}>
                                            <Text sx={{ fontSize: '16px' }}>
                                                Cretificate
                                            </Text>
                                        </CardContent>
                                    </Card>
                                    <div style={{paddingLeft : '20px', marginTop : '135px'}}>
                                    <Fab color="primary" aria-label="add" >
                                        <AddIcon />
                                    </Fab>
                                    </div>
                                </Box>
                            </TabPanel>


                            <TabPanel value="3">
                                <Text sx={{ fontSize: '20px' }}>Status</Text>
                                <TableContainer component={Box} sx={{ height: '30vh', width: '100%' }}>
                                    <Table stickyHeader={true} size="small">
                                        <TableHead>
                                            <TableRow>
                                                <TableCell>
                                                    <Text sx={{ fontSize: '14px' }}> Form Name</Text></TableCell>
                                                <TableCell align='center'><Text sx={{ fontSize: '14px' }}>DeadLine</Text></TableCell>
                                                <TableCell align='right'><Text sx={{ fontSize: '14px' }}>Status</Text></TableCell>
                                                <TableCell></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {formData.map((data) => (
                                                <TableRow
                                                    key={data.name}
                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                >
                                                    <TableCell component="th" scope="row">
                                                        {data.name}
                                                    </TableCell>
                                                    <TableCell align='center' >{data.date}</TableCell>
                                                    <TableCell align='right'>{data.status}</TableCell>
                                                    <TableCell align='right'>
                                                        <Box>
                                                            <IconButton edge="end" aria-label="delete">
                                                                <BorderColorOutlinedIcon sx={{ color: '#2f49a1' }} />
                                                            </IconButton>
                                                        </Box>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </TabPanel>
                        </Grid>
                    </TabContext>
                </Grid>


            </Grid>
        </Box >

    )
}

export default UserProfile
