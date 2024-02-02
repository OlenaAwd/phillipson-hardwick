import React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import styles from './LinearProgress.module.scss';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 13,
  maxWidth: 580,
  borderRadius: 6,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#D8E1E5',
  },
  [`& .${linearProgressClasses.bar}`]: {
    backgroundColor: '#47C9A7',
  },
}));

const CustomizedProgressBars = ({ value }) => (
  <div className={styles.wrapper}>
    <BorderLinearProgress variant="determinate" value={value} />
  </div>
);
export default CustomizedProgressBars;
