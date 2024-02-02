import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    border: '0.62px solid #D8E1E5',
  },
  '& .MuiOutlinedInput-root': {
    background: ' #F9F9F9 0% 0 % no-repeat padding-box',
    border: '0.62px solid #D8E1E5',

    '&:hover fieldset': {
      borderColor: '#47C9A7',
      maxWidth: '291px',
      marginRight: '0px',
    },
  },
});

const CustomizedInput = ({ onChange }) => {
  return (
    <Box
      component="form"
      autoComplete="off"
      noValidate
      sx={{
        marginBottom: '50px',
      }}
    >
      <CssTextField
        label="£"
        id="custom-css-outlined-input"
        sx={{
          width: '291px',
          height: '50px',
          color: '#A1BFC6',
          background: ' #F9F9F9 0% 0 % no-repeat padding-box',
          boxShadow: '0px 0px 9px #B1D0E033',
          borderRadius: '5px',
          opacity: 1,
        }}
        onChange={onChange}
        type="tel"
      />
    </Box>
  );
};
export default CustomizedInput;
