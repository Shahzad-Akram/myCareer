import React, { useEffect, useState } from "react";
import { Row, Col, Modal, Button } from "react-bootstrap";
import Select from "react-select";
import axios from "axios";
import DatePicker from "react-date-picker";

const ReviewerModal = (props) => {
  const [loading, setLoading] = useState(false);
  const [value, onChange] = useState(new Date());
  const [option, setOption] = useState(null);
  const [selectedOptions, setSelectedOptions] = useState();

  const formatSelectData = (files) => {
    const formattedFiles = [];

    if (files?.length > 0) {
      files
        .filter((v) => v.roleId.roleName === "reviewer")
        .map((file) =>
          formattedFiles.push({
            label: file.email,
            value: file._id,
          })
        );
    }
    return formattedFiles;
  };

  const loadOptions = (inputValue) => {
    setLoading(true);
    axios
      .get(
        `https://presentation-learning-platform.herokuapp.com/api/user/get?skip=0&limit=10&sort=['createdAt', -1]`
      )
      .then((res) => {
        setOption(formatSelectData(res.data.userList));
        setLoading(false);
      })
      .catch((err) => {
        // handle error
      });
  };

  const handeOptionSelect = (value) => {
    setSelectedOptions(value.value);
  };

  const assignReviwer = () => {
    const body = {
      id: props.id,
      updateBody: {
        reviewerId: selectedOptions,
        status: "assigned",
        deadLine: value,
      },
    };
    axios
      .post(
        "https://presentation-learning-platform.herokuapp.com/api/submission/update",
        body
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    loadOptions();
  }, []);
  console.log(value);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Assign Reviewer
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          {loading ? (
            <>loading ... </>
          ) : (
            <>
              <Col xs={12} md={6} className="mb-8 mb-md-0">
                <p>Select Reviewer</p>
                <Select
                  options={option}
                  onChange={(value) => {
                    handeOptionSelect(value);
                  }}
                />
              </Col>
              <Col xs={12} md={6} lg={4} className="mb-8 mb-md-0">
                <p>Select Deadline</p>
                <DatePicker
                  className="form-control py-0 d-flex align-items-center"
                  onChange={onChange}
                  value={value}
                />
              </Col>
              <Col
                xs={12}
                lg={2}
                className="d-flex align-items-end mt-5 mt-lg-0"
              >
                <Button block onClick={assignReviwer}>
                  Assign
                </Button>
              </Col>
            </>
          )}
        </Row>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ReviewerModal;
