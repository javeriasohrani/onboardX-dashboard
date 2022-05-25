import React, { useState } from 'react'
import StatusModal from '../modal/StatusModal'
import { Text } from '../styles'
import { Box, Grid, Card, CardContent, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Tab } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { flowData } from '../dummydata/Flowdata'
import { makeStyles } from '@material-ui/core/styles'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import '../modal/index.css';
import StatusModalProgress from '../modal/StatusModalProgress'
import StatusModalOverdue from '../modal/StatusModalOverdue'



const useStyles = makeStyles(() => ({
    root: {
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        '&::-webkit-scrollbar-track': {
            display: 'none'
        },
        '&::-webkit-scrollbar-thumb': {
            display: 'none'
        },
        '&::-webkit-scrollbar-corner': {
            display: 'none'
        },
    },
}));


function StatusTab() {
    const [status, setStatus] = useState(false)
    const [statuss, setStatuss] = useState(false)
    const [stat, setStat ]= useState(false)

    const handleStatus = () => {
        setStatus(!status)
    }
    const handleStatusProgress = () => {
        setStatuss(!statuss)
    }
    const handleStatusOverdue = () => {
        setStat(true)
    }

    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const classes = useStyles()

    return (
        <Box sx={{ bgcolor: '#F4F5F7', overflow: { md: 'hidden', xs: "auto" } }}>


            <Grid container sx={{ height: 'auto', p: '20px' }}>


                <TabContext value={value} >


                    <Grid item xs={12} md={12}>
                        <Box>
                            <TabList variant="scrollable" onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Completed" value="1" />
                                <Tab label="In Progress" value="2" />
                                <Tab label="Overdue" value="3" />
                            </TabList>
                        </Box>
                    </Grid>


                    <Grid item xs={12} md={12}>


                        <TabPanel value="1">
                            <Grid item xs={12} md={12} sx={{ height: '70vh' }}>
                                <Card sx={{ height: '100%', width: '100%' }} >
                                    <CardContent>
                                        <TableContainer className={classes.root} component={Box} sx={{ height: '70vh', width: '100%' }}>
                                            <Table stickyHeader={true} size="small" >
                                                <TableHead>
                                                    <TableRow >
                                                        <TableCell>
                                                            <Text sx={{ fontSize: '14px' }}> Assigned Flow</Text></TableCell>
                                                        <TableCell align='center'><Text sx={{ fontSize: '14px' }}>Assigned To</Text></TableCell>
                                                        <TableCell align='right'><Text sx={{ fontSize: '14px' }}>Assigned Date</Text></TableCell>
                                                        <TableCell align='right'><Text sx={{ fontSize: '14px' }}>Deadline</Text></TableCell>
                                                        <TableCell></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {flowData.map((data) => (
                                                        <>
                                                            {(data.status === "Completed")
                                                                && <TableRow
                                                                    key={data.flow}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                    onClick={handleStatus}
                                                                    className='hh'
                                                                >
                                                                    <TableCell component="th" scope="row">
                                                                        {data.flow}
                                                                    </TableCell>
                                                                    <TableCell align='center' >{data.to}</TableCell>
                                                                    <TableCell align='right'>{data.date}</TableCell>
                                                                    <TableCell align='right'>{data.deadline}</TableCell>
                                                                    <TableCell align='right'>

                                                                        <CheckCircleRoundedIcon sx={{ color: 'green' }} />

                                                                    </TableCell>
                                                                </TableRow>
                                                            }
                                                        </>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </TabPanel>


                        <TabPanel value="2">
                            <Grid item xs={12} md={12} sx={{ height: '70vh' }}>
                                <Card sx={{ height: '100%', width: '100%' }} >
                                    <CardContent>
                                        <TableContainer className={classes.root} component={Box} sx={{ height: '70vh', width: '100%' }}>
                                            <Table stickyHeader={true} size="small" >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            <Text sx={{ fontSize: '14px' }}> Assigned Flow</Text></TableCell>
                                                        <TableCell align='center'><Text sx={{ fontSize: '14px' }}>Assigned To</Text></TableCell>
                                                        <TableCell align='right'><Text sx={{ fontSize: '14px' }}>Assigned Date</Text></TableCell>
                                                        <TableCell align='right'><Text sx={{ fontSize: '14px' }}>Deadline</Text></TableCell>
                                                        <TableCell></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {flowData.map((data) => (
                                                        <>
                                                            {(data.status === "Inprogress") &&
                                                                <TableRow
                                                                    key={data.flow}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}   
                                                                    onClick={handleStatusProgress}
                                                                    className='hh' >
                                                                    <TableCell component="th" scope="row">
                                                                        {data.flow}
                                                                    </TableCell>
                                                                    <TableCell align='center' >{data.to}</TableCell>
                                                                    <TableCell align='right'>{data.date}</TableCell>
                                                                    <TableCell align='right'>{data.deadline}</TableCell>
                                                                    <TableCell align='right'>

                                                                        <NotificationsOutlinedIcon sx={{ color: 'yellow' }} />

                                                                    </TableCell>
                                                                </TableRow>
                                                            }
                                                        </>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </TabPanel>


                        <TabPanel value="3">
                            <Grid item xs={12} md={12} sx={{ height: '70vh' }}>
                                <Card sx={{ height: '100%', width: '100%' }} >
                                    <CardContent>
                                        <TableContainer className={classes.root} component={Box} sx={{ height: '70vh', width: '100%' }}>
                                            <Table stickyHeader={true} size="small" >
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell>
                                                            <Text sx={{ fontSize: '14px' }}> Assigned Flow</Text></TableCell>
                                                        <TableCell align='center'><Text sx={{ fontSize: '14px' }}>Assigned To</Text></TableCell>
                                                        <TableCell align='right'><Text sx={{ fontSize: '14px' }}>Assigned Date</Text></TableCell>
                                                        <TableCell align='right'><Text sx={{ fontSize: '14px' }}>Deadline</Text></TableCell>
                                                        <TableCell></TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {flowData.map((data) => (
                                                        <>
                                                            {(data.status === "Overdue") &&
                                                                <TableRow
                                                                    key={data.flow}
                                                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                                                    onClick={handleStatusOverdue}
                                                                    className='hh'
                                                                >
                                                                    <TableCell component="th" scope="row">
                                                                        {data.flow}
                                                                    </TableCell>
                                                                    <TableCell align='center' >{data.to}</TableCell>
                                                                    <TableCell align='right'>{data.date}</TableCell>
                                                                    <TableCell align='right'>{data.deadline}</TableCell>
                                                                    <TableCell align='right'>

                                                                        <NotificationsOutlinedIcon sx={{ color: 'red' }} />

                                                                    </TableCell>
                                                                </TableRow>
                                                            }
                                                        </>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </TabPanel>


                    </Grid>
                </TabContext>


            </Grid>
            <StatusModal open={status} handleClose={handleStatus} />
            <StatusModalProgress open={statuss} handleClose={handleStatusProgress} />
            {/* <StatusModalOverdue open = {stat} handleClose = {handleStatusOverdue} /> */}
        </Box>
    )
}

export default StatusTab
