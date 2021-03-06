import React, { useState } from "react";
import { useFormik } from "formik";
import { connect } from "react-redux";
import * as Yup from "yup";
import { Link, NavLink, useHistory } from "react-router-dom";
import { injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { register } from "../_redux/authCrud";
import axios from "axios";

import Logo from "../../../../assets/images/logos/logo.svg";
import Facebook from "../../../../assets/images/brands/facebook.svg";
import Google from "../../../../assets/images/brands/google.svg";

import Swal from "sweetalert2";

const initialValues = {
  // email: "admin@demo.com",
  // parentEmail: "parent@gmail.com",
  // password: "asdf",
  // acceptTerms: false,
};

function Registration(props) {
  const history = useHistory();
  const { intl } = props;
  const [loading, setLoading] = useState(false);
  const RegistrationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),

    userName: Yup.string().required(
      intl.formatMessage({
        id: "AUTH.VALIDATION.REQUIRED_FIELD",
      })
    ),

    password: Yup.string()
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
        intl.formatMessage({
          id: "AUTH.VALIDATION.REQUIRED_FIELD",
        })
      ),

    acceptTerms: Yup.bool().required(
      "You must accept the terms and conditions"
    ),
  });

  const enableLoading = () => {
    setLoading(true);
  };

  const disableLoading = () => {
    setLoading(false);
  };

  const getInputClasses = (fieldname) => {
    if (formik.touched[fieldname] && formik.errors[fieldname]) {
      return "is-invalid";
    }

    if (formik.touched[fieldname] && !formik.errors[fieldname]) {
      return "is-valid";
    }

    return "";
  };

  const formik = useFormik({
    initialValues,
    validationSchema: RegistrationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log(values);
      setSubmitting(true);
      enableLoading();
      const data = {
        email: values.email,
        parentEmail: values.parentEmail,
        password: values.password,
        userName: values.userName,
        roleId: "60526ea964b1fc4fc4af135d",
      };
      console.log(data);

      axios
        .post(
          "https://presentation-learning-platform.herokuapp.com/api/user/add",
          data
          // {
          //   headers: {
          //     "Content-Type": "application/json",

          //     Authorization: {
          //       AccessKey: "AKIAISDSOBKNGX7WSTIQ",
          //       SecretKey: "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",
          //     },
          //   },
          // }
        )
        .then((res) => {
          Swal.fire("Success", "Now login in to the system", "success");
          history.push("/auth/login");
        })
        .catch((err) => {
          disableLoading();
          setSubmitting();
          Swal.fire(
            "Something Went Wrong!",
            err.response.data.message,
            "warning"
          );
        });
    },
  });

  return (
    <div className="login-form login-signin" style={{ display: "block" }}>
      {/* start:: Logo */}
      <div className="text-center mb-10">
        <Link to="/">
          <img alt="Logo" className="max-h-120px" src={Logo} />
        </Link>
      </div>
      {/* end:: Logo */}
      <div className="text-center">
        <NavLink
          to="/auth/login"
          className="btn text-primary btn-hover-bg-white btn-bg-secondary font-size-h6 w-50 rounded-right-0"
        >
          Login
        </NavLink>
        <NavLink
          to="/auth/registration"
          className="btn text-primary btn-hover-bg-white btn-bg-secondary font-size-h6 w-50 rounded-left-0"
        >
          Sign up
        </NavLink>
      </div>

      <form
        className="form fv-plugins-bootstrap fv-plugins-framework animated animate__animated animate__backInUp bg-white px-10 pt-10 pb-1"
        onSubmit={formik.handleSubmit}
      >
        {/* begin: Alert */}
        {formik.status && (
          <div className="mb-10 alert alert-custom alert-light-danger alert-dismissible">
            <div className="alert-text font-weight-bold">{formik.status}</div>
          </div>
        )}
        {/* end: Alert */}

        {/* begin: Email */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Email"
            type="email"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "email"
            )}`}
            name="email"
            {...formik.getFieldProps("email")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          ) : null}
        </div>
        {/* end: Email */}

        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Enter Username"
            type="text"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "userName"
            )}`}
            name="userName"
            {...formik.getFieldProps("userName")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          ) : null}
        </div>

        {/* begin: Email */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Parent's Email"
            type="email"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "parentEmail"
            )}`}
            name="parentEmail"
            {...formik.getFieldProps("parentEmail")}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.email}</div>
            </div>
          ) : null}
        </div>
        {/* end: Email */}

        {/* begin: Password */}
        <div className="form-group fv-plugins-icon-container">
          <input
            placeholder="Password"
            type="password"
            className={`form-control form-control-solid h-auto py-5 px-6 ${getInputClasses(
              "password"
            )}`}
            name="password"
            {...formik.getFieldProps("password")}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.password}</div>
            </div>
          ) : null}
        </div>
        {/* end: Password */}

        {/* begin: Terms and Conditions */}
        <div className="form-group">
          <label className="checkbox">
            <input
              type="checkbox"
              name="acceptTerms"
              className="m-1"
              {...formik.getFieldProps("acceptTerms")}
            />
            <span className="mr-2" />
            <Link
              to="/terms"
              target="_blank"
              className="mr-1"
              rel="noopener noreferrer"
            >
              I agree the Terms & Conditions
            </Link>
          </label>

          {formik.touched.acceptTerms && formik.errors.acceptTerms ? (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.acceptTerms}</div>
            </div>
          ) : null}
        </div>
        {/* end: Terms and Conditions */}

        <div className="form-group d-flex flex-wrap flex-center">
          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="btn btn-block btn-primary font-weight-bold px-9 py-4"
          >
            <span>SIGNUP</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>

      {/* <div className="py-4">
        <div className="text-muted text-uppercase font-size-sm text-center">
          or login with
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="button"
            className={`btn btn-facebook font-weight-bold px-9 py-4 mx-1 my-3`}
          >
            <span>
              <img height={20} width={20} src={Facebook} alt="facebook" />
            </span>
          </button>
          <button
            type="button"
            className={`btn btn-google font-weight-bold px-9 py-4 mx-1 my-3`}
          >
            <span>
              <img height={20} width={20} src={Google} alt="facebook" />
            </span>
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default injectIntl(connect(null, auth.actions)(Registration));
