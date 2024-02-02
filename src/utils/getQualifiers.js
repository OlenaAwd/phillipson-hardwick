import AppStore from '../store/AppStore';

const getQualifiers = () => {
  const formatQuestion = value => {
    if (value === 'Yes') {
      return true;
    }
    return false;
  };
  let employment = AppStore.employment_status;

  const checkEmployment = employment => {
    if (employment === 'Self-employed') {
      return true;
    }
    return false;
  };

  return {
    client_id: AppStore.client_ID,
    required_uniform: formatQuestion(AppStore.required_uniform),
    married: formatQuestion(AppStore.married),
    vehicle_required: formatQuestion(AppStore.vehicle_required),
    pba_ppi_claim: true,
    self_assessment: checkEmployment(employment),
    step5: true,
  };
};

export default getQualifiers;
