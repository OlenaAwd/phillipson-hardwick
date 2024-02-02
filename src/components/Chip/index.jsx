import React from "react";
import Chip from '@mui/material/Chip';

const ChipComponent = ({ label, onClick, styles, }) => (
    <Chip label={label} variant="outlined" onClick={onClick} sx={styles} />
)

export default ChipComponent;


