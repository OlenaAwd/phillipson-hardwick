import React from 'react';
import { Container } from '@mui/material';
import { observer } from 'mobx-react';
import CustomizedProgressBars from '../LinearProgress';
import Compensation from './formSteps/Compensation';
import Banks from './formSteps/Banks';
import Employment from './formSteps/Employment';
import UserDetails from './formSteps/UserDetails';
import Postcodes from './formSteps/Postcodes';
import Insurance from './formSteps/Insurance';
import Signature from './formSteps/Signature/';
import ClaimQuestions from './formSteps/ClaimQuestions';
import ThanksPage from './formSteps/ThanksPage';
import WizardStore from '../../store/WizardStore';
import { mainFormStyles } from '../../constants/styles/mainFormStyles';

const MainForm = () => {
  const progressList = [12, 24, 36, 48, 60, 72, 84, 90, 99, 100];

  const getCurrentStep = () => {
    if (WizardStore.currentPage === 1) {
      return <Compensation />;
    } else if (WizardStore.currentPage === 2) {
      return <Banks />;
    } else if (WizardStore.currentPage === 3) {
      return <Employment />;
    } else if (WizardStore.currentPage === 4) {
      return <UserDetails />;
    } else if (WizardStore.currentPage === 5) {
      return <Postcodes />;
    } else if (WizardStore.currentPage === 6) {
      return <Signature />;
    } else if (WizardStore.currentPage === 7) {
      return <Insurance />;
    } else if (WizardStore.currentPage === 8) {
      return <ClaimQuestions />;
    } else if (WizardStore.currentPage === 9) {
      return <ThanksPage />;
    }
  };

  return (
    <>
      <div>
        <div className="form-container">
          <div className="body">
            <Container
              maxWidth={false}
              disableGutters={true}
              sx={mainFormStyles}
            >
              <CustomizedProgressBars
                value={progressList[WizardStore.currentPage]}
              />
              {getCurrentStep()}
            </Container>
          </div>
        </div>
      </div>
    </>
  );
};
export default observer(MainForm);
