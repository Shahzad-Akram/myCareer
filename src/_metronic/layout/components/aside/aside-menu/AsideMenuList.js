/* eslint-disable jsx-a11y/role-supports-aria-props */
/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router';
import { NavLink } from 'react-router-dom';
import { checkIsActive } from '../../../../_helpers';

// Images
import { SidebarIcon1 } from '../../../../../assets/images/svg/SidebarIcon1';
import { SidebarIcon2 } from '../../../../../assets/images/svg/SidebarIcon2';
import { SidebarIcon3 } from '../../../../../assets/images/svg/SidebarIcon3';
import { SidebarIcon4 } from '../../../../../assets/images/svg/SidebarIcon4';
import { SidebarIcon5 } from '../../../../../assets/images/svg/SidebarIcon5';
import { SidebarIcon6 } from '../../../../../assets/images/svg/SidebarIcon6';
import face2 from '../../../../../assets/images/faces/face2.svg';
import { useSelector } from 'react-redux';

export function AsideMenuList({ layoutProps }) {
  const [role] = useSelector((state) => state.auth.user.role);
  const { roleName } = role;
  const location = useLocation();
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu &&
          'menu-item-active'} menu-item-open menu-item-not-hightlighted`
      : '';
  };
  console.log(roleName);

  if (roleName === 'reviewer') {
    return (
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>
        <li
          className={`menu-item mb-5 ${getMenuItemActive(
            '/readReview',
            false
          )}`}
          aria-haspopup='true'
        >
          <NavLink className='menu-link' to='/readReview'>
            <span className='svg-icon menu-icon'>
              <SidebarIcon6 />
            </span>
            <span
              className='menu-text'
              style={{
                fontSize: 11,
              }}
            >
              Read Review
            </span>
          </NavLink>
        </li>
      </ul>
    );
  } else {
    return (
      <>
        {/* begin::Menu Nav */}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
          <li
            className={`menu-item mb-5 ${getMenuItemActive(
              '/dashboard2Paid',
              false
            )}`}
            aria-haspopup='true'
          >
            <NavLink exact className='menu-link' to='/dashboard2Paid'>
              <span className='svg-icon menu-icon'>
                <SidebarIcon1 />
              </span>
              <span
                className='menu-text'
                style={{
                  fontSize: 11,
                }}
              >
                Dashboard
              </span>
            </NavLink>
          </li>

          <li
            className={`menu-item mb-5 ${getMenuItemActive(
              '/dashboard2',
              false
            )}`}
            aria-haspopup='true'
          >
            <NavLink className='menu-link' to='/dashboard2'>
              <span className='svg-icon menu-icon'>
                <SidebarIcon2 />
              </span>
              <span
                className='menu-text'
                style={{
                  fontSize: 11,
                }}
              >
                CAPS™ Personal Strengths Assessment
              </span>
            </NavLink>
          </li>

          <li
            className={`menu-item mb-5 ${getMenuItemActive(
              '/presentationVideos',
              false
            )}`}
            aria-haspopup='true'
          >
            <NavLink className='menu-link' to='/presentationVideos'>
              <span className='svg-icon menu-icon'>
                <SidebarIcon3 />
              </span>
              <span
                className='menu-text'
                style={{
                  fontSize: 11,
                }}
              >
                Coaching Video Series
              </span>
            </NavLink>
          </li>

          {/* <li
          className={`menu-item mb-5 ${getMenuItemActive("/", false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to="/">
            <span className="svg-icon menu-icon">
              <SidebarIcon4 />
            </span>
            <span className="menu-text" style={{
    fontSize: 11,}}>Presentation Practice</span>
          </NavLink>
        </li> */}

          <li
            className={`menu-item mb-5 ${getMenuItemActive(
              '/recordInterview',
              false
            )}`}
            aria-haspopup='true'
          >
           
            <NavLink className='menu-link' to='/recordInterview'>
              <span className='svg-icon menu-icon'>
                <SidebarIcon5 />
              </span>
              <span
                className='menu-text'
                style={{
                  fontSize: 11,
                }}
              >
                 <div className='position-absolute top-0 right-0 small'>
            <span className='badge badge-secondary text-capitalize'>Top-Up</span>
            </div>
                Mock Interview Practice
              </span>
            </NavLink>
          </li>

          <li
            className={`menu-item mb-5 ${getMenuItemActive(
              '/readReview',
              false
            )}`}
            aria-haspopup='true'
          >
            <NavLink className='menu-link' to='/readReview'>
              <span className='svg-icon menu-icon'>
                <SidebarIcon6 />
              </span>
              <span
                className='menu-text'
                style={{
                  fontSize: 11,
                }}
              >
                Performance Review Report
              </span>
            </NavLink>
          </li>
        </ul>

        {/* End.. */}
        <ul className={`menu-nav ${layoutProps.ulClasses}`}>
          <li
            className={`menu-item mt-auto ${getMenuItemActive('/home', false)}`}
            aria-haspopup='true'
          >
            <NavLink className='menu-link' to='/home'>
              <span className='svg-icon menu-icon'>
                <span
                  className='d-flex w-40px h-40px rounded-circle justify-content-center align-items-end mx-auto mb-3'
                  style={{ backgroundColor: '#F3F6F9' }}
                >
                  <img
                    className='h-30px w-30px rounded-pill'
                    src={face2}
                    alt='user'
                  />
                </span>
              </span>
              <span
                className='menu-text'
                style={{
                  fontSize: 11,
                }}
              >
                <div className='ml-3'>
                  <b className='text-dark'>Alison To</b>
                  <div className='text-black-50'>Form 6 Student</div>
                </div>
              </span>
            </NavLink>
          </li>
        </ul>

        {/* end::Menu Nav */}
      </>
    );
  }
}
