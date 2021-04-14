import React from 'react';
import SVG from 'react-inlinesvg';
import Select from 'react-select';
import { toAbsoluteUrl } from '../../_metronic/_helpers';

export const AdminSettings = ({ handleClose }) => {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]

  return (
    <section>
      <div className='position-absolute right-0 top-0 mt-5 mr-5'>
        <button type='button' onClick={handleClose} className='btn p-0'>
          <i className='fa fa-times'></i>
        </button>
      </div>
      <header
        className='review-report-bg px-xxl-25 pt-15 pb-10 px-5'
        style={{ backgroundSize: 'contain', backgroundPosition: 'inherit' }}
      >
        <div className='w-100'>
          <h2 className='text-uppercase font-weight-bolder mb-5'>
          edit user (TBC)
          </h2>

          <section className='row mx-0'>
            <div>
              <div className='text-capitalize small'>
                <div className='d-flex align-items-center'>
                  <div className='symbol symbol-50 symbol-light mr-2'>
                    <span className='symbol-label rounded-pill'>
                      <span className='svg-icon'>
                        <SVG
                          className='h-40px w-40px'
                          src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
                        />
                      </span>
                    </span>
                  </div>
                  <div className='h6 mb-0'>
                    <div className='text-dark-75 font-weight-bolder mb-1'>
                      Brad Simmons
                    </div>
                    <div className='d-flex align-items-center align-items-baseline'>
                      <div>
                        <i className='fa fa-star text-warning small p-0 mr-2'></i>
                        <i className='fa fa-star text-warning small p-0 mr-2'></i>
                        <i className='fa fa-star  text-warning small p-0 mr-2'></i>
                        <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
                        <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
                      </div>
                      <span className='ml-2 small font-weight-bold'>(4.0)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </header>
      <div className='bg-white py-8 px-5 px-xxl-25'>
          <form noValidate>
              <div className='row mb-5'>
                <div className='col-md-3'>
                    <label>First Name:</label>
                </div>
                <div className='col'>
                    <input type="text" className='form-control form-control-sm'/>
                </div>
              </div>
              <div className='row mb-5'>
                <div className='col-md-3'>
                    <label>Last Name:</label>
                </div>
                <div className='col'>
                    <input type="text" className='form-control form-control-sm'/>
                </div>
              </div>
              <div className='row mb-5'>
                <div className='col-md-3'>
                    <label>Email:</label>
                </div>
                <div className='col'>
                    <input type="email" className='form-control form-control-sm'/>
                </div>
              </div>
              <div className='row mb-5'>
                <div className='col-md-3'>
                    <label>Parent’s Email:</label>
                </div>
                <div className='col'>
                    <input type="email" className='form-control form-control-sm'/>
                </div>
              </div>
              <div className='row mb-5'>
                <div className='col-md-3'>
                    <label>Billing Address:</label>
                </div>
                <div className='col'>
                    <input type="text" className='form-control form-control-sm'/>
                </div>
              </div>
              <div className='row mb-5'>
                <div className='col-md-3'>
                    <label>Phone:</label>
                </div>
                <div className='col'>
                    <input type="text" className='form-control form-control-sm'/>
                </div>
              </div>
              <div className='row mb-5'>
                <div className='col-lg-3'>
                    <label>User Level:</label>
                </div>
                <div className='col'>
                <Select placeholder='All rounded' options={options} />
                </div>
                <div className='col-5 col-md-4 col-lg-3'>
                   <div className='d-flex align-items-center mx-0 mb-3'>
                   <label className='mb-0 mr-6'>Credit:</label>
                   <input type="text" className='form-control form-control-sm w-50px text-center' value='2'/>
                   </div>
                   <div>
                       <button className='btn p-0 btn-link text-capitalize'>Trial Counter Reset</button>
                   </div>
                </div>
              </div>
              <div className='row mb-5'>
                  <div className='col col-md-6'>
                  <label className='mb-4'>Payment Record:</label>
                  <textarea className='form-control' rows='8' />
                  </div>
                  <div className='col col-md-6'>
                  <label className='mb-4'>Review Record:</label>
                  <textarea className='form-control' rows='8' />
                  </div>
              </div>
              <div className='row mb-5'>
                  <div className='col-12 mb-4'>
                      <b className='text-capitalize'>Manual Payment Record (Adjustment):</b>
                  </div>
                  <div className='col-12 col-md-6 mb-5 mb-md-0'>
                  <div className='d-flex align-items-center'>
                  <label className='mb-0 mr-4'>Reason:</label>
                  <input type="text" className='form-control form-control-sm text-center'/>
                  </div>
                  </div>
                  <div className='col-12 col-md-6'>
                  <div className='d-flex align-items-center'>
                  <label className='mb-0 mr-4'>Amount(+/-):</label>
                  <input type="text" className='form-control form-control-sm text-center'/>
                  </div>
                  </div>
              </div>
              <div className='mt-10 text-right'>
              <button type='submit' className='btn btn-warning col-12 col-md-4'>Done</button>
              </div>
          </form>
      </div>
    </section>
  );
};
