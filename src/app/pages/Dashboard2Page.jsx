import React, { useState } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import { Modal, Row } from "react-bootstrap";
import ReactPlayer from "react-player";

// Components
import Question1 from "../CustomComponents/Question1";
import { LandingModal, PlanModal, SignUpModal } from "../Modals/Modals";
import ResultFree from "../CustomComponents/resultFree";
import { Col } from "react-bootstrap";
import { FormControlLabel, TextField, Checkbox } from "@material-ui/core";
import { useParams, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

// Images
import ImageOne from "../../assets/images/images/alan-heart.svg";
import ImagePlay from "../../assets/images/images/play-button.svg";
import ImageTwo from "../../assets/images/images/videoOne.svg";
import ImageThree from "../../assets/images/images/videoTwo.png";
import { empty } from "object-path";

function getSteps() {
  return ["1", "2", "3", "4", "5", "6", "7"];
}

function getStepsOne() {
  return ["Step 1", "Step 2", "Step 3", "Step 4"];
}

const StepperTwo = ({ activeStepOne, onClick, onBack }) => {
  return (
    <>
      <MobileStepper
        className="justify-content-center justify-content-md-start"
        variant="progress"
        steps={7}
        position="static"
        activeStep={activeStepOne}
        backButton={
          <div className="d-flex align-items-center text-black-50 mr-3">
            <span className="p-0" onClick={onBack}>
              1
            </span>
            <span>/</span>
            <span className="p-0" onClick={onClick}>
              7
            </span>
          </div>
        }
      />
    </>
  );
};

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Question1 title=" Question 1: Lorem ipsum dolor site amet" />;
    case 1:
      return <Question1 title=" Question 2: Lorem ipsum dolor site amet" />;
    case 2:
      return <Question1 title=" Question 3: Lorem ipsum dolor site amet" />;
    case 3:
      return <Question1 title=" Question 4: Lorem ipsum dolor site amet" />;
    case 4:
      return <Question1 title=" Question 5: Lorem ipsum dolor site amet" />;
    case 5:
      return <Question1 title=" Question 6: Lorem ipsum dolor site amet" />;
    case 6:
      return <Question1 title=" Question 7: Lorem ipsum dolor site amet" />;
    default:
      return "Uknown stepIndex";
  }
}

export const Dashboard2Page = () => {
  const user = useSelector((state) => state.auth.user);

  const [modalOpenTwo, setModalOpenTwo] = useState(true);
  const [modalOpenThree, setModalOpenThree] = useState(true);
  const [modalOpenFour, setModalOpenFour] = useState(true);

  const location = useLocation();

  const [show, setShow] = useState(true);
  const [email, setEmail] = useState(null);
  const [state, setState] = useState({
    checkedA: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [activeStep, setActiveStep] = useState(0);
  const [activeStepOne, setActiveStepOne] = useState(0);
  const steps = getSteps();
  const stepsOne = getStepsOne();

  function useQuery() {
    return new URLSearchParams(useLocation().search);
  }

  const query = useQuery();
  console.log(query.get("id"));

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleReset(e) {
    setActiveStep(0);
  }

  function handleSendEmail(e) {
    e.preventDefault();
    console.log(email);
    const data = {
      email: email,
      userLevel: "intermediate",
    };
    axios
      .post(
        "https://presentation-learning-platform.herokuapp.com/api/survey/add",
        data
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }

  return (
    <>
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
                <div className="small mt-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente sunt a nesciunt aspernatur nostrum eveniet.
                </div>
                <div className="text-center mt-4">
                  <span className="badge badge-light">0/4 Completed</span>
                </div>
                <div className="text-center mt-4">
                  <span className="badge badge-danger">Paid</span>
                </div>
              </Step>
            ))}
          </Stepper>
          <div>
            {location.search !== "" || user.surveyResult ? (
              <ResultFree />
            ) : activeStep === steps.length ? (
              <div>
                <SignUpModal
                  setEmail={setEmail}
                  handleSendEmail={handleSendEmail}
                />

                {/* */}
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg mt-10">
                <Typography>{getStepContent(activeStep)}</Typography>
                <div className="row justify-content-between mt-8 pt-8 border-top">
                  <div className="col-12 col-md-3">
                    <StepperTwo
                      activeStepOne={activeStep}
                      onClick={handleNext}
                      disabled={activeStep === 7}
                      onBack={handleBack}
                      disabled={activeStep === 0}
                    />
                  </div>
                  <div className="col-12 col-md-3 text-right">
                    <Button
                      className="btn-primary btn-block"
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                    >
                      {activeStep === steps.length - 1
                        ? "Finish"
                        : "Next Question"}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
