import React, { useEffect, useState } from "react";
import SVG from "react-inlinesvg";
import { toAbsoluteUrl } from "../../_metronic/_helpers";

// Images
import Logo2 from "../../assets/images/logos/logo-2.svg";
import Icon11 from "../../assets/images/icons/icon-11.svg";
import Icon12 from "../../assets/images/icons/icon-12.svg";
import Icon13 from "../../assets/images/icons/icon-13.svg";
import { Rating } from "@material-ui/lab";
import ReportCard from "./ReportCard";

const recordView = [
  {
    key: 1,
    text: `  Lorem ipsum dolor sit amet consectetur adipisicing
      elit. Reprehenderit tenetur facilis ad ipsam corrupti
      numquam laudantium totam, minima suscipit repellat
      voluptatibus repudiandae dolor cum vel sed natus
      assumenda ducimus quas!`,
    titleRating: "Ratings",
    score: (
      <span>
        <i className="fa fa-star text-warning small p-0 mr-2"></i>
        <i className="fa fa-star text-warning small p-0 mr-2"></i>
        <i className="fa fa-star  text-warning small p-0 mr-2"></i>
        <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
        <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
      </span>
    ),
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
    score: (
      <span>
        <i className="fa fa-star text-warning small p-0 mr-2"></i>
        <i className="fa fa-star text-warning small p-0 mr-2"></i>
        <i className="fa fa-star  text-warning small p-0 mr-2"></i>
        <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
        <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
      </span>
    ),
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
    score: (
      <span>
        <i className="fa fa-star text-warning small p-0 mr-2"></i>
        <i className="fa fa-star text-warning small p-0 mr-2"></i>
        <i className="fa fa-star  text-warning small p-0 mr-2"></i>
        <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
        <i className="fa fa-star text-dark-25 small p-0 mr-2"></i>
      </span>
    ),
    titleScore: "Score",
    comments: 12,
    image: `${Icon13}`,
  },
];

export const AdminReviewReport = ({
  data,
  presRating,
  prepRating,
  commRating,
  pres,
  prep,
  comm,
  submit,
}) => {
  console.log(data, presRating, prepRating, commRating, pres, prep, comm);
  return (
    <>
      <header className="review-report-bg px-xxl-25 py-5">
        <div className="w-100">
          <img height={60} src={Logo2} alt="logo" className="mb-2" />
          <section className="row mx-0 justify-content-between">
            <div>
              <h1 className="text-uppercase font-weight-bolder display-4 mb-5">
                Review Report
              </h1>
              <div className="h5">
                <div className="mb-1 font-weight-bold">Overall Ratings</div>
                <Rating
                  value={(presRating + prepRating + commRating) / 3}
                  readOnly
                />
              </div>
            </div>

            <div className="d-flex mt-8 mt-lg-0">
              <span className="mr-10">
                <div className="mb-3 small">
                  <i className="fa p-0 mr-2 fa-calendar-alt text-success"></i>
                  <span className="text-black-50 text-capitalize">
                    Review Date
                  </span>
                </div>
                <div className="h6">
                  <small className="font-weight-bold text-capitalize">
                    {data.deadLine}
                  </small>
                </div>
              </span>
              <span>
                <div className="small">
                  <i className="fa p-0 mr-2 fa-user text-success"></i>
                  <span className="text-black-50 text-capitalize">Trainer</span>
                </div>
                <div className="text-capitalize small">
                  <div className="d-flex align-items-center">
                    <div className="symbol symbol-50 symbol-light mr-2">
                      <span className="symbol-label rounded-pill">
                        <span className="svg-icon">
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
                      <div className="text-dark-75 font-weight-bolder text-hover-primary mb-1">
                        {data.reviewerId.email}
                      </div>
                    </div>
                  </div>
                </div>
              </span>
            </div>
          </section>
        </div>
      </header>
      <main className="scroll-box h-450px p-5">
        <div className="container">
          {/* {recordView.map((value) => (
            <div className="row border-bottom  py-5">
              <div className="col-12 col-lg-7 mr-auto">
                <div className="d-flex flex-column flex-lg-row justify-content-center text-center text-lg-left justify-content-lg-start">
                  <span className="mr-lg-8 mb-5 mb-lg-0">
                    <img height={80} src={value.image} alt="" />
                  </span>
                  <span>
                    <div className="font-weight-bolder text-capitalize h4 mb-3">
                      <span className="text-warning mr-1">
                        Part {value.key}:
                      </span>
                      <span>Score & Comment</span>
                    </div>
                    <p className="text-black-50">{value.text}</p>
                  </span>
                </div>
              </div>
              <div className="col col-lg-2 mt-5 mt-lg-0">
                <div className="text-center">
                  <span className="text-uppercase text-black-50 small mb-5">
                    {value.titleRating}
                  </span>
                  <div className="h4 font-weight-bolder">{value.score}</div>
                  <span className="text-uppercase text-black-50 small">
                    {value.titleScore}
                  </span>
                </div>
              </div>
              <div className="col col-lg-2 mt-5 mt-lg-0 text-right text-lg-center">
                <div>
                  <div className="h1 font-weight-bolder">{value.comments}</div>
                  <span className="text-uppercase text-black-50 small">
                    Comments
                  </span>
                </div>
              </div>
            </div>
          ))} */}
          <ReportCard
            icon={Icon11}
            rating={presRating}
            comment={pres}
            type={1}
          />
          <ReportCard
            icon={Icon12}
            rating={prepRating}
            comment={prep}
            type={1}
          />
          <ReportCard
            icon={Icon13}
            rating={commRating}
            comment={comm}
            type={1}
          />

          <div className="mt-8 text-center">
            <button
              type="button"
              className="btn p-0 h-35px w-150px text-capitalize bg-warning text-white text-hover-light"
              onClick={submit}
            >
              Confirm
            </button>
          </div>
        </div>
      </main>
    </>
  );
};
