import React, { useState, useEffect } from "react";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import MobileStepper from "@material-ui/core/MobileStepper";
import { Modal, Row, Col } from "react-bootstrap";
import { FormControlLabel, TextField, Checkbox } from "@material-ui/core";
import axios from "axios";

// Components
import PresentationVideosStep1 from "../../CustomComponents/PresentationVideosStep1";
import PresentationVideosStep2 from "../../CustomComponents/PresentationVideosStep2";
import ResultFree from "../../CustomComponents/resultFree";

function getSteps() {
  return ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
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
        steps={12}
        position="static"
        activeStep={activeStepOne}
        backButton={
          <div className="d-flex align-items-center text-black-50 mr-3">
            <span className="p-0" onClick={onBack}>
              1
            </span>
            <span>/</span>
            <span className="p-0" onClick={onClick}>
              12
            </span>
          </div>
        }
      />
    </>
  );
};

export const PresentationVideos = () => {
  const [show, setShow] = useState(true);
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    checkedA: false,
  });
  const [data, setData] = useState(null);
  const [question, setQuestion] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://presentation-learning-platform.herokuapp.com/api/videoTutorial/get?skip=0&limit=10"
      )
      .then((res) => setData(res.data.videoList))
      .catch((err) => console.log(err));
    axios
      .get(
        "https://presentation-learning-platform.herokuapp.com/api/question/get?skip=0&limit=10"
      )
      .then((res) => setQuestion(res.data.questionList))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (data !== null && question !== null) {
      setLoading(false);
    }
  }, [data, question]);

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return (
          <PresentationVideosStep1
            title="Shape your presentation skill with professional trainers"
            data={data}
          />
        );
      case 1:
        return (
          <PresentationVideosStep1
            title="Shape your presentation skill with professional trainers"
            data={data}
          />
        );
      case 2:
        return (
          <PresentationVideosStep1
            title="Shape your presentation skill with professional trainers"
            data={data}
          />
        );
      case 3:
        return (
          <PresentationVideosStep1
            title="Shape your presentation skill with professional trainers"
            data={data}
          />
        );
      case 4:
        return (
          <PresentationVideosStep1
            title="Shape your presentation skill with professional trainers"
            data={data}
          />
        );
      case 5:
        return <PresentationVideosStep2 data={question} />;

      case 6:
        return (
          <PresentationVideosStep1
            title="Shape your presentation skill with professional trainers"
            data={data}
          />
        );
      case 7:
        return (
          <PresentationVideosStep1
            title="Shape your presentation skill with professional trainers"
            data={data}
          />
        );
      case 8:
        return (
          <PresentationVideosStep1
            title="Shape your presentation skill with professional trainers"
            data={data}
          />
        );
      case 9:
        return (
          <PresentationVideosStep1
            title="Shape your presentation skill with professional trainers"
            data={data}
          />
        );
      case 10:
        return (
          <PresentationVideosStep1
            title="Shape your presentation skill with professional trainers"
            data={data}
          />
        );
      case 11:
        return <PresentationVideosStep2 />;

      default:
        return "Uknown stepIndex";
    }
  }

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [activeStep, setActiveStep] = useState(0);
  const [activeStepOne, setActiveStepOne] = useState(0);
  const steps = getSteps();
  const stepsOne = getStepsOne();

  function handleNext() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function handleReset() {
    setActiveStep(0);
  }

  return (
    <section
      className="container pl-lg-29"
      style={{
        paddingTop: 70,
      }}
    >
      {loading ? (
        <> loading ... </>
      ) : (
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
          <div>
            {activeStep === steps.length - 1 ? (
                <div className='bg-white mt-8 rounded-lg'>
                <div className="row">
                  <div className="col col-md-6">
                  <div class="p-5"><h2 class="mb-4 font-weight-bold text-capitalize">Task is complete..</h2><div class="mb-4 font-weight-bold">The search continues with new episodes of In Search Of Fridays at 10/9c!The discovery of the Higgs Boson, or god particle, was a milestone in human knowledge that opened up new realities about the nature of our universe in this clip from Season 8</div><p class="mb-4 text-black-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae numquam cumque, quam eum distinctio iste illo dolorum exercitationem porro eligendi provident in magni voluptate alias. Porro nulla iste exercitationem repudiandae.</p><p class="mb-4 text-black-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae numquam cumque, quam eum distinctio iste illo dolorum exercitationem porro eligendi provident in magni voluptate alias. Porro nulla iste exercitationem repudiandae.</p><p class="mb-4 text-black-50">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae numquam cumque, quam eum distinctio iste illo dolorum exercitationem porro eligendi provident in magni voluptate alias. Porro nulla iste exercitationem repudiandae.</p></div>
                  </div>
                  <div className="col col-md-6">
                  <div>
                   <img className='h-100 w-100 rounded-lg' src={require('../../../assets/learn-image-1.jpg')} alt="loading"/>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white p-8 rounded-lg mt-10">  
                {console.log(activeStep)}
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
                      {activeStepOne === steps.length - 1
                        ? "Finish"
                        : "Next Question"}
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
