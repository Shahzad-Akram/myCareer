// rafc
import React from "react";
import { Button, Container, TextField } from "@material-ui/core";
import { Row, Col, Card, CardColumns, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
// import video from '../assets/header-muted.mp4'

// images
import Logo1 from "../../assets/images/brands/Logo-1.svg";
import Logo3 from "../../assets/images/brands/Logo-3.svg";
import Icon4 from "../../assets/images/icons/icon-4.svg";
import Icon5 from "../../assets/images/icons/icon-5.svg";
import Icon6 from "../../assets/images/icons/icon-6.svg";
import Icon7 from "../../assets/images/icons/icon-7.svg";
import Icon8 from "../../assets/images/icons/icon-8.svg";
import Icon9 from "../../assets/images/icons/icon-9.svg";
import Icon10 from "../../assets/images/icons/icon-10.svg";
import Image1 from "../../assets/images/images/image-1.svg";
import Image2 from "../../assets/images/images/image-2.svg";
import Line1 from "../../assets/images/images/line-1.svg";
import Line2 from "../../assets/images/images/line-2.svg";
import Line3 from "../../assets/images/images/line-3.svg";
import Line4 from "../../assets/images/images/line-4.svg";
import face1 from "../../assets/images/faces/face1.svg";
import face2 from "../../assets/images/faces/face2.svg";
import face3 from "../../assets/images/faces/face3.svg";
import face4 from "../../assets/images/faces/face4.svg";
import face5 from "../../assets/images/faces/face5.svg";
import plan1 from "../../assets/images/plan/plan-1.svg";
import plan2 from "../../assets/images/plan/plan-2.png";
import plan3 from "../../assets/images/plan/plan-3.svg";
import ImagePlay from "../../assets/images/images/play-button.svg";

const OurTeam = [
  {
    face: face1,
    name: "Amy",
    work: "UX/UI Designer",
    text: ` Lorem ipsum dolor sit amet, consetet ur sadipscing elitr,
sed diam nonumy eirmod.`,
  },
  {
    face: face2,
    name: "Ruby",
    work: "UX/UI Designer",
    text: ` Lorem ipsum dolor sit amet, consetet ur sadipscing elitr,
sed diam nonumy eirmod.`,
  },
  {
    face: face3,
    name: "Ross",
    work: "UX/UI Designer",
    text: ` Lorem ipsum dolor sit amet, consetet ur sadipscing elitr,
sed diam nonumy eirmod.`,
  },
  {
    face: face4,
    name: "Heywood",
    work: "UX/UI Designer",
    text: ` Lorem ipsum dolor sit amet, consetet ur sadipscing elitr,
sed diam nonumy eirmod.`,
  },
  {
    face: face5,
    name: "Jack",
    work: "UX/UI Designer",
    text: ` Lorem ipsum dolor sit amet, consetet ur sadipscing elitr,
sed diam nonumy eirmod.`,
  },
];

const VideoWorkaround = ({ src }) => (
  <div
    className="mx-auto bg-primary px-3 pt-3 pb-2 rounded-top-left-xl rounded-top-right-xl"
    style={{ width: "90%" }}
    dangerouslySetInnerHTML={{
      __html: `
      <video
        controls
        autoplay
        playsinline
        src="${src}"
        class='video h-100 w-100 rounded-top-left-xl rounded-top-right-xl'
        type='video/mp4'
      />
    `,
    }}
  />
);

export const HomePage = () => {
  return (
    <>
      <section id="Section-1" className="Section-1 py-30">
        <Container fixed className="h-100">
          <Row className="h-100 mt-5 align-items-center">
            <Col xl={5} className="d-flex flex-column mt-4">
              <h4 className="text-primary text-capitalize font-weight-bold">
                Shape your interviewing skills to a New height
              </h4>
              <h1 className="display-4 text-primary text-uppercase font-weight-bold">
                Your personal coach
              </h1>

              <div className="d-flex flex-wrap align-items-end text-uppercase font-weight-bold d-flex pl-2">
                <span>Programmer available for:</span>
                <div className="mt-1">
                  <button className="btn btn-success w-50px py-1 text-uppercase mx-2">
                    DSE
                  </button>
                  <button className="btn btn-bg-info bg-hover-info-o-4 text-white w-100px  py-1 text-uppercase">
                    Overseas
                  </button>
                </div>
              </div>

              <div className="mt-7">
                <span className="text-danger font-weight-boldest mr-1">
                  100% Suitable for Hong Kong,
                </span>
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Pariatur autem numquam nihil tempora consequuntur nisi quos
                  dolore? Natus, aliquid porro?
                </span>
              </div>

              <div className="mt-10">
                <Link
                  to="/auth/login"
                  className="btn btn-warning text-white text-hover-white btn-lg"
                >
                  Get Start Free
                </Link>
              </div>

              <div className="d-flex flex-wrap my-20 shadow-sm rounded-lg">
                <div className="col-md-6 py-4 border-right">
                  <h6 className="font-size-base mb-4">Organised by</h6>
                  <div>
                    <span>
                      <img src={Logo1} alt="Brand-Logo" />
                    </span>
                  </div>
                </div>
                <div className="col-md-6 py-4">
                  <h6 className="font-size-base mb-4">
                    Programme developed by
                  </h6>
                  <div>
                    <span className="mr-5">
                      <img src={Logo3} alt="Brand-Logo" />
                    </span>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={7} className="order-first order-xl-last my-10 my-md-0">
              <div className="text-center">
                <span className="mt-1 h-4px w-4px bg-white position-absolute rounded-circle"></span>
                <VideoWorkaround src="https://www.radiantmediaplayer.com/media/big-buck-bunny-360p.mp4" />
                <span
                  className="d-flex h-15px bg-white w-100 rounded-bottom-xl"
                  style={{
                    boxShadow: "0 10px 5px #ddd",
                    marginTop: "-0.85rem",
                  }}
                >
                  <span className="bg-dark h-5px w-80px mx-auto mt-n1 rounded"></span>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="Section-2"></section>
      <section id="Section-2" className="Section-3 bg-white-o-100 py-25">
        <Container>
          <div className="text-center mb-10">
            <h1 className="text-uppercase font-weight-boldest">
              Why Careerfit
            </h1>
            <h6 className="text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h6>
          </div>

          <CardColumns>
            <Card className="hover-scale hover-opacity-70">
              <Card.Img
                variant="top"
                src={Icon4}
                height={80}
                className="mt-8"
              />
              <Card.Body className="text-center">
                <Card.Title className="mb-5">Uniqueness #1</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="hover-scale hover-opacity-70">
              <Card.Img
                variant="top"
                src={Icon5}
                height={80}
                className="mt-8"
              />
              <Card.Body className="text-center">
                <Card.Title className="mb-5">Uniqueness #2</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card className="hover-scale hover-opacity-70">
              <Card.Img
                variant="top"
                src={Icon6}
                height={80}
                className="mt-8"
              />
              <Card.Body className="text-center">
                <Card.Title className="mb-5">Uniqueness #3</Card.Title>
                <Card.Text>
                  This is a longer card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardColumns>
        </Container>
      </section>
      <section id="Section-3" className="Section-3 bg-white py-25">
        <Container>
          <div className="text-center mb-20">
            <h1 className="text-uppercase font-weight-boldest">Testimonials</h1>
            <h6 className="text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h6>
          </div>
          <Carousel>
            <Carousel.Item>
              <Row>
                <Col lg={6}>
                  <Link className="play-link d-flex flex-column justify-content-center">
                    <img height={150} src={Image1} alt="pic" />
                    <img
                      height={70}
                      src={ImagePlay}
                      alt="play button"
                      style={{ marginTop: "-35px" }}
                    />
                  </Link>
                </Col>
                <Col
                  md={6}
                  lg={5}
                  className="mx-auto mt-10 mt-lg-0 text-center text-lg-left"
                >
                  <h6 className="text-primary mb-10"> 1/3</h6>
                  <h3>Chan Tai Man</h3>
                  <h6>2019 Form 7 Student, Successfully candidate to HKU</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum numquam culpa nisi dolor odit nesciunt vero harum
                    vitae sint eos minus at eveniet, quia non modi facilis
                    explicabo! Fugit, sed.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col lg={6}>
                  <Link className="play-link d-flex flex-column justify-content-center">
                    <img height={150} src={Image1} alt="pic" />
                    <img
                      height={70}
                      src={ImagePlay}
                      alt="play button"
                      style={{ marginTop: "-35px" }}
                    />
                  </Link>
                </Col>
                <Col
                  md={6}
                  lg={5}
                  className="mx-auto mt-10 mt-lg-0 text-center text-lg-left"
                >
                  <h6 className="text-primary mb-10"> 2/3</h6>
                  <h3>Chan Tai Man</h3>
                  <h6>2019 Form 7 Student, Successfully candidate to HKU</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum numquam culpa nisi dolor odit nesciunt vero harum
                    vitae sint eos minus at eveniet, quia non modi facilis
                    explicabo! Fugit, sed.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
            <Carousel.Item>
              <Row>
                <Col lg={6}>
                  <Link className="play-link d-flex flex-column justify-content-center">
                    <img height={150} src={Image1} alt="pic" />
                    <img
                      height={70}
                      src={ImagePlay}
                      alt="play button"
                      style={{ marginTop: "-35px" }}
                    />
                  </Link>
                </Col>
                <Col
                  md={6}
                  lg={5}
                  className="mx-auto mt-10 mt-lg-0 text-center text-lg-left"
                >
                  <h6 className="text-primary mb-10"> 3/3</h6>
                  <h3>Chan Tai Man</h3>
                  <h6>2019 Form 7 Student, Successfully candidate to HKU</h6>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsum numquam culpa nisi dolor odit nesciunt vero harum
                    vitae sint eos minus at eveniet, quia non modi facilis
                    explicabo! Fugit, sed.
                  </p>
                </Col>
              </Row>
            </Carousel.Item>
          </Carousel>
        </Container>
      </section>
      <section id="Section-4" className="Section-4 py-25">
        <Container>
          <div className="text-center mb-20">
            <h1 className="text-uppercase font-weight-boldest">
              Programme Features
            </h1>
            <h6 className="text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h6>
          </div>
          <Row className="justify-content-center">
            <Col lg={4} className="d-flex flex-column">
              <div className="row mx-0 mb-5 flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center hover-scale hover-opacity-92">
                <span className="col-lg-8 ms-3 text-center text-lg-left">
                  <h6 className="mb-2">Feature #1</h6>
                  <p className="font-weight-lighter opacity-80">
                    The ultimate Bootstrap & React 16 admin theme framework for
                    next generation web apps.
                  </p>
                </span>
                <span className="order-first order-lg-last mb-3 mb-lg-0 w-60px h-60px d-flex align-items-center justify-content-center bg-white border border-2 border-warning rounded-circle">
                  <i className="fa-3x text-warning position-relative">
                    <img src={Icon7} alt="icon" />
                    <img
                      src={Line1}
                      alt="line"
                      className="position-absolute d-none d-lg-block"
                      style={{ width: 150, top: "50%", left: 43, zIndex: 3 }}
                    />
                  </i>
                </span>
              </div>

              <div className="row mx-0 mb-5 mt-auto flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center hover-scale hover-opacity-92">
                <span className="col-lg-8 ms-3 text-center text-lg-left">
                  <h6 className="mb-2">Feature #3</h6>
                  <p className="font-weight-lighter opacity-80">
                    The ultimate Bootstrap & React 16 admin theme framework for
                    next generation web apps.
                  </p>
                </span>
                <span className="order-first order-lg-last mb-3 mb-lg-0 w-60px h-60px d-flex align-items-center justify-content-center bg-white border border-2 border-warning rounded-circle">
                  <i className="fa-3x text-warning position-relative">
                    <img src={Icon8} alt="icon" />
                    <img
                      src={Line2}
                      alt="line"
                      className="position-absolute d-none d-lg-block"
                      style={{ width: 150, top: "-22%", left: 43, zIndex: 3 }}
                    />
                  </i>
                </span>
              </div>
            </Col>
            <Col lg={4} xl={3} className="text-center my-4 my-lg-0">
              <img
                height={400}
                src={Image2}
                alt="play button"
                style={{ marginTop: "-35px" }}
              />
            </Col>
            <Col lg={4} className="d-flex flex-column">
              <div className="row mx-0 mb-5 flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center hover-scale hover-opacity-92">
                <span className="mb-3 mb-lg-0 w-60px h-60px d-flex align-items-center justify-content-center bg-white border border-2 border-warning rounded-circle">
                  <i className="fa-3x text-warning position-relative">
                    <img src={Icon10} alt="icon" />
                    <img
                      src={Line4}
                      alt="line"
                      className="position-absolute d-none d-lg-block"
                      style={{ width: 150, top: "-20%", left: -162, zIndex: 3 }}
                    />
                  </i>
                </span>
                <span className="col-lg-8 ms-3 text-center text-lg-left">
                  <h6 className="mb-2">Feature #2</h6>
                  <p className="font-weight-lighter opacity-80">
                    The ultimate Bootstrap & React 16 admin theme framework for
                    next generation web apps.
                  </p>
                </span>
              </div>

              <div className="row mx-0 mb-5 mt-auto flex-column flex-lg-row align-items-center align-items-lg-start justify-content-center hover-scale hover-opacity-92">
                <span className="mb-3 mb-lg-0 w-60px h-60px d-flex align-items-center justify-content-center bg-white border border-2 border-warning rounded-circle">
                  <i className="fa-3x text-warning position-relative">
                    <img src={Icon9} alt="icon" />
                    <img
                      src={Line3}
                      alt="line"
                      className="position-absolute d-none d-lg-block"
                      style={{
                        width: 150,
                        top: "-66%",
                        left: -166,
                        zIndex: 3,
                      }}
                    />
                  </i>
                </span>
                <span className="col-lg-8 ms-3 text-center text-lg-left">
                  <h6 className="mb-2">Feature #4</h6>
                  <p className="font-weight-lighter opacity-80">
                    The ultimate Bootstrap & React 16 admin theme framework for
                    next generation web apps.
                  </p>
                </span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="Section-5" className="Section-5 bg-white py-25">
        <Container>
          <div className="text-center mb-20">
            <h1 className="text-uppercase font-weight-boldest">
              Our Professional Trainer Team
            </h1>
            <h6 className="text-black-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h6>
          </div>
          <Row className="row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5">
            {OurTeam.map((value) => (
              <Col className="mb-15 mb-xl-0">
                <div className="text-center hover-scale hover-opacity-92">
                  <span
                    className="d-flex w-150px h-150px rounded-circle justify-content-center align-items-end mx-auto mb-3"
                    style={{ backgroundColor: "#FFEEDD" }}
                  >
                    <img
                      className="h-120px w-120px rounded-pill"
                      src={value.face}
                      alt={value.name}
                    />
                  </span>
                  <h6 className="font-weight-bold mb-0 text-uppercase">
                    {value.name}
                  </h6>
                  <div className="font-size-sm">{value.work}</div>
                  <p className="font-size-sm text-black-50">{value.text}</p>
                  <div>
                    <a href="/">
                      <i className="fab fa-facebook-f text-warning"></i>
                    </a>
                    <a className="mx-4" href="/">
                      <i className="fab fa-linkedin-in text-warning"></i>
                    </a>
                    <a href="/">
                      <i className="fab fa-twitter text-warning"></i>
                    </a>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section id="Section-6" className="Section-6 py-25">
        <Container>
          <div className="text-center mb-20 text-white">
            <h1 className="text-uppercase font-weight-boldest">
              Choose Your Programme Plan
            </h1>
            <h6 className="text-white-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </h6>
          </div>
          <Row className="row-cols-1 row-cols-lg-3 text-center">
            <Col>
              <Link className="hover-opacity-93">
                <img
                  className="hover-scale"
                  height={500}
                  src={plan1}
                  alt="Plan"
                />
              </Link>
            </Col>
            <Col className="my-12 my-lg-0">
              <Link className="hover-opacity-93">
                <img
                  className="hover-scale"
                  height={500}
                  src={plan2}
                  alt="Plan"
                />
              </Link>
            </Col>
            <Col>
              <Link className="hover-opacity-93">
                <img
                  className="hover-scale"
                  height={500}
                  src={plan3}
                  alt="Plan"
                />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section id="Section-7" className="Section-7 py-25">
        <Container>
          <Row className="justify-content-between">
            <Col md={5}>
              <h1 className="font-weight-bolder">About Us</h1>
              <p className="font-size-h6 text-black-50">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi natus, fugit corporis nihil nostrum qui doloremque
                nisi tempore libero iste est officiis at molestiae consectetur
                sit amet iure incidunt alias?
              </p>

              <a
                href="tel:852301030100"
                className="btn bg-primary text-white rounded-pill d-flex align-items-center w-180px p-1"
              >
                <span className="bg-white h-30px w-30px rounded-circle d-flex align-items-center justify-content-center mr-2">
                  <i
                    className="fa fa-phone-alt text-primary small"
                    style={{ fontSize: "0.9rem", paddingRight: 0 }}
                  ></i>
                </span>
                <span>(+852) 301030100</span>
              </a>
              <div className="mt-10">
                <span>
                  <img src={Logo3} alt="Brand-Logo" />
                </span>
              </div>
            </Col>
            <Col md={6} className="mt-10 mt-md-0">
              <div className="p-10 shadow-sm rounded-lg bg-white">
                <h2 className="text-uppercase font-weight-bolder mb-7">
                  Get in Touch!
                </h2>
                <form>
                  <TextField type="mail" label="Email" margin="normal" />
                  <TextField type="text" label="Subject" margin="normal" />
                  <TextField
                    label="Write Your Message Here..."
                    multiline
                    rowsMax="8"
                    margin="normal"
                  />
                  <Button
                    type="submit"
                    className="MuiButton-contained bg-warning text-white w-100 py-4 h6 mt-10"
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
