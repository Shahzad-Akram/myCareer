import React, { useState, useEffect } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Button, Row, Col } from "react-bootstrap";
import Swal from "sweetalert2";

// Components

// images
import ImageTwo from "../../assets/images/images/videoTwo.png";
import face2 from "../../assets/images/faces/face2.svg";
import { TextField } from "@material-ui/core";

import { useSelector } from "react-redux";
import axios from "axios";

import {
  RecordWebcam,
  useRecordWebcam,
  CAMERA_STATUS,
} from "react-record-webcam";
import type { WebcamRenderProps, RecordWebcamHook } from "react-record-webcam";

function getStepsOne() {
  return ["Step 1", "Step 2", "Step 3", "Step 4"];
}

export const RecordInterview = () => {
  const [loading, setLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const recordWebcam: RecordWebcamHook = useRecordWebcam();

  const [state, setState] = React.useState({
    checkedA: false,
  });

  const getRecordingFileHooks = async () => {
    setLoading(true);
    const blob = await recordWebcam.getRecording();
    const file = new File([blob], "test.mp4");
    const formdata = new FormData();
    formdata.append("videoUrl", file);
    formdata.append("title", "first video");
    formdata.append("userId", user._id);

    axios
      .post(
        "https://presentation-learning-platform.herokuapp.com/api/submission/add",
        formdata
      )
      .then((res) => {
        setLoading(false);
        Swal.fire("Submitted Successfully!", res, "success");
      })
      .catch((err) => {
        setLoading(false);
        Swal.fire(
          "Something Went Wrong!",
          err.response.data.message,
          "warning"
        );
      });
  };

  const getRecordingFileRenderProp = async (blob: Blob | undefined) => {
    console.log({ blob });
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const [activeStepOne, setActiveStepOne] = useState(0);
  const stepsOne = getStepsOne();

  useEffect(() => {
    recordWebcam.open();
  }, []);

  return (
    <section
      className="container pl-lg-29"
      style={{
        paddingTop: 70,
      }}
    >
      <div>
        <Stepper
          className="rounded-lg flex-column align-items-center flex-lg-row"
          activeStep={activeStepOne}
          alternativeLabel
        >
          {stepsOne.map((label) => (
            <Step key={label} className="mb-10 mb-lg-0">
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div className="mt-10">
          <Row>
            <Col>
              {/* <img
                className="rounded-lg"
                height="100%"
                width="100%"
                src={ImageTwo}
                alt="pick"
              /> */}
              <div>
                <p>Camera status: {recordWebcam.status}</p>
                <video
                  ref={recordWebcam.webcamRef}
                  style={{
                    display: `${
                      recordWebcam.status === CAMERA_STATUS.OPEN ||
                      recordWebcam.status === CAMERA_STATUS.RECORDING
                        ? "block"
                        : "none"
                    }`,
                  }}
                  autoPlay
                  muted
                />
                <video
                  ref={recordWebcam.previewRef}
                  style={{
                    display: `${
                      recordWebcam.status === CAMERA_STATUS.PREVIEW
                        ? "block"
                        : "none"
                    }`,
                  }}
                  autoPlay
                  muted
                  loop
                />
                <div className="m-3">
                  {/* <Button
                    disabled={
                      recordWebcam.status === CAMERA_STATUS.OPEN ||
                      recordWebcam.status === CAMERA_STATUS.RECORDING ||
                      recordWebcam.status === CAMERA_STATUS.PREVIEW
                    }
                    onClick={recordWebcam.open}
                  >
                    Open camera
                  </Button> */}
                  {/* <Button
                    disabled={
                      recordWebcam.status === CAMERA_STATUS.CLOSED ||
                      recordWebcam.status === CAMERA_STATUS.PREVIEW
                    }
                    onClick={recordWebcam.close}
                  >
                    Close camera
                  </Button> */}
                  <Button
                    disabled={
                      recordWebcam.status === CAMERA_STATUS.CLOSED ||
                      recordWebcam.status === CAMERA_STATUS.RECORDING ||
                      recordWebcam.status === CAMERA_STATUS.PREVIEW
                    }
                    onClick={recordWebcam.start}
                  >
                    Start recording
                  </Button>
                  <Button
                    disabled={recordWebcam.status !== CAMERA_STATUS.RECORDING}
                    onClick={recordWebcam.stop}
                  >
                    Stop recording
                  </Button>
                  <Button
                    disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
                    onClick={recordWebcam.retake}
                  >
                    Retake
                  </Button>
                  <Button
                    disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
                    onClick={recordWebcam.download}
                  >
                    Download
                  </Button>

                  <Button
                    disabled={recordWebcam.status !== CAMERA_STATUS.PREVIEW}
                    onClick={getRecordingFileHooks}
                  >
                    Submit
                    {loading && (
                      <span className="m-3 spinner spinner-white"></span>
                    )}
                  </Button>
                </div>
              </div>

              <img
                className="h-100px w-150px object-cover position-absolute left-0 top-0 rounded-lg shadow-sm ml-10 mt-10"
                src="https://source.unsplash.com/random"
                alt="user"
              />
            </Col>
            <Col lg={4} className="d-flex flex-column">
              <h5 className="font-weight-bold mt-5 mb-8">
                Refine your skill by more practice
              </h5>
              <div className="flex-grow-1 bg-white rounded-lg d-flex flex-column">
                <header className="pt-3 px-5">
                  <div className="d-flex">
                    <span className="svg-icon menu-icon">
                      <span
                        className="d-flex w-40px h-40px rounded-circle justify-content-center align-items-end mx-auto mb-3"
                        style={{ backgroundColor: "#F3F6F9" }}
                      >
                        <img
                          className="h-30px w-30px rounded-pill"
                          src={face2}
                          alt="user"
                        />
                      </span>
                    </span>
                    <span className="menu-text">
                      <div className="ml-3">
                        <b className="text-dark">Alison To</b>
                        <div className="text-black-50">Form 6 Student</div>
                      </div>
                    </span>
                  </div>
                </header>
                <section className="border-top border-bottom py-3 overflow-auto h-400px">
                  <div>
                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-right-xl rounded-top-right-xl rounded-top-xl badge badge-light">
                      Hi Alison, welcome to the practice
                    </div>

                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-right-xl rounded-top-right-xl rounded-top-xl badge badge-light">
                      Hi Alison, welcome to the practice
                    </div>

                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-right-xl rounded-top-right-xl rounded-top-xl badge badge-light">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nisi laudantium pariatur minus, corporis soluta non ipsa
                      eius? Porro, quasi unde.
                    </div>
                    <small className="text-black-50 mx-5">11:50</small>
                  </div>

                  <div className="text-right mt-6">
                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success">
                      Hi Alison, welcome to the practice
                    </div>

                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success">
                      Hi Alison, welcome to the practice
                    </div>

                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nisi laudantium pariatur minus, corporis soluta non ipsa
                      eius? Porro, quasi unde.
                    </div>
                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success">
                      Hi Alison, welcome to the practice
                    </div>

                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success">
                      Hi Alison, welcome to the practice
                    </div>

                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nisi laudantium pariatur minus, corporis soluta non ipsa
                      eius? Porro, quasi unde.
                    </div>
                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success">
                      Hi Alison, welcome to the practice
                    </div>

                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success">
                      Hi Alison, welcome to the practice
                    </div>

                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nisi laudantium pariatur minus, corporis soluta non ipsa
                      eius? Porro, quasi unde.
                    </div>
                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success">
                      Hi Alison, welcome to the practice
                    </div>

                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success">
                      Hi Alison, welcome to the practice
                    </div>

                    <div className="text-wrap text-left mx-5 py-3 mb-3 rounded-bottom-left-xl rounded-top-left-xl rounded-top-xl badge badge-success">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nisi laudantium pariatur minus, corporis soluta non ipsa
                      eius? Porro, quasi unde.
                    </div>
                    <small className="text-black-50 mx-5">11:50</small>
                  </div>
                </section>
                <footer className="pb-3 px-5">
                  <div>
                    <TextField
                      className="mt-0"
                      label="Write Your Message Here..."
                      multiline
                      rowsMax="8"
                      margin="normal"
                    />
                  </div>
                  <div>
                    <button
                      type="button"
                      className="btn text-hover-success p-0 mr-2"
                    >
                      <i className="fa fa-upload font-size-h6 p-0"></i>
                    </button>
                    <button
                      type="button"
                      className="btn text-hover-success p-0 mr-2"
                    >
                      <i className="fa fa-image font-size-h6 p-0"></i>
                    </button>
                    <button
                      type="button"
                      className="btn text-hover-success p-0 mr-2"
                    >
                      <i className="fa fa-smile font-size-h6 p-0"></i>
                    </button>
                  </div>
                </footer>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};
