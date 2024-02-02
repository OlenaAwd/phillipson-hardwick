import { autorun, makeAutoObservable, runInAction } from 'mobx';
import { autoSave } from '../utils/autoSave';

export class AppStore {
  constructor() {
    makeAutoObservable(this);
    autoSave(this, 'LocalAppStore');
    // eslint-disable-next-line no-unused-vars
    let firstRun = true;

    autorun(() => {
      this.load();
      firstRun = false;
    });
  }

  load = async () => {
    const LocalAppStore = await window.localStorage.getItem('LocalAppStore');
    const parsedLocalAppStore = JSON.parse(LocalAppStore);
    runInAction(() => {
      Object.keys(parsedLocalAppStore).forEach(key => {
        this[key] = parsedLocalAppStore[key];
      });
    });
  };
  source_ref = '';
  wh_ref = '';
  original_client_ref = '';
  mc_list_id = '';
  mktemplateid = '';
  postCodes = [];
  error = '';
  title = '';
  first_name = '';
  last_name = '';
  email = '';
  home_phone = '';
  mobile_phone = '';
  commonAddress = '';
  selectedAddress = '';
  address1 = '';
  address2 = '';
  city = '';
  county = '';
  postcode = '';
  ni_number = '';
  dob = '';
  client_ref = '';
  extra_info = '';
  lender = '';
  employment_status = '';

  gross_interest = '';
  tax_deducted = '';
  net_interest = '';

  offerDate = '';
  compensationPayment = '';
  offerAmount = '';
  income = '';
  married = '';
  required_uniform = '';
  self_assessment = '';
  vehicle_required = '';
  checked = false;
  day = '';
  month = '';
  year = '';
  signatureImg = '';
  signatureChecked = false;
  lenderYear = [];
  client_ID = '';
  claim_id = '';
  insertedId = '';
  botChecked = false;

  chipsYears = [
    {
      id: 1,
      label: 'Before 2016',
      value: 2015,
      selected: false,
      taxPeriod: '2016/2017',
    },
    {
      id: 2,
      label: '2016',
      value: 2016,
      selected: false,
      taxPeriod: '2016/2017',
    },
    {
      id: 3,
      label: '2017',
      value: 2017,
      selected: false,
      taxPeriod: '2017/2018',
    },
    {
      id: 4,
      label: '2018',
      value: 2018,
      selected: false,
      taxPeriod: '2018/2019',
    },
    {
      id: 5,
      label: '2019',
      value: 2019,
      selected: false,
      taxPeriod: '2019/2020',
    },
    {
      id: 6,
      label: '2020',
      value: 2020,
      selected: false,
      taxPeriod: '2020/2021',
    },
    {
      id: 7,
      label: '2021',
      value: 2021,
      selected: false,
      taxPeriod: '2021/2022',
    },
  ];

  chipsBanks = [
    {
      id: 1,
      label: 'Abbey National',
      value: 'Abbey National',
      selected: false,
    },
    {
      id: 2,
      label: 'Alliance & Leicester',
      value: 'Alliance & Leicester',
      selected: false,
    },
    {
      id: 3,
      label: 'Bank of Scotland',
      value: 'Bank of Scotland',
      selected: false,
    },
    {
      id: 4,
      label: 'Barclaycard',
      value: 'Barclaycard',
      selected: false,
    },
    {
      id: 5,
      label: 'Barclays',
      value: 'Barclays',
      selected: false,
    },
    {
      id: 6,
      label: 'Black Horse',
      value: 'Black Horse',
      selected: false,
    },
    {
      id: 7,
      label: 'Capital One',
      value: 'Capital One',
      selected: false,
    },
    {
      id: 8,
      label: 'Clydesdale Bank',
      value: 'Clydesdale Bank',
      selected: false,
    },
    {
      id: 9,
      label: 'Egg',
      value: 'Egg',
      selected: false,
    },
    {
      id: 10,
      label: 'Halifax',
      value: 'Halifax',
      selected: false,
    },
    {
      id: 11,
      label: 'HSBC',
      value: 'HSBC',
      selected: false,
    },

    {
      id: 12,
      label: 'Lloyds Bank',
      value: 'Lloyds Bank',
      selected: false,
    },

    {
      id: 13,
      label: 'MBNA',
      value: 'MBNA',
      selected: false,
    },
    {
      id: 14,
      label: 'Nationwide',
      value: 'Nationwide',
      selected: false,
    },
    {
      id: 15,
      label: 'NatWest',
      value: 'NatWest',
      selected: false,
    },
    {
      id: 16,
      label: 'Northern Rock',
      value: 'Northern Rock',
      selected: false,
    },
    {
      id: 17,
      label: 'RBS',
      value: 'RBS',
      selected: false,
    },
    {
      id: 18,
      label: 'Santander',
      value: 'Santander',
      selected: false,
    },
    {
      id: 19,
      label: 'Yorkshire Bank',
      value: 'Yorkshire Bank',
      selected: false,
    },
    {
      id: 20,
      label: 'Other',
      value: 'Other',
      selected: false,
    },
  ];

  updateSource_ref = value => {
    this.source_ref = value;
  };

  updateWh_ref = value => {
    this.wh_ref = value;
  };
  updateOriginal_client_ref = value => {
    this.original_client_ref = value;
  };
  updateMc_list_id = value => {
    this.mc_list_id = value;
  };

  updateMktemplateid = value => {
    this.mktemplateid = value;
  };

  updateCodes = codes => {
    this.postCodes = codes;
  };

  updateClaim_id = value => {
    this.claim_id = value;
  };

  updateSignatureImg = value => {
    this.signatureImg = value;
  };

  updateClient_ID = value => {
    this.client_ID = value;
  };

  updateLenderYear = value => {
    this.lenderYear = value;
  };

  updateNet_interest = value => {
    this.net_interest = value;
  };

  updateTax_deducted = value => {
    this.tax_deducted = value;
  };

  updateGross_interest = value => {
    this.gross_interest = value;
  };

  updateTitle = title => {
    this.title = title;
  };

  updateFirst_name = first_name => {
    this.first_name = first_name;
  };

  updateLast_name = last_name => {
    this.last_name = last_name;
  };

  updateEmail = email => {
    this.email = email;
  };

  updateHome_phone = home_phone => {
    this.home_phone = home_phone;
  };

  updateMobile_phone = mobile_phone => {
    this.mobile_phone = mobile_phone;
  };
  updateCommonAddress = value => {
    this.commonAddress = value;
  };

  updateSelectedAddress = value => {
    this.selectedAddress = value;
  };

  updateAddress1 = address1 => {
    this.address1 = address1;
  };

  updateAddress2 = address2 => {
    this.address2 = address2;
  };

  updateCity = city => {
    this.city = city;
  };

  updateCounty = country => {
    this.country = country;
  };

  updatePostcode = postcode => {
    this.postcode = postcode;
  };

  updateDob = dob => {
    this.dob = dob;
  };

  updateClient_ref = client_ref => {
    this.client_ref = client_ref;
  };
  updateYear = value => {
    this.year = value;
  };

  updateMonth = value => {
    this.month = value;
  };

  updateDay = value => {
    this.day = value;
  };

  updateExtra_info = value => {
    this.extra_info = value;
  };

  updateChecked = value => {
    this.checked = value;
  };
  updateSignatureChecked = value => {
    this.signatureChecked = value;
  };
  updateVehicle_required = value => {
    this.vehicle_required = value;
  };

  updateSelf_assessment = value => {
    this.self_assessment = value;
  };

  updateRequired_uniform = value => {
    this.required_uniform = value;
  };

  updateMarried = value => {
    this.married = value;
  };

  updateNi_number = value => {
    this.ni_number = value;
  };

  updateIncome = value => {
    this.income = value;
  };
  updateEmployment_status = value => {
    this.employment_status = value;
  };

  updateLender = value => {
    this.lender = value;
  };

  updateOfferDate = value => {
    this.offerDate = value;
  };

  updateOfferAmount = value => {
    this.offerAmount = value;
  };

  updateCompensationPayment = value => {
    this.compensationPayment = value;
  };

  highlightYearButton = (button, value) => {
    this.chipsYears.find(item => item.value === button).selected = !value;
  };

  highlightBanksButton = (btn, value) => {
    this.chipsBanks.find(item => item.value === btn).selected = !value;
  };

  updateInsertedId = value => {
    this.insertedId = value;
  };
  updateBotChecked = value => {
    this.botChecked = value;
  };
}

export default new AppStore();
