import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { connect, useDispatch, useSelector } from "react-redux";
import { FormattedMessage, injectIntl } from "react-intl";
import * as auth from "../_redux/authRedux";
import { login } from "../_redux/authCrud";
import axios from "axios";

import Logo from "../../../../assets/images/logos/logo.svg";
import Facebook from "../../../../assets/images/brands/facebook.svg";
import Google from "../../../../assets/images/brands/google.svg";
import Swal from "sweetalert2";

/*
  INTL (i18n) docs:
  https://github.com/formatjs/react-intl/blob/master/docs/Components.md#formattedmessage
*/

/*
  Formik+YUP:
  https://jaredpalmer.com/formik/docs/tutorial#getfieldprops
*/

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

function Login(props) {
  const { intl } = props;
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state.auth.actions);
  const LoginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Wrong email format")
      .min(3, "Minimum 3 symbols")
      .max(50, "Maximum 50 symbols")
      .required(
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
    validationSchema: LoginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      console.log(values);
      enableLoading();
      const data = {
        email: values.email,
        password: values.password,
      };
      axios
        .post(
          `https://presentation-learning-platform.herokuapp.com/api/user/login`,
          data
        )
        .then((res) => {
          console.log(res.data);
          dispatch(auth.actions.login(res.data.accessToken));
          dispatch(auth.actions.setUser(res.data.user));
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

      // setTimeout(() => {
      //   login(values.email, values.password)
      //     .then(({ data: { accessToken } }) => {
      //       disableLoading();
      //       props.login(accessToken);
      //     })
      //     .catch(() => {
      //       disableLoading();
      //       setSubmitting(false);
      //       setStatus(
      //         intl.formatMessage({
      //           id: "AUTH.VALIDATION.INVALID_LOGIN",
      //         })
      //       );
      //     });
      // }, 1000);
    },
  });

  return (
    <div className="login-form login-signin" id="kt_login_signin_form">
      {/* start:: Logo */}
      <div className="text-center mb-10">
        <Link to="/">
          <img alt="Logo" className="max-h-120px" src={Logo} />
        </Link>
      </div>
      {/* end:: Logo */}
      {/* begin::Head */}
      <div className="text-center d-flex justify-content-around">
        <NavLink
          to="/auth/login"
          className="btn text-primary btn-hover-bg-white font-size-h6 w-50 rounded-right-0"
        >
          Login
        </NavLink>
        <NavLink
          to="/auth/registration"
          className="btn text-primary btn-hover-bg-white font-size-h6 w-50 rounded-left-0"
        >
          Sign up
        </NavLink>
      </div>
      {/* end::Head */}

      {/*begin::Form*/}
      <form
        onSubmit={formik.handleSubmit}
        className="form fv-plugins-bootstrap fv-plugins-framework bg-white pb-1 pt-10 px-10"
      >
        {/* {formik.status ? (
          <div className='mb-10 alert alert-custom alert-light-danger alert-dismissible'>
            <div className='alert-text font-weight-bold'>{formik.status}</div>
          </div>
        ) : (
          <div className='mb-10 alert alert-custom alert-light-info alert-dismissible'>
            <div className='alert-text '>
              Use account <strong>admin@demo.com</strong> and password{' '}
              <strong>demo</strong> to continue.
            </div>
          </div>
        )} */}

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
        <div className="form-group d-flex flex-wrap justify-content-between align-items-center">
          <Link
            to="/auth/forgot-password"
            className="text-dark-50 text-hover-primary my-3 mr-2"
            id="kt_login_forgot"
          >
            <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
          </Link>
          <button
            id="kt_login_signin_submit"
            type="submit"
            disabled={formik.isSubmitting}
            className={`btn btn-primary font-weight-bold px-9 py-4 my-3`}
          >
            <span>Sign In</span>
            {loading && <span className="ml-3 spinner spinner-white"></span>}
          </button>
        </div>
      </form>
      {/*end::Form*/}
      <form>
        <div className="py-4">
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
        </div>
      </form>
    </div>
  );
}

export default injectIntl(Login);
