import ReactGA from 'react-ga4';

const AnalyticsTracker = (category = 'Button') => {
  const eventTracker = (action = 'Button', label = 'Button clicked') => {
    ReactGA.event({ category, action, label });
  };
  return eventTracker;
};

export default AnalyticsTracker;
