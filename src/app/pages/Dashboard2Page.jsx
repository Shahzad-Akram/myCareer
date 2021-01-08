import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '90%',
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
  ];
}

const Question1 = () => {
  return (
    <div className='bg-white p-8 rounded-lg mt-10'>
      <h4 className='font-weight-bold mb-6'>
        Question 1: Lorem ipsum dolor site amet
      </h4>
      <div className='d-flex justify-content-between mb-8'>
        <div className='d-flex align-items-center'>
          <span className='mr-4'>
            <img
              className='rounded-lg'
              style={{
                objectFit: 'cover',
              }}
              height={70}
              width={100}
              src='https://source.unsplash.com/random'
              alt='pic'
            />
          </span>
          <span>
            <h6 className='font-weight-bold'>Idle & Empty</h6>
            <span className='text-black-50'>Lorem ipsum dolor sit amet.</span>
          </span>
        </div>
        <div>
          <button
            type='button'
            className='btn btn-bg-light btn-hover-bg-warning text-hover-white mr-2'
          >
            <b>1</b>
          </button>
          <button
            type='button'
            className='btn btn-warning text-hover-white mr-2'
          >
            <b>2</b>
          </button>
          <button
            type='button'
            className='btn btn-bg-light btn-hover-bg-warning text-hover-white mr-2'
          >
            <b>3</b>
          </button>
          <button
            type='button'
            className='btn btn-bg-light btn-hover-bg-warning text-hover-white'
          >
            <b>4</b>
          </button>
        </div>
      </div>
      {/* -- */}
      <div className='d-flex justify-content-between mb-8'>
        <div className='d-flex align-items-center'>
          <span className='mr-4'>
            <img
              className='rounded-lg'
              style={{
                objectFit: 'cover',
              }}
              height={70}
              width={100}
              src='https://source.unsplash.com/random'
              alt='pic'
            />
          </span>
          <span>
            <h6 className='font-weight-bold'>Idle & Empty</h6>
            <span className='text-black-50'>Lorem ipsum dolor sit amet.</span>
          </span>
        </div>
        <div>
          <button
            type='button'
            className='btn btn-bg-light btn-hover-bg-warning text-hover-white mr-2'
          >
            <b>1</b>
          </button>
          <button
            type='button'
            className='btn btn-warning text-hover-white mr-2'
          >
            <b>2</b>
          </button>
          <button
            type='button'
            className='btn btn-bg-light btn-hover-bg-warning text-hover-white mr-2'
          >
            <b>3</b>
          </button>
          <button
            type='button'
            className='btn btn-bg-light btn-hover-bg-warning text-hover-white'
          >
            <b>4</b>
          </button>
        </div>
      </div>
      <div className='d-flex justify-content-between mb-8'>
        <div className='d-flex align-items-center'>
          <span className='mr-4'>
            <img
              className='rounded-lg'
              style={{
                objectFit: 'cover',
              }}
              height={70}
              width={100}
              src='https://source.unsplash.com/random'
              alt='pic'
            />
          </span>
          <span>
            <h6 className='font-weight-bold'>Idle & Empty</h6>
            <span className='text-black-50'>Lorem ipsum dolor sit amet.</span>
          </span>
        </div>
        <div>
          <button
            type='button'
            className='btn btn-bg-light btn-hover-bg-warning text-hover-white mr-2'
          >
            <b>1</b>
          </button>
          <button
            type='button'
            className='btn btn-warning text-hover-white mr-2'
          >
            <b>2</b>
          </button>
          <button
            type='button'
            className='btn btn-bg-light btn-hover-bg-warning text-hover-white mr-2'
          >
            <b>3</b>
          </button>
          <button
            type='button'
            className='btn btn-bg-light btn-hover-bg-warning text-hover-white'
          >
            <b>4</b>
          </button>
        </div>
      </div>
      <div className='d-flex justify-content-between mb-8'>
        <div className='d-flex align-items-center'>
          <span className='mr-4'>
            <img
              className='rounded-lg'
              style={{
                objectFit: 'cover',
              }}
              height={70}
              width={100}
              src='https://source.unsplash.com/random'
              alt='pic'
            />
          </span>
          <span>
            <h6 className='font-weight-bold'>Idle & Empty</h6>
            <span className='text-black-50'>Lorem ipsum dolor sit amet.</span>
          </span>
        </div>
        <div>
          <button
            type='button'
            className='btn btn-bg-light btn-hover-bg-warning text-hover-white mr-2'
          >
            <b>1</b>
          </button>
          <button
            type='button'
            className='btn btn-warning text-hover-white mr-2'
          >
            <b>2</b>
          </button>
          <button
            type='button'
            className='btn btn-bg-light btn-hover-bg-warning text-hover-white mr-2'
          >
            <b>3</b>
          </button>
          <button
            type='button'
            className='btn btn-bg-light btn-hover-bg-warning text-hover-white'
          >
            <b>4</b>
          </button>
        </div>
      </div>
    </div>
  );
};

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Question1 />;
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Uknown stepIndex';
  }
}

export const Dashboard2Page = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

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
      <div className={classes.root}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed
              </Typography>
              <Button onClick={handleReset}>Reset</Button>
            </div>
          ) : (
            <div>
              <Typography className={classes.instructions}>
                {getStepContent(activeStep)}
              </Typography>
              <div>
                <Button
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.backButton}
                >
                  Back
                </Button>
                <Button
                  variant='contained'
                  color='primary'
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
