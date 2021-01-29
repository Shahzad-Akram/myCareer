import { Rating } from '@material-ui/lab';
import React from 'react';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../_metronic/_helpers';

const VideoWorkaround = ({ src }) => (
  <div
    className='mx-auto bg-primary p-2 rounded-xl d-flex'
    dangerouslySetInnerHTML={{
      __html: `
        <video
          controls
          autoplay
          playsinline
          src="${src}"
          class='video h-100 w-100 rounded-lg'
          type='video/mp4'
        />
      `,
    }}
  />
);

export const AdminQuestion3 = ({ children }) => {
  return (
    <>
      <header
        className='review-report-bg px-xxl-25 py-5 px-5'
        style={{ backgroundSize: 'contain', backgroundPosition: 'inherit' }}
      >
        <div className='w-100'>
          <h1 className='text-uppercase font-weight-bolder mb-5'>
            Q3: Tell Me About Yourself or How Would You Describe Yourself
          </h1>

          <section className='row mx-0'>
            <div className='w-400px mr-15'>
              <VideoWorkaround src='https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4' />
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
              src={require('../../assets/images/icons/icon-11.svg')}
              alt='icon'
            />
          </span>
          <span>
            <div className='font-weight-bolder text-capitalize h4 mb-4'>
              <span className='text-warning mr-1'>Part 3:</span>
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
