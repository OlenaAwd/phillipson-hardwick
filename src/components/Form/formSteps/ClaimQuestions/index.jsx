import React from 'react';
import { Container, Typography } from '@mui/material';
import { observer } from 'mobx-react';
import ChipComponent from '../../../Chip';
import Button from '../../../Button';
import AppStore from '../../../../store/AppStore';
import WizardStore from '../../../../store/WizardStore';
import {
  chipsMarried,
  chipsPandemic,
  chipsUniform,
  chipsVehicle,
} from '../../../../constants/chips';
import { STAGE_ONES_URL, TOKEN } from '../../../../config';
import getQualifiers from '../../../../utils/getQualifiers';
import API from '../../../../utils/api';
import { appsignal } from '../../../../utils/appsignal';
import { typeStyle } from '../../../../constants/styles/typStyles';
import { questionStyle } from '../../../../constants/styles/questionStyle';
import axios from 'axios';

const ClaimQuestions = () => {
  const handleMarriedClick = value => {
    AppStore.updateMarried(value);
  };
  const handleUniformClick = value => {
    AppStore.updateRequired_uniform(value);
  };

  const handlePandemicClick = value => {
    AppStore.updateSelf_assessment(value);
  };

  const handleVehicleClick = value => {
    AppStore.updateVehicle_required(value);
  };

  const isDisabled =
    !AppStore.married ||
    !AppStore.required_uniform ||
    !AppStore.self_assessment ||
    !AppStore.vehicle_required;

  const sendForm = () => {
    const config = {
      url: `${STAGE_ONES_URL}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: getQualifiers(),
    };
    API(config)
      .then(response => {})
      .catch(error => {
        appsignal.sendError(error);
      });
  };

  const clearStorage = () => {
    localStorage.clear();
  };

  const sendStageDb = () => {
    let insertedId = AppStore.insertedId;
    axios
      .post(`http://localhost:5000/update/${insertedId}`, getQualifiers())
      .then(res => {
        console.log(res.status);
      });
  };

  return (
    <>
      <Typography variant="h3" sx={typeStyle}>
        Thank you, {AppStore.first_name}. Your claim will be processed by our
        validation team and submitted to HMRC on the next working day.
      </Typography>
      <Typography variant="h3" sx={typeStyle}>
        To ensure we apply for all available allowances, please complete the
        following…
      </Typography>
      <Typography variant="h3" sx={questionStyle}>
        Are you married or in a civil partnership?
      </Typography>
      <Container
        maxWidth={false}
        disableGutters={true}
        sx={{
          display: 'flex',
          marginBottom: '44px',
        }}
      >
        {chipsMarried.map(item => (
          <ChipComponent
            key={item.id}
            label={item.label}
            onClick={() => handleMarriedClick(item.label)}
            styles={{
              width: '90px',
              height: '51px',
              borderRadius: '5px',
              color: `${
                item.label === AppStore.married
                  ? 'white !important'
                  : '#154868 !important'
              }`,
              background: `${
                item.label === AppStore.married
                  ? '#47C9A7 !important'
                  : '#F9F9F9 !important'
              }`,
              boxShadow: '0px 0px 9px #B1D0E033',
              border: '0.6px solid #D8E1E5',
              fontSize: '19px',
              fontWeight: '400',
              lineHeight: '27px',
              fontFamily: 'Inter, sans-serif',
              marginRight: '10px',
            }}
          />
        ))}
      </Container>
      <>
        <Typography
          variant="h3"
          sx={{
            color: '#1A374D',
            fontWeight: '700',
            fontSize: '17px',
            lineHeight: '25px',
            textAlign: 'left',
            marginBottom: '15px',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Are you required to wash your own work uniform?
        </Typography>

        <Typography
          variant="h3"
          sx={{
            color: '#A1BFC6',
            fontWeight: '400',
            fontSize: '16px',
            fontFamily: 'Inter, sans-serif',
            lineHeight: '26px',
            textAlign: 'left',
            marginBottom: '27px',
          }}
        >
          This could be a nurse’s uniform or simply a shirt with a company logo
          on
        </Typography>
        <Container
          maxWidth={false}
          disableGutters={true}
          sx={{
            display: 'flex',
            marginBottom: '44px',
          }}
        >
          {chipsUniform.map(item => (
            <ChipComponent
              key={item.id}
              label={item.label}
              onClick={() => handleUniformClick(item.label)}
              styles={{
                width: '90px',
                height: '51px',
                borderRadius: '5px',
                color: `${
                  item.label === AppStore.required_uniform
                    ? 'white !important'
                    : '#154868 !important'
                }`,
                background: `${
                  item.label === AppStore.required_uniform
                    ? '#47C9A7 !important'
                    : '#F9F9F9 !important'
                }`,
                boxShadow: '0px 0px 9px #B1D0E033',
                border: '0.6px solid #D8E1E5',
                fontSize: '19px',
                fontWeight: '400',
                lineHeight: '27px',
                fontFamily: 'Inter, sans-serif',
                marginRight: '10px',
              }}
            />
          ))}
        </Container>
        <Typography variant="h3" sx={questionStyle}>
          Did you work from home, even for one day, during the COVID pandemic?
        </Typography>
        <Container
          maxWidth={false}
          disableGutters={true}
          sx={{
            display: 'flex',
            marginBottom: '44px',
          }}
        >
          {chipsPandemic.map(item => (
            <ChipComponent
              key={item.id}
              label={item.label}
              onClick={() => handlePandemicClick(item.label)}
              styles={{
                width: '90px',
                height: '51px',
                borderRadius: '5px',
                color: `${
                  item.label === AppStore.self_assessment
                    ? 'white !important'
                    : '#154868 !important'
                }`,
                background: `${
                  item.label === AppStore.self_assessment
                    ? '#47C9A7 !important'
                    : '#F9F9F9 !important'
                }`,
                boxShadow: '0px 0px 9px #B1D0E033',
                border: '0.6px solid #D8E1E5',
                fontSize: '19px',
                fontWeight: '400',
                lineHeight: '27px',
                fontFamily: 'Inter, sans-serif',
                marginRight: '10px',
              }}
            />
          ))}
        </Container>
        <Typography variant="h3" sx={questionStyle}>
          If your employer requires you to travel, do you pay for your own
          transport costs, such as petrol or diesel?
        </Typography>
        <Container
          maxWidth={false}
          disableGutters={true}
          sx={{
            display: 'flex',
            marginBottom: '50px',
            '@media (max-width: 500px)': {
              flexDirection: 'row',
              flexWrap: 'wrap',
            },
          }}
        >
          {chipsVehicle.map((item, i) =>
            i !== 2 ? (
              <ChipComponent
                key={item.id}
                label={item.label}
                onClick={() => handleVehicleClick(item.label)}
                styles={{
                  width: '90px',
                  height: '51px',
                  borderRadius: '5px',
                  color: `${
                    item.label === AppStore.vehicle_required
                      ? 'white !important'
                      : '#154868 !important'
                  }`,
                  background: `${
                    item.label === AppStore.vehicle_required
                      ? '#47C9A7 !important'
                      : '#F9F9F9 !important'
                  }`,
                  boxShadow: '0px 0px 9px #B1D0E033',
                  border: '0.6px solid #D8E1E5',
                  fontSize: '19px',
                  fontWeight: '400',
                  lineHeight: '27px',
                  fontFamily: 'Inter, sans-serif',
                  marginRight: '10px',
                }}
              />
            ) : (
              <ChipComponent
                key={item.id}
                label={item.label}
                onClick={() => handleVehicleClick(item.label)}
                styles={{
                  width: '190px',
                  height: '51px',
                  borderRadius: '5px',
                  color: `${
                    item.label === AppStore.vehicle_required
                      ? 'white !important'
                      : '#154868 !important'
                  }`,
                  background: `${
                    item.label === AppStore.vehicle_required
                      ? '#47C9A7 !important'
                      : '#F9F9F9 !important'
                  }`,
                  boxShadow: '0px 0px 9px #B1D0E033',
                  border: '0.6px solid #D8E1E5',
                  fontSize: '19px',
                  fontWeight: '400',
                  lineHeight: '27px',
                  fontFamily: 'Inter, sans-serif',
                  marginRight: '10px',
                  '@media (max-width: 500px)': {
                    marginTop: '10px',
                  },
                }}
              />
            ),
          )}
        </Container>
      </>
      <Button
        onClick={() => {
          WizardStore.nextStep();
          sendForm();
          sendStageDb();
          clearStorage();
        }}
        display="form"
        disabled={isDisabled}
      >
        Submit my claim
      </Button>
    </>
  );
};

export default observer(ClaimQuestions);
