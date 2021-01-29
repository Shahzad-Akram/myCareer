import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { AdminReviewReport } from './AdminReviewReport';
import { AdminQuestion1 } from './AdminQuestion1';
import { AdminQuestion2 } from './AdminQuestion2';
import { AdminQuestion3 } from './AdminQuestion3';

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

const tutorialSteps = [
  {
    label: (
      <AdminQuestion1>
        <div className='row mx-0 row-cols-1 row-cols-md-2'>
          {questionCheck.map((value) => (
            <label class='checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 mb-6 px-3'>
              <input type='checkbox' name='' value={value.key} />
              <span></span>
              <div className='text-black-50 ml-3 small'>{value.text}</div>
            </label>
          ))}
          {questionCheck2.map((value) => (
            <label class='checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 mb-6 px-3'>
              <input type='checkbox' name='' value={value.key} />
              <span></span>
              <div className='text-black-50 ml-3 small'>{value.text}</div>
            </label>
          ))}
        </div>
      </AdminQuestion1>
    ),
  },
  {
    label: (
      <AdminQuestion2>
        <div className='row mx-0 row-cols-1 row-cols-md-2'>
          {questionCheck.map((value) => (
            <label class='checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 mb-6 px-3'>
              <input type='checkbox' name='' value={value.key} />
              <span></span>
              <div className='text-black-50 ml-3 small'>{value.text}</div>
            </label>
          ))}
          {questionCheck2.map((value) => (
            <label class='checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 mb-6 px-3'>
              <input type='checkbox' name='' value={value.key} />
              <span></span>
              <div className='text-black-50 ml-3 small'>{value.text}</div>
            </label>
          ))}
        </div>
      </AdminQuestion2>
    ),
  },
  {
    label: (
      <AdminQuestion3>
        <div className='row mx-0 row-cols-1 row-cols-md-2'>
          {questionCheck.map((value) => (
            <label class='checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 mb-6 px-3'>
              <input type='checkbox' name='' value={value.key} />
              <span></span>
              <div className='text-black-50 ml-3 small'>{value.text}</div>
            </label>
          ))}
          {questionCheck2.map((value) => (
            <label class='checkbox checkbox-lg checkbox-light-success checkbox-single flex-shrink-0 mb-6 px-3'>
              <input type='checkbox' name='' value={value.key} />
              <span></span>
              <div className='text-black-50 ml-3 small'>{value.text}</div>
            </label>
          ))}
        </div>
      </AdminQuestion3>
    ),
  },
  {
    label: <AdminReviewReport />,
  },
];

export default function AdminStepper({ handleClose }) {
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
      <Paper square elevation={0}>
        <Typography>{tutorialSteps[activeStep].label}</Typography>
      </Paper>

      <div className='position-absolute right-0 top-0 mt-5 mr-5'>
        <button type='button' onClick={handleClose} className='btn p-0'>
          <i className='fa fa-times'></i>
        </button>
      </div>

      <MobileStepper
        steps={maxSteps}
        position='static'
        activeStep={activeStep}
        nextButton={
          <Button
            size='small'
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft className='btn-warning rounded-circle text-white h-30px w-30px' />
            ) : (
              <KeyboardArrowRight className='btn-warning rounded-circle text-white h-30px w-30px' />
            )}
          </Button>
        }
        backButton={
          <Button size='small' onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight className='btn-warning rounded-circle text-white h-30px w-30px' />
            ) : (
              <KeyboardArrowLeft className='btn-warning rounded-circle text-white h-30px w-30px' />
            )}
          </Button>
        }
      />
    </div>
  );
}
