import React, { useState, useEffect } from 'react';
import { Row, Col, Carousel, Modal } from 'react-bootstrap';

import Button from '@material-ui/core/Button';

import { Link } from 'react-router-dom';

//  images
import ImagePlay from '../../assets/images/images/play-button.svg';
import ImageOne from '../../assets/images/images/videoOne.svg';
import ImageTwo from '../../assets/images/images/videoTwo.png';

import axios from 'axios';
import ReactPlayer from 'react-player';

const PresentationVideosStep1 = ({ title, data }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [show, setShow] = useState(false);
  const [videoModal, setVideoModal] = useState(true);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => setShow(false);
  const handleShow = () => setShow(true);


  const videoClose = () => setVideoModal(false);

  const VIDEOS = {
    cat:
      'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4',
  };

  return (
    <>
      {data === null ? (
        <>
          <div className='vh-100 d-flex justify-content-center align-items-center'>
            <div style={{ height: '40vmin' }}>
              <img
                className='h-100 w-100'
                src={require('../../assets/learn.gif')}
                alt='loading'
              />
            </div>
          </div>
        </>
      ) : (
        <>
         <Modal centered size='xl' show={videoModal} onHide={videoClose}>
            <Modal.Body className='Section-1 rounded-lg'>
              <div className='mb-5 text-right'>
                <button
                  type='button'
                  onClick={videoClose}
                  className='btn p-0'
                >
                  <i className='fa fa-times'></i>
                </button>
              </div>
              <div className='col-lg-8 px-0 mx-auto'>
                 <h1 className='display-4 font-weight-bolder mb-8 text-center'>WELCOME TO YOU EMBARKING ON YOUR LEARNING JOURNEY</h1>
                 <div className='text-center position-relative h-200px h-md-250px h-lg-300px h-xl-350px h-xxl-400px bg-white rounded-xl shadow d-flex align-items-center justify-content-center'>
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=oUFJJNQGwhk'
                  width='100%'
                  height='100%'
                  controls
                  playing
                  playIcon={
                    <button type='button' className='btn p-0'>
                      <img className='h-80px' src={ImagePlay} alt='Video Button' />
                    </button>
                  }
                  light={ImageTwo}
                />
              </div>
              <div className='my-8 text-center'>
                <button type='button' className='btn btn-primary text-uppercase py-4 font-weight-boldest h5 mb-0 col col-md-4'>START NOW</button>
              </div>
              </div>
              </Modal.Body>
              </Modal>
          <Row>
            <Col>
              <section className='bg-white rounded-lg p-5'>
                <div className='d-flex justify-content-between'>
                  <h5 className='mb-0 font-weight-bold'>{title}</h5>

                  <div>
                    <Button
                      aria-controls='simple-menu'
                      aria-haspopup='true'
                      onClick={handleShow}
                    >
                      <i className='fa fa-plus-circle'></i>
                    </Button>
                  </div>
                </div>

                <div>
                  <div className='py-5'>
                    <h2 className='mb-4 font-weight-bold'>{data[0].title}</h2>
                    <div className='mb-4 font-weight-bold'>
                      {data[0].description}
                    </div>
                    <p className='mb-4 text-black-50'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Beatae numquam cumque, quam eum distinctio iste illo
                      dolorum exercitationem porro eligendi provident in magni
                      voluptate alias. Porro nulla iste exercitationem
                      repudiandae.
                    </p>
                    <p className='mb-4 text-black-50'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Beatae numquam cumque, quam eum distinctio iste illo
                      dolorum exercitationem porro eligendi provident in magni
                      voluptate alias. Porro nulla iste exercitationem
                      repudiandae.
                    </p>
                    <p className='mb-4 text-black-50'>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Beatae numquam cumque, quam eum distinctio iste illo
                      dolorum exercitationem porro eligendi provident in magni
                      voluptate alias. Porro nulla iste exercitationem
                      repudiandae.
                    </p>
                  </div>
                </div>
              </section>
            </Col>
            <Col md={4}>
              <div className='bg-white rounded-lg p-5'>
                <div className='d-flex align-items-end mb-3'>
                  <h6 className='mb-0'>{data[0].title}</h6>
                  <span className='badge badge-info ml-2'>Premium</span>
                </div>
                <div className='text-black-50 small d-flex align-items-center font-weight-bold mb-3'>
                  <i className='fa fa-clock mr-2'></i>
                  <span>1h ago</span>
                </div>
                <p className='mb-3'>{data[0].description}</p>
                <div className='text-center position-relative h-250px  bg-white rounded-xl shadow d-flex align-items-center justify-content-center'>
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=oUFJJNQGwhk'
                  width='100%'
                  height='100%'
                  controls
                  playing
                  playIcon={
                    <button type='button' className='btn p-0'>
                      <img className='h-80px' src={ImagePlay} alt='Video Button' />
                    </button>
                  }
                  light={ImageTwo}
                />
              </div>
                <div className='d-flex align-items-center mt-4'>
                  <span className='mr-2'>
                    <img
                      className='object-cover rounded-circle shadow-sm'
                      height={40}
                      width={40}
                      src={ImageTwo}
                      alt='pic'
                    />
                  </span>
                  <span className='font-weight-bold'>
                    <div className='text-black-50'>By</div>
                    <div className='text-capitalize'>Name Surname</div>
                  </span>
                </div>
              </div>
            </Col>
          </Row>

          <Modal centered size='xl' show={show} onHide={handleClose2}>
            <Modal.Body className='Section-1 rounded-lg'>
              <div className='mb-5 text-right'>
                <button
                  type='button'
                  onClick={handleClose2}
                  className='btn p-0'
                >
                  <i className='fa fa-times'></i>
                </button>
              </div>
              <div className='Section-3'>
                <Carousel>
                  <Carousel.Item>
                    <Row>
                      <Col lg={5} className='ml-auto mt-10 mt-lg-0'>
                        <h6 className='text-primary mb-10'> 1/3</h6>
                        <h2 className='font-weight-bolder'>Welcome Tour</h2>
                        <h6>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Possimus,
                        </h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aliquid, veritatis eius. Voluptas sit quibusdam
                          sint itaque et. Libero quam, ullam, architecto non
                          repellat at provident, tempora laboriosam sapiente
                          debitis eveniet?
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aliquid, veritatis eius. Voluptas sit quibusdam
                          sint itaque et. Libero quam, ullam, architecto non
                          repellat at provident, tempora laboriosam sapiente
                          debitis eveniet?
                        </p>
                      </Col>
                      <Col lg={6} className='order-lg-last order-first d-flex'>
                        <div className='text-center position-relative play-link h-200px h-md-250px h-lg-250px h-xl-300px h-xxl-300px bg-white rounded-xl shadow d-flex align-items-center justify-content-center'>
                          <ReactPlayer
                            url={VIDEOS.cat}
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
                            light={ImageOne}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row>
                      <Col lg={5} className='ml-auto mt-10 mt-lg-0'>
                        <h6 className='text-primary mb-10'> 2/3</h6>
                        <h2 className='font-weight-bolder'>Welcome Tour</h2>
                        <h6>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Possimus,
                        </h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aliquid, veritatis eius. Voluptas sit quibusdam
                          sint itaque et. Libero quam, ullam, architecto non
                          repellat at provident, tempora laboriosam sapiente
                          debitis eveniet?
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aliquid, veritatis eius. Voluptas sit quibusdam
                          sint itaque et. Libero quam, ullam, architecto non
                          repellat at provident, tempora laboriosam sapiente
                          debitis eveniet?
                        </p>
                      </Col>
                      <Col lg={6} className='order-lg-last order-first d-flex'>
                        <div className='text-center position-relative play-link h-200px h-md-250px h-lg-250px h-xl-300px h-xxl-300px bg-white rounded-xl shadow d-flex align-items-center justify-content-center'>
                          <ReactPlayer
                            url={VIDEOS.cat}
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
                            light={ImageOne}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                  <Carousel.Item>
                    <Row>
                      <Col lg={5} className='ml-auto mt-10 mt-lg-0'>
                        <h6 className='text-primary mb-10'> 3/3</h6>
                        <h2 className='font-weight-bolder'>Welcome Tour</h2>
                        <h6>
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Possimus,
                        </h6>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aliquid, veritatis eius. Voluptas sit quibusdam
                          sint itaque et. Libero quam, ullam, architecto non
                          repellat at provident, tempora laboriosam sapiente
                          debitis eveniet?
                        </p>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aliquid, veritatis eius. Voluptas sit quibusdam
                          sint itaque et. Libero quam, ullam, architecto non
                          repellat at provident, tempora laboriosam sapiente
                          debitis eveniet?
                        </p>
                      </Col>
                      <Col lg={6} className='order-lg-last order-first d-flex'>
                        <div className='text-center position-relative play-link h-200px h-md-250px h-lg-250px h-xl-300px h-xxl-300px bg-white rounded-xl shadow d-flex align-items-center justify-content-center'>
                          <ReactPlayer
                            url={VIDEOS.cat}
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
                            light={ImageOne}
                          />
                        </div>
                      </Col>
                    </Row>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Modal.Body>
          </Modal>
        </>
      )}
    </>
  );
};

export default PresentationVideosStep1;
