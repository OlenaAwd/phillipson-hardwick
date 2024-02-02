import AppStore from '../store/AppStore';

const getClientInfo = () => {
  const lastSelectedYear = () => {
    let selectedYears = AppStore.chipsYears;
    return selectedYears[selectedYears.length - 1].taxPeriod;
  };

  const lastSelectedYearValue = () => {
    let selectedYears = AppStore.chipsYears;
    return selectedYears[selectedYears.length - 1].value;
  };

  const roundedMultiple_claims = AppStore.offerAmount;
  const tax_deducted = roundedMultiple_claims * 0.11;
  const roundedTax_deducted = tax_deducted.toFixed(2);
  const gross_interest = roundedTax_deducted * 5;
  const roundedGross_interest = gross_interest.toFixed(2);
  const net_interest = (roundedGross_interest - roundedTax_deducted).toString();

  const selectedBanks = AppStore.chipsBanks.filter(
    item => item.selected === true,
  );

  const banksToString = () => {
    const bankArr = [];
    selectedBanks.map(item => bankArr.push(item.value));
    return bankArr.join('; ');
  };

  return {
    first_name: AppStore.first_name,
    last_name: AppStore.last_name,
    mobile_phone: AppStore.mobile_phone,
    email: AppStore.email,
    dob: `${AppStore.day}/${AppStore.month}/${AppStore.year}`,
    source_ref: AppStore.source_ref,
    original_client_ref: AppStore.original_client_ref,
    wh_ref: AppStore.wh_ref,
    mc_list_id: AppStore.mc_list_id,
    mk_template_id: AppStore.mktemplateid,
    extra_info: banksToString(),
    employment: AppStore.employment_status,
    income_bracket2022: AppStore.income,
    step1: true,
    claims_attributes: [
      {
        claim_type: 'ppi',
        status_id: 139,
        outcome_id: 94,
        pba_ppis_attributes: [
          {
            offer_date: `06/04/${lastSelectedYearValue()}`,
            lender: 'Marketing',
            offer_amount: roundedMultiple_claims,
            gross_interest: roundedGross_interest,
            tax_deducted: roundedTax_deducted,
            net_interest: net_interest,
            tax_year: lastSelectedYear(),
          },
        ],
      },
    ],
  };
};

export default getClientInfo;
