import React from 'react';
import { Typography } from '@mui/material';
import AppStore from '../../../../store/AppStore';
import styles from './ThanksPage.module.scss';
import thumb from '../../../../images/thumbs-up-icon.svg';

const ThanksPage = () => (
  <div className={styles.container}>
    <div className={styles.containerText}>
      <Typography
        variant="h3"
        sx={{
          color: '#47C9A7',
          fontWeight: '700',
          fontSize: '19px',
          lineHeight: '28px',
          textAlign: 'left',
          marginBottom: '20px',
        }}
      >
        Thank you, {AppStore.first_name} .
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: '#47C9A7',
          fontWeight: '700',
          fontSize: '19px',
          lineHeight: '28px',
          textAlign: 'left',
          marginBottom: '20px',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
        }}
      >
        One of our expert advisors will review your file and we will notify you
        if we believe you are eligible to claim for any further refunds.
      </Typography>
    </div>
    <div className={styles.containerImg}>
      <img src={thumb} alt="thumb" className={styles.thumbImg} />
    </div>
  </div>
);

export default ThanksPage;
