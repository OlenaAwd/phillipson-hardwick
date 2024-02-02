import { createTheme } from '@mui/material';
import createBreakpoints from '@mui/system/createTheme/createBreakpoints';

const breakpoints = createBreakpoints({
  xs: 373,
  sm: 600,
  md: 930,
  lg: 1200,
  xl: 1536,
});

const landingDefaultTheme = createTheme({
  components: {
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: '#47C9A7',
          },
          '&.MuiChip-clickable:hover': {
            borderColor: 'none',
          },
          '&.MuiChip:hover': {
            borderColor: 'none',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-root:hover': {
            backgroundColor: 'none',
          },
        },
        label: {
          '&.MuiChip-label': {
            overflow: 'inherit',
          },
        },
        clickable: {
          '&.MuiChip-clickable': {
            backgroundColor: 'none',
          },
          '&.MuiChip-clickable:hover': {
            backgroundColor: 'none',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          color: '#A1BFC6',
          fontFamily: 'Inter, sans-serif',
          fontSize: '19px',
          [breakpoints.down('md')]: {
            width: 283,
          },
          [breakpoints.down('sm')]: {
            boxShadow: '0px 0px 9px #B1D0E033',
            width: '100%',
            '&.insurance .MuiOutlinedInput-root input': {
              padding: '10px 1px',
            },
          },
          '& label.Mui-focused': {
            color: '#47C9A7',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#47C9A7',
          },
          '& .MuiOutlinedInput-root': {
            fontFamily: 'Inter, sans-serif',
            fontSize: '19px',
            fontStyle: 'normal',
            fontWeight: 400,
            lineHeight: '27px',
            backgroundColor: '#F9F9F9',
            color: '#A1BFC6',

            '&.MuiOutlinedInput-input': {
              padding: '14.5px 10px',
            },
          },
        },
      },
    },
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          marginLeft: '2px',
          marginTop: '5px',
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          color: '#1A374D',
          '&.Mui-expanded': {
            color: '#47C9A7',
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        root: {
          color: '#A1BFC6',
          fontFamily: 'Inter, sans-serif',
          fontSize: '19px',
          fontStyle: 'normal',
          fontWeight: 400,
          lineHeight: '27px',
          width: '100%',
          backgroundColor: '#F9F9F9',
          borderColor: '#47C9A7',
          '&.Mui-focused': {
            color: '#A1BFC6',
            borderColor: '#47C9A7',
          },
          '& .MuiOutlinedInput-root': {
            '&:hover fieldset': {
              borderColor: '#47C9A7',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#47C9A7',
            },
          },
          legend: {
            display: 'none',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#47C9A7',
          },
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          '&.MuiSelect-icon': {
            color: '#47C9A7',
          },
        },
      },
    },
  },
});

export default landingDefaultTheme;
