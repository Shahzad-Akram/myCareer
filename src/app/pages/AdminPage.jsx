import React, { useState } from "react";
import { Row, Col, Modal } from "react-bootstrap";
import { AdminTable } from "../CustomComponents/AdminTable";
// Components

// images
import BgImageOne from "../../assets/images/background/bg-image-3.svg";
import BgImageThree from "../../assets/images/background/bg-image-5.svg";
import AdminStepper from "../CustomComponents/AdminStepper";
import { useRedirect } from "../../hooks/useRedirect";

export const AdminPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useRedirect();

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
          <AdminStepper handleClose={handleClose} />
        </Modal.Body>
      </Modal>
      <section
        className="container pl-lg-29"
        style={{
          paddingTop: 70,
        }}
      >
        <div>
          <div className="mt-5">
            <div className="mb-13">
              <h3 className="mb-8">Welcome Back, Commentator1!</h3>
              <div className="d-flex mb-8 align-items-center">
                <h4 className="mb-0 mr-2">Key Statistics</h4>
                <i className="fa fa-sort-amount-down-alt h2 text-body mb-0 p-0"></i>
              </div>
              <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3">
                <Col>
                  <div
                    className="p-5 rounded-lg"
                    style={{
                      backgroundImage: `url(${BgImageOne})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: 180,
                    }}
                  >
                    <i className="fa fa-user display-3 p-0 mb-5 text-white"></i>
                    <div className="mb-1 text-white font-weight-bold h6">
                      <div>Total Review Completed: 150</div>
                      <small>(last 180 days)</small>
                    </div>
                    <div className="text-white font-weight-bold h6">
                      New Review (pending): 4
                    </div>
                  </div>
                </Col>

                <Col className="mt-10 mt-md-0">
                  <div
                    className="p-5 rounded-lg d-flex flex-column"
                    style={{
                      backgroundImage: `url(${BgImageThree})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: 180,
                    }}
                  >
                    <i className="fa fa-ticket-alt display-3 p-0 mb-5 text-white"></i>

                    <div className="mb-auto text-white font-weight-bold h6">
                      Avg. Review Time: 3.2 days
                    </div>

                    <div className="mb-1 text-white font-weight-bold h6">
                      Lead Times Setting: 3 days
                    </div>
                    <a href="/" className="text-white">
                      Change Setting &#62;
                    </a>
                  </div>
                </Col>
              </Row>
            </div>
            <Row className="mx-0 mb-5">
              <button
                type="button"
                className="btn btn-warning"
                onClick={handleShow}
              >
                <b>Show New Request (4)</b>
              </button>
              <button type="button" className="btn ml-3 mr-auto">
                <b>Show All</b>
              </button>
              <div className="w-350px">
                <input
                  className="w-100 form-control"
                  placeholder="Search by Name, Email or Phone"
                  type="search"
                />
              </div>
            </Row>
            <AdminTable className="card-stretch gutter-b" />
          </div>
        </div>
      </section>
    </>
  );
};
