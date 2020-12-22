// rafc
import React from 'react';
import { Container } from '@material-ui/core';
import { Row, Col } from 'react-bootstrap';
// import video from '../assets/header-muted.mp4'

// images
import Logo1 from '../../assets/images/brands/Logo-1.svg';
import Logo2 from '../../assets/images/brands/Logo-2.png';
import Logo3 from '../../assets/images/brands/Logo-3.svg';
import Logo4 from '../../assets/images/brands/Logo-4.svg';

const VideoWorkaround = ({ src }) => (
  <div
    className='mx-auto bg-primary px-3 pt-3 pb-2 rounded-top-left-xl rounded-top-right-xl'
    style={{ width: '90%' }}
    dangerouslySetInnerHTML={{
      __html: `
      <video
        controls
        playsinline
        src="${src}"
        class='video h-100 w-100 rounded-top-left-xl rounded-top-right-xl'
        type='video/mp4'
      />
    `,
    }}
  />
);

export const HomePage = () => {
  return (
    <Container fixed className='h-100'>
      <Row className='h-100 mt-5'>
        <Col xl={5} className='d-flex flex-column mt-4'>
          <h4 className='text-primary text-capitalize font-weight-bold'>
            Shape your interviewing skills to a New height
          </h4>
          <h1 className='display-4 text-primary text-uppercase font-weight-bold'>
            Your personal coach
          </h1>

          <div className='d-flex flex-wrap text-uppercase font-weight-bold d-flex pl-2'>
            <span>Programmer available for:</span>
            <div className='mt-1'>
              <button className='btn rounded-0 btn-success w-100px py-1 text-uppercase mx-2'>
                DSE
              </button>
              <button className='btn rounded-0 btn-warning w-100px  py-1 text-uppercase'>
                Overseas
              </button>
            </div>
          </div>

          <div className='mt-7'>
            <span className='text-danger font-weight-boldest mr-1'>
              100% Suitable for Hong Kong,
            </span>
            <span className='text-primary'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              autem numquam nihil tempora consequuntur nisi quos dolore? Natus,
              aliquid porro?
            </span>
          </div>

          <div className='my-20'>
            <div className='mb-4'>
              <h6 className='font-size-base mb-3'>Organised by</h6>
              <div>
                <span className='mr-10'>
                  <img src={Logo1} alt='Brand-Logo' />
                </span>
                <span>
                  <img src={Logo2} alt='Brand-Logo' />
                </span>
              </div>
            </div>
            <div>
              <h6 className='font-size-base mb-3'>Programme developed by</h6>
              <div>
                <span className='mr-7'>
                  <img src={Logo3} alt='Brand-Logo' />
                </span>
                <span>
                  <img src={Logo4} alt='Brand-Logo' />
                </span>
              </div>
            </div>
          </div>
        </Col>
        <Col xl={7} className='order-first order-xl-last my-10 my-md-0'>
          <div className='text-center'>
            <span className='mt-1 h-4px w-4px bg-white position-absolute rounded-circle'></span>
            <VideoWorkaround src='https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4' />
            <span
              className='d-flex h-15px bg-white w-100 rounded-bottom-xl'
              style={{ boxShadow: '0 10px 5px #ddd', marginTop: '-0.85rem' }}
            >
              <span className='bg-dark h-5px w-80px mx-auto mt-n1 rounded'></span>
            </span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
