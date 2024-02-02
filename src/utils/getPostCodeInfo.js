import AppStore from '../store/AppStore';

const getPostCodeInfo = () => {
  return {
    address1: AppStore.address1,
    address2: AppStore.address2,
    city: AppStore.city,
    county: AppStore.county,
    postcode: AppStore.postcode,
    bot_check: AppStore.botChecked,
    step2: true,
  };
};

export default getPostCodeInfo;
