import React, { useState } from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Row, Col, Modal } from 'react-bootstrap';


// Components

// images
import ImageOne from '../../assets/images/images/alan-like.svg';
import ImageTwo from '../../assets/images/images/videoTwo.png';
import face2 from '../../assets/images/faces/face2.svg';

function getStepsOne() {
  return ['Step 1', 'Step 2', 'Step 3', 'Step 4'];
}

export const Dashboard2Paid = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [modalOpenTwo, setModalOpenTwo] = useState(false);
  const ModalClose = () => setModalOpen(false);

  const [state, setState] = useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [activeStepOne, setActiveStepOne] = useState(0);
  const stepsOne = getStepsOne();

  return (
    <>
      <Modal centered size='xl' show={modalOpen} onHide={ModalClose}>
        <Modal.Body className='Section-1 rounded-lg p-0'>
          <div className='mb-5 text-right'>
            <button type='button' onClick={ModalClose} className='btn p-0 m-3'>
              <i className='fa fa-times'></i>
            </button>
          </div>

          <div className='row mx-0'>
            <div className='col p-4 p-xl-15'>
              <h1 className='display-4 font-weight-bolder mb-8 text-center text-xl-left text-uppercase'>
                Welcome to You Joining CAPS™ Personal Strengths Assessment!
              </h1>

              <p className='mb-8'>
                Thanks for showing your interest to take part in the CAPS™
                Personal Strengths Assessment! With this assessment, you can get
                a free basic report that allows you to understand your talent
                types(s) and characteristics so that you can better prepare
                yourself for the admissions interview. Sign up here to get a
                free basic report about your own personal strengths.
              </p>

              <div className='mb-8 text-center text-xl-left'>
                <button
                  onClick={ModalClose}
                  type='button'
                  className='btn btn-primary text-capitalize py-4 font-weight-boldest h5 mb-0 col col-md-4'
                >
                  Start Now
                </button>
              </div>
            </div>
            <div className='col-12 col-xl-6 order-first order-xl-last'>
              <div className='d-flex h-200px h-md-300px h-lg-500px w-100'>
                <img className='h-100 w-100' src={ImageOne} alt='alan' />
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
            {stepsOne.map((label, data) => (
              <Step key={label} className='mb-10 mb-lg-0'>
                <StepLabel>{label}</StepLabel>
                <div className='small mt-4  text-lg-left'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente sunt a nesciunt aspernatur nostrum eveniet.
                </div>
                <div className='text-center mt-4'>
                  <span className='badge bg-warning-o-100 text-warning'>
                    2/4 Completed
                  </span>
                </div>
                <div className='text-center mt-4'>
                  <span className='badge badge-danger'>Paid</span>
                </div>
              </Step>
            ))}
          </Stepper>
          <div className='mt-10'>
            <Row>
              <Col lg={4}>
                <div className='bg-white rounded-lg p-10'>
                  <h4 className='mb-5'>Timeline</h4>
                  <div className='d-flex mb-8'>
                    <span
                      className='h-40px w-70px rounded d-flex align-items-center justify-content-center mr-3'
                      style={{ backgroundColor: '#F3F6F9' }}
                    >
                      <i
                        className='fa fa-user-plus'
                        style={{ color: '#1BC5BD' }}
                      ></i>
                    </span>
                    <div>
                      <span>
                        <b>Lorem ipsum dolor sit,</b> amet consectetur
                        adipisicing elit. Voluptas, vitae?
                      </span>
                      <div className='text-black-50 small mt-2'>
                        4 hours age
                      </div>
                    </div>
                  </div>

                  <div className='d-flex mb-8'>
                    <span
                      className='h-40px w-70px bg-success-o-100 rounded d-flex align-items-center justify-content-center mr-3'
                      style={{ backgroundColor: '#EEE5FF' }}
                    >
                      <i
                        className='fa fa-file-alt'
                        style={{ color: '#B08BFD' }}
                      ></i>
                    </span>
                    <div>
                      <span>
                        <b>Lorem ipsum dolor sit,</b> amet consectetur
                        adipisicing elit. Voluptas, vitae?
                      </span>
                      <div className='text-black-50 small mt-2'>
                        4 hours age
                      </div>
                    </div>
                  </div>

                  <div className='d-flex mb-8'>
                    <span
                      className='h-40px w-70px rounded d-flex align-items-center justify-content-center mr-3'
                      style={{ backgroundColor: '#FFF4DE' }}
                    >
                      <i
                        className='fa fa-lock'
                        style={{ color: '#FFA800' }}
                      ></i>
                    </span>
                    <div>
                      <span>
                        <b>Lorem ipsum dolor sit,</b> amet consectetur
                        adipisicing elit. Voluptas, vitae?
                      </span>
                      <div className='text-black-50 small mt-2'>
                        4 hours age
                      </div>
                    </div>
                  </div>

                  <div className='d-flex mb-8'>
                    <span
                      className='h-40px w-70px rounded d-flex align-items-center justify-content-center mr-3'
                      style={{ backgroundColor: '#FFE2E5' }}
                    >
                      <i
                        className='fa fa-comments'
                        style={{ color: '#F64E60' }}
                      ></i>
                    </span>
                    <div>
                      <span>
                        <b>Lorem ipsum dolor sit,</b> amet consectetur
                        adipisicing elit. Voluptas, vitae?
                      </span>
                      <div className='text-black-50 small mt-2'>
                        4 hours age
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className='d-flex flex-column'>
                <div className='bg-white rounded-lg p-10 mb-8'>
                  <h5 className='font-weight-bold mb-5'>
                    Refine your skill by more practice
                  </h5>

                  <img
                    className='rounded-lg mb-8'
                    height={200}
                    width='100%'
                    src={ImageTwo}
                    alt='pick'
                  />

                  <div className='mb-8'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Optio assumenda maiores, ipsa id nihil facere aspernatur eos
                    repellat sit, qui autem blanditiis?
                  </div>

                  <div className='mb-4'>
                    <div className='font-weight-bold text-danger mb-3'>
                      Lorem, ipsum dolor.
                    </div>
                    <div className='font-weight-bold mb-3'>
                      Lorem, ipsum dolor.
                    </div>
                    <p className='text-black-50'>
                      Sequi maiores consectetur dignissimos quos laudantium
                      cupiditate architecto?
                    </p>
                  </div>

                  <div className='mb-4'>
                    <div className='font-weight-bold text-danger mb-3'>
                      Lorem, ipsum dolor.
                    </div>
                    <div className='font-weight-bold mb-3'>
                      Lorem, ipsum dolor.
                    </div>
                    <p className='text-black-50'>
                      Sequi maiores consectetur dignissimos quos laudantium
                      cupiditate architecto?
                    </p>
                  </div>
                </div>

                <div className='bg-white rounded-lg pt-8 px-8 pb-2 mb-8'>
                  <div className='mb-4'>
                    <div className='font-weight-bold text-danger mb-3'>
                      Lorem, ipsum dolor.
                    </div>
                    <div className='font-weight-bold mb-3'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Optio assumenda maiores, ipsa id nihil facere aspernatur
                      eos repellat sit, qui autem blanditiis?.
                    </div>
                    <p className='text-black-50'>
                      Sequi maiores consectetur dignissimos quos laudantium
                      cupiditate architecto?
                    </p>

                    <div className='d-flex justify-content-between align-items-center mt-10'>
                      <span className='d-flex'>
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
                            <b className='text-dark-25'>By</b>
                            <div className='text-dark'>Name Surname</div>
                          </div>
                        </span>
                      </span>
                      <span>
                        <i className='fa fa-clock mr-2 p-0 text-dark-25'></i>
                        <span className='text-dark-25'>1h age</span>
                      </span>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className='h-200px h-md-250px h-lg-200px h-xl-270px h-xxl-300px mb-8 position-relative'>
                  <img
                    className='rounded-lg mb-8 object-cover'
                    height='100%'
                    width='100%'
                    src={ImageTwo}
                    alt='pick'
                  />

                  <span className='position-absolute d-flex top-0 bg-dark-o-100 text-white flex-column h-100 rounded-lg p-9'>
                    <div className='font-weight-bold text-danger mb-3'>
                      Lorem, ipsum dolor.
                    </div>
                    <div className='font-weight-bold mb-3'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Optio assumenda maiores, ipsa id nihil facere aspernatur
                      eos repellat sit, qui autem blanditiis?.
                    </div>
                    <p className='text-white'>
                      Sequi maiores consectetur dignissimos quos laudantium
                      cupiditate architecto?
                    </p>

                    <div className='d-flex justify-content-between align-items-center mt-auto'>
                      <span className='d-flex'>
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
                            <b className='text-white-50'>By</b>
                            <div className='text-white'>Name Surname</div>
                          </div>
                        </span>
                      </span>
                      <span>
                        <i className='fa fa-clock mr-2 p-0 text-white-50'></i>
                        <span className='text-white-50'>1h age</span>
                      </span>
                    </div>
                  </span>
                </div>

                <div className='bg-white rounded-lg pt-8 px-8 pb-2 mb-8'>
                  <div className='mb-4'>
                    <div className='font-weight-bold text-danger mb-3'>
                      Lorem, ipsum dolor.
                    </div>
                    <div className='font-weight-bold mb-3'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Optio assumenda maiores, ipsa id nihil facere aspernatur
                      eos repellat sit, qui autem blanditiis?.
                    </div>
                    <p className='text-black-50'>
                      Sequi maiores consectetur dignissimos quos laudantium
                      cupiditate architecto?
                    </p>

                    <div className='d-flex justify-content-between align-items-center mt-10'>
                      <span className='d-flex'>
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
                            <b className='text-dark-25'>By</b>
                            <div className='text-dark'>Name Surname</div>
                          </div>
                        </span>
                      </span>
                      <span>
                        <i className='fa fa-clock mr-2 p-0 text-dark-25'></i>
                        <span className='text-dark-25'>1h age</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className='bg-white rounded-lg p-10 mb-8'>
                  <div className='mb-4'>
                    <div className='font-weight-bold text-danger mb-3'>
                      Lorem, ipsum dolor.
                    </div>
                    <div className='font-weight-bold mb-3'>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Optio assumenda maiores, ipsa id nihil facere aspernatur
                      eos repellat sit, qui autem blanditiis?.
                    </div>
                    <p className='text-black-50'>
                      Sequi maiores consectetur dignissimos quos laudantium
                      cupiditate architecto?
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};
