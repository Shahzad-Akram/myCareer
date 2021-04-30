/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

// Images
import Logo2 from "../../assets/images/logos/logo-2.svg";
import Icon11 from "../../assets/images/icons/icon-11.svg";
import Icon12 from "../../assets/images/icons/icon-12.svg";
import Icon13 from "../../assets/images/icons/icon-13.svg";
import RecordModal from "./RecordModal";
import AdminStepper from "./AdminStepper";
import { useQuery } from "react-query";
import axios from "axios";
import { useSelector } from "react-redux";
import DayJS from "react-dayjs";

const records = [
  {
    submissionTime: "26 apr. 2020",
    OweRating: (
      <div>
        <span>
          <i className="fa fa-star text-warning small p-0 mr-2"></i>
          <i className="fa fa-star text-warning small p-0 mr-2"></i>
          <i className="fa fa-star  text-warning small p-0 mr-2"></i>
          <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
          <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
        </span>
        <span className="font-weight-bold small">(3.0)</span>
      </div>
    ),
    trainerRating: (
      <div className="d-flex align-items-center">
        <div className="symbol symbol-50 symbol-light mr-4">
          <span className="symbol-label rounded-pill">
            <span className="svg-icon align-self-end">
              <SVG
                className="h-30px w-30px"
                src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
              />
            </span>
          </span>
        </div>
        <div>
          <a
            href="#"
            className="text-dark-75 font-weight-bolder text-hover-primary mb-1"
          >
            Brad Simmons
          </a>
          <div>
            <span>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
            </span>
            <span className="font-weight-bold small">(4.0)</span>
          </div>
        </div>
      </div>
    ),
    reviewTime: "-",
    status: "Pending",
  },
  {
    submissionTime: "26 apr. 2020",
    OweRating: (
      <div>
        <span>
          <i className="fa fa-star text-warning small p-0 mr-2"></i>
          <i className="fa fa-star text-warning small p-0 mr-2"></i>
          <i className="fa fa-star  text-warning small p-0 mr-2"></i>
          <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
          <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
        </span>
        <span className="font-weight-bold small">(4.0)</span>
      </div>
    ),
    trainerRating: (
      <div className="d-flex align-items-center">
        <div className="symbol symbol-50 symbol-light mr-4">
          <span className="symbol-label rounded-pill">
            <span className="svg-icon align-self-end">
              <SVG
                className="h-30px w-30px"
                src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
              />
            </span>
          </span>
        </div>
        <div>
          <a
            href="#"
            className="text-dark-75 font-weight-bolder text-hover-primary mb-1"
          >
            Brad Simmons
          </a>
          <div>
            <span>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
            </span>
            <span className="font-weight-bold small">(4.0)</span>
          </div>
        </div>
      </div>
    ),
    reviewTime: "26 apr. 2020",
    status: "Ready",
  },
  {
    submissionTime: "26 apr. 2020",
    OweRating: (
      <div>
        <span>
          <i className="fa fa-star text-warning small p-0 mr-2"></i>
          <i className="fa fa-star text-warning small p-0 mr-2"></i>
          <i className="fa fa-star  text-warning small p-0 mr-2"></i>
          <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
          <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
        </span>
        <span className="font-weight-bold small">(4.0)</span>
      </div>
    ),
    trainerRating: (
      <div className="d-flex align-items-center">
        <div className="symbol symbol-50 symbol-light mr-4">
          <span className="symbol-label rounded-pill">
            <span className="svg-icon align-self-end">
              <SVG
                className="h-30px w-30px"
                src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
              />
            </span>
          </span>
        </div>
        <div>
          <a
            href="#"
            className="text-dark-75 font-weight-bolder text-hover-primary mb-1"
          >
            Brad Simmons
          </a>
          <div>
            <span>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
            </span>
            <span className="font-weight-bold small">(4.0)</span>
          </div>
        </div>
      </div>
    ),
    reviewTime: "26 apr. 2020",
    status: "Ready",
  },

  {
    submissionTime: "26 apr. 2020",
    OweRating: (
      <div>
        <span>
          <i className="fa fa-star text-warning small p-0 mr-2"></i>
          <i className="fa fa-star text-warning small p-0 mr-2"></i>
          <i className="fa fa-star  text-warning small p-0 mr-2"></i>
          <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
          <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
        </span>
        <span className="font-weight-bold small">(4.0)</span>
      </div>
    ),
    trainerRating: (
      <div className="d-flex align-items-center">
        <div className="symbol symbol-50 symbol-light mr-4">
          <span className="symbol-label rounded-pill">
            <span className="svg-icon align-self-end">
              <SVG
                className="h-30px w-30px"
                src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
              />
            </span>
          </span>
        </div>
        <div>
          <a
            href="#"
            className="text-dark-75 font-weight-bolder text-hover-primary mb-1"
          >
            Brad Simmons
          </a>
          <div>
            <span>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
            </span>
            <span className="font-weight-bold small">(4.0)</span>
          </div>
        </div>
      </div>
    ),
    reviewTime: "-",
    status: "Pending",
  },

  {
    submissionTime: "26 apr. 2020",
    OweRating: (
      <div>
        <span>
          <i className="fa fa-star text-warning small p-0 mr-2"></i>
          <i className="fa fa-star text-warning small p-0 mr-2"></i>
          <i className="fa fa-star  text-warning small p-0 mr-2"></i>
          <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
          <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
        </span>
        <span className="font-weight-bold small">(4.0)</span>
      </div>
    ),
    trainerRating: (
      <div className="d-flex align-items-center">
        <div className="symbol symbol-50 symbol-light mr-4">
          <span className="symbol-label rounded-pill">
            <span className="svg-icon align-self-end">
              <SVG
                className="h-30px w-30px"
                src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
              />
            </span>
          </span>
        </div>
        <div>
          <a
            href="#"
            className="text-dark-75 font-weight-bolder text-hover-primary mb-1"
          >
            Brad Simmons
          </a>
          <div>
            <span>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
            </span>
            <span className="font-weight-bold small">(4.0)</span>
          </div>
        </div>
      </div>
    ),
    reviewTime: "-",
    status: "Pending",
  },
];

const recordModal = [
  {
    OweRating: (
      <div>
        <span>
          <i className="fa fa-star text-warning small p-0 mr-2"></i>
          <i className="fa fa-star text-warning small p-0 mr-2"></i>
          <i className="fa fa-star  text-warning small p-0 mr-2"></i>
          <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
          <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
        </span>
        <span className="font-weight-bold small">(3.0)</span>
      </div>
    ),
    trainerRating: (
      <div className="d-flex align-items-end">
        <div className="symbol symbol-50 symbol-light mr-4">
          <span className="symbol-label rounded-pill">
            <span className="svg-icon align-self-end">
              <SVG
                className="h-30px w-30px"
                src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
              />
            </span>
          </span>
        </div>
        <div>
          <a
            href="#"
            className="text-dark-75 font-weight-bolder text-hover-primary mb-1"
          >
            Brad Simmons
          </a>
          <div>
            <span>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-warning small p-0 mr-2"></i>
              <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
            </span>
            <span className="font-weight-bold small">(4.0)</span>
          </div>
        </div>
      </div>
    ),
    reviewTime: "26 apr. 2020",
  },
];

const recordView = [
  {
    key: 1,
    text: `  Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Reprehenderit tenetur facilis ad ipsam corrupti
  numquam laudantium totam, minima suscipit repellat
  voluptatibus repudiandae dolor cum vel sed natus
  assumenda ducimus quas!`,
    score: `43%`,
    comments: 8,
    image: `${Icon11}`,
  },
  {
    key: 2,
    text: `  Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Reprehenderit tenetur facilis ad ipsam corrupti
  numquam laudantium totam, minima suscipit repellat
  voluptatibus repudiandae dolor cum vel sed natus
  assumenda ducimus quas!`,
    score: `65%`,
    comments: 9,
    image: `${Icon12}`,
  },
  {
    key: 3,
    text: `  Lorem ipsum dolor sit amet consectetur adipisicing
  elit. Reprehenderit tenetur facilis ad ipsam corrupti
  numquam laudantium totam, minima suscipit repellat
  voluptatibus repudiandae dolor cum vel sed natus
  assumenda ducimus quas!`,
    score: `40%`,
    comments: 12,
    image: `${Icon13}`,
  },
];

export function CustomTable({ className }) {
  const user = useSelector((state) => state.auth.user);
  const [show, setShow] = useState(false);
  const [selectedData, setData] = useState(null);
  const getUserStatusClass = (status) => {
    switch (status) {
      case "assigned":
        return "bg-warning-o-80 text-warning";
      case "reviewed":
        return "bg-success-o-80 text-success";
      default:
        break;
    }
  };

  const getSubmissions = () => {
    return axios
      .get(
        `https://presentation-learning-platform.herokuapp.com/api/submission/get?skip=0&limit=10&reviewerId=${user._id}`
      )
      .then((res) => {
        return res.data.submission;
      })
      .catch((err) => console.log(err));
  };

  const { data, isLoading } = useQuery("submissions", getSubmissions);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClick = (value) => {
    handleShow();
    setData(value);
  };
  console.log(data);

  return (
    <>
      <Modal
        scrollable
        centered
        size="xl"
        show={show}
        onHide={handleClose}
        className="rounded-lg"
      >
        <Modal.Body className="p-0 scroll-box-auto">
          <AdminStepper handleClose={handleClose} data={selectedData} />
        </Modal.Body>
      </Modal>
      {/* <RecordModal show={show} handleClose={handleClose} /> */}
      <div className={`card card-custom ${className}`}>
        {/* Head */}
        <div className="card-header border-0 py-5">
          <h3 className="card-title align-items-start flex-column">
            <span className="card-label font-weight-bolder text-dark">
              Interview Record
            </span>
          </h3>
        </div>
        {/* Body */}
        <div className="card-body pt-0 pb-3">
          <div className="tab-content">
            <div className="table-responsive table-hover">
              <table className="table table-head-custom table-head-bg table-borderless table-vertical-center">
                <thead>
                  <tr className="text-left text-uppercase">
                    <th className="pl-7" style={{ minWidth: "100px" }}>
                      <span className="text-dark-75">Submission time</span>
                    </th>
                    <th style={{ minWidth: "100px" }}>
                      <span className="text-dark-75">Overall Rating</span>
                    </th>

                    <th style={{ minWidth: "100px" }}>
                      <span className="text-dark-75">Trainer's Ratings</span>
                    </th>
                    <th style={{ minWidth: "130px" }}>
                      <span className="text-dark-75">Review time</span>
                    </th>
                    <th style={{ minWidth: "80px" }}>
                      <span className="text-dark-75">Status</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {isLoading ? (
                    <> Loading... </>
                  ) : (
                    data.map((value) => (
                      <tr
                        className="cursor-pointer"
                        onClick={() => handleClick(value)}
                      >
                        <td className="pl-7">
                          <span className="text-muted font-weight-bold">
                            {value.createdAt}
                          </span>
                        </td>
                        <td>-</td>

                        <td>
                          <div className="d-flex align-items-center">
                            <div className="symbol symbol-50 symbol-light mr-4">
                              <span className="symbol-label rounded-pill">
                                <span className="svg-icon align-self-end">
                                  <SVG
                                    className="h-30px w-30px"
                                    src={toAbsoluteUrl(
                                      "/media/svg/avatars/001-boy.svg"
                                    )}
                                  />
                                </span>
                              </span>
                            </div>
                            <div>
                              <a
                                href="#"
                                className="text-dark-75 font-weight-bolder text-hover-primary mb-1"
                              >
                                {value.reviewerId.email}
                              </a>
                              <div>
                                <span>
                                  <i className="fa fa-star text-warning small p-0 mr-2"></i>
                                  <i className="fa fa-star text-warning small p-0 mr-2"></i>
                                  <i className="fa fa-star text-warning small p-0 mr-2"></i>
                                  <i className="fa fa-star text-warning small p-0 mr-2"></i>
                                  <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
                                </span>
                                <span className="font-weight-bold small">
                                  (4.0)
                                </span>
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="text-muted font-weight-bold text-capitalize">
                            <DayJS format="MM-DD-YYYY">{value.deadLine}</DayJS>
                          </span>
                        </td>
                        <td className="pl-0 py-8">
                          <span
                            className={`badge text-capitalize' ${getUserStatusClass(
                              value.status
                            )}`}
                          >
                            {value.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
