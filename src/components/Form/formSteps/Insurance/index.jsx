import React, { useState, useRef, useEffect } from 'react';
import { Typography, TextField } from '@mui/material';
import { observer } from 'mobx-react';
import Button from '../../../Button';
import WizardStore from '../../../../store/WizardStore';
import AppStore from '../../../../store/AppStore';
import { BASE_URL, TOKEN, UPDATE_CLAIM } from '../../../../config';
import API from '../../../../utils/api';
import getInsurance from '../../../../utils/getInsurance';
import getStatusInsurance from '../../../../utils/getStatusInsurance';
import { appsignal } from '../../../../utils/appsignal';
import { textFieldStyles } from '../../../../constants/styles/textFieldStyles';
import styles from './Insurance.module.scss';
import axios from 'axios';

const Insurance = () => {
  const [valueInput, setValueInput] = useState({
    one: '',
    two: '',
    three: '',
    four: '',
    five: '',
  });

  useEffect(() => {
    parseInitialInsuranceNumber();
  }, []);

  const parseInitialInsuranceNumber = () => {
    const insuranceNumberFromStore = AppStore.ni_number;
    if (insuranceNumberFromStore) {
      const parsedIn = {
        one: insuranceNumberFromStore?.slice(0, 2) || '',
        two: insuranceNumberFromStore?.slice(2, 4) || '',
        three: insuranceNumberFromStore?.slice(4, 6) || '',
        four: insuranceNumberFromStore?.slice(6, 8) || '',
        five: insuranceNumberFromStore[8] || '',
      };

      setValueInput(parsedIn);
    }
  };

  const fieldOne = useRef(null);
  const fieldTwo = useRef(null);
  const fieldThree = useRef(null);
  const fieldFour = useRef(null);
  const fieldFive = useRef(null);

  const onFieldOneChange = e => {
    const value = e.target.value;
    const valueEdited = value.replace(/[0-9]/g, '').toUpperCase();
    setValueInput({ ...valueInput, one: valueEdited });
  };

  useEffect(() => {
    if (valueInput.one.length >= 2) {
      fieldTwo.current?.focus();
    }
  }, [valueInput.one]);

  const onFieldTwoChange = e => {
    const value = e.target.value;
    const valueEdited = value.replace(/\D/g, '').substr(0, 2);
    setValueInput({ ...valueInput, two: valueEdited });
  };

  useEffect(() => {
    if (valueInput.two.length >= 2) {
      fieldThree.current?.focus();
    }
  }, [valueInput.two]);

  const onFieldThreeChange = e => {
    const value = e.target.value;
    const valueEdited = value.replace(/\D/g, '').substr(0, 2);
    setValueInput({ ...valueInput, three: valueEdited });
  };

  useEffect(() => {
    if (valueInput.three.length >= 2) {
      fieldFour.current?.focus();
    }
  }, [valueInput.three]);

  const onFieldFourChange = e => {
    const value = e.target.value;
    const valueEdited = value.replace(/\D/g, '').substr(0, 2);
    setValueInput({ ...valueInput, four: valueEdited });
  };

  useEffect(() => {
    if (valueInput.four.length >= 2) {
      fieldFive.current?.focus();
    }
  }, [valueInput.four]);

  const onFieldFiveChange = e => {
    const value = e.target.value;
    const valueEdited = value.replace(/[0-9]/g, '').toUpperCase();
    setValueInput({ ...valueInput, five: valueEdited });
  };

  useEffect(() => {
    if (valueInput.five.length === 1) {
      fieldFive.current?.blur();
    }
  }, [valueInput.five]);

  const getResult = () => {
    if (
      valueInput.one !== '' &&
      valueInput.two.length === 2 &&
      valueInput.two !== '' &&
      valueInput.three !== '' &&
      valueInput.three.length === 2 &&
      valueInput.four !== '' &&
      valueInput.four.length === 2 &&
      valueInput.five !== '' &&
      niValid() === true
    ) {
      return false;
    }
    return true;
  };

  useEffect(() => {
    niValid();
  });

  const niValid = () => {
    const resultString = `${valueInput.one}${valueInput.two}${valueInput.three}${valueInput.four}${valueInput.five}`;
    const resultStringRegEx = resultString.match(
      /^(?!BG|GB|KN|NK|NT|TN|ZZ)[^DFIQUV][^DFIQUVo][0-9]{6}[ABCD]$/,
    );
    if (resultStringRegEx !== null) {
      const res = resultStringRegEx[0];
      AppStore.updateNi_number(res);
      return true;
    } else {
      return false;
    }
  };

  const sendInsurance = () => {
    const id = AppStore.client_ID;

    const config = {
      url: `${BASE_URL}/${id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: getInsurance(),
    };
    API(config)
      .then(response => {
        AppStore.updateClient_ID(response.response.data.id);
        AppStore.updateClient_ref(response.response.data.ref);
      })
      .catch(error => {
        appsignal.sendError(error);
      });
  };

  const updateStatus = () => {
    const config = {
      url: `${UPDATE_CLAIM}/${AppStore.claim_id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: getStatusInsurance(),
    };
    API(config)
      .then(response => {})
      .catch(error => {
        appsignal.sendError(error);
      });
  };

  const sendNiDb = () => {
    let insertedId = AppStore.insertedId;
    axios
      .post(`http://localhost:5000/update/${insertedId}`, getInsurance())
      .then(res => {
        console.log(res.status);
      });
  };

  const showCondition =
    valueInput.one !== '' &&
    valueInput.two.length === 2 &&
    valueInput.two !== '' &&
    valueInput.three !== '' &&
    valueInput.three.length === 2 &&
    valueInput.four !== '' &&
    valueInput.four.length === 2;

  return (
    <>
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
        Please enter your National Insurance Number. We need this to confirm
        your identity with HMRC. Your refund cannot be issued without this.
      </Typography>
      <div className={styles.InWrapper}>
        <TextField
          placeholder="AA"
          type="text"
          className="insurance"
          value={valueInput.one}
          maxLength={2}
          inputProps={{ maxLength: 2 }}
          onChange={onFieldOneChange}
          inputRef={fieldOne}
          sx={textFieldStyles}
        />
        <TextField
          placeholder="##"
          type="tel"
          className="insurance"
          maxLength={2}
          value={valueInput.two}
          onChange={onFieldTwoChange}
          inputRef={fieldTwo}
          sx={textFieldStyles}
        />
        <TextField
          placeholder="##"
          type="tel"
          className="insurance"
          maxLength={2}
          value={valueInput.three}
          onChange={onFieldThreeChange}
          inputRef={fieldThree}
          sx={textFieldStyles}
        />
        <TextField
          placeholder="##"
          type="tel"
          className="insurance"
          maxLength={2}
          value={valueInput.four}
          onChange={onFieldFourChange}
          inputRef={fieldFour}
          sx={textFieldStyles}
        />
        <TextField
          placeholder="A"
          type="text"
          className="insurance"
          maxLength={1}
          value={valueInput.five}
          onChange={onFieldFiveChange}
          inputRef={fieldFive}
          inputProps={{ maxLength: 1 }}
          sx={textFieldStyles}
        />
      </div>
      {niValid() === false && showCondition === true && (
        <p className={styles.helperText}>
          Please check the National Insurance number entered, as it is in an
          invalid format
        </p>
      )}
      <Button
        classes={Insurance}
        onClick={() => {
          WizardStore.nextStep();
          sendInsurance();
          updateStatus();
          sendNiDb();
        }}
        disabled={getResult()}
        display="form"
      >
        Next
      </Button>
    </>
  );
};

export default observer(Insurance);
