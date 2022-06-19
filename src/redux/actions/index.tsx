import { LOGIN_USER, REGISTER_USER } from "./types";
import { httpClient } from "../../httpClient/httpClient";

export const registerUser = (user: any) => {
  return (dispatch: (arg0: { type: string; payload: any }) => void) => {
    httpClient
      .post(`/api/users/register`, user)
      .then((res) => {
        console.log(res);
        dispatch(registerSuccess(res.data));
      })
      .catch((error) => console.error(error));
  };
};

const registerSuccess = (users: any) => ({
  type: REGISTER_USER,
  payload: users,
});

export const loginUser = (user: any) => {
  return (dispatch: (arg0: { type: string; payload: any }) => void) => {
    httpClient
      .post(`/api/users/login`, user)
      .then((res) => {
        console.log(res);
        dispatch(loginSuccess(res.data));
        if (res.status === 200) {
          localStorage.setItem("token", res.data.authToken);
          localStorage.setItem("user", JSON.stringify(res.data.user));
        }
      })
      .catch((error) => console.error(error));
  };
};

const loginSuccess = (users: any) => {
  return {
    type: LOGIN_USER,
    payload: users,
  };
};
export const logOutUser = (user: any) => {
  return (dispatch: (arg0: { type: string; payload: any }) => void) => {
    httpClient
      .post(`/api/users/logout`, user)
      .then((res) => {
        console.log(res);
        dispatch(logOutSuccess(res.data));
        if (res.status === 200) {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
        }
      })
      .catch((error) => console.error(error));
  };
};

const logOutSuccess = (users: any) => {
  return {
    type: LOGIN_USER,
    payload: users,
  };
};
