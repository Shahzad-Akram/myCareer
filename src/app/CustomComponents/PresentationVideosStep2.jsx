import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";
import { TextField } from "@material-ui/core";

const PresentationVideosStep2 = ({ data }) => {
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    console.log(event.target.value);
    setValue(event.target.value);
  };
  console.log(data);

  return (
    <div>
      <form noValidate autoComplete="off">
        <div className="mb-4 d-flex justify-content-between">
          <h5 className="font-weight-bold">
            Shape your presentation skill with professional trainers
          </h5>
          <button type="button" className="rounded py-1 px-4 btn-dark">
            Button
          </button>
        </div>
        {data.map((v) => (
          <div className="mb-8" key={v._id}>
            <div>
              <h6 className="font-size-lg text-danger font-weight-bold">
                Lorem, ipsum dolor.
              </h6>
              <h6 className="font-size-lg font-weight-bold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
                perspiciatis!
              </h6>
            </div>
            <Row>
              <Col>
                <TextField
                  className="mt-1"
                  size="small"
                  label="label"
                  // className={classes.textField}
                  margin="normal"
                  variant="filled"
                />
              </Col>
              <Col md={2}>
                <div className="h-100 d-flex align-items-center">
                  <RadioGroup
                    aria-label="gender"
                    name="gender1"
                    value={value}
                    onChange={handleChange}
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                    <FormControlLabel
                      value="other"
                      control={<Radio />}
                      label="Other"
                    />
                  </RadioGroup>
                  {/* <Radio
                    checked={selectedValue === "a"}
                    onChange={handleChange}
                    value="a"
                    color="default"
                    name="radio-button"
                    inputProps={{ "aria-label": "A" }}
                  />
                  <Radio
                    checked={selectedValue === "b"}
                    onChange={handleChange}
                    value="b"
                    color="default"
                    name="radio-button"
                    inputProps={{ "aria-label": "B" }}
                  />
                  <Radio
                    checked={selectedValue === "c"}
                    onChange={handleChange}
                    value="c"
                    color="default"
                    name="radio-button"
                    inputProps={{ "aria-label": "c" }}
                  /> */}
                </div>
              </Col>
            </Row>
            <div>
              <small>Lorem, ipsum dolor.</small>
            </div>
          </div>
        ))}

        {/* == */}
        {/* <div className="mb-8">
          <div>
            <h6 className="font-size-lg text-danger font-weight-bold">
              Lorem, ipsum dolor.
            </h6>
            <h6 className="font-size-lg font-weight-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              perspiciatis!
            </h6>
          </div>
          <Row>
            <Col>
              <TextField
                className="mt-1"
                size="small"
                label="label"
                // className={classes.textField}
                margin="normal"
                variant="filled"
              />
            </Col>
            <Col md={2}>
              <div className="h-100 d-flex align-items-center">
                <Radio
                  checked={selectedValue2 === "a"}
                  onChange={handleChange2}
                  value="a"
                  color="default"
                  name="radio-button"
                  inputProps={{ "aria-label": "A" }}
                />
                <Radio
                  checked={selectedValue2 === "b"}
                  onChange={handleChange2}
                  value="b"
                  color="default"
                  name="radio-button"
                  inputProps={{ "aria-label": "B" }}
                />
                <Radio
                  checked={selectedValue2 === "c"}
                  onChange={handleChange2}
                  value="c"
                  color="default"
                  name="radio-button"
                  inputProps={{ "aria-label": "c" }}
                />
              </div>
            </Col>
          </Row>
          <div>
            <small>Lorem, ipsum dolor.</small>
          </div>
        </div> */}

        {/* == */}
        {/* <div className="mb-8">
          <div>
            <h6 className="font-size-lg text-danger font-weight-bold">
              Lorem, ipsum dolor.
            </h6>
            <h6 className="font-size-lg font-weight-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex,
              perspiciatis!
            </h6>
          </div>
          <Row>
            <Col>
              <TextField
                className="mt-1"
                size="small"
                label="label"
                // className={classes.textField}
                margin="normal"
                variant="filled"
              />
            </Col>
            <Col md={2}>
              <div className="h-100 d-flex align-items-center">
                <Radio
                  checked={selectedValue3 === "a"}
                  onChange={handleChange3}
                  value="a"
                  color="default"
                  name="radio-button"
                  inputProps={{ "aria-label": "A" }}
                />
                <Radio
                  checked={selectedValue3 === "b"}
                  onChange={handleChange3}
                  value="b"
                  color="default"
                  name="radio-button"
                  inputProps={{ "aria-label": "B" }}
                />
                <Radio
                  checked={selectedValue3 === "c"}
                  onChange={handleChange3}
                  value="c"
                  color="default"
                  name="radio-button"
                  inputProps={{ "aria-label": "c" }}
                />
              </div>
            </Col>
          </Row>
          <div>
            <small>Lorem, ipsum dolor.</small>
          </div>
        </div> */}
      </form>
    </div>
  );
};

export default PresentationVideosStep2;
