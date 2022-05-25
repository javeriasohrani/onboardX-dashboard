import React from 'react'
import { Box, TableContainer, Table, TableHead, TableCell, TableBody, Button, Checkbox, TextField } from '@mui/material'
import { makeStyles } from '@material-ui/core/styles'
import { Text, StyledTableRow } from '../styles'
import axios from 'axios'
import { All_Form_Data } from '../Apis'
import { useState, useEffect } from 'react'
import { All_Employees } from '../Apis'
import Spinner from 'react-spinner-material';



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


function TableFlow({ header, data, type }) {
    const classes = useStyles()

    const [modalFormData, setModalFormData] = useState(
        [
            {
                form_id: '',
                form_name: '',
                created_at: '',
                created_by: ''
            }
        ]
    );
    const [modalEmpData, setModalEmpData] = useState(
        [
            {
                employee_name: '',
                designation: '',
                linemanager: ''
            }
        ]
    )
    const [isLoading, setIsLoading] = useState(false);

    // const [checkedItems, setcheckedItems] = useState(false)

    useEffect(() => {
        getFormData();
        getEmployeeData();
    }, [])

    const getFormData = async () => {
        setIsLoading(true);
        const formRes = await axios.get(All_Form_Data)
            .then((formRes) => {
                // console.log(formRes.data)
                setModalFormData(formRes.data)
                setIsLoading(false);

            })
        // .catch(error => console.error(`Error ${error}`));
    }

    const getEmployeeData = async () => {
        setIsLoading(true);
        const responce = await axios.get(All_Employees)
            .then((res) => {
                setModalEmpData(res.data)
                setIsLoading(false);
            })
    }
    const handleChange = (e) => {
        let isChecked = e.target.checked;
        let isCheckedValue = e.target.value;
        let rowKey = e.target.key;
        console.log('Checked Rows', isChecked)
        console.log('Checked Row Value', isCheckedValue)
        console.log('Row key', rowKey)
    }

    // const postFlowData = async () => {
    //     const data = {
    //         form :,
    //         deadline :,
    //         employee : ,

    //     }
    // }
   



    return (
        <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', ml: '5px' }}>
                <TextField placeholder='Search Here' sx={{ '& .MuiInputBase-input': { height: '0px' } }} />
                <Button variant="contained" sx={{ width: '135px', height: '30px', backgroundColor: "#ffffff" }}>
                    <Text sx={{ fontSize: '12px', color: 'black', fontWeight: 300 }}>{type === "form" ? "New Form" : "Add Employee"}</Text>
                </Button>
            </Box>
            <TableContainer component={Box} className={classes.root} sx={{ height: '35vh' }} >
                {isLoading ?
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />
                    </div> : null}
                <Table stickyHeader={true} size="small" sx={{ borderSpacing: '0px 5px' }}>

                    <TableHead>
                        <StyledTableRow >
                            <TableCell padding="checkbox">
                                <Checkbox
                                    color="primary"
                                    // checked={checkedItems}


                                />
                            </TableCell>
                            {header.map((head, index) => {
                                return (
                                    <TableCell key={index} align={index === 0 ? 'left' : 'center'}>
                                        <Text sx={{ fontSize: '14px' }}> {head} </Text>
                                    </TableCell>
                                );
                            })}
                        </StyledTableRow>
                    </TableHead>
                    <TableBody>

                        {type === "form" ? (
                            <>
                                {modalFormData.map((data) => (
                                    <StyledTableRow
                                        hover
                                        key={data.name}
                                        onChange={e => handleChange(e)}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                                onChange={e => handleChange(e)}
                                                value={data.form_id}
                                            // inputProps={{
                                            //     'aria-labelledby': labelId,
                                            // }}
                                            />
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Text sx={{ fontSize: '14px', lineHeight: '20px', fontWeight: '600' }}> {data.form_name} </Text>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Text sx={{ fontSize: '14px', lineHeight: '20px', fontWeight: '600' }}> {data.created_at} </Text>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Text sx={{ fontSize: '14px', lineHeight: '20px', fontWeight: '600' }}> {data.created_by} </Text>
                                        </TableCell>
                                    </StyledTableRow>
                                ))}
                            </>
                        ) : (
                            <>
                                {modalEmpData.map((data) => (
                                    <StyledTableRow
                                        hover
                                        key={data.name}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox
                                                color="primary"
                                            // checked={isItemSelected}
                                            // inputProps={{
                                            //     'aria-labelledby': labelId,
                                            // }}
                                            />
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <Text sx={{ fontSize: '14px', lineHeight: '20px' }}> {data.employee_name} </Text>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Text sx={{ fontSize: '14px', lineHeight: '20px' }}> {data.designation} </Text>
                                        </TableCell>
                                        <TableCell align="center">
                                            <Text sx={{ fontSize: '14px', lineHeight: '20px' }}> {data.linemanager} </Text>
                                        </TableCell>
                                    </StyledTableRow>
                                ))
                                }
                            </>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default TableFlow