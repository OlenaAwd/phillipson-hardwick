import React, { useState } from 'react';
import {
  Typography,
  Select,
  MenuItem,
  TextField,
  Checkbox,
} from '@mui/material';
import { observer } from 'mobx-react';
import Button from '../../../Button';
import { POSTCODE_API_KEY, POSTCODE_URL } from '../../../../config';
import API from '../../../../utils/api';
import getPostCodeInfo from '../../../../utils/getPostCodeInfo';
import WizardStore from '../../../../store/WizardStore';
import { appsignal } from '../../../../utils/appsignal';
import AppStore from '../../../../store/AppStore';
import { BASE_URL, TOKEN } from '../../../../config';
import { inputSelect } from '../../../../constants/styles/inputSelect';
import { inputPostcode } from '../../../../constants/styles/inputPostcode';
import styles from './Postcodes.module.scss';
import arrowWhite from '../../../../images/ArrowWhite.svg';
import { textStyles } from '../../../../constants/styles/textStyles';
import axios from 'axios';

const Postcodes = () => {
  // eslint-disable-next-line no-unused-vars
  const [addressInfo, setAddressInfo] = useState(false);
  const [postCodeError, setPostCodeError] = useState('');

  const handleChangePostCode = value => {
    AppStore.updatePostcode(value.target.value);
    AppStore.updateCodes([]);
  };

  const handleChangeAddress = value => {
    const addressId = value.target.value;
    const currentAddress = AppStore.postCodes.find(
      code => code.id === addressId,
    );

    AppStore.updateSelectedAddress(currentAddress.line_1);
    setAddressInfo(currentAddress);
    AppStore.updateCommonAddress(currentAddress);
    AppStore.updateAddress1(currentAddress.line_1);
    AppStore.updateAddress2(currentAddress.line_2);
    AppStore.updateCity(currentAddress.county);
    AppStore.updateCounty(currentAddress.county);
    AppStore.updatePostcode(currentAddress.postcode);
  };

  const handleCheckboxChange = value => {
    AppStore.updateBotChecked(value.target.checked);
  };

  const findAddresses = () => {
    const axiosConfig = {
      url: `${POSTCODE_URL}/${AppStore.postcode}`,
      method: 'GET',
      params: { api_key: POSTCODE_API_KEY },
    };

    API(axiosConfig)
      .then(response => {
        setAddressInfo(false);
        AppStore.updateAddress1('');
        AppStore.updateAddress2('');
        AppStore.updateCity('');
        AppStore.updateCounty('');
        AppStore.updatePostcode('');
        if (response?.err) {
          setPostCodeError('Please, try again.');
          AppStore.updateCodes([]);
          return;
        }
        setPostCodeError('');
        AppStore.updateCodes(response.response.data.result);
      })
      .catch(error => {
        appsignal.sendError(error);
      });
  };

  const sendPostCodes = () => {
    const id = AppStore.client_ID;

    const config = {
      url: `${BASE_URL}/${id}`,
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
      data: getPostCodeInfo(),
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

  const sendPostCodeDb = () => {
    let insertedId = AppStore.insertedId;
    axios
      .post(`http://localhost:5000/update/${insertedId}`, getPostCodeInfo())
      .then(res => {
        console.log(res.status);
      });
  };

  const isDisabled = !AppStore.address1 || AppStore?.postCodes?.length === 0;
  return (
    <>
      <Typography variant="h3" sx={textStyles}>
        Thank you, {AppStore.first_name}. We just need to know where to issue
        your refund.
      </Typography>
      <Typography variant="h3" sx={textStyles}>
        What is your postcode?
      </Typography>
      <div>
        <>
          <div className={styles.wrapper}>
            <TextField
              onChange={handleChangePostCode}
              value={AppStore.postcode}
              placeholder="Enter your postcode"
              sx={inputPostcode}
            />
            {AppStore.postCodes.length > 0 && (
              <div className={styles.selectAddress}>
                <Select
                  sx={inputSelect}
                  renderValue={selected => {
                    if (selected.length === 0) {
                      return <span>Select your address</span>;
                    }
                    return selected;
                  }}
                  value={AppStore.selectedAddress}
                  displayEmpty
                  onChange={handleChangeAddress}
                >
                  <MenuItem
                    disabled
                    value=""
                    sx={{
                      fontFamily: 'Inter, sans-serif',
                      color: '#A1BFC6',
                      fontSize: '19px',
                      fontWeight: 400,
                      fontStyle: 'normal',
                    }}
                  >
                    <span>Select your address</span>
                  </MenuItem>
                  {AppStore.postCodes.length > 0 &&
                    AppStore.postCodes.map(item => (
                      <MenuItem value={item.id} key={item.id}>
                        {item.line_3} {item.line_1}
                      </MenuItem>
                    ))}
                </Select>
              </div>
            )}
          </div>
          <div>
            <button
              onClick={findAddresses}
              disabled={!AppStore.postcode}
              className={styles.btnFindAddress}
            >
              Find my address
              <img
                style={{
                  width: '15px',
                  height: '13px',
                  marginLeft: '9px',
                  paddingRight: '15px',
                }}
                src={arrowWhite}
                alt="arrow"
              />
            </button>
          </div>
          {AppStore.commonAddress ? (
            <div className={styles.addressTextWrapper}>
              <div className={styles.addressText}>
                {AppStore.commonAddress.line_1}
              </div>
              <div className={styles.addressText}>
                {AppStore.commonAddress.line_2}
              </div>
              <div className={styles.addressText}>
                {AppStore.commonAddress.line_3}
              </div>
              <div className={styles.addressText}>
                {AppStore.commonAddress.county}
              </div>
              <div className={styles.addressText}>
                {AppStore.commonAddress.postcode}
              </div>
            </div>
          ) : (
            ''
          )}
        </>
        {postCodeError}
      </div>
      <div hidden>
        <Checkbox
          sx={{
            marginRight: '18px',
            padding: '15px',
            color: '#47C9A7',
            background: '#F9F9F9',
            width: '17px',
            height: '17px',
          }}
          checked={AppStore.botChecked}
          onChange={handleCheckboxChange}
          inputProps={{ 'aria-label': 'controlled' }}
        />
      </div>
      <Button
        classes={Postcodes}
        onClick={() => {
          WizardStore.nextStep();
          sendPostCodes();
          sendPostCodeDb();
        }}
        disabled={isDisabled}
        display="form"
      >
        Next
      </Button>
    </>
  );
};

export default observer(Postcodes);
