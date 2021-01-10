/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React from 'react';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl } from '../../_metronic/_helpers';

export function CustomTable({ className }) {
  return (
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
          <div className='table-responsive'>
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
                <tr>
                  <td>
                    <span className='text-muted font-weight-bold'>
                      26 apr. 2020
                    </span>
                  </td>
                  <td>
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
                  </td>

                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50 symbol-light mr-4'>
                        <span className='symbol-label rounded-pill'>
                          <span className='svg-icon align-self-end'>
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
                  </td>
                  <td>
                    <span className='text-muted font-weight-bold'>
                      26 apr. 2020
                    </span>
                  </td>
                  <td className='pl-0 py-8'>
                    <span className='badge bg-warning-o-80 text-warning'>
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-muted font-weight-bold'>
                      26 apr. 2020
                    </span>
                  </td>
                  <td>
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
                  </td>

                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50 symbol-light mr-4'>
                        <span className='symbol-label rounded-pill'>
                          <span className='svg-icon align-self-end'>
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
                  </td>
                  <td>
                    <span className='text-muted font-weight-bold'>
                      26 apr. 2020
                    </span>
                  </td>
                  <td className='pl-0 py-8'>
                    <span className='badge bg-warning-o-80 text-warning'>
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-muted font-weight-bold'>
                      26 apr. 2020
                    </span>
                  </td>
                  <td>
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
                  </td>

                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50 symbol-light mr-4'>
                        <span className='symbol-label rounded-pill'>
                          <span className='svg-icon align-self-end'>
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
                  </td>
                  <td>
                    <span className='text-muted font-weight-bold'>
                      26 apr. 2020
                    </span>
                  </td>
                  <td className='pl-0 py-8'>
                    <span className='badge bg-warning-o-80 text-warning'>
                      Pending
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className='text-muted font-weight-bold'>
                      26 apr. 2020
                    </span>
                  </td>
                  <td>
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
                  </td>

                  <td>
                    <div className='d-flex align-items-center'>
                      <div className='symbol symbol-50 symbol-light mr-4'>
                        <span className='symbol-label rounded-pill'>
                          <span className='svg-icon align-self-end'>
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
                  </td>
                  <td>
                    <span className='text-muted font-weight-bold'>
                      26 apr. 2020
                    </span>
                  </td>
                  <td className='pl-0 py-8'>
                    <span className='badge bg-success-o-80 text-success'>
                      Ready
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
