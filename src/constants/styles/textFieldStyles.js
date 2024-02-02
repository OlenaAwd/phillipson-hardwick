export const textFieldStyles = {
  width: '65px',
  marginRight: '10px',
  '& .MuiInputBase-input': {
    padding: '16.5px 10px',
    textAlign: 'center',
    '@media (maxWidth: 460px)': {
      padding: '10px 1px !important',
    },
  },
  '@media (maxWidth: 460px)': {
    marginRight: '1px',
    width: '60px',
    '& .MuiInputBase-input': {
      padding: '10px 1px !important',
    },
  },
};
