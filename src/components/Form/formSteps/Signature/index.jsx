/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Typography, Checkbox } from '@mui/material';
import { observer } from 'mobx-react';
import FormSignature from '../Signature/FormSignature';
import Button from '../../../Button';
import { SIGNATURE_URL, TOKEN, UPDATE_CLAIM } from '../../../../config';
import WizardStore from '../../../../store/WizardStore';
import AppStore from '../../../../store/AppStore';
import API from '../../../../utils/api';
import getSignatureDetails from '../../../../utils/getSignatureDetails';
import getStatusSignature from '../../../../utils/getStatusSignature';
import { appsignal } from '../../../../utils/appsignal';
import axios from 'axios';

const Signature = () => {
  const [signaturePad, setSignaturePad] = useState(false);

  const handleCheckboxChange = value => {
    AppStore.updateSignatureChecked(value.target.checked);
  };

  const sendSignature = () => {
    const config = {
      url: `${SIGNATURE_URL}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: getSignatureDetails(),
    };
    API(config)
      .then(response => {})
      .catch(error => {
        appsignal.sendError(error);
      });
  };

  const handleChangeSignature = value => {
    setSignaturePad(value);
  };

  const updateStatus = () => {
    const config = {
      url: `${UPDATE_CLAIM}/${AppStore.claim_id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: getStatusSignature(),
    };
    API(config)
      .then(response => {})
      .catch(error => {
        appsignal.sendError(error);
      });
  };

  const sendSignatureDb = () => {
    let insertedId = AppStore.insertedId;
    axios
      .post(`http://localhost:5000/update/${insertedId}`, getSignatureDetails())
      .then(res => {
        console.log(res.status);
      });
  };

  const isDisabled =
    AppStore.signatureChecked === false || AppStore.signatureImg === '';

  return (
    <>
      <Typography
        variant="h3"
        sx={{
          color: '#1A374D',
          fontWeight: '700',
          fontSize: '17px',
          lineHeight: '25px',
          textAlign: 'left',
          marginBottom: '30px',
          maxWidth: '291px',
        }}
      >
        Please draw your signature in the box below.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: '#1A374D',
          fontWeight: '700',
          fontSize: '17px',
          lineHeight: '25px',
          textAlign: 'left',
          marginBottom: '30px',
        }}
      >
        Take your time to make it accurate.
      </Typography>
      <Typography
        variant="h3"
        sx={{
          color: '#1A374D',
          fontWeight: '700',
          fontSize: '17px',
          lineHeight: '25px',
          textAlign: 'left',
          marginBottom: '40px',
        }}
      >
        You can start again as many times as you like by pressing “Clear”.
      </Typography>
      <FormSignature isSignature={handleChangeSignature} />
      <div style={{ display: 'flex', marginBottom: '50px' }}>
        <Checkbox
          sx={{
            marginRight: '18px',
            padding: '15px',
            color: '#47C9A7',
            background: '#F9F9F9 0% 0 % no - repeat padding- box',
            width: '17px',
            height: '17px',
          }}
          checked={AppStore.signatureChecked}
          onChange={handleCheckboxChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Typography
          sx={{
            paddingTop: '6px',
            color: '#1A374D',
            fontSize: '15px',
            fontWeight: '400',
            lineHeight: '23px',
          }}
        >
          This is a true likeness of my signature
        </Typography>
      </div>
      <Button
        classes={Signature}
        onClick={() => {
          WizardStore.nextStep();
          sendSignature();
          updateStatus();
          sendSignatureDb();
        }}
        disabled={isDisabled}
        display="form"
      >
        Next
      </Button>
    </>
  );
};

export default observer(Signature);
