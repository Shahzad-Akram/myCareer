import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Radio from '@material-ui/core/Radio';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { TextField } from '@material-ui/core';

const PresentationVideosStep2 = () => {
  const [selectedValue, setSelectedValue] = useState('a');
  const [selectedValue2, setSelectedValue2] = useState('b');
  const [selectedValue3, setSelectedValue3] = useState('c');

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  function handleChange2(event) {
    setSelectedValue2(event.target.value);
  }

  function handleChange3(event) {
    setSelectedValue3(event.target.value);
  }

  return (
    <div>
      <form noValidate autoComplete='off'>
        <div className='mb-4 d-flex justify-content-between'>
          <h5 className='font-weight-bold'>
            Shape your presentation skill with professional trainers
          </h5>
          <button type='button' className='rounded py-1 px-4 btn-dark'>
            Button
          </button>
        </div>
        <div className='mb-8'>
          <div>
            <h6 className='font-size-lg text-danger font-weight-bold'>
              Lorem, ipsum dolor.
            </h6>
            <h6 className='font-size-lg font-weight-bold'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              perspiciatis!
            </h6>
          </div>
          <Row>
            <Col>
              <TextField
                className='mt-1'
                size='small'
                label='label'
                // className={classes.textField}
                margin='normal'
                variant='filled'
              />
            </Col>
            <Col md={2}>
              <div className='h-100 d-flex align-items-center'>
                <Radio
                  checked={selectedValue === 'a'}
                  onChange={handleChange}
                  value='a'
                  color='default'
                  name='radio-button'
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Radio
                  checked={selectedValue === 'b'}
                  onChange={handleChange}
                  value='b'
                  color='default'
                  name='radio-button'
                  inputProps={{ 'aria-label': 'B' }}
                />
                <Radio
                  checked={selectedValue === 'c'}
                  onChange={handleChange}
                  value='c'
                  color='default'
                  name='radio-button'
                  inputProps={{ 'aria-label': 'c' }}
                />
              </div>
            </Col>
          </Row>
          <div>
            <small>Lorem, ipsum dolor.</small>
          </div>
        </div>

        {/* == */}
        <div className='mb-8'>
          <div>
            <h6 className='font-size-lg text-danger font-weight-bold'>
              Lorem, ipsum dolor.
            </h6>
            <h6 className='font-size-lg font-weight-bold'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              perspiciatis!
            </h6>
          </div>
          <Row>
            <Col>
              <TextField
                className='mt-1'
                size='small'
                label='label'
                // className={classes.textField}
                margin='normal'
                variant='filled'
              />
            </Col>
            <Col md={2}>
              <div className='h-100 d-flex align-items-center'>
                <Radio
                  checked={selectedValue2 === 'a'}
                  onChange={handleChange2}
                  value='a'
                  color='default'
                  name='radio-button'
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Radio
                  checked={selectedValue2 === 'b'}
                  onChange={handleChange2}
                  value='b'
                  color='default'
                  name='radio-button'
                  inputProps={{ 'aria-label': 'B' }}
                />
                <Radio
                  checked={selectedValue2 === 'c'}
                  onChange={handleChange2}
                  value='c'
                  color='default'
                  name='radio-button'
                  inputProps={{ 'aria-label': 'c' }}
                />
              </div>
            </Col>
          </Row>
          <div>
            <small>Lorem, ipsum dolor.</small>
          </div>
        </div>

        {/* == */}
        <div className='mb-8'>
          <div>
            <h6 className='font-size-lg text-danger font-weight-bold'>
              Lorem, ipsum dolor.
            </h6>
            <h6 className='font-size-lg font-weight-bold'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              perspiciatis!
            </h6>
          </div>
          <Row>
            <Col>
              <TextField
                className='mt-1'
                size='small'
                label='label'
                // className={classes.textField}
                margin='normal'
                variant='filled'
              />
            </Col>
            <Col md={2}>
              <div className='h-100 d-flex align-items-center'>
                <Radio
                  checked={selectedValue3 === 'a'}
                  onChange={handleChange3}
                  value='a'
                  color='default'
                  name='radio-button'
                  inputProps={{ 'aria-label': 'A' }}
                />
                <Radio
                  checked={selectedValue3 === 'b'}
                  onChange={handleChange3}
                  value='b'
                  color='default'
                  name='radio-button'
                  inputProps={{ 'aria-label': 'B' }}
                />
                <Radio
                  checked={selectedValue3 === 'c'}
                  onChange={handleChange3}
                  value='c'
                  color='default'
                  name='radio-button'
                  inputProps={{ 'aria-label': 'c' }}
                />
              </div>
            </Col>
          </Row>
          <div>
            <small>Lorem, ipsum dolor.</small>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PresentationVideosStep2;
