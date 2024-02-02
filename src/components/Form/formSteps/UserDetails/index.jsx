import React, { useState, useEffect } from 'react';
import { Typography, Checkbox } from '@mui/material';
import { observer } from 'mobx-react';
import axios from 'axios';
import InputUserData from '../../../InputUserData';
import DateInput from '../../../DateInput';
import Button from '../../../Button';
import WizardStore from '../../../../store/WizardStore';
import AppStore from '../../../../store/AppStore';
import useDebounce from '../../../../hooks/useDebounce';
import { BASE_URL, TOKEN } from '../../../../config';
import API from '../../../../utils/api';
import getClientInfo from '../../../../utils/getClientInfo';
import { appsignal } from '../../../../utils/appsignal';
import styles from './UserDetails.module.scss';

const UserDetails = () => {
  const storedValue = AppStore.email;
  const storedValuePhone = AppStore.mobile_phone;

  const [emailError, setEmailError] = useState('');
  const [emailValue, setEmailValue] = useState(storedValue);
  const [isEdit, setEdit] = useState(true);
  const [isEditPhone, setEditPhone] = useState(true);
  const [phoneValue, setPhoneValue] = useState(storedValuePhone);
  const [phoneError, setPhoneError] = useState('');

  const handleChangeFirstName = val => {
    const value = val.target.value || '';
    const valueEdited = value.replace(/[0-9]/g, '');
    AppStore.updateFirst_name(valueEdited);
  };

  const handleChangeLastName = val => {
    const value = val.target.value || '';
    const valueEdited = value.replace(/[0-9]/g, '');
    AppStore.updateLast_name(valueEdited);
  };
  const handleChangeEmail = e => {
    const val = e.target.value;
    setEmailError('');
    setEmailValue(val);
    setEdit(false);

    if (!val) {
      setEmailError('Please, enter your email');
      return;
    }
  };

  const debouncedEmail = useDebounce(emailValue, 500);

  useEffect(() => {
    if (debouncedEmail) {
      validateEmail();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedEmail]);

  const validateEmail = () => {
    setEdit(true);
    const regex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    const checkEmail = regex.test(emailValue);
    AppStore.updateEmail('');
    if (emailValue.length === 0) {
      setEmailError('Please, enter your email');
      return;
    }

    if (!checkEmail) {
      setEmailError('Email is not correct');
      return;
    }
    setEmailError('');
    AppStore.updateEmail(emailValue);
  };

  const handleChangePhone = val => {
    const value = val.target.value || '';
    setPhoneError('');
    setPhoneValue(value);
    setEditPhone(false);
    if (!value) {
      setPhoneError('Please enter a valid phone number');
    }
  };

  const debouncedPhone = useDebounce(phoneValue, 500);

  useEffect(() => {
    if (debouncedPhone) {
      validatePhone();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedPhone]);

  const validatePhone = () => {
    setEditPhone(true);
    const regex = /^(01|07)\d{9}/;
    const checkPhone = regex.test(phoneValue);
    AppStore.updateMobile_phone('');
    if (phoneValue.length === 0 || phoneValue.length > 11) {
      setPhoneError('Please enter a valid phone number');
      return;
    }
    if (!checkPhone) {
      setPhoneError('Please enter a valid phone number');
      return;
    }

    setPhoneError('');
    AppStore.updateMobile_phone(phoneValue);
  };

  const handleCheckboxChange = value => {
    AppStore.updateChecked(value.target.checked);
  };

  const handleDayChange = e => {
    const day = e.target.value;
    AppStore.updateDay(day);
  };

  const handleMonthChange = e => {
    const month = e.target.value;
    AppStore.updateMonth(month);
  };

  const handleYearChange = e => {
    const year = e.target.value;
    AppStore.updateYear(year);
  };

  const isDisabled =
    !AppStore.first_name ||
    !AppStore.last_name ||
    !AppStore.email ||
    !!emailError ||
    !AppStore.mobile_phone ||
    !AppStore.day ||
    !AppStore.month ||
    !AppStore.year ||
    !isEdit ||
    !AppStore.checked ||
    !isEditPhone ||
    !!phoneError;

  const sendClientData = () => {
    const config = {
      url: `${BASE_URL}`,
      method: 'POST',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: getClientInfo(),
    };
    API(config)
      .then(response => {
        AppStore.updateClient_ID(response.response.data.id);
        AppStore.updateClient_ref(response.response.data.ref);
        AppStore.updateClaim_id(
          response.response.data.pba_ppis.map(item => item.claim_id),
        );
      })
      .catch(error => {
        appsignal.sendError(error);
      });
  };

  const sendUserDb = () => {
    axios
      .post('http://localhost:5000/client/add', getClientInfo())
      .then(res => {
        console.log(res.data.insertedId);
        AppStore.updateInsertedId(res.data.insertedId);
        console.log('AppStore.insertedId', AppStore.insertedId);
      })
      .catch(error => {
        appsignal.sendError(error);
        console.log(error.message);
      });
  };

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
          marginBottom: '27px',
        }}
      >
        Great news, you qualify to use our fast-track application. You are
        eligible to use your HMRC tax allowance of up to £1000 per year.
      </Typography>
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
        Enter your details below to start your claim today.
      </Typography>
      <div>
        <div className={styles.container}>
          <InputUserData
            placeholder="First Name"
            initialValue={AppStore.first_name || ''}
            onChange={handleChangeFirstName}
          />
          <InputUserData
            initialValue={AppStore.last_name}
            placeholder="Last Name"
            onChange={handleChangeLastName}
          />
          <InputUserData
            error={emailError ? true : false}
            helperText={emailError}
            initialValue={emailValue}
            placeholder="Email Address"
            onChange={handleChangeEmail}
          />
          <InputUserData
            error={phoneError ? true : false}
            helperText={phoneError}
            initialValue={phoneValue}
            placeholder="Phone Number"
            onChange={handleChangePhone}
          />
        </div>
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
          Date of birth
        </Typography>
        <DateInput
          day={AppStore.day}
          month={AppStore.month}
          year={AppStore.year}
          onYearChange={handleYearChange}
          onMonthChange={handleMonthChange}
          onDayChange={handleDayChange}
        />
        <div className={styles.checkboxContainer}>
          <Checkbox
            sx={{
              marginRight: '20px',
              padding: '15px',
              color: '#47C9A7',
              background: '#F9F9F9 0% 0 % no - repeat padding- box',
              width: '17px',
              height: '17px',
            }}
            checked={AppStore.checked}
            onChange={handleCheckboxChange}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <Typography
            sx={{
              color: '#1A374D',
              fontSize: '15px',
              fontWeight: '400',
              lineHeight: '23px',
              maxWidth: '543px',
              fontFamily: 'Inter, sans-serif',
              '@media (maxWidth: 372px)': {
                maxWidth: '243px',
              },
            }}
          >
            Yes, I have read and agree to{' '}
            <a
              href="https://phillipsonhardwickadvisory.co.uk/terms-conditions/"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              the terms and conditions
            </a>{' '}
            and{' '}
            <a
              href="https://phillipsonhardwickadvisory.co.uk/privacy-policy/"
              className={styles.link}
              target="_blank"
              rel="noreferrer"
            >
              privacy policy
            </a>{' '}
            of Phillipson Hardwick Advisory Ltd.
          </Typography>
        </div>
      </div>
      <Button
        classes={UserDetails}
        onClick={() => {
          WizardStore.nextStep();
          sendClientData();
          sendUserDb();
        }}
        disabled={isDisabled}
        display="form"
      >
        Next
      </Button>
    </>
  );
};
export default observer(UserDetails);
