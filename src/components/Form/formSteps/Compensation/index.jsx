import React from 'react';
import { Typography, Container, Grid } from '@mui/material';
import { observer } from 'mobx-react';
import ChipComponent from '../../../Chip';
import Button from '../../../Button';
import NumberInput from '../../../NumberInput';
import AppStore from '../../../../store/AppStore';
import WizardStore from '../../../../store/WizardStore';
import { compensationQuestions } from '../../../../constants/styles/compensationQuestions';

const Compensation = () => {
  const handleClick = (button, value, taxPeriod) => {
    AppStore.highlightYearButton(button, value, taxPeriod);
  };

  const handleChangeAmount = value => {
    AppStore.updateOfferAmount(value);
  };

  const isDisabled =
    !AppStore.offerAmount ||
    AppStore.chipsYears.filter(item => item.selected === true).length === 0;
  return (
    <>
      <Typography variant="h3" sx={compensationQuestions}>
        What year(s) did you receive your compensation?
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#A1BFC6',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '26px',
          textAlign: 'left',
          marginBottom: '27px',
        }}
      >
        You can select multiple years if applicable
      </Typography>
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '0',
          maxWidth: '450px',
          marginBottom: '44px',
        }}
      >
        <Grid
          container
          sx={{
            gridGap: '10px',
            lineHeight: '27px',
          }}
        >
          {AppStore.chipsYears.map((item, i) =>
            i !== 0 ? (
              <Grid item key={item.id}>
                <ChipComponent
                  label={item.label}
                  onClick={() =>
                    handleClick(item.value, item.selected, item.taxPeriod)
                  }
                  styles={{
                    width: '90px',
                    height: '51px',
                    borderRadius: '5px',
                    color: `${
                      item.selected === true
                        ? 'white !important'
                        : '#154868 !important'
                    }`,
                    backgroundColor: `${
                      item.selected === true
                        ? '#47C9A7 !important'
                        : '#F9F9F9 !important'
                    }`,
                    boxShadow: '0px 0px 9px #B1D0E033',
                    border: '0.6px solid #D8E1E5',
                    fontSize: '19px',
                    fontWeight: '400',
                    lineHeight: '27px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
              </Grid>
            ) : (
              <Grid item key={item.id}>
                <ChipComponent
                  key={item.id}
                  label={item.label}
                  onClick={() =>
                    handleClick(item.value, item.selected, item.taxPeriod)
                  }
                  styles={{
                    width: '190px',
                    height: '51px',
                    borderRadius: '5px',
                    color: `${
                      item.selected === true
                        ? 'white !important'
                        : '#154868 !important'
                    }`,
                    backgroundColor: `${
                      item.selected === true
                        ? '#47C9A7 !important'
                        : '#F9F9F9 !important'
                    }`,
                    boxShadow: '0px 0px 9px #B1D0E033',
                    border: '0.6px solid #D8E1E5',
                    fontSize: '19px',
                    fontWeight: '400',
                    lineHeight: '17px',
                    fontFamily: 'Inter, sans-serif',
                  }}
                />
              </Grid>
            ),
          )}
        </Grid>
      </Container>
      <Typography variant="h3" sx={compensationQuestions}>
        Please enter the total amount of compensation you received
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#A1BFC6',
          fontWeight: '400',
          fontSize: '16px',
          lineHeight: '26px',
          textAlign: 'left',
          marginBottom: '27px',
        }}
      >
        If you received multiple payouts, please add these together. If you are
        unsure, please enter an estimate.
      </Typography>
      <NumberInput
        value={AppStore.offerAmount}
        onChange={handleChangeAmount}
        max={100000}
      />
      <Button
        classes={Compensation}
        onClick={() => WizardStore.nextStep()}
        disabled={isDisabled}
        display="form"
      >
        Next
      </Button>
    </>
  );
};
export default observer(Compensation);
