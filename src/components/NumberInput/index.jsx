import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import useDebounce from '../../hooks/useDebounce';

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

const NumberInput = ({ value, onChange, max = '' }) => {
  const [localValue, setLocalValue] = useState(value);
  const [error, setError] = useState('');

  const handleChange = e => {
    const start = e.target.selectionStart;
    let val = e.target.value;
    val = val.replace(/([^0-9.]+)/, '');
    val = val.replace(/^(0|\.)/, '');
    const match = /(\d{0,7})[^.]*((?:\.\d{0,2})?)/g.exec(val);
    const valueEdited = match[1] + match[2];
    e.target.value = value;

    if (val.length > 0) {
      e.target.value = Number(valueEdited).toFixed(2);
      e.target.setSelectionRange(start, start);
      setLocalValue(Number(valueEdited).toFixed(2));
      return;
    }

    setLocalValue(valueEdited);
    setError('');
    onChange('');
  };

  const debouncedPhone = useDebounce(localValue, 500);

  useEffect(() => {
    if (debouncedPhone) {
      validateInput();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPhone]);

  const validateInput = () => {
    if (Number(localValue) > max) {
      setError('Payouts can be maximum 100000.00');
      onChange('');
      return;
    }
    setError('');
    onChange(localValue);
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      noValidate
      sx={{
        marginBottom: '40px',
      }}
    >
      <CssTextField
        value={localValue}
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
        onChange={handleChange}
        type="tel"
        error={error !== ''}
        helperText={error}
      />
    </Box>
  );
};

export default NumberInput;
