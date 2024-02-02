import React from 'react';
import { observer } from 'mobx-react';
import { Container, Typography } from '@mui/material';
import ChipComponent from '../../../Chip';
import Button from '../../../Button';
import WizardStore from '../../../../store/WizardStore';
import AppStore from '../../../../store/AppStore';
import { chipsEmployment, chipsIncome } from '../../../../constants/chips';
import { employmentQuestions } from '../../../../constants/styles/employmentQuestions';

const Employment = () => {
  const handleClick = value => {
    AppStore.updateEmployment_status(value);
  };

  const handleClickIncome = value => {
    AppStore.updateIncome(value);
  };

  const isDisabled = !AppStore.employment_status || !AppStore.income;

  return (
    <>
      <Typography variant="h3" sx={employmentQuestions}>
        What is your employment status?
      </Typography>
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '0px',
          maxWidth: '306px',
          width: '100%',
          display: 'block',
          flexDirection: 'row',
          marginBottom: '44px',
          lineHeight: '27px',
          '@media (max-width: 400px)': {
            display: 'flex',
            flexDirection: 'column',
            rowGap: '10px',
          },
        }}
      >
        {chipsEmployment.map(item => (
          <ChipComponent
            key={item.id}
            label={item.label}
            onClick={() => handleClick(item.label)}
            styles={{
              width: '140px',
              height: '51px',
              borderRadius: '5px',
              color: `${
                item.label === AppStore.employment_status
                  ? 'white !important'
                  : '#154868 !important'
              }`,
              background: `${
                item.label === AppStore.employment_status
                  ? '#47C9A7 !important'
                  : '#F9F9F9 !important'
              }`,
              boxShadow: '0px 0px 9px #B1D0E033',
              border: '0.62px solid #D8E1E5',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '17px',
              fontFamily: 'Inter, sans-serif',
              marginRight: '10px',
              marginBottom: '10px',
            }}
          />
        ))}
      </Container>
      <Typography variant="h3" sx={employmentQuestions}>
        What is your annual income?
      </Typography>

      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 'auto',
          marginRight: 'auto',
          display: 'block',
          flexDirection: 'row',
          marginBottom: '50px',
          lineHeight: '27px',
        }}
      >
        {chipsIncome.map(item => (
          <ChipComponent
            key={item.id}
            label={item.label}
            onClick={() => handleClickIncome(item.label)}
            styles={{
              width: '290px',
              height: '51px',
              borderRadius: '5px',
              color: `${
                item.label === AppStore.income
                  ? 'white !important'
                  : '#154868 !important'
              }`,
              background: `${
                item.label === AppStore.income
                  ? '#47C9A7 !important'
                  : '#F9F9F9 !important'
              }`,
              boxShadow: '0px 0px 9px #B1D0E033',
              border: '0.6px solid #D8E1E5',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '17px',
              fontFamily: 'Inter, sans-serif',
              marginRight: '10px',
              '@media (max-width: 1150px)': {
                marginBottom: '10px',
              },
            }}
          />
        ))}
      </Container>
      <Button
        classes={Employment}
        onClick={() => WizardStore.nextStep()}
        disabled={isDisabled}
        display="form"
      >
        Next
      </Button>
    </>
  );
};
export default observer(Employment);
