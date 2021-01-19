/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import { toAbsoluteUrl, checkIsActive } from '../../../../_helpers';

import Logo from '../../../../../assets/images/logos/logo.svg';

export function HeaderMenu({ layoutProps }) {
  const location = useLocation();
  const getMenuItemActive = (url) => {
    return checkIsActive(location, url) ? 'menu-item-active' : '';
  };

  return (
    <div
      id='kt_header_menu'
      className={`header-menu header-menu-mobile ${layoutProps.ktMenuClasses}`}
      {...layoutProps.headerMenuAttributes}
    >
      {/*begin::Header Nav*/}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        {/*begin::1 Level*/}
        <li className={`menu-item menu-item-rel`}>
          <NavLink className='menu-link text-capitalize' to='/home'>
            <img height={70} width={70} src={Logo} alt='logo' />
          </NavLink>
        </li>
        {/*end::1 Level*/}

        <li className={`menu-item menu-item-rel`}>
          <a
            href='#Section-1'
            className='menu-link text-capitalize text-dark text-hover-primary'
          >
            Why Careefit
          </a>
        </li>

        <li className={`menu-item menu-item-rel`}>
          <a
            href='#Section-5'
            className='menu-link text-capitalize text-dark text-hover-primary'
          >
            Programme Feature
          </a>
        </li>

        <li className={`menu-item menu-item-rel`}>
          <a
            href='#Section-6'
            className='menu-link text-capitalize text-dark text-hover-primary'
          >
            Pricing
          </a>
        </li>
        <li className={`menu-item menu-item-rel`}>
          <a
            href='#Section-7'
            className='menu-link text-capitalize text-dark text-hover-primary'
          >
            About & Contact
          </a>
        </li>
      </ul>
      {/*end::Header Nav*/}
    </div>
  );
}
