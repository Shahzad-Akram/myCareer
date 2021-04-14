import { Rating } from '@material-ui/lab';
import React from 'react';
import SVG from 'react-inlinesvg';
import ReactPlayer from 'react-player';
import { toAbsoluteUrl } from '../../_metronic/_helpers';



export const AdminQuestion2 = ({ children }) => {
  return (
    <>
      <header
        className='review-report-bg px-xxl-25 py-5 px-5'
        style={{ backgroundSize: 'contain', backgroundPosition: 'inherit' }}
      >
        <div className='w-100'>
          <h1 className='text-uppercase font-weight-bolder mb-5'>
            Q2: Tell Me About Yourself or How Would You Describe Yourself
          </h1>

          <section className='row mx-0'>
            <div className='w-400px mr-15'>
            <div className='text-center mx-auto position-relative h-200px h-md-200px w-100 bg-primary rounded-xl shadow d-flex align-items-center justify-content-center'>
                <ReactPlayer
                  url='https://www.youtube.com/watch?v=oUFJJNQGwhk'
                  width='96%'
                  height='93%'
                  controls
                  playing
           
                />
              </div>
            </div>
            <div className='d-flex flex-column'>
              <div className='d-flex mt-8 mt-lg-0'>
                <span className='mr-10'>
                  <div className='mb-3 small'>
                    <i className='fa p-0 mr-2 fa-calendar-alt text-success'></i>
                    <span className='text-black-50 text-capitalize'>
                      Review Date
                    </span>
                  </div>
                  <div className='h6'>
                    <small className='font-weight-bold text-capitalize'>
                      25 Apr, 2020
                    </small>
                  </div>
                </span>
                <span>
                  <div className='small'>
                    <i className='fa p-0 mr-2 fa-user text-success'></i>
                    <span className='text-black-50 text-capitalize'>
                      Trainer
                    </span>
                  </div>
                  <div className='text-capitalize small'>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50 symbol-light mr-2'>
                        <span className='symbol-label rounded-pill'>
                          <span className='svg-icon'>
                            <SVG
                              className='h-30px w-30px'
                              src={toAbsoluteUrl(
                                '/media/svg/avatars/001-boy.svg'
                              )}
                            />
                          </span>
                        </span>
                      </div>
                      <div>
                        <div className='text-dark-75 font-weight-bolder text-hover-primary mb-1'>
                          Brad Simmons
                        </div>
                      </div>
                    </div>
                  </div>
                </span>
              </div>

              <div className='h4 mt-auto'>
                <div className='mb-1 font-weight-bold'>Overall Ratings</div>
                <div>
                  <i className='fa fa-star text-warning small p-0 mr-2'></i>
                  <i className='fa fa-star text-warning small p-0 mr-2'></i>
                  <i className='fa fa-star  text-warning small p-0 mr-2'></i>
                  <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
                  <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
                </div>
              </div>
            </div>
            <div className='mt-auto ml-auto'>
              <button type='button' className='btn btn-warning'>
                Done
              </button>
            </div>
          </section>
        </div>
      </header>
      <main className='px-xxl-25 py-5 px-5'>
        <div className='d-flex flex-column flex-lg-row align-items-baseline justify-content-center text-center text-lg-left justify-content-lg-start'>
          <span className='mr-lg-5 mb-5 mb-lg-0'>
            <img
              height={80}
              src={require('../../assets/images/icons/icon-12.svg')}
              alt='icon'
            />
          </span>
          <span>
            <div className='font-weight-bolder text-capitalize h4 mb-4'>
              <span className='text-warning mr-1'>Part 2:</span>
              <span>Preparation</span>
            </div>
            <div className='mb-4'>{children}</div>
          </span>
        </div>

        <div className='row'>
          <div className='col-12 col-md-6 mb-5 mb-md-0 d-flex flex-column'>
            <label className='text-capitalize'>Other Comment</label>
            <textarea className='form-control' rows='4'></textarea>
          </div>
          <div className='col-12 col-md-6 mb-5 mb-md-0 d-flex flex-column align-items-end justify-content-end'>
            <div>
              <div className='text-black-50 text-uppercase mb-2 small font-weight-bold'>
                Click to rate
              </div>
              <Rating size='large' defaultValue={2} />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
