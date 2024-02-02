import AppStore from '../store/AppStore';

const getSignatureDetails = () => {
  return {
    client_ref: AppStore.client_ref,
    signature: AppStore.signatureImg,
    signer_type: 'client',
    can_use_in_future: AppStore.signatureChecked,
    accepts_terms: AppStore.checked,
    client_id: AppStore.client_ID,
    step3: true,
  };
};

export default getSignatureDetails;
