import { autorun, makeAutoObservable, runInAction } from 'mobx';
import { autoSave } from '../utils/autoSave';

class WizardStore {
  constructor() {
    makeAutoObservable(this);
    autoSave(this, 'LocalWizardStore');
    // eslint-disable-next-line no-unused-vars
    let firstRun = true;

    autorun(() => {
      this.load();
      firstRun = false;
    });
  }

  load = async () => {
    const LocalAppStore = await window.localStorage.getItem('LocalWizardStore');
    const parsedLocalAppStore = JSON.parse(LocalAppStore);
    runInAction(() => {
      Object.keys(parsedLocalAppStore).forEach(key => {
        this[key] = parsedLocalAppStore[key];
      });
    });
  };

  currentPage = 0;
  error = '';

  nextStep = () => {
    if (this.currentPage === 9) {
      return;
    }
    window.scrollTo({ top: 350, behavior: 'smooth' });
    this.currentPage = this.currentPage + 1;
  };

  nextLandingFormStep = () => {
    if (this.currentPage === 2) {
      return;
    }
    window.scrollTo({ top: 350, behavior: 'smooth' });
    this.currentPage = this.currentPage + 1;
  };

  startQuiz = () => {
    if (this.currentPage === 0) {
      this.currentPage = 1;
    }
  };
}

export default new WizardStore();
