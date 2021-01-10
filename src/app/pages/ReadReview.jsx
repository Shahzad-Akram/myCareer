import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Row, Col } from 'react-bootstrap';
import { CustomTable } from '../CustomComponents/CustomTable';
// Components

// images
import ImageTwo from '../../assets/images/images/videoTwo.png';
import face2 from '../../assets/images/faces/face2.svg';
import { TextField } from '@material-ui/core';

function getStepsOne() {
  return ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
}

export const ReadReview = () => {
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
            </Step>
          ))}
        </Stepper>
        <div className='mt-10'>
          <div className='mb-10'>
            <h4 className='mb-8'>Refine your skill by more practice</h4>
            <Row className='row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center'>
              <Col>
                <div className='bg-success p-5 rounded-lg'>
                  <i className='fa fa-user h1 p-0 mb-5 text-white'></i>
                  <div className='mb-1 text-white font-weight-bold h6'>
                    Average OWN Ratings
                  </div>
                  <div>
                    <span>
                      <i className='fa fa-star text-white small p-0 mr-2'></i>
                      <i className='fa fa-star text-white small p-0 mr-2'></i>
                      <i className='fa fa-star  text-white small p-0 mr-2'></i>
                      <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
                      <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
                    </span>
                    <span className='font-weight-bold text-white'>(3.0)</span>
                  </div>
                </div>
              </Col>
              <Col className='mt-10 mt-md-0'>
                <div className='bg-success p-5 rounded-lg'>
                  <i className='fa fa-user h1 p-0 mb-5 text-white'></i>
                  <div className='mb-1 text-white font-weight-bold h6'>
                    Average OWN Ratings
                  </div>
                  <div>
                    <span>
                      <i className='fa fa-star text-white small p-0 mr-2'></i>
                      <i className='fa fa-star text-white small p-0 mr-2'></i>
                      <i className='fa fa-star  text-white small p-0 mr-2'></i>
                      <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
                      <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
                    </span>
                    <span className='font-weight-bold text-white'>(3.0)</span>
                  </div>
                </div>
              </Col>
              <Col className='mt-10 mt-lg-0'>
                <div className='bg-success p-5 rounded-lg'>
                  <i className='fa fa-user h1 p-0 mb-5 text-white'></i>
                  <div className='mb-1 text-white font-weight-bold h6'>
                    Average OWN Ratings
                  </div>
                  <div>
                    <span>
                      <i className='fa fa-star text-white small p-0 mr-2'></i>
                      <i className='fa fa-star text-white small p-0 mr-2'></i>
                      <i className='fa fa-star  text-white small p-0 mr-2'></i>
                      <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
                      <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
                    </span>
                    <span className='font-weight-bold text-white'>(3.0)</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <CustomTable className='card-stretch gutter-b' />
        </div>
      </div>
    </section>
  );
};