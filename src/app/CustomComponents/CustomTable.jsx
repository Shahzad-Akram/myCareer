/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../_metronic/_helpers';

// Images
import Logo2 from '../../assets/images/logos/logo-2.svg';
import Icon11 from '../../assets/images/icons/icon-11.svg';
import Icon12 from '../../assets/images/icons/icon-12.svg';
import Icon13 from '../../assets/images/icons/icon-13.svg';

const records = [
  {
    submissionTime: '26 apr. 2020',
    OweRating: (
      <div>
        <span>
          <i className='fa fa-star text-warning small p-0 mr-2'></i>
          <i className='fa fa-star text-warning small p-0 mr-2'></i>
          <i className='fa fa-star  text-warning small p-0 mr-2'></i>
          <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
          <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
        </span>
        <span className='font-weight-bold small'>(3.0)</span>
      </div>
    ),
    trainerRating: (
      <div className='d-flex align-items-center'>
        <div className='symbol symbol-50 symbol-light mr-4'>
          <span className='symbol-label rounded-pill'>
            <span className='svg-icon align-self-end'>
              <SVG
                className='h-30px w-30px'
                src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
              />
            </span>
          </span>
        </div>
        <div>
          <a
            href='#'
            className='text-dark-75 font-weight-bolder text-hover-primary mb-1'
          >
            Brad Simmons
          </a>
          <div>
            <span>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
            </span>
            <span className='font-weight-bold small'>(4.0)</span>
          </div>
        </div>
      </div>
    ),
    reviewTime: '-',
    status: 'Pending',
  },
  {
    submissionTime: '26 apr. 2020',
    OweRating: (
      <div>
        <span>
          <i className='fa fa-star text-warning small p-0 mr-2'></i>
          <i className='fa fa-star text-warning small p-0 mr-2'></i>
          <i className='fa fa-star  text-warning small p-0 mr-2'></i>
          <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
          <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
        </span>
        <span className='font-weight-bold small'>(4.0)</span>
      </div>
    ),
    trainerRating: (
      <div className='d-flex align-items-center'>
        <div className='symbol symbol-50 symbol-light mr-4'>
          <span className='symbol-label rounded-pill'>
            <span className='svg-icon align-self-end'>
              <SVG
                className='h-30px w-30px'
                src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
              />
            </span>
          </span>
        </div>
        <div>
          <a
            href='#'
            className='text-dark-75 font-weight-bolder text-hover-primary mb-1'
          >
            Brad Simmons
          </a>
          <div>
            <span>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
            </span>
            <span className='font-weight-bold small'>(4.0)</span>
          </div>
        </div>
      </div>
    ),
    reviewTime: '26 apr. 2020',
    status: 'Ready',
  },
  {
    submissionTime: '26 apr. 2020',
    OweRating: (
      <div>
        <span>
          <i className='fa fa-star text-warning small p-0 mr-2'></i>
          <i className='fa fa-star text-warning small p-0 mr-2'></i>
          <i className='fa fa-star  text-warning small p-0 mr-2'></i>
          <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
          <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
        </span>
        <span className='font-weight-bold small'>(4.0)</span>
      </div>
    ),
    trainerRating: (
      <div className='d-flex align-items-center'>
        <div className='symbol symbol-50 symbol-light mr-4'>
          <span className='symbol-label rounded-pill'>
            <span className='svg-icon align-self-end'>
              <SVG
                className='h-30px w-30px'
                src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
              />
            </span>
          </span>
        </div>
        <div>
          <a
            href='#'
            className='text-dark-75 font-weight-bolder text-hover-primary mb-1'
          >
            Brad Simmons
          </a>
          <div>
            <span>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
            </span>
            <span className='font-weight-bold small'>(4.0)</span>
          </div>
        </div>
      </div>
    ),
    reviewTime: '26 apr. 2020',
    status: 'Ready',
  },

  {
    submissionTime: '26 apr. 2020',
    OweRating: (
      <div>
        <span>
          <i className='fa fa-star text-warning small p-0 mr-2'></i>
          <i className='fa fa-star text-warning small p-0 mr-2'></i>
          <i className='fa fa-star  text-warning small p-0 mr-2'></i>
          <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
          <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
        </span>
        <span className='font-weight-bold small'>(4.0)</span>
      </div>
    ),
    trainerRating: (
      <div className='d-flex align-items-center'>
        <div className='symbol symbol-50 symbol-light mr-4'>
          <span className='symbol-label rounded-pill'>
            <span className='svg-icon align-self-end'>
              <SVG
                className='h-30px w-30px'
                src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
              />
            </span>
          </span>
        </div>
        <div>
          <a
            href='#'
            className='text-dark-75 font-weight-bolder text-hover-primary mb-1'
          >
            Brad Simmons
          </a>
          <div>
            <span>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
            </span>
            <span className='font-weight-bold small'>(4.0)</span>
          </div>
        </div>
      </div>
    ),
    reviewTime: '-',
    status: 'Pending',
  },

  {
    submissionTime: '26 apr. 2020',
    OweRating: (
      <div>
        <span>
          <i className='fa fa-star text-warning small p-0 mr-2'></i>
          <i className='fa fa-star text-warning small p-0 mr-2'></i>
          <i className='fa fa-star  text-warning small p-0 mr-2'></i>
          <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
          <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
        </span>
        <span className='font-weight-bold small'>(4.0)</span>
      </div>
    ),
    trainerRating: (
      <div className='d-flex align-items-center'>
        <div className='symbol symbol-50 symbol-light mr-4'>
          <span className='symbol-label rounded-pill'>
            <span className='svg-icon align-self-end'>
              <SVG
                className='h-30px w-30px'
                src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
              />
            </span>
          </span>
        </div>
        <div>
          <a
            href='#'
            className='text-dark-75 font-weight-bolder text-hover-primary mb-1'
          >
            Brad Simmons
          </a>
          <div>
            <span>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
            </span>
            <span className='font-weight-bold small'>(4.0)</span>
          </div>
        </div>
      </div>
    ),
    reviewTime: '-',
    status: 'Pending',
  },
];

const recordModal = [
  {
    OweRating: (
      <div>
        <span>
          <i className='fa fa-star text-warning small p-0 mr-2'></i>
          <i className='fa fa-star text-warning small p-0 mr-2'></i>
          <i className='fa fa-star  text-warning small p-0 mr-2'></i>
          <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
          <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
        </span>
        <span className='font-weight-bold small'>(3.0)</span>
      </div>
    ),
    trainerRating: (
      <div className='d-flex align-items-end'>
        <div className='symbol symbol-50 symbol-light mr-4'>
          <span className='symbol-label rounded-pill'>
            <span className='svg-icon align-self-end'>
              <SVG
                className='h-30px w-30px'
                src={toAbsoluteUrl('/media/svg/avatars/001-boy.svg')}
              />
            </span>
          </span>
        </div>
        <div>
          <a
            href='#'
            className='text-dark-75 font-weight-bolder text-hover-primary mb-1'
          >
            Brad Simmons
          </a>
          <div>
            <span>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-warning small p-0 mr-2'></i>
              <i className='fa fa-star text-dark-25 small p-0 mr-2'></i>
            </span>
            <span className='font-weight-bold small'>(4.0)</span>
          </div>
        </div>
      </div>
    ),
    reviewTime: '26 apr. 2020',
  },
];

const recordView = [
  {
    key: 1,
    text: `  Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Reprehenderit tenetur facilis ad ipsam corrupti
  numquam laudantium totam, minima suscipit repellat
  voluptatibus repudiandae dolor cum vel sed natus
  assumenda ducimus quas!`,
    score: `43%`,
    comments: 8,
    image: `${Icon11}`,
  },
  {
    key: 2,
    text: `  Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Reprehenderit tenetur facilis ad ipsam corrupti
  numquam laudantium totam, minima suscipit repellat
  voluptatibus repudiandae dolor cum vel sed natus
  assumenda ducimus quas!`,
    score: `65%`,
    comments: 9,
    image: `${Icon12}`,
  },
  {
    key: 3,
    text: `  Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Reprehenderit tenetur facilis ad ipsam corrupti
  numquam laudantium totam, minima suscipit repellat
  voluptatibus repudiandae dolor cum vel sed natus
  assumenda ducimus quas!`,
    score: `40%`,
    comments: 12,
    image: `${Icon13}`,
  },
];

export function CustomTable({ className }) {
  const [show, setShow] = useState(false);
  const getUserStatusClass = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-warning-o-80 text-warning';
      case 'Ready':
        return 'bg-success-o-80 text-success';
      default:
        break;
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        scrollable
        centered
        size='xl'
        show={show}
        onHide={handleClose}
        className='rounded-lg'
      >
        {recordModal.map((value) => (
          <>
            <Modal.Header className='review-report-bg px-xxl-25'>
              <div className='w-100'>
                <img src={Logo2} alt='logo' className='mb-8' />
                <section className='row mx-0 justify-content-between'>
                  <div>
                    <h1 className='text-uppercase font-weight-bolder display-4 mb-5'>
                      Review Report
                    </h1>
                    <div>
                      <div className='mb-1 font-weight-bold'>
                        Overall Ratings
                      </div>
                      {value.OweRating}
                    </div>
                  </div>

                  <div className='d-flex mt-8 mt-lg-0'>
                    <span className='mr-10'>
                      <div className='mb-3 small'>
                        <i className='fa p-0 mr-2 fa-calendar-alt text-success'></i>
                        <span className='text-black-50 text-capitalize'>
                          Review Date
                        </span>
                      </div>
                      <div className='h6 text-capitalize'>
                        {value.reviewTime}
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
                        {value.trainerRating}
                      </div>
                    </span>
                  </div>
                </section>
              </div>
              <div className='position-absolute right-0 top-0 mt-5 mr-5'>
                <button type='button' onClick={handleClose} className='btn p-0'>
                  <i className='fa fa-times'></i>
                </button>
              </div>
            </Modal.Header>
            <Modal.Body className='scroll-box'>
              <div className='container'>
                {recordView.map((value) => (
                  <div className='row border-bottom  py-5'>
                    <div className='col-12 col-lg-7 mr-auto'>
                      <div className='d-flex flex-column flex-lg-row justify-content-center text-center text-lg-left justify-content-lg-start'>
                        <span className='mr-lg-8 mb-5 mb-lg-0'>
                          <img height={80} src={value.image} alt='' />
                        </span>
                        <span>
                          <div className='font-weight-bolder text-capitalize h4 mb-3'>
                            <span className='text-warning mr-1'>
                              Part {value.key}:
                            </span>
                            <span>Score & Comment</span>
                          </div>
                          <p className='text-black-50'>{value.text}</p>
                        </span>
                      </div>
                    </div>
                    <div className='col col-lg-2 mt-5 mt-lg-0'>
                      <div>
                        <div className='h1 font-weight-bolder'>
                          {value.score}
                        </div>
                        <span className='text-uppercase text-black-50 small'>
                          Score
                        </span>
                      </div>
                    </div>
                    <div className='col col-lg-2 mt-5 mt-lg-0 text-right text-lg-center'>
                      <div>
                        <div className='h1 font-weight-bolder'>
                          {value.comments}
                        </div>
                        <span className='text-uppercase text-black-50 small'>
                          Comments
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                <div className='mt-8 text-center'>
                  <button
                    type='button'
                    className='btn p-0 h-35px w-150px text-capitalize bg-success text-white bg-hover-success-o-20 text-hover-light'
                  >
                    Download Report
                  </button>
                </div>
              </div>
            </Modal.Body>
          </>
        ))}
      </Modal>
      <div className={`card card-custom ${className}`}>
        {/* Head */}
        <div className='card-header border-0 py-5'>
          <h3 className='card-title align-items-start flex-column'>
            <span className='card-label font-weight-bolder text-dark'>
              Interview Record
            </span>
          </h3>
        </div>
        {/* Body */}
        <div className='card-body pt-0 pb-3'>
          <div className='tab-content'>
            <div className='table-responsive table-hover'>
              <table className='table table-head-custom table-head-bg table-borderless table-vertical-center'>
                <thead>
                  <tr className='text-left text-uppercase'>
                    <th className='pl-7' style={{ minWidth: '100px' }}>
                      <span className='text-dark-75'>Submission time</span>
                    </th>
                    <th style={{ minWidth: '100px' }}>
                      <span className='text-dark-75'>Owe Rating</span>
                    </th>

                    <th style={{ minWidth: '100px' }}>
                      <span className='text-dark-75'>Trainer's Ratings</span>
                    </th>
                    <th style={{ minWidth: '130px' }}>
                      <span className='text-dark-75'>Review time</span>
                    </th>
                    <th style={{ minWidth: '80px' }}>
                      <span className='text-dark-75'>Status</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {records.map((value) => (
                    <tr className='cursor-pointer' onClick={handleShow}>
                      <td>
                        <span className='text-muted font-weight-bold'>
                          {value.submissionTime}
                        </span>
                      </td>
                      <td>{value.OweRating}</td>

                      <td>{value.trainerRating}</td>
                      <td>
                        <span className='text-muted font-weight-bold text-capitalize'>
                          {value.reviewTime}
                        </span>
                      </td>
                      <td className='pl-0 py-8'>
                        <span
                          className={`badge text-capitalize' ${getUserStatusClass(
                            value.status
                          )}`}
                        >
                          {value.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
