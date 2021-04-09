/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from "react";
import { Modal } from "react-bootstrap";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";
import AdminStepper from "./AdminStepper";

import axios from "axios";

// Images
import Logo2 from "../../assets/images/logos/logo-2.svg";
import Icon11 from "../../assets/images/icons/icon-11.svg";
import Icon12 from "../../assets/images/icons/icon-12.svg";
import Icon13 from "../../assets/images/icons/icon-13.svg";
import Axios from "axios";
import ReviewerModal from "./AssingingReviewerModal";

const records = [
  {
    submissionTime: "25 Apr, 2020, 5p",
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
    userRating: (
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
    submissionTime: "25 Apr, 2020, 5p",
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
    userRating: (
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
    reviewTime: "25 Apr, 2020, 5p",
    status: "Ready",
  },
  {
    submissionTime: "25 Apr, 2020, 5p",
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
    userRating: (
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
    reviewTime: "25 Apr, 2020, 5p",
    status: "Ready",
  },

  {
    submissionTime: "25 Apr, 2020, 5p",
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
    userRating: (
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
    submissionTime: "25 Apr, 2020, 5p",
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
    userRating: (
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
    userRating: (
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
    reviewTime: "25 Apr, 2020, 5p",
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

export function AdminTable({ className, data }) {
  const [user, setUser] = useState(null);
  const [modalShow, setModalShow] = React.useState(false);
  const [id, setId] = useState(null);
  const getUserStatusClass = (status) => {
    switch (status) {
      case "pending":
        return "bg-warning-o-80 text-warning";
      case "assigned":
        return "bg-success-o-80 text-success";
      default:
        break;
    }
  };

  useEffect(() => {
    axios
      .get(
        `https://presentation-learning-platform.herokuapp.com/api/user/get?skip=0&limit=10&sort=['createdAt', -1]`
      )
      .then((res) => setUser(res.data.userList))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <>
      <ReviewerModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        id={id}
      />
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
                      <span className="text-dark-75">Submitted By</span>
                    </th>

                    <th style={{ minWidth: "100px" }}>
                      <span className="text-dark-75">DUE Time</span>
                    </th>
                    <th style={{ minWidth: "130px" }}>
                      <span className="text-dark-75">Review time</span>
                    </th>
                    <th style={{ minWidth: "80px" }}>
                      <span className="text-dark-75">Status</span>
                    </th>
                    <th style={{ minWidth: "10px" }}></th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((value) => (
                    <tr className="cursor-pointer">
                      <td className="pl-7">
                        <span className="text-muted font-weight-bold">
                          {value.createdAt}
                        </span>
                      </td>
                      {/* <td>{value.userRating}</td> */}
                      {<td>Shahzad Akram</td>}

                      <td>-</td>
                      <td>
                        <span className="text-danger font-weight-bold text-capitalize">
                          {value.createdAt}
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
                      <td>
                        <button
                          type="button"
                          onClick={() => {
                            setModalShow(true);
                            setId(value._id);
                          }}
                          className="btn btn-light"
                        >
                          <i className="fa fa-edit pr-0 text-dark-25"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
