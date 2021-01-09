import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';

import Question1 from '../CustomComponents/Question1';

function getSteps() {
  return ['1', '2', '3', '4', '5', '6', '7'];
}

function getStepsOne() {
  return ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
}

const StepperTwo = ({ activeStepOne, onClick, onBack }) => {
  return (
    <>
      <MobileStepper
        className='justify-content-start'
        variant='progress'
        steps={7}
        position='static'
        activeStep={activeStepOne}
        backButton={
          <div className='d-flex align-items-center text-black-50 mr-3'>
            <span className='p-0' onClick={onBack}>
              1
            </span>
            <span>/</span>
            <span className='p-0' onClick={onClick}>
              7
            </span>
          </div>
        }
      />
    </>
  );
};

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Question1 />;
    case 1:
      return <Question1 />;
    case 2:
      return <Question1 />;
    case 3:
      return <Question1 />;
    case 4:
      return <Question1 />;
    case 5:
      return <Question1 />;
    case 6:
      return <Question1 />;
    case 7:
      return <Question1 />;
    default:
      return 'Uknown stepIndex';
  }
}

export const Dashboard2Page = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [activeStepOne, setActiveStepOne] = useState(0);
  const steps = getSteps();
  const stepsOne = getStepsOne();

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <section
      style={{
        paddingLeft: 300,
        paddingTop: 70,
      }}
    >
      <div className='mr-12'>
        <Stepper
          className='rounded-lg'
          activeStep={activeStepOne}
          alternativeLabel
        >
          {stepsOne.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
              <div className='small mt-4 text-center'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Sapiente sunt a nesciunt aspernatur nostrum eveniet.
              </div>
              <div className='text-center mt-4'>
                <span className='badge badge-light'>0/4 Completed</span>
              </div>
              <div className='text-center mt-4'>
                <span className='badge badge-danger'>Paid</span>
              </div>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography>All steps completed</Typography>

              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div className='bg-white p-8 rounded-lg mt-10'>
              <Typography>{getStepContent(activeStep)}</Typography>
              <div className='row justify-content-between'>
                <div className='col-12 col-md-3'>
                  <StepperTwo
                    activeStepOne={activeStep}
                    onClick={handleNext}
                    disabled={activeStep === 7}
                    onBack={handleBack}
                    disabled={activeStep === 0}
                  />
                </div>
                <div className='col-12 col-md-3 text-right'>
                  <Button
                    className='btn-primary'
                    variant='contained'
                    color='primary'
                    onClick={handleNext}
                  >
                    {activeStepOne === steps.length - 1
                      ? 'Finish'
                      : 'Next Question'}
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
