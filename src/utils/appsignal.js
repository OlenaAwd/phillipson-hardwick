import Appsignal from '@appsignal/javascript';
import { APPSIGNAL_KEY } from '../config';

export const appsignal = new Appsignal({
  key: APPSIGNAL_KEY,
});
