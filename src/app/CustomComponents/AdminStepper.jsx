import React, { useState } from "react";
import { useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import { AdminReviewReport } from "./AdminReviewReport";
import { AdminQuestion1 } from "./AdminQuestion1";
import { AdminQuestion2 } from "./AdminQuestion2";
import { AdminQuestion3 } from "./AdminQuestion3";
import axios from "axios";

const questionCheck = [
  { key: 1, text: `Share relevant experience and how this has impacted you` },
  { key: 2, text: `Please give real examples to back up your points` },
  { key: 3, text: `This is too much details so try to be more concise` },
  { key: 4, text: `Please listen back to the examples offered in the video` },
  {
    key: 5,
    text: `Suggest you jot down key points and practice saying out loud in front of a mirror or practice with a friend`,
  },
];

const questionCheck2 = [
  { key: 6, text: `Share relevant experience and how this has impacted you` },
  { key: 7, text: `Please give real examples to back up your points` },
  { key: 8, text: `This is too much details so try to be more concise` },
  { key: 9, text: `Please listen back to the examples offered in the video` },
  {
    key: 10,
    text: `Suggest you jot down key points and practice saying out loud in front of a mirror or practice with a friend`,
  },
];

const questionCheck3 = [
  { key: 11, text: `Share relevant experience and how this has impacted you` },
  { key: 12, text: `Please give real examples to back up your points` },
  { key: 13, text: `This is too much details so try to be more concise` },
  { key: 14, text: `Please listen back to the examples offered in the video` },
  {
    key: 15,
    text: `Suggest you jot down key points and practice saying out loud in front of a mirror or practice with a friend`,
  },
];

export default function AdminStepper({ handleClose, data }) {
  const [presRating, setPresRating] = useState(0);
  const [prepRating, setPrepRating] = useState(0);
  const [commRating, setCommRating] = useState(0);
  const [formData, setData] = useState([]);
  const [prep, setPrep] = useState([]);
  const [communication, setCom] = useState([]);
  const [presComment, setPresComment] = useState(null);
  const [prepComment, setPrepComment] = useState(null);
  const [commComment, setCommComment] = useState(null);

  const handleClick = (checked, value) => {
    if (!formData.includes(value.text) && checked) {
      setData([...formData, value]);
    }

    if (formData.includes(value) && !checked) {
      const formdata = formData.filter((f) => f.text !== value.text);

      setData(formdata);
    }
  };

  const handleClickPrep = (checked, value) => {
    if (!prep.includes(value.text) && checked) {
      setPrep([...prep, value]);
    }

    if (prep.includes(value) && !checked) {
      const formdata = prep.filter((f) => f.text !== value.text);

      setPrep(formdata);
    }
  };

  const handleClickCom = (checked, value) => {
    if (!communication.includes(value.text) && checked) {
      setCom([...communication, value]);
    }

    if (communication.includes(value) && !checked) {
      const formdata = communication.filter((f) => f.text !== value.text);

      setCom(formdata);
    }
  };

  const formatter = (data) => {
    const formattedData = data.map((v) => {
      const test = {};
      test.clause = v.text;
      return test;
    });
    return formattedData;
  };

  const submitReview = () => {
    const presentation = formatter(formData);
    const preperation = formatter(prep);
    const comm = formatter(communication);

    const submittingData = {
      id: data._id,
      updateBody: {
        status: "reviewed",
        review: [
          {
            rate: presRating,
            type: "presentation",
            note: presComment,
            option: presentation,
          },
          {
            rate: prepRating,
            type: "preperation",
            note: prepComment,
            option: preperation,
          },
          {
            rate: commRating,
            type: "communication",
            note: commComment,
            option: comm,
          },
        ],
      },
    };

    axios
      .post(
        "https://presentation-learning-platform.herokuapp.com/api/submission/update",
        submittingData
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const tutorialSteps = [
    {
      label: (
        <AdminQuestion1
          data={data}
          type="Presentation"
          part="Part 1"
          setRating={setPresRating}
          rating={presRating}
          setComment={setPresComment}
          commentValue={presComment}
        >
          <div className="row mx-0 row-cols-1 row-cols-md-2">
            {questionCheck.map((value) => (
              <label
                key={value.key}
                class="checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 mb-6 px-3"
              >
                <input
                  type="checkbox"
                  name=""
                  value={value.key}
                  onChange={(e) => handleClick(e.target.checked, value)}
                />
                <span></span>
                <div className="text-black-50 ml-3 small">{value.text}</div>
              </label>
            ))}
          </div>
        </AdminQuestion1>
      ),
    },
    {
      label: (
        <AdminQuestion1
          data={data}
          type="Preperation"
          part="Part 2"
          setRating={setPrepRating}
          rating={prepRating}
          setComment={setPrepComment}
          commentValue={prepComment}
        >
          <div className="row mx-0 row-cols-1 row-cols-md-2">
            {questionCheck2.map((value) => (
              <label
                key={value.key}
                class="checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 mb-6 px-3"
              >
                <input
                  type="checkbox"
                  name=""
                  value={value.key}
                  onClick={(e) => handleClickPrep(e.target.checked, value)}
                />
                <span></span>
                <div className="text-black-50 ml-3 small">{value.text}</div>
              </label>
            ))}
          </div>
        </AdminQuestion1>
      ),
    },
    {
      label: (
        <AdminQuestion1
          data={data}
          type="Communication"
          part="Part 3"
          setRating={setCommRating}
          rating={commRating}
          setComment={setCommComment}
          commentValue={commComment}
        >
          <div className="row mx-0 row-cols-1 row-cols-md-2">
            {questionCheck3.map((value) => (
              <label class="checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 mb-6 px-3">
                <input
                  type="checkbox"
                  name=""
                  value={value.key}
                  onClick={(e) => handleClickCom(e.target.checked, value)}
                />
                <span></span>
                <div className="text-black-50 ml-3 small">{value.text}</div>
              </label>
            ))}
          </div>
        </AdminQuestion1>
      ),
    },
    {
      label: (
        <AdminReviewReport
          data={data}
          presRating={presRating}
          prepRating={prepRating}
          commRating={commRating}
          pres={formData}
          prep={prep}
          comm={communication}
          submit={submitReview}
        />
      ),
    },
  ];
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div>
      {console.log(formData, prep, communication)}
      <Paper square elevation={0}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>

      <div className="position-absolute right-0 top-0 mt-5 mr-5">
        <button type="button" onClick={handleClose} className="btn p-0">
          <i className="fa fa-times"></i>
        </button>
      </div>

      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft className="btn-warning rounded-circle text-white h-30px w-30px" />
            ) : (
              <KeyboardArrowRight className="btn-warning rounded-circle text-white h-30px w-30px" />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight className="btn-warning rounded-circle text-white h-30px w-30px" />
            ) : (
              <KeyboardArrowLeft className="btn-warning rounded-circle text-white h-30px w-30px" />
            )}
          </Button>
        }
      />
    </div>
  );
}
