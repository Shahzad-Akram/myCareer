import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Row, Col } from 'react-bootstrap';
import { CustomTable } from '../CustomComponents/CustomTable';
// Components

// images
import BgImageOne from '../../assets/images/background/bg-image-3.svg';
import BgImageTwo from '../../assets/images/background/bg-image-4.svg';
import BgImageThree from '../../assets/images/background/bg-image-5.svg';

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
                <div
                  className='p-5 rounded-lg'
                  style={{
                    backgroundImage: `url(${BgImageOne})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: 180,
                  }}
                >
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
              <Col
                className='mt-10 mt-md-0
              '
              >
                <div
                  className='p-5 rounded-lg'
                  style={{
                    backgroundImage: `url(${BgImageTwo})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: 180,
                  }}
                >
                  <i className='fa fa-user-tie h1 p-0 mb-5 text-white'></i>
                  <div className='mb-1 text-white font-weight-bold h6'>
                    Average Trainer's Ratings
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
                <div
                  className='p-5 rounded-lg'
                  style={{
                    backgroundImage: `url(${BgImageThree})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: 180,
                  }}
                >
                  <i className='fa fa-ticket-alt h1 p-0 mb-5 text-white'></i>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <div className='mb-1 text-white font-weight-bold h6'>
                        Remaining Credit
                      </div>
                      <div className='mb-3 text-white font-weight-bold h6'>
                        1/10
                      </div>
                    </div>
                    <div>
                      <div className='mb-1 text-white font-weight-bold h6'>
                        Retry Times
                      </div>
                      <div className='mb-3 text-white font-weight-bold h6'>
                        1/10
                      </div>
                    </div>
                  </div>
                  <a href='/' className='text-white'>
                    Buy More credit &#62;
                  </a>
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
