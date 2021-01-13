/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useLayoutEffect, useEffect } from 'react';
import objectPath from 'object-path';
import { useLocation } from 'react-router-dom';
import { QuickActions } from './components/QuickActions';
import { BreadCrumbs } from './components/BreadCrumbs';
import {
  getBreadcrumbsAndTitle,
  useSubheader,
} from '../../_core/MetronicSubheader';
import { useHtmlClassService } from '../../_core/MetronicLayout';

export function SubHeader() {
  const uiService = useHtmlClassService();
  const location = useLocation();
  const subheader = useSubheader();

  const layoutProps = useMemo(() => {
    return {
      config: uiService.config,
      subheaderMobileToggle: objectPath.get(
        uiService.config,
        'subheader.mobile-toggle'
      ),
      subheaderCssClasses: uiService.getClasses('subheader', true),
      subheaderContainerCssClasses: uiService.getClasses(
        'subheader_container',
        true
      ),
    };
  }, [uiService]);

  useLayoutEffect(() => {
    const aside = getBreadcrumbsAndTitle('kt_aside_menu', location.pathname);
    const header = getBreadcrumbsAndTitle('kt_header_menu', location.pathname);
    const breadcrumbs =
      aside && aside.breadcrumbs.length > 0
        ? aside.breadcrumbs
        : header.breadcrumbs;
    subheader.setBreadcrumbs(breadcrumbs);
    subheader.setTitle(
      aside && aside.title && aside.title.length > 0
        ? aside.title
        : header.title
    );
    // eslint-disable-next-line
  }, [location.pathname]);

  // Do not remove this useEffect, need from update title/breadcrumbs outside (from the page)
  useEffect(() => {}, [subheader]);

  return (
    <div
      id='kt_subheader'
      className={`subheader pt-15 pb-7 py-lg-10 bg-light-info  ${layoutProps.subheaderCssClasses}`}
    >
      <div
        className={`container align-items-center justify-content-between flex-wrap flex-sm-nowrap`}
      >
        {/* Info */}
        <header className='row mx-0 justify-content-center justify-content-md-between align-items-center w-100'>
          <div className='font-weight-bolder h5 text-dark-65 mb-5 mb-md-0'>
            Road to Success in Presentation
          </div>
          <div>
            <button
              type='button'
              className='btn btn-bg-white btn-hover-bg-success p-2 mx-2 text-dark-25 text-hover-white'
            >
              <i className='fa fa-file-alt pr-0'></i>
            </button>
            <button
              type='button'
              className='btn btn-bg-white btn-hover-bg-success p-2 mx-2 text-dark-25 text-hover-white'
            >
              <i className='fa fa-shield-virus pr-0'></i>
            </button>
            <button
              type='button'
              className='btn btn-bg-white btn-hover-bg-success p-2 mx-2 text-dark-25 text-hover-white'
            >
              <i className='fa fa-comments pr-0'></i>
            </button>
            <button
              type='button'
              className='btn btn-bg-white btn-hover-bg-success p-2 mx-2 text-dark-25 text-hover-white'
            >
              <i className='fa fa-bell pr-0'></i>
            </button>
          </div>
        </header>
      </div>
    </div>
  );
}
