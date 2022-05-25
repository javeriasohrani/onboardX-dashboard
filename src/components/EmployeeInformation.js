import { Box } from "@mui/system";
import {Button, Link } from "@mui/material";
import EditIcon from '../images/edit-icon.png';

const EmployeeInformation = () => {
    return (
        <>
        <Box style={{ display: 'flex', flexDirection: 'row',paddingBottom : '20px', paddingTop : '20px'}}>
        <Box style = {{width : '5%'}}></Box>
            <Box style={{ width : '90%'}}>
                <div style={{ display: 'flex', justifyContent: 'space-between',width : '100%'  }}>
                    <div style={{ display: 'flex', justifyContent: 'start',  }}>
                        <span className="details">Employee Information</span>
                    </div>
                    <div>
                        <div className="d3">
                            <Button className="b1"><img src={EditIcon} style={{ paddingRight: '10px' }} />Edit</Button>
                        </div>
                    </div>
                </div>
                <div style={{backgroundColor : 'violet'}}>
                    hello
                </div>
            </Box>
            <Box style = {{width : '5%'}}></Box>
        </Box>
        </>
    );
}
export default EmployeeInformation;