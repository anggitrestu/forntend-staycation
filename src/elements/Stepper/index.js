import React, { useState } from 'react';
import propTypes from 'prop-types';

const Stepper = (props) => {
  const { steps, initialStep } = props;
  const stepKeys = Object.keys(steps);

  const [CurrentStep, setCurrentStep] = useState(
    stepKeys.indexOf(initialStep) > -1 ? initialStep : stepKeys[0]
  );

  const totalStep = stepKeys.length;
  const indexStep = stepKeys.indexOf(CurrentStep);

  function prevStep() {
    if (+indexStep > 0) setCurrentStep(stepKeys[indexStep - 1]);
  }
  function nextStep() {
    if (+indexStep < totalStep) setCurrentStep(stepKeys[indexStep + 1]);
  }

  return <>{props.children(prevStep, nextStep, CurrentStep, steps)}</>;
};

export default Stepper;

Stepper.propTypes = {
  data: propTypes.object,
  initialStep: propTypes.string,
};

export { default as Numbering } from './Numbering';
export { default as Meta } from './Meta';
export { default as Controller } from './Controller';
export { default as MainContent } from './MainContent';
