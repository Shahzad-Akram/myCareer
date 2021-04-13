// rafc
import React from 'react';
import { Button, Container, TextField } from '@material-ui/core';
import { Row, Col, Card, } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
// import video from '../assets/header-muted.mp4'

// images
import Logo from '../../assets/images/logos/logo.svg';
import Logo1 from '../../assets/images/brands/Logo-1.svg';
import Logo3 from '../../assets/images/brands/Logo-3.svg';
import { ReactComponent as Icon4 } from '../../assets/images/icons/icon-4.svg';
import { ReactComponent as BannerIcon } from '../../assets/images/images/card-hover.svg';
import { ReactComponent as Icon5 } from '../../assets/images/icons/icon-5.svg';
import { ReactComponent as Icon6 } from '../../assets/images/icons/icon-6.svg';
import Icon7 from '../../assets/images/icons/icon-7.svg';
import Icon8 from '../../assets/images/icons/icon-8.svg';
import Icon9 from '../../assets/images/icons/icon-9.svg';
import Icon10 from '../../assets/images/icons/icon-10.svg';
import Image2 from '../../assets/images/images/image-2.svg';
import Image2Png from '../../assets/images/images/image-2.png';
import videoOne from '../../assets/images/images/videoOne.svg';
import Line1 from '../../assets/images/images/line-1.svg';
import Line2 from '../../assets/images/images/line-2.svg';
import Line3 from '../../assets/images/images/line-3.svg';
import Line4 from '../../assets/images/images/line-4.svg';
import face1 from '../../assets/images/faces/face1.svg';
import face2 from '../../assets/images/faces/face2.svg';
import face3 from '../../assets/images/faces/face3.svg';
import face4 from '../../assets/images/faces/face4.svg';
import face5 from '../../assets/images/faces/face5.svg';
import ImagePlay from '../../assets/images/images/play-button.svg';
import { SvgBox } from '../../assets/SvgBox';
import PlanSection from '../CustomComponents/PlanSection';

const OurTeam = [
  {
    face: face1,
    name: 'Jackson Kwok',
    exp: (
      <>
        <li className='my-2'>CEO/Founder of Champ Genesis Ltd.</li>
        <li className='my-2'>
          Digital Transformation Consultant With MIT (PE) Certificate
        </li>
        <li className='my-2'>Certified Corporate Coach (WABC)</li>
        <li className='my-2'>
          30+ years of talent development & training experience
        </li>
      </>
    ),
  },
  {
    face: face2,
    name: 'Ruby Tam',
    exp: (
      <>
        <li className='my-2'>A Seasoned Corporate HR Leader (Retired)</li>
        <li className='my-2'>Honorary Career Consultant & Mentor (HKU)</li>
        <li className='my-2'>Certified Corporate Coach (WABC)</li>
        <li className='my-2'>Career Development Advisor</li>
        <li className='my-2'>
          Certified Instructor for Parent Effectiveness Training (HK/Macau)
        </li>
      </>
    ),
  },
  {
    face: face3,
    name: 'Vanda Lai',
    exp: (
      <>
        <li className='my-2'>COO/Founder of Champ Genesis Ltd.</li>
        <li className='my-2'>
          Founder of I Can Fly Development Ltd. (Accredited Social Enterprise)
        </li>
        <li className='my-2'>Registered Career Coach</li>
        <li className='my-2'>Corporate Trainer</li>
        <li className='my-2'>Trainer for University Students</li>
      </>
    ),
  },
  {
    face: face4,
    name: 'Catherine Tong',
    exp: (
      <>
        <li className='my-2'>
          Founder of I Can Fly Development Ltd. (Accredited Social Enterprise)
        </li>
        <li className='my-2'>Certified Career Services Provider (CCSP)</li>
        <li className='my-2'>
          Certified Global Career Development Facilitator (GCDF)
        </li>
        <li className='my-2'>Registered Career Coach</li>
      </>
    ),
  },
  {
    face: face5,
    name: 'River Ho',
    exp: (
      <>
        <li className='my-2'>Founder of NMC Interactive</li>
        <li className='my-2'>
          20+ years of technology, digital marketing and data analytics
          experience
        </li>
        <li className='my-2'>
          Frequent speaker and trainer for corporates and summits
        </li>
        <li className='my-2'>
          Mentor/Trainer of Youth Business Hong Kong of HKYFG
        </li>
      </>
    ),
  },
];

export const HomePage = () => {
  const VIDEOS = {
    cat:
      'https://s3.amazonaws.com/codecademy-content/courses/React/react_video-cute.mp4', 
  };

  return (
    <>
    <header className='bg-white fixed-top'>
      <div className='container'>
      <div className='row mx-0 align-items-center py-3'>
        <div className='mr-5'>
         <a href='#Section-1'>
         <img className='h-60px' src={Logo} alt="Logo"/>
         </a>
        </div>
        <div className='d-none d-lg-block'>
        <ul className='nav'>
    
    <li className='nav-item mx-3'><a className='text-body text-hover-primary font-weight-bold' href='#Section-2'>Why CareeFit Design </a></li>
    <li className='nav-item mx-3'><a className='text-body text-hover-primary font-weight-bold' href='#Section-3'>Platform Features</a></li>
    <li className='nav-item mx-3'><a className='text-body text-hover-primary font-weight-bold' href='#Section-4'>Choose Your Plan</a></li>
    <li className='nav-item mx-3'><a className='text-body text-hover-primary font-weight-bold' href='#Section-5'>Contact</a></li>
   
  </ul>
        </div>
        <div className='d-flex align-items-baseline ml-auto'>
          <div>
           <Link to='/auth/login' className='text-capitalize text-warning text-hover-white bg-hover-warning border border-warning h-35px d-flex align-items-center px-7 h5 mb-0 mx-1'>
             Login
             </Link>
           <div className='mt-3 text-center'>or <Link className='text-uppercase text-warning'>SIGNUP</Link></div>
          </div>
          <Link className='text-capitalize text-white text-hover-white bg-warning border border-warning h-35px d-flex align-items-center px-7 h5 mb-0 mx-1'>Get Start Free</Link>
        </div>
      </div>
      </div>
    </header>
      <section id='Section-1' className='Section-1 pt-md-48 mt-xl-20 pt-30 pb-30'>
        <Container fixed className='h-100'>
          <Row className='h-100 mt-5 justify-content-between'>
            <Col xl={5} className='d-flex flex-column mt-4 bg-white'>
              <h2 className='text-body text-capitalize font-weight-bolder'>
                Practice Perfect With Professionals
              </h2>
              <h1 className='display-4 text-primary text-uppercase font-weight-bolder'>
                Sharpen Your <br /> Interview Skills for a <br /> Successful
                Admission
              </h1>

              <p className='mt-4'>
                With admissions interview becoming more and more important for
                local and overseas study nowadays, you need to understand your
                personal strengths, use these to your advantage and equip
                yourself with proven interview techniques and tips. More
                importantly, you have to practise more to sharpen your skills
                for winning the interview.
              </p>

              <p>
                A ground-breaking digital learning and development platform
                “CareerFit DESIGN” is developed to serve three main purposes:
                Sharpen your skills through innovative mock interview practice
                Improve your mock interview performance through review by
                professional evaluators Enable you to discover and manifest your
                personal strengths, in addition to acquiring proven interview
                techniques and tips
              </p>

              <p>
                Please sign up here to stay update and save HK$100 off your next
                purchase (limited to the first 1000 customers only).
              </p>
            </Col>
            <Col xl={6} className='order-first order-xl-last my-10 my-md-0'>
              <div className='text-center position-relative h-200px h-md-250px h-lg-300px h-xl-350px h-xxl-400px bg-white rounded-xl shadow d-flex align-items-center justify-content-center'>
                <ReactPlayer
                  url={VIDEOS.cat}
                  width='97%'
                  height='95%'
                  controls
                  playing
                  playIcon={
                    <button type='button' className='btn p-0'>
                      <img src={ImagePlay} alt='Video Button' />
                    </button>
                  }
                  light={videoOne}
                />
              </div>
              <div className='d-flex flex-wrap my-12 col-md-9 px-0 mx-auto bg-white shadow-sm rounded-lg'>
                <div className='col-md-6 py-4 border-right'>
                  <h6 className='font-size-base mb-4'>Organised by</h6>
                  <div>
                    <span>
                      <img src={Logo1} alt='Brand-Logo' />
                    </span>
                  </div>
                </div>
                <div className='col-md-6 py-4'>
                  <h6 className='font-size-base mb-4'>
                    Programme developed by
                  </h6>
                  <div>
                    <span className='mr-5'>
                      <img src={Logo3} alt='Brand-Logo' />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='Section-2'>
        <div className='container py-10 text-center'>
          <div>
          <h1 className='display-4 text-white font-weight-boldest mb-4'>
        Save HK$100 off your purchase (for the first 1000 customers only)
            </h1>
            <form>
          <div className='row row-cols-1 row-cols-md-3 col-lg-10 mx-auto'>
            <div className='col my-3 my-md-0'>
              <div>
                <input className='form-control form-control-lg py-8' type="email" placeholder="Email*"/>
              </div>
            </div>
            <div className='col my-3 my-md-0'>
              <div>
                <input className='form-control form-control-lg py-8' type="text" placeholder="Name*"/>
              </div>
            </div>
            <div className='col my-3 my-md-0'>
              <div className='h-100'>
                <input className='btn btn-block btn-primary py-4 h4 mb-0 font-weight-bolder' type="submit" value='Sign up'/>
                <div className='mt-4'>
                <label class="checkbox d-flex align-items-baseline flex-shrink-0 m-0">
														<input type="checkbox" id='check' value="1"/>
														<span></span>
                            <label className='text-white ml-4' htmlFor="check">I agree to the terms & conditions</label>
													</label>
                </div>
              </div>
            </div>
          </div>
        </form>
          </div>
        </div>
        
      </section>
      <section id='Section-2' className='Section-3 bg-white-o-100 py-25'>
        <Container>
          <div className='text-center mb-24'>
            <div className='mb-4 d-flex align-items-baseline justify-content-center'>
              <h1 className='display-4 text-uppercase font-weight-boldest mb-0 mr-3'>
                Why
              </h1>
              <img src={Logo} alt='logo' />
            </div>
            <h5 className='text-primary'>
              Sharpen Your Interview Skills for a Successful Admission
            </h5>
          </div>

          <div className='row row-cols-1 row-cols-md-2 row-cols-xl-3 justify-content-center mx-0'>
            <Card className='hover-scale px-2 px-md-0 mb-20 mb-md-0'>
              <BannerIcon className='ml-auto mr-n7 banner' />
              <SvgBox size='80px' className='mx-auto'>
                <Icon4 />
              </SvgBox>

              <Card.Body className='text-left'>
                <div className='mb-5 text-info text-center h3'>
                  Proprietary CAPS™ Personal Strengths Assessment
                </div>
                <Card.Text>
                  Enable you assess and understand your personal strengths:
                  <ul className='nav'>
                    <li>
                      <span className='text-primary'>&#x2713;</span>
                      <span className='pl-3'>
                        Basic report: talent type(s) and characteristics
                      </span>
                    </li>
                    <li>
                      <span className='text-primary'>&#x2713;</span>
                      <span className='pl-3'>
                        Premium report: work advantages, developable job roles,
                        career direction, etc.
                      </span>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='hover-scale px-2 px-md-0 mb-20 mb-md-0'>
              <BannerIcon className='ml-auto mr-n7 banner' />
              <SvgBox size='80px' className='mx-auto'>
                <Icon5 />
              </SvgBox>

              <Card.Body className='text-left'>
                <div className='mb-5 text-info text-center h3'>
                  Mock Interview Practice + Review By Professional Evaluators
                </div>
                <Card.Text>
                  <ul className='nav'>
                    <li>
                      <span className='text-primary'>&#x2713;</span>
                      <span className='pl-3'>
                        Sharpen your skills through mock interview practice
                      </span>
                    </li>
                    <li>
                      <span className='text-primary'>&#x2713;</span>
                      <span className='pl-3'>
                        {' '}
                        Improve your mock interview performance through
                        <ul className='nav pl-5'>
                          <li>- Review by our professional evaluators</li>
                          <li>
                            - Personal report: highlights areas for your
                            improvement
                          </li>
                        </ul>
                      </span>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className='hover-scale px-2 px-md-0 mb-20 mb-md-0'>
              <BannerIcon className='ml-auto mr-n7 banner' />
              <SvgBox size='80px' className='mx-auto'>
                <Icon6 />
              </SvgBox>

              <Card.Body className='text-left'>
                <div className='mb-5 text-info text-center h3'>
                  Proprietary CAPS™ Personal Strengths Assessment
                </div>
                <Card.Text>
                  <ul className='nav'>
                    <li>
                      <span className='text-primary'>&#x2713;</span>
                      <span className='pl-3'>
                        Most common interview questions for local and overseas
                        study
                      </span>
                    </li>
                    <li>
                      <span className='text-primary'>&#x2713;</span>
                      <span className='pl-3'>
                        How to manifest your strengths in order to stand out
                        from others
                      </span>
                    </li>
                    <li>
                      <span className='text-primary'>&#x2713;</span>
                      <span className='pl-3'>
                        Proven techniques and tips, do’s & don’ts
                      </span>
                    </li>
                    <li>
                      <span className='text-primary'>&#x2713;</span>
                      <span className='pl-3'>
                        Practical guidance to get you well
                        <ul className='nav pl-5'>
                          <li>- prepared for mock interview</li>
                        </ul>
                      </span>
                    </li>
                    <li>
                      <span className='text-primary'>&#x2713;</span>
                      <span className='pl-3'>Inspiring examples</span>
                    </li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </Container>
      </section>
      <section id='Section-3' className='Section-4 py-25'>
        <Container>
          <div className='text-center mb-lg-30'>
            <h1 className='display-4 text-uppercase font-weight-boldest'>
              PLATFORM FEATURES
            </h1>
            <h5 className='text-primary'>
              Road to Success in Admissions Interview
            </h5>
          </div>
          <Row className='justify-content-center'>
            <Col
              lg={4}
              className='d-none d-lg-flex flex-column position-relative'
              style={{ zIndex: 3 }}
            >
              <div className='row mx-0 mb-5 flex-column flex-lg-row align-items-center justify-content-center hover-opacity-92'>
                <span className='col-lg-8 ms-3 text-center text-lg-right'>
                  <h4 className='mb-2 font-weight-bolder'>
                    Mock Interview Practice
                  </h4>
                </span>
                <span className='order-first order-lg-last mb-6 mb-lg-0 w-60px h-60px d-flex align-items-center justify-content-center bg-white border border-2 border-warning rounded-circle'>
                  <i className='fa-3x text-warning position-relative'>
                    <img
                      src={Icon7}
                      alt='icon'
                      className='zindex-5 position-relative mr-3'
                    />
                    <img
                      src={Line1}
                      alt='line'
                      className='position-absolute d-none d-lg-block'
                      style={{ width: 200, top: '50%', left: 85, zIndex: 3 }}
                    />
                  </i>
                </span>
              </div>

              <div className='row mx-0 mb-5 mt-auto flex-column flex-lg-row align-items-center justify-content-center hover-opacity-92'>
                <span className='col-lg-8 ms-3 text-center text-lg-right'>
                  <h4 className='mb-2 font-weight-bolder'>
                    CAPS™ Personal <br /> Strengths Assessment
                  </h4>
                </span>
                <span className='order-first order-lg-last mb-3 mb-lg-0 w-60px h-60px d-flex align-items-center justify-content-center bg-white border border-2 border-warning rounded-circle'>
                  <i className='fa-3x text-warning position-relative'>
                    <img
                      src={Icon8}
                      alt='icon'
                      className='zindex-5 position-relative'
                    />
                    <img
                      src={Line2}
                      alt='line'
                      className='position-absolute d-none d-lg-block'
                      style={{
                        width: 150,
                        top: '-347%',
                        left: -111,
                        zIndex: -1,
                      }}
                    />
                  </i>
                </span>
              </div>
            </Col>
            <Col lg={4} xl={3} className='text-center my-4 my-lg-0'>
              <div className='d-lg-none'>
                <img className='w-100 h-100' src={Image2Png} alt='hero' />
              </div>
              <div
                className='d-none d-lg-block h-500px'
                style={{ transform: 'scale(3)' }}
              >
                <img className='w-100 h-100' src={Image2} alt='hero' />
              </div>
            </Col>
            <Col
              lg={4}
              className='d-none d-lg-flex flex-column position-relative'
              style={{ zIndex: 3 }}
            >
              <div className='row mx-0 mb-5 flex-column flex-lg-row align-items-center justify-content-center hover-opacity-92'>
                <span className='mb-3 mb-lg-0 w-60px h-60px d-flex align-items-center justify-content-center bg-white border border-2 border-warning rounded-circle'>
                  <i className='fa-3x text-warning position-relative'>
                    <img
                      src={Icon10}
                      alt='icon'
                      className='zindex-5 position-relative'
                    />
                    <img
                      src={Line4}
                      alt='line'
                      className='position-absolute d-none d-lg-block'
                      style={{ width: 180, top: '51%', left: -114, zIndex: 3 }}
                    />
                  </i>
                </span>
                <span className='col-lg-8 ms-3 text-center text-lg-left'>
                  <h4 className='mb-2 font-weight-bolder'>
                    Review By Professional Evaluators
                  </h4>
                </span>
              </div>

              <div className='row mx-0 mb-5 mt-auto flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center hover-opacity-92'>
                <span className='mb-3 mb-lg-0 w-60px h-60px d-flex align-items-center justify-content-center bg-white border border-2 border-warning rounded-circle'>
                  <i className='fa-3x text-warning position-relative d-flex align-items-center'>
                    <img
                      src={Icon9}
                      alt='icon'
                      className='zindex-5 position-relative'
                    />
                    <img
                      src={Line3}
                      alt='line'
                      className='position-absolute d-none d-lg-block'
                      style={{
                        width: 85,
                        top: '-283%',
                        left: -6,
                        zIndex: 3,
                      }}
                    />
                  </i>
                </span>
                <span className='col-lg-8 ms-3 text-center text-lg-left'>
                  <h4 className='mb-2 font-weight-bolder'>
                    Coaching Video Series: Proven Techniques & Tips for
                    Admissions Interview
                  </h4>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section  className='Section-5 bg-white py-25'>
        <Container>
        <div className='text-center mb-20'>
            <div className='mb-4 row mx-0 align-items-baseline justify-content-center'>
              <h1 className='display-4 text-uppercase font-weight-boldest mb-0 mr-md-3'>
              MANAGEMENT TEAM BEHIND
              </h1>
              <img src={Logo} alt='logo' className='order-first order-md-last mb-5 mb-md-0' />
            </div>
            <h5 className='text-primary'>
            From Across Different Fields With a Strong HR / Training / Talent Development Background
            </h5>
          </div>
          <Row className='row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5'>
            {OurTeam.map((value) => (
              <Col className='mb-15 mb-xl-0'>
                <div className='text-center'>
                  <span
                    className='d-flex w-150px h-150px rounded-circle justify-content-center align-items-end mx-auto mb-3'
                    style={{ backgroundColor: '#FFEEDD' }}
                  >
                    <img
                      className='h-150px w-150px rounded-pill'
                      src={value.face}
                      alt={value.name}
                    />
                  </span>
                  <h5 className='font-weight-bolder mb-0 text-capitalize text-secondary'>
                    {value.name}
                  </h5>
                  <div className='font-size-sm'>
                    <ul className='text-left mt-3'>{value.exp}</ul>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section id='Section-4' className='Section-6 py-25'>
        <Container>
         <PlanSection/>
        </Container>
      </section>
      <section id='Section-5' className='Section-7 py-25'>
        <Container>
          <Row className='justify-content-between'>
            <Col md={6} lg={7}>
              <h1 className='display-4 text-uppercase font-weight-bolder'>About Us</h1>
              <p className='font-size-h6 text-black-50'>
              The CareerFit DESIGN digital learning and development platform is co-created by:
              </p>
              <div className='mt-8 mb-3'>
                <span>
                  <img className='h-60px' src={Logo1} alt='Brand-Logo' />
                </span>
              </div>
              <h6 className='font-weight-bolder text-capitalize mb-3'>
              Champ Genesis Limited 
              </h6>

              <div className='text-black-50'>
                <p className='mb-7'>
                Specialized in digital transformation consultation and backed by a strong network of top-notched professionals from different technology arenas such as web technologies, cloud computing, AI, big data & analytics etc. To accelerate the digital transformation momentum in the business world, Champ Genesis Limited has worked hand in hand with corporates from across various industries to digitalize their business models so as to empower them to drive a more sustainable business growth in the digital era. 
                </p>
                <p className='mb-7'>
                Through our interactive CareerFit DESIGN digital learning and development platform, Champ Genesis Limited has adopted breakthrough digital innovations and played a pivotal role in the digitalization of a successful learning and development program designed by I Can Fly Limited, thereby creating a more scalable business model in the digital space. 
                </p>
                
              <div className='mt-12 mb-7'>
                <span>
                  <img className='h-80px' src={Logo3} alt='Brand-Logo' />
                </span>
              </div>
                <p className='mb-7 '>
                <span className='font-weight-bolder text-capitalize h6'>I Can Fly Development Limited</span> (Accredited Social Enterprise with SEE Mark) 
Expertise in Learning & Development (L&D) to empower youth in career planning and business executives of corporations in strengthening their communication & leadership skills. 
                </p>
                <p className='mb-7'>
                Since 2015, “I Can Fly” has been providing practical workshops to DSE students on admissions interview skills for Universities and Institutes of Higher Education, with over 90% rating for these workshops, including some positive feedback about the program which has not only sharpened their interview skills, but also boosted their self-confidence level.
                </p>
                <h5 className='font-weight-bolder text-capitalize mb-7'>
                  
Practice Perfect With Professionals
                </h5>

                <p className='mb-7'>
                Should you have any enquiries, please contact us by filling in the form. Thank you
                </p>
                
              </div>

         
            </Col>
            <Col className='mt-10 mt-md-0'>
              <div className='p-10 shadow-sm rounded-lg bg-white'>
                <h2 className='text-uppercase font-weight-bolder mb-7'>
                  Get in Touch!
                </h2>
                <form>
                  <TextField type='mail' label='Email' margin='normal' />
                  <TextField type='text' label='Subject' margin='normal' />
                  <TextField
                    label='Write Your Message Here...'
                    multiline
                    rowsMax='8'
                    margin='normal'
                  />
                  <Button
                    type='submit'
                    className='MuiButton-contained bg-warning text-white w-100 py-4 h6 mt-10'
                  >
                    Submit Now
                  </Button>
                </form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
