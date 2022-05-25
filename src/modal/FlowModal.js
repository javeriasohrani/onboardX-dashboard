import React, { useEffect, useState } from 'react'
import { empData } from '../dummydata/Empdata';
import { formData } from '../dummydata/Formdata'
import FinishModal from './FinishModal';
import { Modal, Box, IconButton, ButtonGroup, Stepper, Step, Stack, StepLabel, Button, TextField, Table, TableContainer, TableHead, TableCell, TableBody, Select, MenuItem, FormControl } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import { Text, StyledTableRow } from '../styles'
import CloseIcon from '@mui/icons-material/Close';
import TableFlow from '../components/TableFlow';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { All_Form_Data } from '../Apis';
import axios from 'axios';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60%',
    height: '65%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    display: { sm: 'scroll', md: 'block' }


};
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

const steps = ['Select Form', 'Assign Deadline', 'Select Employee', 'Publish'];
const header1 = ['Form Name', 'Created Date', 'Created By'];
const header2 = ['Employee Name', 'Department', 'Line Manager'];


function FlowModal({ open, handleClose }) {

    const classes = useStyles()

    const [day1, setDay1] = useState(0)
    const handleDay1Increment = () => {
        setDay1((preday) => preday + 1)
    }
    const handleDay1Decrement = () => {
        day1 > 0 && setDay1((preday) => preday - 1)
    }


    const [day2, setDay2] = useState(0)
    const handleDay2Increment = () => {
        setDay2((preday) => preday + 1)
    }
    const handleDay2Decrement = () => {
        day2 > 0 && setDay2((preday) => preday - 1)
    }

    const [finish, setFinish] = useState(false)
    const handleFinish = () => {
        setFinish(!finish)
    }

    const [empSelect, setEmpSelect] = useState(0)
    const handleEmpSelect = (event) => {
        setEmpSelect(event.target.value);
    }

    const [formSelect, setFormSelect] = useState(0)
    const handleFormSelect = (event) => {
        setFormSelect(event.target.value);
    }

    const [activeStep, setActiveStep] = useState(0);

  


    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handlePublish = () => {
        handleClose()
        handleFinish()
        setActiveStep(0);
    }

 
    return (
        <div style={{ display: { sm: 'scroll', md: 'block' } }}>
            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
                sx={{ display: { sm: 'scroll', md: 'block' } }}
            >
                <Box sx={style}>
                    <IconButton
                        aria-label="close"
                        onClick={handleClose}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: '#000000',
                        }}
                    >
                        <CloseIcon />
                    </IconButton>
                    <Box sx={{ width: '95%', p: '15px' }}>
                        <Stepper activeStep={activeStep}>
                            {steps.map((label, index) => {
                                return (
                                    <Step key={label} >
                                        <StepLabel>{label}</StepLabel>
                                    </Step>
                                );
                            })}
                        </Stepper>
                        {activeStep === steps.length ? (
                            null
                        ) : (
                            <React.Fragment>
                                <Box sx={{ height: '46vh', width: "98%", p: '15px' }}>
                                    {activeStep === 0 &&
                                        <Box>
                                            <Text>{steps[activeStep]}</Text>
                                           
                                                <TableFlow header={header1} data={formData} type="form" />
                                            
                                        </Box>
                                    }
                                    {activeStep === 1 &&
                                        <>
                                            <Text>{steps[activeStep]}</Text>
                                            <TableContainer className={classes.root}>
                                                <Table stickyHeader={true} size="small" sx={{ borderSpacing: '0px 5px' }}>
                                                    <TableHead>
                                                        <StyledTableRow >
                                                            <TableCell>
                                                                <Text sx={{ fontSize: '14px' }}> Form Name </Text>
                                                            </TableCell>
                                                            <TableCell align='right'>
                                                                <Text sx={{ fontSize: '14px' }}> Deadline </Text>
                                                            </TableCell>
                                                            <TableCell align='right'>

                                                            </TableCell>
                                                        </StyledTableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <StyledTableRow >
                                                            <TableCell>
                                                                <Text sx={{ fontSize: '14px' }}> Employee Data </Text>
                                                            </TableCell>
                                                            <TableCell align='right'>
                                                                <Stack direction="row" spacing={2}>
                                                                    <Box sx={{ height: '40px', width: '70px' }}>
                                                                        <Stack direction='row'>
                                                                            {/* <TextField placeholder="" value={day1} name="day2" onChange={handleDay1Change} sx={{ height: '40px', width: '40px', border: 'none', '& .MuiInputBase-input': { height: '8px' } }} /> */}
                                                                            <Text>{day1}</Text>
                                                                            <ButtonGroup
                                                                                size="small"
                                                                                orientation="vertical"
                                                                                variant="text"
                                                                                sx={{ height: '40px', width: '30px' }}
                                                                            >
                                                                                <Button onClick={handleDay1Increment} sx={{ height: '20px' }}>
                                                                                    <KeyboardArrowUpIcon />
                                                                                </Button>
                                                                                <Button onClick={handleDay1Decrement} sx={{ height: '20px' }}>
                                                                                    <KeyboardArrowDownIcon />
                                                                                </Button>
                                                                            </ButtonGroup>
                                                                        </Stack>
                                                                    </Box>
                                                                    <Text sx={{ fontSize: '14px' }}> Days </Text>
                                                                </Stack>
                                                            </TableCell>
                                                            <TableCell align='right'>
                                                                <FormControl sx={{ width: '250px', backgroundColor: "#ffffff" }}>
                                                                    <Select
                                                                        value={empSelect}
                                                                        onChange={handleEmpSelect}
                                                                        sx={{ height: '33px', width: '180px' }}

                                                                    >
                                                                        <MenuItem disabled value={0}>
                                                                            <Text sx={{ fontWeight: 300, fontColor: "#6B778C" }}>Before Joining</Text>
                                                                        </MenuItem>
                                                                        <MenuItem value={10}>Before Joining</MenuItem>
                                                                        <MenuItem value={20}>After Joining</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </TableCell>
                                                        </StyledTableRow>
                                                        <StyledTableRow >
                                                            <TableCell>
                                                                <Text sx={{ fontSize: '14px' }}> Contract Employee Form </Text>
                                                            </TableCell>
                                                            <TableCell align='right'>
                                                                <Stack direction="row" spacing={2}>
                                                                    <Box sx={{ height: '40px', width: '70px' }}>
                                                                        <Stack direction='row'>
                                                                            {/* <TextField placeholder="" value={day2} name="day2" onChange={handleDay2Change} sx={{ height: '40px', width: '40px', border: 'none', '& .MuiInputBase-input': { height: '8px' } }} /> */}
                                                                            <Text>{day2}</Text>

                                                                            <ButtonGroup
                                                                                size="small"
                                                                                orientation="vertical"
                                                                                variant="text"
                                                                                sx={{ height: '40px', width: '30px' }}
                                                                            >
                                                                                <Button onClick={handleDay2Increment} sx={{ height: '20px' }}>
                                                                                    <KeyboardArrowUpIcon />
                                                                                </Button>
                                                                                <Button onClick={handleDay2Decrement} sx={{ height: '20px' }}>
                                                                                    <KeyboardArrowDownIcon />
                                                                                </Button>
                                                                            </ButtonGroup>
                                                                        </Stack>
                                                                    </Box>
                                                                    <Text sx={{ fontSize: '14px' }}> Days </Text>
                                                                </Stack>
                                                            </TableCell>
                                                            <TableCell align='right'>
                                                                <FormControl sx={{ width: '250px', backgroundColor: "#ffffff" }}>
                                                                    <Select
                                                                        value={formSelect}
                                                                        onChange={handleFormSelect}
                                                                        sx={{ height: '33px', width: '180px' }}
                                                                    >
                                                                        <MenuItem disabled value={0}>
                                                                            <Text sx={{ fontWeight: 300, fontColor: "#6B778C" }}>Before Joining</Text>
                                                                        </MenuItem>
                                                                        <MenuItem value={10}>Before Joining</MenuItem>
                                                                        <MenuItem value={20}>After Joining</MenuItem>
                                                                    </Select>
                                                                </FormControl>
                                                            </TableCell>
                                                        </StyledTableRow>
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </>
                                    }
                                    {activeStep === 2 &&
                                        <>
                                            <Text>{steps[activeStep]}</Text>
                                            <TableFlow header={header2} data={empData} type="employee" />
                                        </>
                                    }
                                    {activeStep === 3 &&
                                        <Box display="flex" justifyContent="center" mt="18%">
                                            <TextField placeholder='Name this Flow' sx={{ width: "400px", boxShadow: '0px 4px 4px rgba(223, 223, 223, 0.25)' }} />
                                        </Box>
                                    }
                                </Box>
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        variant="contained"
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        sx={{ mr: 1, width: '135px', height: '30px' }}
                                    >
                                        <Text sx={{ fontSize: '12px', color: '#ffffff', fontWeight: 300 }}>Back</Text>
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} />

                                    <Button onClick={activeStep === steps.length - 1 ? handlePublish : handleNext} variant="contained" sx={{ width: '135px', height: '30px' }}>
                                        <Text sx={{ fontSize: '12px', color: '#ffffff', fontWeight: 300 }}>{activeStep === steps.length - 1 ? 'Publish' : 'Next'}</Text>
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </Box>
                </Box>
            </Modal>
            <FinishModal open={finish} handleClose={handleFinish} />
        </div>
    )
}

export default FlowModal
