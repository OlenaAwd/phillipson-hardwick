import React from 'react';
import { Typography } from '@mui/material';
import { observer } from 'mobx-react';
import ChipComponent from '../../../Chip';
import Button from '../../../Button';
import AppStore from '../../../../store/AppStore';
import WizardStore from '../../../../store/WizardStore';
import styles from './Banks.module.scss';

const Banks = () => {
  const handleClick = (btn, value) => {
    AppStore.highlightBanksButton(btn, value);
  };

  const isDisabled =
    AppStore.chipsBanks.filter(item => item.selected === true).length === 0;

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: '#1A374D',
          fontWeight: '700',
          fontSize: '19px',
          lineHeight: '26px',
          textAlign: 'left',
          marginBottom: '27px',
        }}
      >
        Please select all the banks or lenders below that paid you PPI
        compensation.
      </Typography>
      <div className={styles.wrapper}>
        {AppStore.chipsBanks.map(item => (
          <ChipComponent
            key={item.id}
            label={item.label}
            onClick={() => handleClick(item.label, item.selected)}
            styles={{
              width: '140px',
              height: '51px',
              borderRadius: '5px',
              color: `${
                item.selected === true
                  ? 'white !important'
                  : '#154868 !important'
              }`,
              background: `${
                item.selected === true
                  ? '#47C9A7 !important'
                  : '#F9F9F9 !important'
              }`,
              boxShadow: '0px 0px 9px #B1D0E033',
              border: '0.6px solid #D8E1E5',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '17px',
              fontFamily: 'Inter, sans-serif',
              marginRight: '10px',
            }}
          />
        ))}
      </div>
      <Button
        classes={Banks}
        onClick={() => WizardStore.nextStep()}
        disabled={isDisabled}
        display="form"
      >
        Next
      </Button>
    </>
  );
};

export default observer(Banks);
