import AppStore from '../store/AppStore';

const getInsurance = () => {
  return {
    ni_number: AppStore.ni_number,
    step4: true,
  };
};

export default getInsurance;
