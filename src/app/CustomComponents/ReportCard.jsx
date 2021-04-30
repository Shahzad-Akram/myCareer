import React from "react";
import { Rating } from "@material-ui/lab";

const ReportCard = ({ icon, rating, comment, type }) => {
  console.log(comment);
  return (
    <div className="row border-bottom  py-5">
      <div className="col-12 col-lg-7 mr-auto">
        <div className="d-flex flex-column flex-lg-row justify-content-center text-center text-lg-left justify-content-lg-start">
          <span className="mr-lg-8 mb-5 mb-lg-0">
            <img height={80} src={icon} alt="" />
          </span>
          <span>
            <div className="font-weight-bolder text-capitalize h4 mb-3">
              <span className="text-warning mr-1">Part {type}:</span>
              <span>Score & Comment</span>
            </div>
            {comment.map((v) => (
              <p className="text-black-50">{v.text}</p>
            ))}
          </span>
        </div>
      </div>
      <div className="col col-lg-2 mt-5 mt-lg-0">
        <div className="text-center">
          <span className="text-uppercase text-black-50 small mb-5">
            Rating
          </span>
          <div className="h4 font-weight-bolder">
            <Rating value={rating} readOnly />
          </div>
          <span className="text-uppercase text-black-50 small">score</span>
        </div>
      </div>
      <div className="col col-lg-2 mt-5 mt-lg-0 text-right text-lg-center">
        <div>
          <div className="h1 font-weight-bolder">{comment.length}</div>
          <span className="text-uppercase text-black-50 small">Comments</span>
        </div>
      </div>
    </div>
  );
};

export default ReportCard;
