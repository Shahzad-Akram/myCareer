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
          <NavLink className='text-capitalize' to='/home'>
            <img height={70} width={70} src={Logo} alt='logo' />
          </NavLink>
        </li>
        {/*end::1 Level*/}

      </ul>
      {/*end::Header Nav*/}
    </div>
  );
}
