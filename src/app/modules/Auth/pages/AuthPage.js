/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, Switch, Redirect } from 'react-router-dom';
import { ContentRoute } from '../../../../_metronic/layout';
import Login from './Login';
import Registration from './Registration';
import ForgotPassword from './ForgotPassword';
import '../../../../_metronic/_assets/sass/pages/login/classic/login-1.scss';

// images
import BgOne from '../../../../assets/images/background/bg-image-1.svg';
import videoOne from '../../../../assets/images/images/videoOne.svg';
import IconOne from '../../../../assets/images/icons/icon-1.svg';
import IconTwo from '../../../../assets/images/icons/icon-2.svg';
import IconThree from '../../../../assets/images/icons/icon-3.svg';

const VideoWorkaround = ({ src }) => (
  <div
    className='mx-auto bg-white p-2 rounded-xl d-flex'
    dangerouslySetInnerHTML={{
      __html: `
      <video
        controls
        playsinline
        src="${src}"
        class='video h-100 w-100 rounded-lg'
        type='video/mp4'
      />
    `,
    }}
  />
);

export function AuthPage() {
  return (
    <>
      <div className='d-flex flex-column flex-root'>
        {/*begin::Login*/}
        <div
          className='login login-1 login-signin-on d-flex flex-column flex-lg-row flex-row-fluid'
          id='kt_login'
        >
          {/*begin::Aside*/}
          <div
            className='login-aside d-flex flex-row-auto bgi-size-cover bgi-no-repeat p-10 p-lg-10'
            style={{
              backgroundImage: `url(${BgOne})`,
            }}
          >
            {/*begin: Aside Container*/}
            <div className='d-flex flex-row-fluid flex-column justify-content-between'>
              {/* start:: Aside header */}
              <div className='mb-15 mb-lg-0'>
                <div className='text-center col-9 px-0 bg-white rounded-lg mx-auto position-relative'>
                  <VideoWorkaround src='https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4' />
                  <span className='pos-center'>
                    <img
                      height='100%'
                      width='100%'
                      src={videoOne}
                      alt='video'
                    />
                  </span>
                </div>
              </div>
              {/* end:: Aside header */}

              {/* start:: Aside content */}
              <div className='flex-column-fluid d-flex flex-column justify-content-center text-white mt-10'>
                <div className='row mx-0 mb-5 flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center'>
                  <span className='mb-3 mb-lg-0 w-60px h-60px d-flex align-items-center justify-content-center border border-2 border-white rounded-circle'>
                    <i className='fa-3x text-white'>
                      <img src={IconOne} alt='icon' />
                    </i>
                  </span>
                  <span className='col-lg-8 mr-3 text-center text-lg-left'>
                    <h6 className='mb-2'>Feature #1</h6>
                    <p className='font-weight-lighter opacity-80'>
                      The ultimate Bootstrap & React 16 admin theme framework
                      for next generation web apps.
                    </p>
                  </span>
                </div>
                <div className='row mx-0 mb-5 flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center'>
                  <span className='mb-3 mb-lg-0 w-60px h-60px d-flex align-items-center justify-content-center border border-2 border-white rounded-circle'>
                    <i className='fa-3x text-white'>
                      <img src={IconTwo} alt='icon' />
                    </i>
                  </span>
                  <span className='col-lg-8 mr-3 text-center text-lg-left'>
                    <h6 className='mb-2'>Feature #1</h6>
                    <p className='font-weight-lighter opacity-80'>
                      The ultimate Bootstrap & React 16 admin theme framework
                      for next generation web apps.
                    </p>
                  </span>
                </div>
                <div className='row mx-0 mb-5 flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center'>
                  <span className='mb-3 mb-lg-0 w-60px h-60px d-flex align-items-center justify-content-center border border-2 border-white rounded-circle'>
                    <i className='fa-3x text-white'>
                      <img src={IconThree} alt='icon' />
                    </i>
                  </span>
                  <span className='col-lg-8 mr-3 text-center text-lg-left'>
                    <h6 className='mb-2'>Feature #1</h6>
                    <p className='font-weight-lighter opacity-80'>
                      The ultimate Bootstrap & React 16 admin theme framework
                      for next generation web apps.
                    </p>
                  </span>
                </div>
              </div>
              {/* end:: Aside content */}

              {/* start:: Aside footer for desktop */}
              {/* <div className='d-none flex-column-auto d-lg-flex justify-content-between mt-10'>
                <div className='opacity-70 font-weight-bold	text-white'>
                  &copy; 2020 Metronic
                </div>
                <div className='d-flex'>
                  <Link to='/terms' className='text-white'>
                    Privacy
                  </Link>
                  <Link to='/terms' className='text-white ml-10'>
                    Legal
                  </Link>
                  <Link to='/terms' className='text-white ml-10'>
                    Contact
                  </Link>
                </div>
              </div> */}
              {/* end:: Aside footer for desktop */}
            </div>
            {/*end: Aside Container*/}
          </div>
          {/*begin::Aside*/}

          {/*begin::Content*/}
          <div className='flex-row-fluid d-flex flex-column position-relative p-7 overflow-hidden'>
            {/*begin::Content header*/}
            {/* <div className='position-absolute top-0 right-0 text-right mt-5 mb-15 mb-lg-0 flex-column-auto justify-content-center py-5 px-10'>
              <span className='font-weight-bold text-dark-50'>
                Don't have an account yet?
              </span>
              <Link
                to='/auth/registration'
                className='font-weight-bold ml-2'
                id='kt_login_signup'
              >
                Sign Up!
              </Link>
            </div> */}
            {/*end::Content header*/}

            {/* begin::Content body */}
            <div className='d-flex flex-column-fluid flex-center mt-30 mt-lg-0 '>
              <Switch>
                <ContentRoute path='/auth/login' component={Login} />
                <ContentRoute
                  path='/auth/registration'
                  component={Registration}
                />
                <ContentRoute
                  path='/auth/forgot-password'
                  component={ForgotPassword}
                />
                <Redirect from='/auth' exact={true} to='/auth/login' />
                <Redirect to='/auth/login' />
              </Switch>
            </div>
            {/*end::Content body*/}

            {/* begin::Mobile footer */}
            <div className='d-flex d-lg-none flex-column-auto flex-column flex-sm-row justify-content-between align-items-center mt-5 p-5'>
              <div className='text-dark-50 font-weight-bold order-2 order-sm-1 my-2'>
                &copy; 2020 Metronic
              </div>
              <div className='d-flex order-1 order-sm-2 my-2'>
                <Link to='/terms' className='text-dark-75 text-hover-primary'>
                  Privacy
                </Link>
                <Link
                  to='/terms'
                  className='text-dark-75 text-hover-primary ml-4'
                >
                  Legal
                </Link>
                <Link
                  to='/terms'
                  className='text-dark-75 text-hover-primary ml-4'
                >
                  Contact
                </Link>
              </div>
            </div>
            {/* end::Mobile footer */}
          </div>
          {/*end::Content*/}
        </div>
        {/*end::Login*/}
      </div>
    </>
  );
}
