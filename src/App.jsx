import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';
import TagManager from 'react-gtm-module';
import { ErrorBoundary } from '@appsignal/react';
import { appsignal } from './utils/appsignal';
import AppStore from './store/AppStore';
import Header from './components/Header/Header';
import FutherInfo from './components/FutherInfo/FutherInfo';
import Footer from './components/Footer/Footer';
import './App.scss';

const App = props => {
  useEffect(() => {
    ReactGA.initialize('G-HSS32FCM0L');
    TagManager.initialize({ gtmId: 'GTM-N5CQGMT' });
  }, []);

  const search = useLocation().search;
  let sourceref = new URLSearchParams(search).get('sourceref');
  let origref = new URLSearchParams(search).get('origref');
  let uniqueref = new URLSearchParams(search).get('uniqueref');
  let listid = new URLSearchParams(search).get('listid');
  let mktemplateid = new URLSearchParams(search).get('mktemplateid');

  useEffect(() => {
    AppStore.updateSource_ref(sourceref);
    AppStore.updateOriginal_client_ref(origref);
    AppStore.updateWh_ref(uniqueref);
    AppStore.updateMc_list_id(listid);
    AppStore.updateMktemplateid(mktemplateid);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formRef = useRef(null);
  const scrollToForm = () =>
    formRef.current.scrollIntoView({ top: 0, behavior: 'smooth' });

  const span = appsignal.createSpan(span => {
    return span.setError(new Error('pha-ppi'));
  });

  appsignal.send(span);

  return (
    <ErrorBoundary
      instance={appsignal}
      tags={{ tag: 'value' }}
      fallback={error => <span>Caught an error!</span>}
    >
      <div className="App">
        <Header scrollRef={formRef} />
        <FutherInfo scroll={scrollToForm} />
        <Footer />
      </div>
    </ErrorBoundary>
  );
};
export default App;
