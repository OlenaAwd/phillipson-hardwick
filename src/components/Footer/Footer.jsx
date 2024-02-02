import React from 'react';
import { Typography } from '@mui/material';
import { typographyFooter } from '../../constants/styles/typographyFooter';
import styles from './Footer.module.scss';

const Footer = () => (
  <div className={styles.wrapper}>
    <div className={styles.container}>
      <Typography sx={typographyFooter}>
        Phillipson Hardwick Advisory Ltd is registered in England & Wales
        (Company No. 12557258)
      </Typography>
      <Typography sx={typographyFooter}>
        Address: Centenary House, Centenary Way, Manchester, M50 1RF
      </Typography>
      <Typography sx={typographyFooter}>
        <a
          className={styles.link}
          href="https://phillipsonhardwickadvisory.co.uk/privacy-policy/"
          target="_blank"
          rel="noreferrer"
        >
          Privacy Policy
        </a>
      </Typography>
      <Typography sx={typographyFooter}>
        <a
          className={styles.link}
          href="https://phillipsonhardwickadvisory.co.uk/terms-conditions/"
          target="_blank"
          rel="noreferrer"
        >
          Terms & Conditions
        </a>
      </Typography>
    </div>
  </div>
);
export default Footer;
