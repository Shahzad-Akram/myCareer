import React from 'react';
import ReactPlayer from 'react-player';
import { Carousel } from 'react-bootstrap';

//  images
import ImagePlay from '../../assets/images/images/play-button.svg';
import ImageTwo from '../../assets/images/images/videoTwo.png';

export const PresentationVideosStep3 = () => {
  const data = [{}, {}, {}];

  return (
    <>
      <div className='d-flex justify-content-between mb-10'>
        <h5 className='mb-0 font-weight-bold'>
          Shape your presentation skill with professional trainers
        </h5>
        <div></div>
      </div>
      <div className='bg-light p-8 rounded-xl'>
        <div>
          <div className='mb-10'>
            <h1 className='font-weight-bolder mb-0 text-capitalize'>
              introduction
            </h1>
          </div>
          <div className='Section-3'>
            <div className='mx-auto mb-6' style={{ width: '90%' }}>
            <div class='d-flex align-items-center mt-4'>
                <span class='mr-4'>
                <div className='d-flex align-items-center justify-content-center rounded-circle h-45px w-45px bg-white'>
                <img
                  className='h-100 w-100 rounded-circle'
                  src='https://source.unsplash.com/random'
                  alt='user'
                />
              </div>
                </span>
                <span class='font-weight-bold'>
                  <div class='d-flex align-items-center text-black-50'>
                    <span>Presented By</span>
                   <span className='ml-8 d-flex'>
                       
                           <i className='fa fa-clock text-dark-25 mb-0 mr-2'/>
                           <span>1:00</span>
                      
                   </span>
                  </div>
                  <div class='text-capitalize'>Alan</div>
                </span>
              </div>
            </div>
            <Carousel>
              {data.map((i, data) => (
                <Carousel.Item key='i'>
                  <div
                    className='text-center mx-auto position-relative h-200px h-md-350px h-lg-400px h-xl-500px h-xxl-600px bg-white rounded-xl shadow d-flex align-items-center justify-content-center'
                    style={{ width: '90%' }}
                  >
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
                      light={ImageTwo}
                    />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
};
