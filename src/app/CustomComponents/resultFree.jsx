import React, { useState } from 'react';
import { Row, Col, Spinner, Carousel, Modal } from 'react-bootstrap';
import { Chart } from 'react-google-charts';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link } from 'react-router-dom';

//  images
import ImagePlay from '../../assets/images/images/play-button.svg';
import ImageOne from '../../assets/images/images/videoOne.svg';
import resultPicOne from '../../assets/images/results/result1.svg';
import resultPicTwo from '../../assets/images/results/result2.svg';

const ResultFree = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [show, setShow] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClose2 = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Row className='mt-10'>
        <Col>
          <section className='bg-white rounded-lg p-5'>
            <div className='d-flex justify-content-between'>
              <h5 className='mb-0 font-weight-bold'>Result</h5>

              <div>
                <Button
                  aria-controls='simple-menu'
                  aria-haspopup='true'
                  onClick={handleShow}
                >
                  <i className='fa fa-plus-circle'></i>
                </Button>
                {/* <Menu
                  id='simple-menu'
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} onClick={handleShow}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu> */}
              </div>
            </div>

            <div className='row'>
              <Col className='order-last order-xl-first pb-5 pb-xl-0'>
                <Chart
                  width={'100%'}
                  height={'300px'}
                  chartType='PieChart'
                  loader={
                    <div className='p-5'>
                      <Spinner animation='border' variant='secondary' />
                    </div>
                  }
                  data={[
                    ['Task', 'Hours per Day'],
                    ['Work', 11],
                    ['Eat', 2],
                    ['Commute', 2],
                    ['Watch TV', 2],
                    ['Sleep', 7],
                  ]}
                  rootProps={{ 'data-testid': '1' }}
                />
                <div className='p-5'>
                  <h4 className='mb-4 font-weight-bold'>Creator</h4>
                  <div className='mb-4 font-weight-bold'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Totam, aliquam.
                  </div>
                  <p className='mb-4 text-black-50'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae numquam cumque, quam eum distinctio iste illo dolorum
                    exercitationem porro eligendi provident in magni voluptate
                    alias. Porro nulla iste exercitationem repudiandae.
                  </p>
                  <p className='mb-4 text-black-50'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Beatae numquam cumque, quam eum distinctio iste illo dolorum
                    exercitationem porro eligendi provident in magni voluptate
                    alias. Porro nulla iste exercitationem repudiandae.
                  </p>
                </div>
              </Col>
              <Col xl={4}>
                <div
                  className='d-flex align-items-center mx-auto'
                  style={{ height: '100%', width: '90%' }}
                >
                  <img width='100%' height={400} src={resultPicOne} alt='pic' />
                </div>
              </Col>
            </div>
          </section>
        </Col>
        <Col md={4}>
          <div className='bg-white rounded-lg p-5'>
            <div className='d-flex align-items-end mb-3'>
              <h6 className='mb-0'>Lorem ipsum</h6>
              <span className='badge badge-info ml-2'>Premium</span>
            </div>
            <div className='text-black-50 small d-flex align-items-center font-weight-bold mb-3'>
              <i className='fa fa-clock mr-2'></i>
              <span>1h age</span>
            </div>
            <p className='mb-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              libero vitae suscipit rem cupiditate quas inventore praesentium
              modi, adipisci tempora quaerat, dolorem amet perferendis officiis
              nemo sint minima? Iusto, velit!
            </p>
            <a
              href='https://www.youtube.com/watch?v=Q3oItpVa9fs'
              target='_blank'
              rel='noopener noreferrer'
              className='play-link d-flex flex-column justify-content-center mb-3'
            >
              <img
                className='rounded-lg object-cover'
                height={200}
                src='https://source.unsplash.com/random'
                alt='pic'
              />
              <img
                height={70}
                src={ImagePlay}
                alt='play button'
                className='position-absolute'
                style={{
                  left: '50%',
                  top: '43%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            </a>
            <div className='d-flex align-items-center mt-4'>
              <span className='mr-2'>
                <img
                  className='object-cover rounded-circle shadow-sm'
                  height={40}
                  width={40}
                  src='https://source.unsplash.com/random'
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
            <button type='button' onClick={handleClose2} className='btn p-0'>
              <i className='fa fa-times'></i>
            </button>
          </div>
          <div className='Section-3'>
            <Carousel>
              <Carousel.Item>
                <Row>
                  <Col lg={5} className='ml-auto mt-10 mt-lg-0'>
                    <h6 className='text-primary mb-10'> 1/3</h6>
                    <h2 className='font-weight-bolder'>Join our program</h2>
                    <h6>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus,
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid, veritatis eius. Voluptas sit quibusdam sint
                      itaque et. Libero quam, ullam, architecto non repellat at
                      provident, tempora laboriosam sapiente debitis eveniet?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid, veritatis eius. Voluptas sit quibusdam sint
                      itaque et. Libero quam, ullam, architecto non repellat at
                      provident, tempora laboriosam sapiente debitis eveniet?
                    </p>
                    <button className='btn btn-primary mt-3'>
                      Register Now
                    </button>
                  </Col>
                  <Col lg={6} className='order-lg-last  order-first'>
                    <Link className='play-link d-flex flex-column justify-content-center'>
                      <img width='90%' height={300} src={ImageOne} alt='pic' />
                      <img
                        height={70}
                        src={ImagePlay}
                        alt='play button'
                        className='position-absolute'
                        style={{
                          left: '50%',
                          top: '40%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    </Link>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col lg={5} className='ml-auto mt-10 mt-lg-0'>
                    <h6 className='text-primary mb-10'> 2/3</h6>
                    <h2 className='font-weight-bolder'>Join our program</h2>
                    <h6>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus,
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid, veritatis eius. Voluptas sit quibusdam sint
                      itaque et. Libero quam, ullam, architecto non repellat at
                      provident, tempora laboriosam sapiente debitis eveniet?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid, veritatis eius. Voluptas sit quibusdam sint
                      itaque et. Libero quam, ullam, architecto non repellat at
                      provident, tempora laboriosam sapiente debitis eveniet?
                    </p>
                    <button className='btn btn-primary mt-3'>
                      Register Now
                    </button>
                  </Col>
                  <Col lg={6} className='order-lg-last  order-first'>
                    <Link className='play-link d-flex flex-column justify-content-center'>
                      <img width='90%' height={300} src={ImageOne} alt='pic' />
                      <img
                        height={70}
                        src={ImagePlay}
                        alt='play button'
                        className='position-absolute'
                        style={{
                          left: '50%',
                          top: '40%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    </Link>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <Col lg={5} className='ml-auto mt-10 mt-lg-0'>
                    <h6 className='text-primary mb-10'> 3/3</h6>
                    <h2 className='font-weight-bolder'>Join our program</h2>
                    <h6>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Possimus,
                    </h6>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid, veritatis eius. Voluptas sit quibusdam sint
                      itaque et. Libero quam, ullam, architecto non repellat at
                      provident, tempora laboriosam sapiente debitis eveniet?
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aliquid, veritatis eius. Voluptas sit quibusdam sint
                      itaque et. Libero quam, ullam, architecto non repellat at
                      provident, tempora laboriosam sapiente debitis eveniet?
                    </p>
                    <button className='btn btn-primary mt-3'>
                      Register Now
                    </button>
                  </Col>
                  <Col lg={6} className='order-lg-last  order-first'>
                    <Link className='play-link d-flex flex-column justify-content-center'>
                      <img width='90%' height={300} src={ImageOne} alt='pic' />
                      <img
                        height={70}
                        src={ImagePlay}
                        alt='play button'
                        className='position-absolute'
                        style={{
                          left: '50%',
                          top: '40%',
                          transform: 'translate(-50%, -50%)',
                        }}
                      />
                    </Link>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ResultFree;
