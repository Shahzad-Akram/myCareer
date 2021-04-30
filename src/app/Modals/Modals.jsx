import React, { useState } from "react";
import { Modal, Row } from "react-bootstrap";
import ImageOne from "../../assets/images/images/alan-heart.svg";
import ImagePlay from "../../assets/images/images/play-button.svg";
import ImageTwo from "../../assets/images/images/videoOne.svg";
import ImageThree from "../../assets/images/images/videoTwo.png";
import ReactPlayer from "react-player";

export const SignUpModal = ({ setEmail, handleSendEmail }) => {
  const [modalOpenTwo, setModalOpenTwo] = useState(true);

  return (
    <Modal
      centered
      size="xl"
      show={modalOpenTwo}
      onHide={() => setModalOpenTwo(false)}
    >
      <Modal.Body className="Section-1 rounded-lg">
        <div className="mb-5 text-right">
          <button
            type="button"
            onClick={() => setModalOpenTwo(false)}
            className="btn p-0"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>

        <div className="row mx-0 justify-content-between">
          <div className="col col-lg-6 col-lg-5">
            <h1 className="display-4 font-weight-bolder mb-8 text-center text-xl-left text-uppercase">
              GET YOUR BASIC <br /> REPORT FOR FREE
            </h1>
            <p>
              Thanks for showing your interest to take part in the CAPS™
              Personal Strengths Assessment! With this assessment, you can get a
              free basic report that allows you to understand your talent
              types(s) and characteristics so that you can better prepare
              yourself for the admissions interview. Sign up here to get a free
              basic report about your own personal strengths.
            </p>
          </div>
          <div className="col-12 col-lg-6 col-xl-5">
            <div className="d-flex h-150px w-150px ml-auto mb-8">
              <img className="h-100 w-100" src={ImageOne} alt="alan" />
            </div>
            <form>
              <div className="mb-8">
                <input
                  className="input-group-text form-control text-left py-8"
                  type="email"
                  placeholder="Email *"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <label class="checkbox d-flex align-items-baseline flex-shrink-0 mx-0 mb-8">
                <input type="checkbox" id="check" value="1" />
                <span></span>
                <label className="text-body ml-4" htmlFor="check">
                  I agree to the terms & conditions
                </label>
              </label>
              <div className="mb-8 text-center text-xl-left">
                <button
                  type="button"
                  className="btn btn-primary text-capitalize py-4 font-weight-boldest h5 mb-0 col"
                  onClick={(e) => handleSendEmail(e)}
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const PlanModal = () => {
  const [modalOpenThree, setModalOpenThree] = useState(true);

  return (
    <Modal
      centered
      size="xl"
      show={modalOpenThree}
      onHide={() => setModalOpenThree(false)}
    >
      <Modal.Body className="Section-1 rounded-lg">
        <div className="mb-5 text-right">
          <button
            type="button"
            onClick={() => setModalOpenThree(false)}
            className="btn p-0"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>

        <div className="row mx-0 justify-content-between">
          <div className="col col-lg-6 col-lg-5">
            <h1 className="display-4 font-weight-bolder mb-8 text-center text-xl-left text-uppercase">
              CHOOSE YOUR PLAN
            </h1>
            <p>
              Congratulation on having an understanding of your talent type(s)
              and characteristics!
            </p>
            <p>
              Yet, you need to know more about yourself, especially work
              advantages, developable job roles and career direction, and use
              these to your advantage in the admissions interview. More
              importantly, you have to sharpen your interview skills and improve
              your performance in order to stand out from others.
            </p>
            <p>
              Act now to choose a plan offered by our digital learning and
              development platform to put yourself on the road to success!
            </p>
            <div className="mt-6 mb-8 text-center text-xl-left">
              <button
                type="button"
                className="btn btn-primary text-capitalize py-4 font-weight-boldest h5 mb-0 col col-md-4 col-lg-8 col-xl-4"
              >
                Choose Now
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-xl-5 order-first order-lg-last">
            <div className="text-center mx-auto position-relative h-200px h-md-250px w-100 bg-white rounded-xl shadow d-flex align-items-center justify-content-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
                width="97%"
                height="95%"
                controls
                playing
                playIcon={
                  <button type="button" className="btn p-0">
                    <img
                      className="h-80px"
                      src={ImagePlay}
                      alt="Video Button"
                    />
                  </button>
                }
                light={ImageTwo}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export const LandingModal = () => {
  const [modalOpenFour, setModalOpenFour] = useState(true);

  return (
    <Modal
      centered
      size="xl"
      show={modalOpenFour}
      onHide={() => setModalOpenFour(false)}
    >
      <Modal.Body className="Section-1 rounded-lg">
        <div className="mb-5 text-right">
          <button
            type="button"
            onClick={() => setModalOpenFour(false)}
            className="btn p-0"
          >
            <i className="fa fa-times"></i>
          </button>
        </div>

        <div className="row mx-0 justify-content-between py-10">
          <div className="col col-xl-4">
            <h1 className="display-4 font-weight-bolder mb-8 text-center text-xl-left text-uppercase">
              Hi First Name
            </h1>
            <h5 className="font-weight-normal">
              Without further ado, please take a detailed look at your CAPSTM
              assessment premium report with video, to discover more about your
              personal strengths.
            </h5>
            <div className="mt-8 mb-8 text-center text-xl-left">
              <button
                type="button"
                className="btn btn-primary text-capitalize py-4 font-weight-boldest h5 mb-0 col col-md-8 col-lg-8 col-xl-8"
              >
                Watch Now
              </button>
            </div>
          </div>
          <div className="col-12 col-xl-7 order-first order-xl-last mb-8 mb-xl-0">
            <div className="text-center mx-auto position-relative h-200px h-md-300px w-100 bg-white rounded-xl shadow d-flex align-items-center justify-content-center">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=oUFJJNQGwhk"
                width="100%"
                height="100%"
                controls
                playing
                playIcon={
                  <button type="button" className="btn p-0">
                    <img
                      className="h-80px"
                      src={ImagePlay}
                      alt="Video Button"
                    />
                  </button>
                }
                light={ImageThree}
              />
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};
