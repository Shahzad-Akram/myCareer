import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import MobileStepper from '@material-ui/core/MobileStepper';
import { Modal, Row } from 'react-bootstrap';
import ReactPlayer from 'react-player';

// Components
import Question1 from '../CustomComponents/Question1';
import ResultFree from '../CustomComponents/resultFree';
import { Col } from 'react-bootstrap';
import { FormControlLabel, TextField, Checkbox } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import axios from 'axios';

// Images
import ImageOne from '../../assets/images/images/alan-heart.svg';
import ImagePlay from '../../assets/images/images/play-button.svg';
import ImageTwo from '../../assets/images/images/videoOne.svg';
import ImageThree from '../../assets/images/images/videoTwo.png';

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
  const [modalOpenTwo, setModalOpenTwo] = useState(true);
  const [modalOpenThree, setModalOpenThree] = useState(true);
  const [modalOpenFour, setModalOpenFour] = useState(true);
  const params = useParams();
  console.log(params);
  const [show, setShow] = useState(true);
  const [email, setEmail] = useState(null);
  const [state, setState] = useState({
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

  function handleReset(e) {
    setActiveStep(0);
  }

  function handleSendEmail(e) {
    e.preventDefault();
    console.log(email);
    const data = {
      email: email,
      userLevel: 'intermediate',
    };
    axios
      .post(
        'https://presentation-learning-platform.herokuapp.com/api/survey/add',
        data
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Modal
        centered
        size='xl'
        show={modalOpenTwo}
        onHide={() => setModalOpenTwo(false)}
      >
        <Modal.Body className='Section-1 rounded-lg'>
          <div className='mb-5 text-right'>
            <button
              type='button'
              onClick={() => setModalOpenTwo(false)}
              className='btn p-0'
            >
              <i className='fa fa-times'></i>
            </button>
          </div>

          <div className='row mx-0 justify-content-between'>
            <div className='col col-lg-6 col-lg-5'>
              <h1 className='display-4 font-weight-bolder mb-8 text-center text-xl-left text-uppercase'>
                GET YOUR BASIC <br /> REPORT FOR FREE
              </h1>
              <p>
                Thanks for showing your interest to take part in the CAPS™
                Personal Strengths Assessment! With this assessment, you can get
                a free basic report that allows you to understand your talent
                types(s) and characteristics so that you can better prepare
                yourself for the admissions interview. Sign up here to get a
                free basic report about your own personal strengths.
              </p>
            </div>
            <div className='col-12 col-lg-6 col-xl-5'>
              <div className='d-flex h-150px w-150px ml-auto mb-8'>
                <img className='h-100 w-100' src={ImageOne} alt='alan' />
              </div>
              <form>
                <div className='mb-8'>
                  <input
                    className='input-group-text form-control text-left py-8'
                    type='email'
                    placeholder='Email *'
                  />
                </div>
                <label class='checkbox d-flex align-items-baseline flex-shrink-0 mx-0 mb-8'>
                  <input type='checkbox' id='check' value='1' />
                  <span></span>
                  <label className='text-body ml-4' htmlFor='check'>
                    I agree to the terms & conditions
                  </label>
                </label>
                <div className='mb-8 text-center text-xl-left'>
                  <button
                    type='button'
                    className='btn btn-primary text-capitalize py-4 font-weight-boldest h5 mb-0 col'
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        centered
        size='xl'
        show={modalOpenThree}
        onHide={() => setModalOpenThree(false)}
      >
        <Modal.Body className='Section-1 rounded-lg'>
          <div className='mb-5 text-right'>
            <button
              type='button'
              onClick={() => setModalOpenThree(false)}
              className='btn p-0'
            >
              <i className='fa fa-times'></i>
            </button>
          </div>

          <div className='row mx-0 justify-content-between'>
            <div className='col col-lg-6 col-lg-5'>
              <h1 className='display-4 font-weight-bolder mb-8 text-center text-xl-left text-uppercase'>
                CHOOSE YOUR PLAN
              </h1>
              <p>
                Congratulation on having an understanding of your talent type(s)
                and characteristics!
              </p>
              <p>
                Yet, you need to know more about yourself, especially work
                advantages, developable job roles and career direction, and use
                these to your advantage in the admissions interview. More
                importantly, you have to sharpen your interview skills and
                improve your performance in order to stand out from others.
              </p>
              <p>
                Act now to choose a plan offered by our digital learning and
                development platform to put yourself on the road to success!
              </p>
              <div className='mt-6 mb-8 text-center text-xl-left'>
                <button
                  type='button'
                  className='btn btn-primary text-capitalize py-4 font-weight-boldest h5 mb-0 col col-md-4 col-lg-8 col-xl-4'
                >
                  Choose Now
                </button>
              </div>
            </div>
            <div className='col-12 col-lg-6 col-xl-5 order-first order-lg-last'>
              <div className='text-center mx-auto position-relative h-200px h-md-250px w-100 bg-white rounded-xl shadow d-flex align-items-center justify-content-center'>
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=oUFJJNQGwhk'
                  width='97%'
                  height='95%'
                  controls
                  playing
                  playIcon={
                    <button type='button' className='btn p-0'>
                      <img
                        className='h-80px'
                        src={ImagePlay}
                        alt='Video Button'
                      />
                    </button>
                  }
                  light={ImageTwo}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Modal
        centered
        size='xl'
        show={modalOpenFour}
        onHide={() => setModalOpenFour(false)}
      >
        <Modal.Body className='Section-1 rounded-lg'>
          <div className='mb-5 text-right'>
            <button
              type='button'
              onClick={() => setModalOpenFour(false)}
              className='btn p-0'
            >
              <i className='fa fa-times'></i>
            </button>
          </div>

          <div className='row mx-0 justify-content-between py-10'>
            <div className='col col-xl-4'>
              <h1 className='display-4 font-weight-bolder mb-8 text-center text-xl-left text-uppercase'>
                Hi First Name
              </h1>
              <h5 className='font-weight-normal'>
                Without further ado, please take a detailed look at your CAPSTM
                assessment premium report with video, to discover more about
                your personal strengths.
              </h5>
              <div className='mt-8 mb-8 text-center text-xl-left'>
                <button
                  type='button'
                  className='btn btn-primary text-capitalize py-4 font-weight-boldest h5 mb-0 col col-md-8 col-lg-8 col-xl-8'
                >
                  Watch Now
                </button>
              </div>
            </div>
            <div className='col-12 col-xl-7 order-first order-xl-last mb-8 mb-xl-0'>
              <div className='text-center mx-auto position-relative h-200px h-md-300px w-100 bg-white rounded-xl shadow d-flex align-items-center justify-content-center'>
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=oUFJJNQGwhk'
                  width='100%'
                  height='100%'
                  controls
                  playing
                  playIcon={
                    <button type='button' className='btn p-0'>
                      <img
                        className='h-80px'
                        src={ImagePlay}
                        alt='Video Button'
                      />
                    </button>
                  }
                  light={ImageThree}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <section
        className='container pl-lg-29'
        style={{
          paddingTop: 70,
        }}
      >
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
            {params.id !== null ? (
              <ResultFree />
            ) : activeStep === steps.length ? (
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
                          laboriosam, nesciunt ut. Cum quia quasi voluptas
                          sequi!
                        </p>
                        <p className='mb-4 text-black-50'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Minima facilis impedit nostrum odit, aliquam nam
                          voluptas mollitia veniam debitis obcaecati numquam ad
                          laboriosam, nesciunt ut. Cum quia quasi voluptas
                          sequi!
                        </p>
                        <p className='text-black-50'>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Minima facilis impedit nostrum odit, aliquam nam
                          voluptas mollitia veniam debitis obcaecati numquam ad
                          laboriosam, nesciunt ut. Cum quia quasi voluptas
                          sequi!
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
                              onChange={(e) => setEmail(e.target.value)}
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
                            <button
                              onClick={(e) => handleSendEmail(e)}
                              className='btn btn-primary btn-block'
                            >
                              Sign Up
                            </button>
                          </div>
                        </form>
                      </Col>
                    </Row>
                  </Modal.Body>
                </Modal>
                {/* */}
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
                      {activeStep === steps.length - 1
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
    </>
  );
};
