import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import { Modal, Row } from 'react-bootstrap';

// Components
import Question1 from '../CustomComponents/Question1';
import ResultFree from '../CustomComponents/resultFree';
import { Col } from 'react-bootstrap';
import { FormControlLabel, TextField, Checkbox } from '@material-ui/core';

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
        className='justify-content-center justify-content-md-start'
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
      return <Question1 title=' Question 1: Lorem ipsum dolor site amet' />;
    case 1:
      return <Question1 title=' Question 2: Lorem ipsum dolor site amet' />;
    case 2:
      return <Question1 title=' Question 3: Lorem ipsum dolor site amet' />;
    case 3:
      return <Question1 title=' Question 4: Lorem ipsum dolor site amet' />;
    case 4:
      return <Question1 title=' Question 5: Lorem ipsum dolor site amet' />;
    case 5:
      return <Question1 title=' Question 6: Lorem ipsum dolor site amet' />;
    case 6:
      return <Question1 title=' Question 7: Lorem ipsum dolor site amet' />;
    default:
      return 'Uknown stepIndex';
  }
}

export const Dashboard2Page = () => {
  const [show, setShow] = useState(true);
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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
      className='container pl-lg-29'
      style={{
        paddingTop: 70,
      }}
    >
      <header className='row mx-0 justify-content-center justify-content-md-between align-items-center mb-10'>
        <div className='font-weight-bolder h5 text-dark-65 mb-5 mb-md-0'>
          Road to Success in Presentation
        </div>
        <div>
          <button
            type='button'
            className='btn btn-bg-white btn-hover-bg-success p-2 mx-2 text-dark-25 text-hover-white'
          >
            <i className='fa fa-file-alt pr-0'></i>
          </button>
          <button
            type='button'
            className='btn btn-bg-white btn-hover-bg-success p-2 mx-2 text-dark-25 text-hover-white'
          >
            <i className='fa fa-shield-virus pr-0'></i>
          </button>
          <button
            type='button'
            className='btn btn-bg-white btn-hover-bg-success p-2 mx-2 text-dark-25 text-hover-white'
          >
            <i className='fa fa-comments pr-0'></i>
          </button>
          <button
            type='button'
            className='btn btn-bg-white btn-hover-bg-success p-2 mx-2 text-dark-25 text-hover-white'
          >
            <i className='fa fa-bell pr-0'></i>
          </button>
        </div>
      </header>
      <div>
        <Stepper
          className='rounded-lg flex-column align-items-center flex-lg-row'
          activeStep={activeStepOne}
          alternativeLabel
        >
          {stepsOne.map((label) => (
            <Step key={label} className='mb-10 mb-lg-0'>
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
              <Modal centered size='xl' show={show} onHide={handleClose}>
                <Modal.Body className='Section-1 rounded-lg'>
                  <div className='mb-5 text-right'>
                    <button
                      type='button'
                      onClick={handleClose}
                      className='btn p-0'
                    >
                      <i className='fa fa-times'></i>
                    </button>
                  </div>
                  <Row className='justify-content-around align-items-center'>
                    <Col md={5}>
                      <h1 className='font-weight-bolder text-uppercase mb-4'>
                        WelCome and what you will get
                      </h1>
                      <div className='mb-4'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Aspernatur iste ea totam id repudiandae omnis?
                      </div>
                      <p className='mb-4 text-black-50'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima facilis impedit nostrum odit, aliquam nam
                        voluptas mollitia veniam debitis obcaecati numquam ad
                        laboriosam, nesciunt ut. Cum quia quasi voluptas sequi!
                      </p>
                      <p className='mb-4 text-black-50'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima facilis impedit nostrum odit, aliquam nam
                        voluptas mollitia veniam debitis obcaecati numquam ad
                        laboriosam, nesciunt ut. Cum quia quasi voluptas sequi!
                      </p>
                      <p className='text-black-50'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Minima facilis impedit nostrum odit, aliquam nam
                        voluptas mollitia veniam debitis obcaecati numquam ad
                        laboriosam, nesciunt ut. Cum quia quasi voluptas sequi!
                      </p>
                    </Col>
                    <Col md={5} lg={4}>
                      <form>
                        <div className='mb-3'>
                          <TextField
                            className='w-100'
                            type='email'
                            label='Email'
                            variant='filled'
                          />
                        </div>
                        <div className='mb-3'>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={state.checkedA}
                                onChange={handleChange}
                                name='checkedA'
                                color='primary'
                              />
                            }
                            label='I agree to the terms & conditions'
                          />
                        </div>
                        <div>
                          <button className='btn btn-primary btn-block'>
                            Sign Up
                          </button>
                        </div>
                      </form>
                    </Col>
                  </Row>
                </Modal.Body>
              </Modal>
              <ResultFree />
            </div>
          ) : (
            <div className='bg-white p-8 rounded-lg mt-10'>
              <Typography>{getStepContent(activeStep)}</Typography>
              <div className='row justify-content-between mt-8 pt-8 border-top'>
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
                    className='btn-primary btn-block'
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
