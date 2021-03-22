import axios from "axios";

function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Token ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}

export const loginUser = (dispatch, data) => {
  setAuthorizationToken(data.token);
  localStorage.setItem("auth-admin", JSON.stringify(data));
  console.log(localStorage);
  dispatch({
    type: "USER_LOGIN",
    payload: data,
  });
};
export const isLoggedIn = (dispatch) => {
  console.log(localStorage);
  dispatch({
    type: "IS_USER_LOGIN",
  });
};

export const logOut = (dispatch) => {
  localStorage.clear();

  dispatch({
    type: "LOGOUT",
  });
};
