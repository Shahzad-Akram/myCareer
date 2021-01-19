import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Row, Col } from 'react-bootstrap';

// Components

// images
import ImageTwo from '../../assets/images/images/videoTwo.png';
import face2 from '../../assets/images/faces/face2.svg';
import { TextField } from '@material-ui/core';

function getStepsOne() {
  return ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
}

export const RecordInterview = () => {
  const [state, setState] = React.useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [activeStepOne, setActiveStepOne] = useState(0);
  const stepsOne = getStepsOne();

  return (
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
            </Step>
          ))}
        </Stepper>
        <div className='mt-10'>
          <Row>
            <Col>
              <img
                className='rounded-lg'
                height='100%'
                width='100%'
                src={ImageTwo}
                alt='pick'
              />

              <img
                className='h-100px w-150px object-cover position-absolute left-0 top-0 rounded-lg shadow-sm ml-10 mt-10'
                src='https://source.unsplash.com/random'
                alt='user'
              />
            </Col>
            <Col lg={4} className='d-flex flex-column'>
              <h5 className='font-weight-bold mt-5 mb-8'>
                Refine your skill by more practice
              </h5>
              <div className='flex-grow-1 bg-white rounded-lg d-flex flex-column'>
                <header className='pt-3 px-5'>
                  <div className='d-flex'>
                    <span className='svg-icon menu-icon'>
                      <span
                        className='d-flex w-40px h-40px rounded-circle justify-content-center align-items-end mx-auto mb-3'
                        style={{ backgroundColor: '#F3F6F9' }}
                      >
                        <img
                          className='h-30px w-30px rounded-pill'
                          src={face2}
                          alt='user'
                        />
                      </span>
                    </span>
                    <span className='menu-text'>
                      <div className='ml-3'>
                        <b className='text-dark'>Alison To</b>
                        <div className='text-black-50'>Form 6 Student</div>
                      </div>
                    </span>
                  </div>
                </header>
                <section className='border-top border-bottom py-3 overflow-auto h-400px'>
                  <div>
                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-right-xl rounded-top-right-xl rounded-top-xl badge badge-light'>
                      Hi Alison, welcome to the practice
                    </div>

                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-right-xl rounded-top-right-xl rounded-top-xl badge badge-light'>
                      Hi Alison, welcome to the practice
                    </div>

                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-right-xl rounded-top-right-xl rounded-top-xl badge badge-light'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nisi laudantium pariatur minus, corporis soluta non ipsa
                      eius? Porro, quasi unde.
                    </div>
                    <small className='text-black-50 mx-5'>11:50</small>
                  </div>

                  <div className='text-right mt-6'>
                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success'>
                      Hi Alison, welcome to the practice
                    </div>

                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success'>
                      Hi Alison, welcome to the practice
                    </div>

                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nisi laudantium pariatur minus, corporis soluta non ipsa
                      eius? Porro, quasi unde.
                    </div>
                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success'>
                      Hi Alison, welcome to the practice
                    </div>

                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success'>
                      Hi Alison, welcome to the practice
                    </div>

                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nisi laudantium pariatur minus, corporis soluta non ipsa
                      eius? Porro, quasi unde.
                    </div>
                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success'>
                      Hi Alison, welcome to the practice
                    </div>

                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success'>
                      Hi Alison, welcome to the practice
                    </div>

                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nisi laudantium pariatur minus, corporis soluta non ipsa
                      eius? Porro, quasi unde.
                    </div>
                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success'>
                      Hi Alison, welcome to the practice
                    </div>

                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success'>
                      Hi Alison, welcome to the practice
                    </div>

                    <div className='text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nisi laudantium pariatur minus, corporis soluta non ipsa
                      eius? Porro, quasi unde.
                    </div>
                    <small className='text-black-50 mx-5'>11:50</small>
                  </div>
                </section>
                <footer className='pb-3 px-5'>
                  <div>
                    <TextField
                      className='mt-0'
                      label='Write Your Message Here...'
                      multiline
                      rowsMax='8'
                      margin='normal'
                    />
                  </div>
                  <div>
                    <button
                      type='button'
                      className='btn text-hover-success p-0 mr-2'
                    >
                      <i className='fa fa-upload font-size-h6 p-0'></i>
                    </button>
                    <button
                      type='button'
                      className='btn text-hover-success p-0 mr-2'
                    >
                      <i className='fa fa-image font-size-h6 p-0'></i>
                    </button>
                    <button
                      type='button'
                      className='btn text-hover-success p-0 mr-2'
                    >
                      <i className='fa fa-smile font-size-h6 p-0'></i>
                    </button>
                  </div>
                </footer>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
