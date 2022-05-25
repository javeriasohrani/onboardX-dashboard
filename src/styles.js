import { styled } from '@mui/material/styles';
import { Paper, Button, TextField, Typography, OutlinedInput, TableRow } from '@mui/material'



export const Text = styled(Typography)(() => ({
    fontFamily: 'Mulish, sans-serif',
    fontWeight: 700,
    // lineHeight: '40px',
    color: "#232F57"
}))

export const TextBox = styled(TextField)(() => ({
    width: '100%',
    '& .MuiInputBase-input': {
        height: '27px',
    }
}))
export const OutlinedTextBox = styled(OutlinedInput)(() => ({
    '& .MuiInputBase-input': {
        height: '27px',
    }
}))

export const TextInput = styled(TextField)(() => ({
    '& .MuiInputBase-input': {
        height: '8px',
    }
}))
export const StyledTableRow = styled(TableRow)(() => ({
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
    marginBottom: '10px',
    boxShadow: "0px 4px 4px rgba(64, 140, 255, 0.13)"
}))
export const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    overflow: 'hidden',
    height: '100vh',
    padding: theme.spacing(1),
    color: theme.palette.text.secondary,
    boxShadow: 'none'
}));
export const Buttons = styled(Button)(({ theme }) => ({
    backgroundColor: '#F4F5F7',
    boxShadow: 'none',
    borderRadius: '8px',
    height: '100%',
    width: '100%',
    justifyContent: 'flex-start',
    color: '#232F57',
    fontSize: '14px',
    fontWeight: '700'
}));
export const Heading = styled(Typography)(({ theme }) => ({
    height: '100%',
    width: '100%',
    color: '#232F57',
    fontSize: '16px',
    fontWeight: '700'
}));

export const Description = styled(Typography)(({ theme }) => ({
    height: '100%',
    width: '100%',
    color: '#232F57',
    fontSize: '12px',
}));


export const Option = styled(Typography)(({ theme }) => ({
    fontWeight: '400',
    fontSize: '18px',
    color: '#B3BAC5'
}))


export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};