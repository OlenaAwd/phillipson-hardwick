import React, { useState, useEffect } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';
import { useVisibilityHook } from 'react-observer-api';

const StatsbarHOC = props => (
  <Odometer
    animation={props.animation}
    duration={props.duration}
    format={props.format}
    theme={props.theme}
    value={props.value}
  />
);

const Statsbar = props => {
  const [odometerValue, setOdometerValue] = useState(0);
  const [isShown, setIsShown] = useState(false);
  const { setElement, isVisible } = useVisibilityHook();

  useEffect(() => {
    if (isVisible && !isShown) {
      setIsShown(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);

  useEffect(() => {
    if (isShown) {
      setOdometerValue(props.value);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isShown]);

  return (
    <span ref={setElement}>
      <StatsbarHOC
        format={props.format}
        duration={props.duration}
        value={odometerValue}
      />
    </span>
  );
};

export default Statsbar;
